import React from "react";
import Navbar from "@/Components/Navbar";

export default function CorporatePrograms() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Corporate Programs</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Building ethical professionals and executives who lead with Kingdom values.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Marketplace Leadership Programs</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Kingdom Business Ethics Training</h3>
                <p className="text-gray-700">
                  Workshops equipping executives with biblical principles for ethical commerce, anti-corruption strategies, and responsible stewardship in the marketplace. Addressing the separation of faith from business by integrating Kingdom values into corporate decision-making.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Servant Leadership for Executives</h3>
                <p className="text-gray-700">
                  Advanced training in Christ-centered leadership, focusing on humility, integrity, and service-oriented management. Designed for C-suite leaders to model godly influence in corporate environments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Innovation & Tech Integration Bootcamps</h3>
                <p className="text-gray-700">
                  Hands-on sessions teaching corporate teams to leverage technology and innovation for ethical business growth, with emphasis on digital transformation that aligns with Kingdom purposes and societal good.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Corporate Governance Workshops</h3>
                <p className="text-gray-700">
                  Training on integrating righteous governance principles into corporate structures, compliance, and policy-making, bridging business practices with biblical justice and accountability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Mentorship & Succession Planning</h3>
                <p className="text-gray-700">
                  Programs connecting seasoned Kingdom-minded executives with rising leaders, ensuring transfer of wisdom, ethical practices, and a legacy of transformation in the marketplace.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Partner With TEG?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Restore Kingdom Values in Business</h3>
                <p className="text-gray-700">
                  Address the faith-business divide by equipping your team to operate with integrity, wisdom, and innovation, creating ethical workplaces that honor God.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Build Transformational Leaders</h3>
                <p className="text-gray-700">
                  Develop executives who lead like eagles — soaring above compromise and influencing marketplace, governance, and technology with godly principles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Drive Purposeful Innovation</h3>
                <p className="text-gray-700">
                  Harness technology and entrepreneurship to solve Africa's challenges, ensuring business growth aligns with Kingdom advancement and societal restoration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Foster National Transformation</h3>
                <p className="text-gray-700">
                  Partner to fill the leadership vacuum, creating ripple effects of righteous influence in economy, policy, and innovation across Africa.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/get-involved/partner-with-us"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
