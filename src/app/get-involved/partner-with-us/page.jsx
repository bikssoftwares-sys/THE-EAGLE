import React from "react";
import Navbar from "@/Components/Navbar";

export default function PartnerWithUs() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Partner With Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join hands with The Eagle Generation to invest in the next generation of Kingdom leaders.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Partnership Opportunities</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Corporate Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  Partner with us to develop ethical leaders in your industry. Provide mentorship, internships, and training opportunities for our members.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Mentorship programs for employees</li>
                  <li>• Internship and job placement opportunities</li>
                  <li>• Corporate training and retreats</li>
                  <li>• Joint community service initiatives</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Church Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  Collaborate with local churches to nurture young leaders in your congregation and community. Together we can raise Kingdom leaders.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Youth leadership development programs</li>
                  <li>• Joint mentorship initiatives</li>
                  <li>• Community outreach and service projects</li>
                  <li>• Prayer and spiritual support networks</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Individual Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  Become a personal mentor, sponsor, or supporter. Your investment in one life can transform many through Kingdom leadership.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• One-on-one mentorship relationships</li>
                  <li>• Scholarship sponsorships</li>
                  <li>• Event and program sponsorships</li>
                  <li>• Prayer and encouragement partnerships</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Institutional Partnerships</h3>
                <p className="text-gray-700 mb-4">
                  Universities, NGOs, and government agencies can partner with us to develop leadership programs and create transformation initiatives.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Campus leadership programs</li>
                  <li>• Research and policy collaborations</li>
                  <li>• Community development projects</li>
                  <li>• Governance and leadership training</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">How to Partner</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-900">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Connect</h3>
                  <p className="text-gray-700">
                    Reach out to us through our contact form or email to express your interest in partnering.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-900">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Discuss</h3>
                  <p className="text-gray-700">
                    We'll discuss partnership opportunities and how we can collaborate for maximum Kingdom impact.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-900">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Partner</h3>
                  <p className="text-gray-700">
                    Formalize the partnership and begin working together to raise Kingdom leaders and transform communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Partner With Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Kingdom Impact</h3>
                <p className="text-gray-700">
                  Invest in raising leaders who will transform nations with integrity, wisdom, and godly influence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Community Transformation</h3>
                <p className="text-gray-700">
                  Partner in initiatives that bring lasting change to communities and institutions across Africa.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Leadership Development</h3>
                <p className="text-gray-700">
                  Support the development of ethical leaders who will serve with excellence in all spheres of society.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Legacy Building</h3>
                <p className="text-gray-700">
                  Create a lasting legacy by investing in the next generation of Kingdom leaders and change-makers.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Start a Partnership
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
