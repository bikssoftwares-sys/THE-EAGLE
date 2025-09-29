import React from "react";
import Navbar from "@/Components/Navbar";

export default function Volunteer() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Volunteer With Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your time and talents can help raise Kingdom leaders and transform communities.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Volunteer Opportunities</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Event Coordination</h3>
                <p className="text-gray-700 mb-4">
                  Help organize and coordinate our various events including mentorship circles, bootcamps, retreats, and the annual Eagles Summit.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Event planning and logistics</li>
                  <li>• Registration and attendance management</li>
                  <li>• On-site coordination during events</li>
                  <li>• Follow-up and feedback collection</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Mentorship Support</h3>
                <p className="text-gray-700 mb-4">
                  Support our mentorship programs by helping coordinate mentor-mentee matches, facilitating sessions, and providing administrative support.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Mentor-mentee matching</li>
                  <li>• Session coordination and scheduling</li>
                  <li>• Resource preparation and distribution</li>
                  <li>• Progress tracking and reporting</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Content Creation</h3>
                <p className="text-gray-700 mb-4">
                  Help create and manage content for our digital platforms, newsletters, and publications to amplify Kingdom leadership voices.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Blog and article writing</li>
                  <li>• Social media content creation</li>
                  <li>• Newsletter and email campaigns</li>
                  <li>• Video and multimedia production</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Administrative Support</h3>
                <p className="text-gray-700 mb-4">
                  Provide essential administrative support to keep our operations running smoothly and efficiently.
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Database management and member tracking</li>
                  <li>• Communication and correspondence</li>
                  <li>• Resource organization and filing</li>
                  <li>• General office and operational support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Volunteer Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Develop leadership and organizational skills</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Network with Kingdom leaders and professionals</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Gain experience in event management and coordination</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Contribute to meaningful Kingdom work</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Receive training and capacity building</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Access to exclusive events and programs</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">Certificate of volunteer service</p>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <p className="text-gray-700">References and recommendations for future opportunities</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms." – 1 Peter 4:10
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Apply to Volunteer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
