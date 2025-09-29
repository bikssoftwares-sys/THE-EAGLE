import React from "react";
import Navbar from "@/Components/Navbar";

export default function KingdomResources() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Kingdom Resources</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Equip yourself and others with transformative books, manuals, and digital resources for Kingdom leadership development.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Book Cover Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Raising Kingdom Leaders</h3>
              <p className="text-gray-700 mb-2">By Dr. Samuel Omondi</p>
              <p className="text-gray-700 mb-4">Comprehensive guide on developing ethical leaders with biblical principles. Perfect for mentors and educators.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-900">$28</span>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Paperback</button>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Hardcover</button>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Manual Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Leadership Development Manual</h3>
              <p className="text-gray-700 mb-2">Eagle Generation Team</p>
              <p className="text-gray-700 mb-4">Practical workbook with exercises, assessments, and training modules for leadership programs.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-900">$35</span>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Print</button>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">PDF</button>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[eBook Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Ethical Business Principles</h3>
              <p className="text-gray-700 mb-2">By Grace Mwangi</p>
              <p className="text-gray-700 mb-4">Digital guide to integrating Kingdom values in marketplace leadership and entrepreneurship.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-900">$12</span>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">ePub</button>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">PDF</button>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Book Cover Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Governance with Integrity</h3>
              <p className="text-gray-700 mb-2">By Hon. Peter Kimani</p>
              <p className="text-gray-700 mb-4">Insights on ethical public service and Kingdom principles in government leadership.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-900">$30</span>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Paperback</button>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">eBook</button>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Manual Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Mentorship Training Manual</h3>
              <p className="text-gray-700 mb-2">Eagle Generation Mentorship Team</p>
              <p className="text-gray-700 mb-4">Step-by-step guide for effective mentorship relationships and leadership transfer.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-900">$25</span>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Print</button>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">Digital</button>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[eBook Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Innovation for Kingdom Impact</h3>
              <p className="text-gray-700 mb-2">By Tech4Kingdom Team</p>
              <p className="text-gray-700 mb-4">Digital resource on using technology and innovation to advance Kingdom purposes.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-900">$15</span>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">ePub</button>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">PDF</button>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "Study to show thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth." – 2 Timothy 2:15
            </p>
            <div className="space-x-4">
              <a
                href="/donate"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Support Resource Development
              </a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                View Cart (0 items)
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
