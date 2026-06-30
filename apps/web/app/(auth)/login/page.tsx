'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-3xl">☀️</span>
            <span className="font-heading text-2xl font-bold text-brand-navy">
              Solar<span className="text-brand-gold">Stars</span>
            </span>
          </a>
          <h1 className="font-heading text-2xl font-bold text-brand-navy">Welcome Back</h1>
          <p className="text-gray-600 text-sm mt-1">Sign in to your customer portal</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-brand-gold hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="btn-primary w-full">Sign In</button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            New customer?{' '}
            <a href="/register" className="text-brand-gold font-medium hover:underline">
              Create an account
            </a>
          </div>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Need help? Call <a href="tel:8454441915" className="text-brand-gold">(845) 444-1915</a>
        </p>
      </div>
    </div>
  );
}
