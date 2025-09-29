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
              To raise 10,000 Kingdom leaders in the next 5 years who will soar above compromise and transform nations through ethical leadership, innovation, and service.
            </p>
            <p className="text-lg text-gray-700">
              We envision a generation of eagles rising in marketplace, governance, and technology — leading with integrity, wisdom, and godly influence to restore righteousness in Africa and beyond.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              To empower young men and women to take their rightful place in the marketplace, politics & governance, and technology spaces — restoring godly leadership in Africa and beyond.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Through mentorship, training, and community, we equip emerging leaders with the spiritual, intellectual, and practical tools needed to excel in their spheres of influence.
            </p>
            <p className="text-lg text-gray-700">
              We believe that when eagles rise, nations are transformed. Our mission is to cultivate a movement of Kingdom leaders who lead with purpose, integrity, and excellence.
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
