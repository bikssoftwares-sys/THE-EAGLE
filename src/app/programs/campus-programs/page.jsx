import React from "react";
import Navbar from "@/Components/Navbar";

export default function CampusPrograms() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Campus Programs</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering students for Kingdom leadership through mentorship and innovation.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-6 italic text-center">
              "Let no one look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity." – 1 Timothy 4:12
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Initiatives</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Marketplace Mentorship</h3>
                <p className="text-gray-700">
                  Equipping students with Kingdom principles for ethical business leadership, entrepreneurship, and marketplace influence. Sessions cover integrity in commerce, wealth creation for Kingdom purposes, and ethical decision-making in corporate environments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Governance & Policy Bootcamps</h3>
                <p className="text-gray-700">
                  Training future leaders in godly governance, public policy, and civic engagement. Students learn to advocate for justice, transparency, and righteous leadership in political systems, drawing from biblical models of servant leadership.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Technology Innovation Labs</h3>
                <p className="text-gray-700">
                  Hands-on coding, AI, and digital innovation workshops where students develop tech solutions for societal challenges. Emphasis on using technology as a tool for Kingdom advancement, ethical AI, and digital stewardship.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Integrated Leadership Retreats</h3>
                <p className="text-gray-700">
                  Immersive retreats combining spiritual formation, leadership skills, and cross-pillar collaboration. Students from business, politics, and tech streams work together on real-world projects that advance Kingdom transformation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Eagle Chapters Network</h3>
                <p className="text-gray-700">
                  Student-led chapters in Kenyan universities (and expanding regionally) hosting debates, prayer meetings, community outreach, and peer mentorship. Building a network of young eagles committed to holistic national transformation.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Target Group & Impact</h2>
            <p className="text-lg text-gray-700 mb-4">
              Undergraduate and postgraduate students across Kenyan universities who are called to influence the marketplace, governance, and technology spheres with Kingdom values.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We target 50+ active campus chapters, training 5,000+ students annually to become ethical leaders who bridge faith and profession, restoring godly order in Africa.
            </p>
          </div>
          <div className="text-center">
            <a
              href="/get-involved/become-a-member"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Join Campus Programs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
