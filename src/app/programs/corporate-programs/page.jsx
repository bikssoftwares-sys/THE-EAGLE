import React from "react";
import Navbar from "@/Components/Navbar";

export default function CorporatePrograms() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Corporate Programs</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Building ethical professionals and executives who lead with Kingdom values.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Corporate Offerings</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Executive Leadership Development</h3>
                <p className="text-gray-700">
                  Comprehensive programs for senior leaders focusing on ethical decision-making, servant leadership, and strategic vision aligned with Kingdom principles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Corporate Ethics & Integrity Training</h3>
                <p className="text-gray-700">
                  Workshops on building ethical corporate cultures, anti-corruption measures, and responsible business practices that honor God and serve communities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Innovation & Entrepreneurship Bootcamps</h3>
                <p className="text-gray-700">
                  Training programs that equip professionals with skills in innovation, entrepreneurship, and technology while maintaining ethical business standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Corporate Retreats & Team Building</h3>
                <p className="text-gray-700">
                  Transformational retreats that strengthen teams, foster Kingdom values in the workplace, and develop leaders who serve their organizations and communities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Mentorship Programs</h3>
                <p className="text-gray-700">
                  Structured mentorship initiatives connecting experienced professionals with emerging leaders, fostering knowledge transfer and ethical leadership development.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Partner With Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Kingdom Impact</h3>
                <p className="text-gray-700">
                  Transform your corporate culture with biblical principles that enhance employee engagement and ethical business practices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Leadership Excellence</h3>
                <p className="text-gray-700">
                  Develop leaders who excel in their roles while maintaining integrity and serving their communities with excellence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Innovation with Purpose</h3>
                <p className="text-gray-700">
                  Foster innovation that creates lasting solutions for societal challenges while maintaining profitable business models.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Community Transformation</h3>
                <p className="text-gray-700">
                  Build partnerships that extend your corporate social responsibility into meaningful community development and nation-building.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/get-involved/partner-with-us"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
