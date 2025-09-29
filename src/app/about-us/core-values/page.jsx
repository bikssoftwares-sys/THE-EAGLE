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
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Kingdom Integrity</h3>
              <p className="text-gray-700 mb-2">
                We uphold truth, righteousness, and ethical standards in every sphere of influence.
              </p>
              <p className="text-sm italic text-gray-600">Proverbs 10:9 – "Whoever walks in integrity walks securely."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Servant Leadership</h3>
              <p className="text-gray-700 mb-2">
                We model leadership after Christ — serving people, not ruling over them.
              </p>
              <p className="text-sm italic text-gray-600">Mark 10:45 – "For even the Son of Man did not come to be served, but to serve…"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Excellence</h3>
              <p className="text-gray-700 mb-2">
                We pursue excellence in all endeavors, reflecting the greatness of our Creator.
              </p>
              <p className="text-sm italic text-gray-600">Colossians 3:23 – "Whatever you do, work at it with all your heart, as working for the Lord."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Innovation with Purpose</h3>
              <p className="text-gray-700 mb-2">
                We embrace creativity and technology as tools to solve societal problems and advance God’s Kingdom.
              </p>
              <p className="text-sm italic text-gray-600">Proverbs 8:12 – "I, wisdom, dwell together with prudence; I possess knowledge and discretion."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Community & Collaboration</h3>
              <p className="text-gray-700 mb-2">
                We build strong, supportive communities that foster mentorship, unity, and collective impact.
              </p>
              <p className="text-sm italic text-gray-600">Ecclesiastes 4:9 – "Two are better than one, because they have a good return for their labor."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Transformation</h3>
              <p className="text-gray-700 mb-2">
                We exist to bring lasting change in individuals, organizations, and nations through Kingdom influence.
              </p>
              <p className="text-sm italic text-gray-600">Romans 12:2 – "Be transformed by the renewing of your mind…"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Visionary Courage</h3>
              <p className="text-gray-700 mb-2">
                We are bold, like eagles, to soar above fear and mediocrity in pursuit of God’s calling.
              </p>
              <p className="text-sm italic text-gray-600">Joshua 1:9 – "Be strong and courageous. Do not be afraid; do not be discouraged…"</p>
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
