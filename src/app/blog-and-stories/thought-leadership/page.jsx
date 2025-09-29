import React from "react";
import Navbar from "@/Components/Navbar";

export default function ThoughtLeadership() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Thought Leadership</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Insights and perspectives on Kingdom leadership, innovation, and transformation.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-lg font-semibold text-blue-900 italic text-center mb-8">
              "They overcame him by the blood of the Lamb and by the word of their testimony." – Revelation 12:11
            </p>
          </div>
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">The Rise of Kingdom-Driven Entrepreneurship</h3>
              <p className="text-gray-700 mb-4">
                <strong>By Dr. James Mwangi, CEO of Kingdom Ventures</strong>
              </p>
              <p className="text-gray-700 mb-4">
                In an era where profit often overshadows purpose, Kingdom-driven entrepreneurship offers a compelling alternative. This approach integrates biblical principles with business acumen, creating enterprises that generate both financial returns and eternal impact.
              </p>
              <p className="text-gray-700 mb-4">
                Key principles include servant leadership, ethical business practices, and community development. When entrepreneurs view their businesses as ministries, they create sustainable solutions that transform lives and communities.
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "The greatest business success comes not from what we gain, but from what we give back to our communities."
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Ethical Governance in the Digital Age</h3>
              <p className="text-gray-700 mb-4">
                <strong>By Hon. Grace Wanjiku, Former Minister of Digital Affairs</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Technology has revolutionized governance, but it also presents new ethical challenges. Leaders must navigate data privacy, digital inclusion, and the responsible use of AI in decision-making processes.
              </p>
              <p className="text-gray-700 mb-4">
                Kingdom principles provide a framework for ethical digital governance: transparency, accountability, and service to the marginalized. When technology serves humanity rather than controlling it, we create societies that reflect God's kingdom values.
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "True digital transformation begins with transformed hearts committed to serving others."
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Mentorship: The Missing Link in Leadership Development</h3>
              <p className="text-gray-700 mb-4">
                <strong>By Pastor David Kiprop, Leadership Development Director</strong>
              </p>
              <p className="text-gray-700 mb-4">
                While formal education provides knowledge, mentorship transfers wisdom, character, and practical experience. In African contexts, mentorship has deep cultural roots but is often undervalued in modern leadership development.
              </p>
              <p className="text-gray-700 mb-4">
                Effective mentorship requires intentionality, vulnerability, and commitment. When mentors invest in mentees, they multiply their impact exponentially, creating a legacy of transformed leaders.
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "The greatest investment you can make is in another person's potential."
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Innovation with a Conscience: Technology for Social Good</h3>
              <p className="text-gray-700 mb-4">
                <strong>By Engineer Sarah Njoroge, Founder of Tech4Good Kenya</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Technology has immense potential to solve Africa's challenges, but innovation must be guided by ethical considerations. We need technologists who ask not just "Can we build it?" but "Should we build it?"
              </p>
              <p className="text-gray-700 mb-4">
                Kingdom-driven innovation focuses on problems that matter: education, healthcare, agriculture, and community development. When technology serves the common good, it becomes a tool for transformation.
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "The best innovations don't just change what we do—they change who we are."
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">The Power of Unified Generations</h3>
              <p className="text-gray-700 mb-4">
                <strong>By Bishop Peter Mutua, Chairman of Intergenerational Leadership Council</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Africa's future depends on bridging the generational divide. Young leaders bring innovation and energy, while experienced leaders offer wisdom and stability. When generations unite around shared Kingdom values, transformation becomes inevitable.
              </p>
              <p className="text-gray-700 mb-4">
                This unity requires humility, mutual respect, and a commitment to shared goals. When young and old leaders collaborate, they create movements that outlast individual lifetimes.
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "The strength of a movement lies not in its individual parts, but in how well they work together."
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." – Matthew 5:16
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contribute an Article
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
