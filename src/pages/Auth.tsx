import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Lock, Mail, ArrowRightCircle } from "lucide-react";

const Auth = () => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

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
            <form className="space-y-6">
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
                  <input id="password" type="password" className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-accent/40 bg-[#181A20] text-white placeholder:text-apple-text/50" placeholder="Password" />
                </div>
              </div>
              <Button className="w-full bg-apple-accent text-white font-bold rounded-lg py-3 mt-2 shadow-lg">Login</Button>
              <div className="text-center text-white/70 text-sm mt-2">Don't have an account? <button type="button" className="text-apple-accent underline" onClick={() => setMode('signup')}>Sign Up</button></div>
            </form>
          ) : (
            <form className="space-y-6">
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
                  <input id="signup-password" type="password" className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-apple-accent/40 bg-[#181A20] text-white placeholder:text-apple-text/50" placeholder="Password" />
                </div>
              </div>
              <Button className="w-full bg-apple-accent text-white font-bold rounded-lg py-3 mt-2 shadow-lg">Sign Up</Button>
              <div className="text-center text-white/70 text-sm mt-2">Already have an account? <button type="button" className="text-apple-accent underline" onClick={() => setMode('login')}>Login</button></div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
