import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const Profile = () => {
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [picture, setPicture] = useState('');
  const [serverPicture, setServerPicture] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:8082/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) setError(data.error);
          else {
            setProfile(data);
            setAddress(data.address || '');
            setDetails(data.details || '');
            setServerPicture(data.profilePicture || '');
            if (data.profilePicture) {
              console.log('Fetched profile image:', data.profilePicture.slice(0,30));
            }
          }
        })
        .catch(() => setError("Failed to fetch profile"));
    }
  }, [editMode, saveStatus]);

  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!user) return <div className="min-h-screen flex items-center justify-center text-apple-accent">Not logged in</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#181A20]">
      <div className="bg-[#23272f] rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-apple-border">
        <h2 className="text-3xl font-bold text-apple-accent mb-4">Profile</h2>
        <img src={editMode ? (picture || serverPicture) : (serverPicture || "https://ui-avatars.com/api/?name=" + (profile?.username || "U") + "&background=23272f&color=fff")}
          alt="Profile"
          className="mx-auto mb-4 rounded-full w-24 h-24 object-cover border-4 border-apple-accent" />
        <div className="mb-4">
          <span className="font-semibold text-apple-text">Email:</span> {user.email}
        </div>
        {profile && (
          <div className="mb-4">
            <span className="font-semibold text-apple-text">Username:</span> {profile.username}
          </div>
        )}
        {editMode ? (
          <form onSubmit={async e => {
            e.preventDefault();
            const token = localStorage.getItem("token");
            setSaveStatus('');
            // Save address/details
            await fetch("http://localhost:8082/profile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ address, details }),
            });
            // Save profile picture
            if (picture && picture.startsWith('data:')) {
              await fetch("http://localhost:8082/profile/picture", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ profilePicture: picture }),
              });
            }
            setSaveStatus('Saved!');
            setEditMode(false);
          }} className="space-y-4">
            <div>
              <label htmlFor="profile-address" className="block text-white font-semibold mb-1">Address</label>
              <input id="profile-address" value={address} onChange={e => setAddress(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-[#181A20] text-white border border-apple-accent" placeholder="Your address" />
            {/* Remove misplaced logout button and closing div */}
              <label htmlFor="profile-picture" className="block text-white font-semibold mb-1">Profile Picture</label>
              <input id="profile-picture" type="file" accept="image/*" onChange={e => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = ev => setPicture(ev.target?.result as string);
                  reader.readAsDataURL(file);
                }
              }} className="w-full px-4 py-2 rounded-lg bg-[#181A20] text-white border border-apple-accent" />
            </div>
            <button type="submit" className="bg-apple-accent text-white font-semibold px-6 py-2 rounded-lg mt-2">Save</button>
            {saveStatus && <div className="text-green-500 mt-2">{saveStatus}</div>}
          </form>
        ) : (
          <>
            <div className="mb-2">
              <span className="font-semibold text-apple-text">Address:</span> {address || <span className="text-apple-accent">(Not set)</span>}
            </div>
            <div className="mb-2">
              <span className="font-semibold text-apple-text">Bio / Info:</span> {details || <span className="text-apple-accent">(Not set)</span>}
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <button className="bg-apple-accent text-white font-semibold px-6 py-2 rounded-lg" onClick={() => setEditMode(true)}>Edit Profile</button>
              <button className="bg-apple-accent text-white font-semibold px-6 py-2 rounded-lg" onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href = "/auth";
              }}>Logout</button>
            </div>
            {/* Your Orders Section */}
            <div className="mt-8 text-left">
              <h3 className="text-xl font-bold text-apple-accent mb-2">Your Orders</h3>
              <div className="bg-[#181A20] rounded-lg p-4 border border-apple-border">
                <span className="text-white/70">No orders found.</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
      </>
  );
};

export default Profile;
