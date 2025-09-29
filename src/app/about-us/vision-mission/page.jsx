import React from "react";
import Navbar from "@/Components/Navbar";

export default function VisionMission() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Vision & Mission</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Guiding principles that drive our movement forward.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-4">
              To raise a generation of Kingdom-minded leaders who soar like eagles and transform nations through integrity, innovation, and godly influence in the marketplace, governance, and technology.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              To mentor, equip, and empower men and women with Kingdom values, leadership skills, and innovative capacity so they can influence society’s key pillars — business, governance, and technology — and restore godly order in nations.
            </p>
          </div>
          <div className="text-center">
            <a
              href="/programs"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
