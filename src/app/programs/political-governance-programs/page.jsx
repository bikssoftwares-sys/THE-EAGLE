import React from "react";
import Navbar from "@/Components/Navbar";

export default function PoliticalGovernancePrograms() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Political & Governance Programs</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Preparing leaders for public service and righteous governance.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Governance & Policy Programs</h2>
            <p className="text-lg text-gray-700 mb-6">
              Equipping leaders to restore godly governance in Africa, addressing the leadership vacuum through Kingdom-centered training in politics, policy, and public administration.
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">School of Influence</h3>
                <p className="text-gray-700">
                  Comprehensive training for emerging politicians, civil servants, and community leaders in righteous governance, ethical leadership, and Kingdom-centered policy development. Focus on biblical models of leadership like Joseph and Daniel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Policy Advocacy & Reform Bootcamps</h3>
                <p className="text-gray-700">
                  Hands-on workshops teaching policy analysis, legislative processes, and advocacy for justice, transparency, and community welfare. Participants learn to develop and implement policies that honor God and serve people.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Anti-Corruption & Integrity Training</h3>
                <p className="text-gray-700">
                  Specialized programs addressing corruption in governance, teaching accountability, transparency, and ethical decision-making. Equips leaders to combat systemic corruption and establish righteous systems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Civic Engagement & Community Leadership</h3>
                <p className="text-gray-700">
                  Training for local leaders, council members, and community influencers on participatory governance, community development, and mobilizing citizens for positive change.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Governance Mentorship Network</h3>
                <p className="text-gray-700">
                  One-on-one mentorship connecting aspiring leaders with experienced politicians and governance experts who model integrity, wisdom, and servant leadership in public service.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Kingdom Governance Framework</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Biblical Justice & Righteousness</h3>
                <p className="text-gray-700">
                  Training rooted in Proverbs 29:2 — "When the righteous are in authority, the people rejoice." Emphasis on justice, fairness, and protection of the vulnerable.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Servant Leadership Model</h3>
                <p className="text-gray-700">
                  Following Christ's example (Mark 10:45), leaders learn to serve rather than rule, putting community needs above personal gain and power.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Integrity & Accountability</h3>
                <p className="text-gray-700">
                  Developing character qualities of honesty, transparency, and accountability to God and people, with systems for ongoing evaluation and correction.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Transformational Impact</h3>
                <p className="text-gray-700">
                  Focus on policies and governance practices that bring lasting transformation, addressing root causes of poverty, injustice, and underdevelopment.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/get-involved/become-a-member"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Join School of Influence
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
