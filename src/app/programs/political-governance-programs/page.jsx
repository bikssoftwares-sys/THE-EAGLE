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
            <h2 className="text-3xl font-bold text-blue-900 mb-6">School of Influence</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our flagship governance training program that equips emerging politicians, civil servants, and community leaders with the knowledge, skills, and character needed for righteous governance.
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Leadership & Governance Training</h3>
                <p className="text-gray-700">
                  Comprehensive courses on public policy, ethical leadership, anti-corruption measures, and servant leadership in government positions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Policy Development Workshops</h3>
                <p className="text-gray-700">
                  Training in policy analysis, legislative processes, and developing Kingdom-centered policies that serve communities and honor God.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Mentorship for Emerging Politicians</h3>
                <p className="text-gray-700">
                  One-on-one mentorship connecting aspiring leaders with experienced politicians and governance experts who model integrity and wisdom.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Community Leadership Programs</h3>
                <p className="text-gray-700">
                  Training for local leaders, council members, and community influencers on ethical governance and community development.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Biblical Foundation</h3>
                <p className="text-gray-700">
                  All training is rooted in biblical principles of justice, righteousness, and servant leadership as exemplified by leaders like Joseph and Daniel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Practical Skills</h3>
                <p className="text-gray-700">
                  Participants learn practical governance skills including policy development, public administration, and ethical decision-making.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Character Development</h3>
                <p className="text-gray-700">
                  Emphasis on developing the character qualities needed for leadership: integrity, wisdom, courage, and compassion.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Community Impact</h3>
                <p className="text-gray-700">
                  Training focuses on creating policies and governance practices that bring transformation and blessing to communities.
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
