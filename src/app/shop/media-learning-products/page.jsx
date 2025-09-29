import React from "react";
import Navbar from "@/Components/Navbar";

export default function MediaLearningProducts() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Media & Learning Products</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Interactive courses, webinars, and inspirational content to accelerate your Kingdom leadership journey.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Course Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Kingdom Leadership Foundations</h3>
              <p className="text-gray-700 mb-4">12-week online course covering biblical leadership principles, character development, and practical application.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$99</span>
                <span className="text-sm text-gray-500 ml-2">(or $25/month)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • 24 video lessons<br/>
                • Interactive assignments<br/>
                • Community discussions<br/>
                • Certificate of completion
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Enroll Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Webinar Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Ethical Business Leadership Webinar</h3>
              <p className="text-gray-700 mb-4">Live webinar series with marketplace leaders sharing Kingdom principles for business success.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$49</span>
                <span className="text-sm text-gray-500 ml-2">(includes recordings)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • 4 live sessions<br/>
                • Q&A with experts<br/>
                • Resource materials<br/>
                • Networking opportunities
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Register
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Podcast Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Kingdom Conversations Podcast</h3>
              <p className="text-gray-700 mb-4">Complete podcast library with interviews, teachings, and discussions on Kingdom leadership topics.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$29</span>
                <span className="text-sm text-gray-500 ml-2">(annual subscription)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • 50+ episodes<br/>
                • Bonus content<br/>
                • Discussion guides<br/>
                • Ad-free listening
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Subscribe
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Video Series Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Inspirational Video Series</h3>
              <p className="text-gray-700 mb-4">Powerful video teachings on character, vision, and impact from Kingdom leaders across Africa.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$39</span>
                <span className="text-sm text-gray-500 ml-2">(lifetime access)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • 20 video teachings<br/>
                • Study guides<br/>
                • Discussion questions<br/>
                • Downloadable resources
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Get Access
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Masterclass Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Digital Transformation Masterclass</h3>
              <p className="text-gray-700 mb-4">Advanced course on using technology and innovation for Kingdom impact and social good.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$149</span>
                <span className="text-sm text-gray-500 ml-2">(with mentorship)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • 8-week program<br/>
                • 1-on-1 mentorship<br/>
                • Project development<br/>
                • Certificate of completion
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Join Masterclass
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Inspirational Image]</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Daily Inspiration Package</h3>
              <p className="text-gray-700 mb-4">365 days of Kingdom leadership inspiration with daily devotionals, scriptures, and practical applications.</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-900">$19</span>
                <span className="text-sm text-gray-500 ml-2">(annual subscription)</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                • Daily devotionals<br/>
                • Scripture reflections<br/>
                • Leadership prompts<br/>
                • Prayer guides
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "Let the wise listen and add to their learning, and let the discerning get guidance." – Proverbs 1:5
            </p>
            <div className="space-x-4">
              <a
                href="/get-involved/become-a-member"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Become a Member for Free Access
              </a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                View My Library
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
