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
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Campus Mentorship Circles</h3>
                <p className="text-gray-700">
                  Weekly mentorship sessions where students connect with Kingdom leaders in marketplace, governance, and technology. Topics include leadership development, ethical decision-making, and career guidance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Innovation Bootcamps</h3>
                <p className="text-gray-700">
                  Hands-on workshops teaching students to develop solutions for community challenges. Focus on technology, entrepreneurship, and social innovation with Kingdom values.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Leadership Development Programs</h3>
                <p className="text-gray-700">
                  Comprehensive training in servant leadership, public speaking, project management, and ethical governance. Students learn to lead with integrity and wisdom.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Campus Clubs & Chapters</h3>
                <p className="text-gray-700">
                  Active student-led clubs in Kenyan universities organizing events, discussions, and community service projects. Building networks of Kingdom-minded leaders.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Target Group</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our campus programs target undergraduate and graduate students across Kenyan universities who are passionate about making a difference in their communities and nations.
            </p>
            <p className="text-lg text-gray-700">
              We welcome students from all disciplines — business, technology, social sciences, humanities — who desire to lead with Kingdom principles and contribute to Africa's transformation.
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
