import React from 'react';

export default function Navbar() {
  return (
    <nav id="navbar" className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">Modern Scholar Travel</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#request" className="bg-primary text-white px-5 py-2 rounded-sm hover:bg-primary/90 transition-colors">Plan My Trip</a>
        </div>
      </div>
    </nav>
  );
}
