
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendOTPEmail } = require('./mailer.js');
const crypto = require('crypto');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  address: String,
  profilePicture: String,
  details: String,
  cart: [{ productId: String, name: String, price: Number, quantity: Number }],
  logins: [{ date: Date }],
  cartActions: [{ action: String, productId: String, name: String, price: Number, quantity: Number, date: Date }],
});
const User = mongoose.model('User', userSchema);

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const pendingOTPs = {};
const JWT_SECRET = 'supersecretkey';

// User profile storage
const userProfiles = {};
app.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) return res.status(400).json({ error: 'Missing fields' });
  if (await User.findOne({ email })) return res.status(409).json({ error: 'User exists' });
  const otp = crypto.randomInt(100000, 999999).toString();
  pendingOTPs[email] = { username, password, otp, created: Date.now() };
  try {
    await sendOTPEmail(email, otp);
    res.json({ otpSent: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// Login endpoint
// OTP verification endpoint
app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  const pending = pendingOTPs[email];
  if (!pending || pending.otp !== otp) return res.status(400).json({ error: 'Invalid OTP' });
  if (Date.now() - pending.created > 10 * 60 * 1000) return res.status(400).json({ error: 'OTP expired' });
  const hash = await bcrypt.hash(pending.password, 10);
  await User.create({
    username: pending.username,
    email,
    password: hash,
    address: '',
    profilePicture: '',
    details: '',
    cart: [],
    logins: [],
    cartActions: [],
  });
  delete pendingOTPs[email];
  res.json({ success: true });
});
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // username here is actually email from frontend
  const user = await User.findOne({ email: username });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  user.logins.push({ date: new Date() });
  await user.save();
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route example
app.get('/profile', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(auth.replace('Bearer ', ''), JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(404).json({ error: 'Profile not found' });
    res.json({
      username: user.username,
      email: user.email,
      address: user.address,
      profilePicture: user.profilePicture,
      details: user.details,
      cart: user.cart,
      logins: user.logins,
      cartActions: user.cartActions,
    });
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Update profile endpoint
app.post('/profile', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(auth.replace('Bearer ', ''), JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(404).json({ error: 'Profile not found' });
    const { address, details } = req.body;
    if (address !== undefined) user.address = address;
    if (details !== undefined) user.details = details;
    await user.save();
    res.json({ success: true, profile: user });
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Upload profile picture endpoint (base64)
app.post('/profile/picture', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(auth.replace('Bearer ', ''), JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(404).json({ error: 'Profile not found' });
    const { profilePicture } = req.body;
    if (profilePicture) {
      let imgString = profilePicture;
      if (!imgString.startsWith('data:image')) {
        imgString = 'data:image/png;base64,' + imgString;
      }
      user.profilePicture = imgString;
      console.log('Saved profile image for', user.email, imgString.slice(0,30));
    }
    await user.save();
    res.json({ success: true });
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Add to cart endpoint
app.post('/cart/add', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(auth.replace('Bearer ', ''), JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const { productId, name, price, quantity } = req.body;
    // Add to cart
    const existing = user.cart.find(item => item.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      user.cart.push({ productId, name, price, quantity });
    }
    // Track cart action
    user.cartActions.push({ action: 'add', productId, name, price, quantity, date: new Date() });
    await user.save();
    res.json({ success: true, cart: user.cart });
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Remove from cart endpoint
app.post('/cart/remove', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(auth.replace('Bearer ', ''), JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const { productId } = req.body;
    user.cart = user.cart.filter(item => item.productId !== productId);
    user.cartActions.push({ action: 'remove', productId, date: new Date() });
    await user.save();
    res.json({ success: true, cart: user.cart });
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.listen(8082, () => {
  console.log('Auth server running on http://localhost:8083');
});
