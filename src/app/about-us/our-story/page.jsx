import React from "react";
import Navbar from "@/Components/Navbar";

export default function OurStory() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-lg max-w-2xl mx-auto">
          From vision to movement: The journey of The Eagle Generation.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">The Beginning</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Eagle Generation was born out of a divine calling to raise Kingdom leaders who would transform Africa and beyond. Founded in Kenya, our movement started with a small group of young professionals and students who shared a vision for ethical leadership in marketplace, governance, and technology.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Recognizing the gap between the potential of young Africans and the leadership challenges facing our continent, we committed ourselves to mentorship, training, and community-building that would equip the next generation to soar above compromise.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Growth and Impact</h2>
            <p className="text-lg text-gray-700 mb-4">
              What began as informal mentorship circles has grown into a comprehensive movement with active campus clubs in Kenyan universities, corporate training programs, governance workshops, and annual flagship events like the Eagles Summit and Hackathon.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We've trained thousands of students and professionals, facilitated strategic partnerships with corporate and technology leaders, and built a community of Kingdom-minded leaders committed to transformation.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Looking Forward</h2>
            <p className="text-lg text-gray-700 mb-4">
              Today, The Eagle Generation stands at the threshold of even greater impact. With our vision to raise 10,000 leaders in the next 5 years, we're expanding our programs, strengthening partnerships, and innovating new ways to equip emerging leaders.
            </p>
            <p className="text-lg text-gray-700">
              Our story is one of faith, perseverance, and transformation. We believe that when eagles rise, nations are changed. Join us as we continue to write this story together.
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "You yourselves have seen what I did to Egypt, and how I carried you on eagles' wings and brought you to myself." – Exodus 19:4
            </p>
            <a
              href="/get-involved/become-a-member"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Join Our Story
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
