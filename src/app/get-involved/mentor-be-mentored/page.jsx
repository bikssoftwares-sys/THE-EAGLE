import React from "react";
import Navbar from "@/Components/Navbar";

export default function MentorBeMentored() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Mentor & Be Mentored</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Connect with Kingdom leaders who can guide your journey and share your wisdom with the next generation.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mentorship Philosophy</h2>
            <p className="text-lg text-gray-700 mb-6">
              We believe in the power of generational transfer of wisdom and experience. Our mentorship programs connect seasoned Kingdom leaders with emerging leaders to foster growth, accountability, and transformation.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Biblical Foundation</h3>
              <p className="text-gray-700">
                "Teach the older women to be reverent in the way they live... Then they can urge the younger women to love their husbands and children, to be self-controlled and pure, to be busy at home, to be kind, and to be subject to their husbands, so that no one will malign the word of God." – Titus 2:3-5
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Mentor Opportunities</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Marketplace Mentorship</h3>
                <p className="text-gray-700 mb-4">
                  Experienced professionals mentor young leaders in business, entrepreneurship, and corporate environments, sharing ethical business practices and Kingdom principles.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Career guidance and professional development</li>
                  <li>• Ethical decision-making in business</li>
                  <li>• Networking and opportunity creation</li>
                  <li>• Work-life balance and spiritual growth</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Governance Mentorship</h3>
                <p className="text-gray-700 mb-4">
                  Seasoned politicians and civil servants mentor emerging leaders in public service, policy development, and ethical governance.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Public policy and legislative processes</li>
                  <li>• Ethical leadership in government</li>
                  <li>• Community service and public engagement</li>
                  <li>• Integrity and accountability in public office</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Technology & Innovation Mentorship</h3>
                <p className="text-gray-700 mb-4">
                  Tech professionals and innovators mentor students and young professionals in technology, entrepreneurship, and digital transformation.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Technical skills development</li>
                  <li>• Innovation and problem-solving</li>
                  <li>• Startup guidance and funding opportunities</li>
                  <li>• Ethical technology development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Be Mentored</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Student Mentorship</h3>
                <p className="text-gray-700 mb-4">
                  University students receive guidance from experienced professionals in their field of study and career interests.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Academic and career planning</li>
                  <li>• Internship and job placement assistance</li>
                  <li>• Leadership development</li>
                  <li>• Spiritual and personal growth</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Professional Mentorship</h3>
                <p className="text-gray-700 mb-4">
                  Young professionals receive ongoing support from senior leaders in their industry for career advancement and ethical leadership.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Career progression strategies</li>
                  <li>• Professional networking</li>
                  <li>• Skill development and training</li>
                  <li>• Work-life integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Leadership Mentorship</h3>
                <p className="text-gray-700 mb-4">
                  Emerging leaders receive intensive mentorship from established Kingdom leaders for personal and organizational transformation.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Servant leadership development</li>
                  <li>• Strategic planning and vision casting</li>
                  <li>• Team building and organizational culture</li>
                  <li>• Spiritual leadership and accountability</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">How It Works</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-900">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Apply</h3>
                  <p className="text-gray-700">
                    Submit your application indicating whether you want to be a mentor, mentee, or both.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-900">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Match</h3>
                  <p className="text-gray-700">
                    Our team matches you with compatible mentors/mentees based on interests, experience, and goals.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-900">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Connect</h3>
                  <p className="text-gray-700">
                    Begin your mentorship journey with regular meetings, goal setting, and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Join the Mentorship Program
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
