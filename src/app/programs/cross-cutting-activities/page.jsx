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
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Cross-Cutting Initiatives</h2>
            <p className="text-lg text-gray-700 mb-6">
              Unifying activities that integrate marketplace, governance, and technology pillars, fostering collaboration and holistic Kingdom transformation across Africa.
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Annual Eagles Summit</h3>
                <p className="text-gray-700">
                  Flagship gathering uniting leaders from business, politics, and technology for worship, strategic planning, and cross-sector collaboration. Features keynote speakers, breakout sessions, and fellowship that strengthen the movement's unity and vision.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Integrated Leadership Retreats</h3>
                <p className="text-gray-700">
                  Immersive retreats combining spiritual formation with cross-pillar collaboration. Leaders from marketplace, governance, and technology streams work together on real-world projects that advance holistic national transformation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Technology for Transformation Labs</h3>
                <p className="text-gray-700">
                  Innovation hubs where Kingdom-minded tech professionals develop digital solutions for governance challenges, business ethics tools, and community development platforms that bridge faith and technology.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Policy-Business Dialogue Forums</h3>
                <p className="text-gray-700">
                  Regular forums bringing together business leaders, policymakers, and technologists to discuss ethical governance, responsible business practices, and technology's role in national development.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Knowledge & Research Hub</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Kingdom Leadership Journal</h3>
                <p className="text-gray-700">
                  Quarterly publication featuring research and articles on ethical leadership across marketplace, governance, and technology spheres, providing Kingdom-centered insights for African transformation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Digital Learning Platform</h3>
                <p className="text-gray-700">
                  Online academy offering courses on Kingdom business ethics, righteous governance, ethical AI, and digital stewardship. Includes virtual mentorship and community forums for continuous learning.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Impact Research & Case Studies</h3>
                <p className="text-gray-700">
                  Documentation and analysis of successful Kingdom leadership initiatives, providing evidence-based models for scaling ethical leadership across sectors and nations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Thought Leadership Series</h3>
                <p className="text-gray-700">
                  Regular webinars, podcasts, and publications amplifying Kingdom voices on critical issues facing Africa, from corruption to innovation, fostering public discourse on ethical leadership.
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
