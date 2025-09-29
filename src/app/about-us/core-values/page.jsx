import React from "react";
import Navbar from "@/Components/Navbar";

export default function CoreValues() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Core Values</h1>
        <p className="text-lg max-w-2xl mx-auto">
          The principles that guide our movement and shape our leaders.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Kingdom First</h3>
              <p className="text-gray-700">
                We prioritize God's Kingdom agenda above all else. Our leadership is rooted in biblical principles and Kingdom values.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Integrity</h3>
              <p className="text-gray-700">
                We lead with unwavering integrity, transparency, and ethical standards in all our dealings and decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Excellence</h3>
              <p className="text-gray-700">
                We pursue excellence in everything we do, setting high standards for ourselves and those we mentor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Innovation</h3>
              <p className="text-gray-700">
                We embrace creativity and innovation to solve problems and create lasting solutions for our communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Servant Leadership</h3>
              <p className="text-gray-700">
                We lead by serving others, putting the needs of our communities and nations above personal gain.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Unity</h3>
              <p className="text-gray-700">
                We foster unity across generations, sectors, and backgrounds to build a stronger movement for transformation.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-blue-900 italic">
              "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." – Colossians 3:23
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
