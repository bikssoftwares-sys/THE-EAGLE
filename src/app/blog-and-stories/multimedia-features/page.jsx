import React from "react";
import Navbar from "@/Components/Navbar";

export default function MultimediaFeatures() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Multimedia Features</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Videos, podcasts, and visual stories that inspire and educate.
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
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🎥 Featured Videos</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold mb-2">The Eagle Generation Documentary</h4>
                  <p className="text-gray-700 mb-2">
                    A 30-minute documentary showcasing our journey, impact, and vision for raising Kingdom leaders across Africa.
                  </p>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder - The Eagle Generation Documentary]</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold mb-2">Leadership Testimonies Series</h4>
                  <p className="text-gray-700 mb-2">
                    Short videos featuring leaders sharing how Kingdom principles transformed their leadership journey.
                  </p>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder - Leadership Testimonies]</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold mb-2">Innovation Showcase</h4>
                  <p className="text-gray-700 mb-2">
                    Highlights from our hackathons and innovation challenges, featuring solutions that address community needs.
                  </p>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder - Innovation Showcase]</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🎙️ Podcasts</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold mb-2">Kingdom Leadership Conversations</h4>
                  <p className="text-gray-700 mb-2">
                    Weekly podcast featuring discussions with Kingdom leaders from marketplace, governance, and technology sectors.
                  </p>
                  <div className="bg-gray-200 h-24 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Audio Player Placeholder - Episode 1: Ethical Business Leadership]</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Recent Episodes:</p>
                  <ul className="text-sm text-gray-700 ml-4">
                    <li>• Episode 15: Leading with Integrity in Politics</li>
                    <li>• Episode 14: Innovation for Social Good</li>
                    <li>• Episode 13: Mentorship That Transforms</li>
                  </ul>
                </div>
                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold mb-2">Eagle Stories</h4>
                  <p className="text-gray-700 mb-2">
                    Personal stories of transformation, challenges overcome, and victories won through Kingdom leadership.
                  </p>
                  <div className="bg-gray-200 h-24 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Audio Player Placeholder - From Campus to Corporate]</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">📸 Photo Galleries</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold mb-2">Annual Eagles Summit 2024</h4>
                  <p className="text-gray-700 mb-4">
                    Capturing the energy, fellowship, and inspiration from our flagship annual gathering.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Photo 1]</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Photo 2]</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Photo 3]</span>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold mb-2">Campus Mentorship Circles</h4>
                  <p className="text-gray-700 mb-4">
                    Moments from mentorship sessions, bootcamps, and student gatherings across Kenyan universities.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Campus 1]</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Campus 2]</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Campus 3]</span>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="text-lg font-semibold mb-2">Community Impact Projects</h4>
                  <p className="text-gray-700 mb-4">
                    Visual stories of the communities we serve and the transformation we create together.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Impact 1]</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Impact 2]</span>
                    </div>
                    <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xs">[Impact 3]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven." – Matthew 5:16
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Your Media
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
