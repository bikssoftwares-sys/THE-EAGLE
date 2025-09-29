import React from "react";
import Navbar from "@/Components/Navbar";

export default function UpcomingEvents() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Mark your calendars for these transformative gatherings and learning opportunities.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">2025 Events Calendar</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Annual Eagles Summit 2025</h3>
                  <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">March 15-17, 2025</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Our flagship annual gathering uniting Kingdom leaders for worship, fellowship, and strategic planning. This year's theme: "Rising Together: Uniting Generations for Kingdom Impact."
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-900 px-2 py-1 rounded text-sm">Worship</span>
                  <span className="bg-purple-100 text-purple-900 px-2 py-1 rounded text-sm">Leadership</span>
                  <span className="bg-orange-100 text-orange-900 px-2 py-1 rounded text-sm">Networking</span>
                </div>
                <p className="text-sm text-gray-600">Location: Nairobi, Kenya | Capacity: 2,000 attendees</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Eagles Hackathon 2025</h3>
                  <span className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">June 7-9, 2025</span>
                </div>
                <p className="text-gray-700 mb-4">
                  48-hour innovation challenge focusing on education technology solutions. Teams will develop tools to improve access to quality education in underserved communities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-sm">Innovation</span>
                  <span className="bg-red-100 text-red-900 px-2 py-1 rounded text-sm">Technology</span>
                  <span className="bg-yellow-100 text-yellow-900 px-2 py-1 rounded text-sm">Education</span>
                </div>
                <p className="text-sm text-gray-600">Location: Virtual + Nairobi Hub | Teams: 50 | Prize: $50,000</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Leadership Development Retreat</h3>
                  <span className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">August 20-24, 2025</span>
                </div>
                <p className="text-gray-700 mb-4">
                  A transformative 5-day retreat for emerging leaders focusing on spiritual formation, leadership skills, and community building. Limited to 100 participants.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-900 px-2 py-1 rounded text-sm">Spiritual</span>
                  <span className="bg-pink-100 text-pink-900 px-2 py-1 rounded text-sm">Leadership</span>
                  <span className="bg-teal-100 text-teal-900 px-2 py-1 rounded text-sm">Community</span>
                </div>
                <p className="text-sm text-gray-600">Location: Naivasha, Kenya | Capacity: 100 | Cost: $500</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Eagles Education Conference</h3>
                  <span className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">October 12-14, 2025</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Annual conference on transforming education systems with Kingdom values. Featuring educators, policymakers, and innovators from across Africa.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-100 text-cyan-900 px-2 py-1 rounded text-sm">Education</span>
                  <span className="bg-lime-100 text-lime-900 px-2 py-1 rounded text-sm">Policy</span>
                  <span className="bg-rose-100 text-rose-900 px-2 py-1 rounded text-sm">Innovation</span>
                </div>
                <p className="text-sm text-gray-600">Location: Kampala, Uganda | Capacity: 500 | Theme: "Educating for Eternity"</p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">2026 Preview</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Eagles Leadership Forum 2026</h3>
                  <span className="bg-red-100 text-red-900 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">February 2026</span>
                </div>
                <p className="text-gray-700 mb-4">
                  High-level policy forum bringing together leaders from government, business, and civil society to shape Africa's development agenda.
                </p>
                <p className="text-sm text-gray-600">Location: Addis Ababa, Ethiopia | Theme: "Leading Africa's Renaissance"</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">International Eagles Summit 2026</h3>
                  <span className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">July 2026</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Expanded international gathering including participants from the African diaspora and global Kingdom leaders.
                </p>
                <p className="text-sm text-gray-600">Location: Cape Town, South Africa | Capacity: 3,000 | Multi-lingual event</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "For I know the plans I have for you... plans to prosper you and not to harm you, plans to give you hope and a future." – Jeremiah 29:11
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Register for Events
              </a>
              <a
                href="/events/flagship-annual-events"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
