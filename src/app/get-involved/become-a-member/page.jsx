import React from "react";
import Navbar from "@/Components/Navbar";

export default function BecomeAMember() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Become a Member</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Join The Eagle Generation movement and be part of raising Kingdom leaders who transform nations.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Membership Categories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Student Member</h3>
                <p className="text-gray-700 mb-4">
                  For university and college students passionate about Kingdom leadership. Access mentorship circles, bootcamps, and campus events.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Weekly mentorship sessions</li>
                  <li>• Innovation bootcamps</li>
                  <li>• Leadership development workshops</li>
                  <li>• Campus club participation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Professional Member</h3>
                <p className="text-gray-700 mb-4">
                  For young professionals in marketplace, governance, and technology sectors. Network with Kingdom leaders and access advanced training.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Corporate training programs</li>
                  <li>• Executive leadership development</li>
                  <li>• Mentorship matching</li>
                  <li>• Professional networking events</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Enrollment Process</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-900">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Apply Online</h3>
                  <p className="text-gray-700">
                    Fill out our membership application form with your background and interests.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-900">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Interview</h3>
                  <p className="text-gray-700">
                    Participate in a brief interview to discuss your vision and commitment to Kingdom leadership.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-900">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Welcome Onboard</h3>
                  <p className="text-gray-700">
                    Receive your membership kit and get connected to your first mentorship circle or program.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Membership Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Access to mentorship from experienced Kingdom leaders</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Participation in training programs and workshops</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Networking opportunities with like-minded leaders</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Exclusive access to events and retreats</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Digital resources and leadership materials</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Certificate of membership and recognition</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Opportunities to serve and lead in the movement</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Ongoing support and community fellowship</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Apply for Membership
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
