import React from "react";
import Navbar from "@/Components/Navbar";

export default function WhoWeAre() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
        <p className="text-lg max-w-2xl mx-auto">
          The Eagle Generation (TEG) is a Kingdom-driven movement committed to raising leaders who will transform societies with integrity, wisdom, and innovation.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Governance Philosophy</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Eagle Generation (TEG) embraces a Kingdom governance model — leadership as service, accountability to God and people, and collaborative decision-making. The structure is designed to ensure clarity of roles, efficient program delivery, and sustainable growth while upholding transparency and integrity.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Organizational Structure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Governing Council</h3>
                <p className="text-gray-700 mb-2">Provides spiritual, strategic, and governance oversight.</p>
                <p className="text-gray-700 mb-2">Custodians of vision and long-term direction.</p>
                <p className="text-gray-700">Approves policies, budgets, and major partnerships.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Executive Leadership Team</h3>
                <p className="text-gray-700 mb-2">Responsible for day-to-day management and execution of programs.</p>
                <p className="text-gray-700 mb-2">Includes President, Vice President, Executive Director, Program Directors, and more.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Program Coordinators & Committees</h3>
                <p className="text-gray-700 mb-2">Campus Coordinators, Corporate Liaisons, Governance Fellows.</p>
                <p className="text-gray-700">Task-specific teams for summits, workshops, and bootcamps.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Membership Assembly</h3>
                <p className="text-gray-700 mb-2">Registered members participate in annual general meetings.</p>
                <p className="text-gray-700">Provide feedback and accountability to leadership.</p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Decision-Making Framework</h2>
            <p className="text-lg text-gray-700 mb-4">
              Strategic decisions by the Board of Trustees, operational planning by the Executive Team, and accountability through Members' AGM. All decisions are guided by prayer, Scripture, and Kingdom principles.
            </p>
          </div>
          <div className="text-center">
            <a
              href="/get-involved/become-a-member"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
