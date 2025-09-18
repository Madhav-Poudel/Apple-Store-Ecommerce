import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Lock, Mail, ArrowRightCircle } from "lucide-react";

const Auth = () => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [pendingEmail, setPendingEmail] = useState('');
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181A20]">
      <div className="bg-[#23272f] rounded-2xl shadow-2xl p-0 w-full max-w-md border border-apple-border flex flex-col items-center">
        <div className="w-full p-8 pb-0 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-apple-accent text-lg mb-6">{mode === 'login' ? 'Login to your account' : 'Sign up to get started'}</p>
          <div className="flex gap-2 mb-4 w-full">
            <Button
              className={`flex-1 py-2 rounded-lg text-lg font-bold transition-all duration-300 ${mode === 'login' ? 'bg-apple-accent text-white shadow-lg scale-105' : 'bg-[#23272f] text-white/60 border border-apple-border'}`}
              onClick={() => setMode('login')}
            >
              Login
            </Button>
            <Button
              className={`flex-1 py-2 rounded-lg text-lg font-bold transition-all duration-300 ${mode === 'signup' ? 'bg-apple-accent text-white shadow-lg scale-105' : 'bg-[#23272f] text-white/60 border border-apple-border'}`}
              onClick={() => setMode('signup')}
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className="w-full p-8 pt-0">
          {mode === 'login' ? (
            <form className="space-y-6" onSubmit={async e => {
              e.preventDefault();
              setError(null); setSuccess(null); setLoading(true);
              const email = (e.target as any).email.value;
              const password = (e.target as any).password.value;
              try {
                const res = await fetch('http://localhost:8082/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ username: email, password })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Login failed');
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify({ email }));
                setSuccess('Login successful!');
                setTimeout(() => navigate('/'), 1000);
              } catch (err: any) {
                setError(err.message);
              } finally {
                setLoading(false);
              }
            }}>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white font-semibold">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-apple-accent/70" />
                  <input id="email" type="email" className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-accent/40 bg-[#181A20] text-white placeholder:text-apple-text/50" placeholder="Email address" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-white font-semibold">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-apple-accent/70" />
                  <input id="password" type={showLoginPassword ? "text" : "password"} className="w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-apple-accent/40 bg-[#181A20] text-white placeholder:text-apple-text/50" placeholder="Password" />
                  <button type="button" className="absolute right-3 top-3 text-apple-accent/70" tabIndex={-1} onClick={() => setShowLoginPassword(v => !v)}>
                    {showLoginPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <Button className="w-full bg-apple-accent text-white font-bold rounded-lg py-3 mt-2 shadow-lg" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</Button>
              {error && <div className="text-red-500 text-center mt-2">{error}</div>}
              {success && <div className="text-green-500 text-center mt-2">{success}</div>}
              <div className="text-center text-white/70 text-sm mt-2">Don't have an account? <button type="button" className="text-apple-accent underline" onClick={() => setMode('signup')}>Sign Up</button></div>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={async e => {
              e.preventDefault();
              setError(null); setSuccess(null); setLoading(true);
              if (!otpSent) {
                const name = (e.target as any)["name"].value;
                const email = (e.target as any)["signup-email"].value;
                const password = (e.target as any)["signup-password"].value;
                setPendingEmail(email);
                try {
                  const res = await fetch('http://localhost:8082/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: name, email, password })
                  });
                  const data = await res.json();
                  if (!res.ok) throw new Error(data.error || 'Signup failed');
                  setOtpSent(true);
                  setSuccess('OTP sent to your email. Please enter it below.');
                } catch (err: any) {
                  setError(err.message);
                } finally {
                  setLoading(false);
                }
              } else {
                const otp = (e.target as any)["otp"].value;
                try {
                  const res = await fetch('http://localhost:8082/verify-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: pendingEmail, otp })
                  });
                  const data = await res.json();
                  if (!res.ok) throw new Error(data.error || 'OTP verification failed');
                  setSuccess('Signup successful! You can now login.');
                  setOtpSent(false);
                } catch (err: any) {
                  setError(err.message);
                } finally {
                  setLoading(false);
                }
              }
            }}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-white font-semibold">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-apple-accent/70" />
                  <input id="name" type="text" className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-accent/40 bg-[#181A20] text-white placeholder:text-apple-text/50" placeholder="Full Name" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="signup-email" className="text-white font-semibold">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-apple-accent/70" />
                  <input id="signup-email" type="email" className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-accent/40 bg-[#181A20] text-white placeholder:text-apple-text/50" placeholder="Email address" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="signup-password" className="text-white font-semibold">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-apple-accent/70" />
                  <input id="signup-password" type={showSignupPassword ? "text" : "password"} className="w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-apple-accent/40 bg-[#181A20] text-white placeholder:text-apple-text/50" placeholder="Password" />
                  <button type="button" className="absolute right-3 top-3 text-apple-accent/70" tabIndex={-1} onClick={() => setShowSignupPassword(v => !v)}>
                    {showSignupPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              {otpSent && (
                <div className="flex flex-col gap-2">
                  <label htmlFor="otp" className="text-white font-semibold">Enter OTP</label>
                  <div className="relative">
                    <ArrowRightCircle className="absolute left-3 top-3 text-apple-accent/70" />
                    <input id="otp" type="text" className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-accent/40 bg-[#181A20] text-white placeholder:text-apple-text/50" placeholder="Enter OTP from email" />
                  </div>
                </div>
              )}
              <Button className="w-full bg-apple-accent text-white font-bold rounded-lg py-3 mt-2 shadow-lg" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</Button>
              {error && <div className="text-red-500 text-center mt-2">{error}</div>}
              {success && <div className="text-green-500 text-center mt-2">{success}</div>}
              <div className="text-center text-white/70 text-sm mt-2">Already have an account? <button type="button" className="text-apple-accent underline" onClick={() => setMode('login')}>Login</button></div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
