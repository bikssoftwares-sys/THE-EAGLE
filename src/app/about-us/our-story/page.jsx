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
              The Eagle Generation was birthed out of a deep concern for the state of leadership in Africa, particularly in Kenya, where the spheres of the marketplace, politics & governance, and technology have long been divorced from Kingdom values.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              For decades, society has operated under the assumption that faith belongs only within the walls of the church, while business, politics, and innovation remain "secular" domains. This separation has created a painful leadership vacuum: a lack of men and women who embody Kingdom principles such as integrity, justice, servant leadership, and innovation rooted in godly wisdom.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The result has been devastating: corruption, injustice, and poor leadership have hindered national progress and left citizens disillusioned. Yet the Bible teaches in Proverbs 29:2 that "When the righteous are in authority, the people rejoice: but when the wicked beareth rule, the people mourn."
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Eagle Generation is therefore a restorative movement — seeking to realign leadership in Africa back to divine order, where leaders in governance, business, and innovation operate as Kingdom ambassadors. Our mission is to raise a new breed of "eagle leaders" who soar above compromise, see farther than the ordinary, and bring transformation to their communities and nations.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              This is not just a Kenyan dream — it is a continental and global vision: to see Africa rise with a generation of Kingdom leaders who will influence nations, rebuild foundations, and establish godly governance in every sphere of society.
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
