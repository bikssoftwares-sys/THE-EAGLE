import React from "react";
import Navbar from "@/Components/Navbar";

export default function SupportPacks() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Support Packs</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Comprehensive packages that provide ongoing support for your leadership journey and Kingdom impact.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Membership Pack Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Membership Starter Pack</h3>
              <p className="text-gray-700 mb-4">Annual membership with access to exclusive resources, events, and community support.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$120</span>
                <span className="text-sm text-gray-500 ml-2">(12 months)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • Full membership benefits<br/>
                • Event discounts (20%)<br/>
                • Resource library access<br/>
                • Monthly webinars<br/>
                • Community networking
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Join Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Leadership Bundle Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Leadership Development Bundle</h3>
              <p className="text-gray-700 mb-4">Complete leadership training package with courses, books, and mentorship access.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$299</span>
                <span className="text-sm text-gray-500 ml-2">(save 25%)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • 3 online courses<br/>
                • 2 leadership books<br/>
                • 6 months mentorship<br/>
                • Private coaching session<br/>
                • Certificate program
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Get Bundle
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Event Pack Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Event Registration Package</h3>
              <p className="text-gray-700 mb-4">All-access pass to our major events and conferences throughout the year.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$199</span>
                <span className="text-sm text-gray-500 ml-2">(includes 4 events)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • Eagles Summit ticket<br/>
                • Hackathon participation<br/>
                • 2 regional conferences<br/>
                • VIP networking events<br/>
                • Event materials
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Register for Events
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Mentorship Pack Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Mentorship Program Access</h3>
              <p className="text-gray-700 mb-4">Comprehensive mentorship package connecting you with experienced Kingdom leaders.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$89</span>
                <span className="text-sm text-gray-500 ml-2">(6 months)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • Mentor matching service<br/>
                • Monthly coaching calls<br/>
                • Goal setting workshops<br/>
                • Progress tracking<br/>
                • Resource recommendations
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Start Mentorship
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Corporate Kit Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Corporate Partnership Kit</h3>
              <p className="text-gray-700 mb-4">Complete package for businesses partnering with our leadership development initiatives.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$500</span>
                <span className="text-sm text-gray-500 ml-2">(annual partnership)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • Branding opportunities<br/>
                • Employee training access<br/>
                • Event sponsorship rights<br/>
                • Impact reporting<br/>
                • Custom resources
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Become Partner
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Donation Pack Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Impact Investment Pack</h3>
              <p className="text-gray-700 mb-4">High-impact donation package supporting multiple leadership initiatives and programs.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$250</span>
                <span className="text-sm text-gray-500 ml-2">(one-time gift)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • Supports 10 students<br/>
                • Funds mentorship programs<br/>
                • Provides resources<br/>
                • Impact report<br/>
                • Recognition opportunity
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition w-full">
                Donate Now
              </button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "The one who is gracious to the poor lends to the Lord, and the Lord will repay him for his deed." – Proverbs 19:17
            </p>
            <div className="space-x-4">
              <a
                href="/donate"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Make a Direct Donation
              </a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                View My Subscriptions
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
