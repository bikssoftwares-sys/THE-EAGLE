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
          <p className="text-lg text-gray-700 mb-8">
            We empower young men and women to take their rightful place in the marketplace, politics & governance, and technology spaces — restoring godly leadership in Africa and beyond.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Our vision is to raise 10,000 Kingdom leaders in the next 5 years who will soar above compromise and transform nations through ethical leadership, innovation, and service.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We believe that when eagles rise, nations are transformed. Our programs equip students, professionals, and emerging leaders with the tools, mentorship, and spiritual foundation needed to excel in their spheres of influence.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Through campus mentorship, corporate trainings, governance workshops, and cross-cutting initiatives, we are building a generation that leads with purpose, integrity, and excellence.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Join us in this movement. Whether you’re a student seeking mentorship, a professional looking to lead ethically, or a partner wanting to invest in the next generation — The Eagle Generation welcomes you.
          </p>
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
