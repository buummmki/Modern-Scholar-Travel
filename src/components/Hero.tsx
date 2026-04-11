import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">Korea Private Travel Planning</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">Custom Korea travel itinerary based on your family, food preferences, and travel style.</p>
      <a href="#request" className="inline-block bg-primary text-white px-10 py-4 text-lg font-bold rounded-sm hover:bg-primary/90 transition-all shadow-lg">Plan My Korea Trip</a>
    </section>
  );
}
