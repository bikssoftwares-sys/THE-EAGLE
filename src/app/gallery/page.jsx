import React from "react";
import Navbar from "@/Components/Navbar";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">A picture is worth a thousand words, but a Kingdom story is worth eternity.</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Our gallery is a window into the life of The Eagle Generation. Each photo, each video, each captured moment tells the story of a people rising like eagles to transform nations.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Gallery Categories</h2>
          <div className="space-y-12">
            {/* Category 1: Campus Life & Mentorship */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Campus Life & Mentorship</h3>
              <p className="text-gray-700 mb-8 text-center">Snapshots of mentorship circles, bootcamps, and hackathons. Photos of students presenting innovations, receiving mentorship, and engaging in workshops.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Placeholder Image {i + 1}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">Campus Mentorship Session</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Corporate Engagements */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Corporate Engagements</h3>
              <p className="text-gray-700 mb-8 text-center">Highlights from retreats, trainings, and leadership forums. Group photos of teams, executives, and Kingdom professionals united in purpose.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Placeholder Image {i + 1}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">Corporate Training Retreat</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Governance & Leadership Forums */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Governance & Leadership Forums</h3>
              <p className="text-gray-700 mb-8 text-center">Moments from School of Influence workshops, political mentorship sessions, and governance dialogues. Leaders and emerging politicians being equipped for righteous governance.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Placeholder Image {i + 1}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">Governance Workshop</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 4: Annual Eagles Summit */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Annual Eagles Summit</h3>
              <p className="text-gray-700 mb-8 text-center">Powerful images from plenary sessions, worship gatherings, and keynote addresses. The atmosphere of transformation as generations gather under one vision.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Placeholder Image {i + 1}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">Eagles Summit Plenary</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 5: Behind the Movement */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Behind the Movement</h3>
              <p className="text-gray-700 mb-8 text-center">Candid photos of The Eagle Generation family in planning, prayer, and fellowship. Volunteers and coordinators serving faithfully behind the scenes.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Placeholder Image {i + 1}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">Team Planning Session</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 6: Multimedia Highlights */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Multimedia Highlights</h3>
              <p className="text-gray-700 mb-8 text-center">Short highlight reels from events. Testimonial videos from students, professionals, and leaders impacted by the movement.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Placeholder Video {i + 1}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">Event Highlight Reel</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Interactive Features: Filter options | Lightbox viewing | Social sharing
            </p>
            <p className="text-lg font-semibold text-blue-900 italic">
              “Declare his glory among the nations, his marvelous works among all the peoples!” – Psalm 96:3
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
