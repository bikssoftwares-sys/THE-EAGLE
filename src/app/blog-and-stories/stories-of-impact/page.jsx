import React from "react";
import Navbar from "@/Components/Navbar";

export default function StoriesOfImpact() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Stories of Impact</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Real stories of transformation and Kingdom impact from our community.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-lg font-semibold text-blue-900 italic text-center mb-8">
              "They overcame him by the blood of the Lamb and by the word of their testimony." – Revelation 12:11
            </p>
          </div>
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">From Campus to Corporate Leadership</h3>
              <p className="text-gray-700 mb-4">
                <strong>Sarah's Story:</strong> A university student who joined our campus mentorship program and is now leading a successful tech startup with Kingdom values.
              </p>
              <p className="text-gray-700 mb-4">
                "The Eagle Generation gave me the tools and confidence to pursue my dreams. Through mentorship, I learned that business success and Kingdom principles can go hand in hand."
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "Today, my company donates 10% of profits to community development and provides internships for students from underserved communities."
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Transforming Public Service</h3>
              <p className="text-gray-700 mb-4">
                <strong>Michael's Journey:</strong> From a young activist to a council member implementing ethical governance policies.
              </p>
              <p className="text-gray-700 mb-4">
                "The School of Influence equipped me with the knowledge and character needed for public office. I learned that true leadership serves the people first."
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "In my first year in office, we reduced corruption by 40% and increased community development funding by 25%."
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Innovation for Community Good</h3>
              <p className="text-gray-700 mb-4">
                <strong>Grace's Impact:</strong> A young engineer who developed a water purification system for rural communities.
              </p>
              <p className="text-gray-700 mb-4">
                "Through our innovation bootcamps, I learned to use my technical skills for Kingdom purposes. Technology isn't just about profit—it's about solving real problems."
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "Our system now provides clean water to over 5,000 people in rural Kenya, reducing waterborne diseases by 60%."
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Mentorship That Multiplies</h3>
              <p className="text-gray-700 mb-4">
                <strong>David's Legacy:</strong> A corporate executive who mentors 15 young professionals while building his business.
              </p>
              <p className="text-gray-700 mb-4">
                "Being mentored by Kingdom leaders transformed my perspective. Now I pay it forward, mentoring the next generation of ethical business leaders."
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "My mentees have started 8 successful businesses and created over 200 jobs in the past 3 years."
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">From Despair to Hope</h3>
              <p className="text-gray-700 mb-4">
                <strong>Hope's Restoration:</strong> A young mother who overcame unemployment through our entrepreneurship training.
              </p>
              <p className="text-gray-700 mb-4">
                "I thought my dreams were over when I became a single mother. The Eagle Generation showed me that with God, all things are possible."
              </p>
              <div className="border-l-4 border-blue-600 pl-4 italic text-gray-600">
                "Now I run a successful catering business that employs 12 women and supports 8 children's education through scholarships."
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." – Matthew 5:16
            </p>
            <a
              href="/get-involved/become-a-member"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
