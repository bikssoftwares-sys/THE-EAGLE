import React from "react";
import Navbar from "@/Components/Navbar";

export default function CrossCuttingActivities() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Cross-Cutting Activities</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Unifying initiatives that bring our community together for greater impact.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Annual Eagles Summit</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our flagship annual gathering that brings together leaders from all sectors for worship, fellowship, and strategic planning. The Eagles Summit unites generations under one vision for Kingdom transformation.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Summit Highlights</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Plenary sessions with keynote speakers on leadership and transformation</li>
                <li>• Worship and prayer gatherings that inspire and unite</li>
                <li>• Breakout sessions for sector-specific discussions and networking</li>
                <li>• Strategic planning for the movement's next phase</li>
                <li>• Awards and recognition for outstanding Kingdom leaders</li>
                <li>• Fellowship meals and community building activities</li>
              </ul>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Digital & Technology Initiatives</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Digital Leadership Academy</h3>
                <p className="text-gray-700">
                  Online courses and resources for leaders who cannot attend in-person programs. Topics include digital transformation, online community building, and virtual leadership.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Technology Innovation Labs</h3>
                <p className="text-gray-700">
                  Collaborative spaces where tech professionals and entrepreneurs develop solutions for community challenges using Kingdom principles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Digital Publications</h3>
                <p className="text-gray-700">
                  Regular newsletters, thought leadership articles, and digital resources that amplify Kingdom voices and share best practices in ethical leadership.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Publications & Research</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Kingdom Leadership Journal</h3>
                <p className="text-gray-700">
                  Quarterly publication featuring articles on ethical leadership, governance, and marketplace transformation from Kingdom perspectives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Research & Policy Papers</h3>
                <p className="text-gray-700">
                  In-depth research on governance, economic development, and social issues with Kingdom-centered recommendations for policymakers and leaders.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Case Studies & Best Practices</h3>
                <p className="text-gray-700">
                  Documentation of successful Kingdom leadership initiatives, providing models and inspiration for others to follow.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/events"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Learn About Our Events
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
