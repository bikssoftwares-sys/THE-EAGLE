import React from "react";
import Navbar from "@/Components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Let’s soar together for Kingdom transformation.</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We’d love to hear from you! Whether you’re interested in joining our programs, partnering with us, supporting through donations, or simply learning more — The Eagle Generation team is ready to connect with you.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Contact Details</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Physical Address</h3>
              <p className="text-gray-700">
                The Eagle Generation<br />
                P.O. Box 22272<br />
                Nairobi, Kenya
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Contact Information</h3>
              <p className="text-gray-700">
                <strong>Telephone:</strong> +254 796 808 883<br />
                <strong>Email:</strong> hello@theeaglegeneration.org<br />
                theeaglegeneration254@gmail.com<br />
                <strong>Website:</strong> https://theeaglegeneration.org
              </p>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Social Media</h3>
            <ul className="text-gray-700">
              <li>Facebook: @TheEagleGeneration254</li>
              <li>Instagram: @TheEagleGeneration</li>
              <li>Twitter/X: @EagleGen254</li>
              <li>LinkedIn: The Eagle Generation</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">Get In Touch</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number (optional)</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+254 ..."
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Partnership</option>
                  <option>Membership</option>
                  <option>Event Inquiry</option>
                  <option>Prayer Request</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Ways to Connect</h3>
            <p className="text-gray-700 mb-4">
              Join our mentorship programs as a student or professional member.<br />
              Invite us for campus, corporate, or governance engagements.<br />
              Partner with us through donations or collaborations.<br />
              Share your story of transformation with our community.
            </p>
            <p className="text-sm text-gray-500 italic">
              “Two are better than one, because they have a good return for their labor.” – Ecclesiastes 4:9
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
