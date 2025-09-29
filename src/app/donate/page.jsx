import React from "react";
import Navbar from "@/Components/Navbar";

export default function Donate() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Support The Eagle Generation</h1>
          <p className="text-lg text-gray-700 mb-8">
            Your donations help us raise Kingdom leaders who transform nations. Every contribution supports our programs in campuses, corporates, and governance spaces.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Make a Donation</h2>
            <p className="text-gray-600 mb-6">
              Choose an amount or enter your own. All donations are securely processed and directly fund our mission.
            </p>
            {/* Placeholder Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-left text-gray-700 mb-2">Donation Amount (USD)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Donate Now
              </button>
            </form>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            For questions, contact us at hello@theeaglegeneration.org
          </p>
        </div>
      </section>
    </>
  );
}
