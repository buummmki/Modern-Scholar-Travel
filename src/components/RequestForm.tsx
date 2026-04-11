import React from 'react';

export default function RequestForm() {
  return (
    <section id="request" className="py-20 bg-gray-50 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold mb-8">Request Your Custom Plan</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
            <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
            <input type="text" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" placeholder="e.g., June 1 - June 7" />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-primary/90">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
