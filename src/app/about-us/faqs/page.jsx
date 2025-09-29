import React from "react";
import Navbar from "@/Components/Navbar";

export default function FAQs() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Answers to common questions about The Eagle Generation and our programs.
        </p>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">What is The Eagle Generation?</h3>
              <p className="text-gray-700">
                The Eagle Generation (TEG) is a Kingdom-driven movement committed to raising leaders who will transform societies with integrity, wisdom, and innovation. We empower young men and women to take their rightful place in the marketplace, politics & governance, and technology spaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Who can join The Eagle Generation?</h3>
              <p className="text-gray-700">
                Our programs are open to students, young professionals, and emerging leaders who are committed to ethical leadership and Kingdom values. We welcome participants from all backgrounds who share our vision for transformation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">What programs do you offer?</h3>
              <p className="text-gray-700">
                We offer campus mentorship and bootcamps, corporate trainings and retreats, political & governance programs (including School of Influence), and cross-cutting activities like the Eagles Summit, digital publications, and strategic partnerships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">How do I become a member?</h3>
              <p className="text-gray-700">
                Membership is open to all who align with our vision and values. You can apply through our website, attend our events, or contact us directly. Membership includes access to mentorship, training programs, and community events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Are your programs free?</h3>
              <p className="text-gray-700">
                Many of our programs are free or low-cost to ensure accessibility. Some specialized trainings and retreats may have fees to cover logistics. We also offer scholarships and sponsorship opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">How can I partner with The Eagle Generation?</h3>
              <p className="text-gray-700">
                Partnerships are welcome from individuals, corporations, churches, and organizations. You can support through donations, sponsorships, mentorship, or by providing venues and resources for our programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Where are you located?</h3>
              <p className="text-gray-700">
                We are based in Nairobi, Kenya, but our movement extends across Africa and beyond. We have active campus clubs in Kenyan universities and partnerships with leaders in various countries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">How can I volunteer?</h3>
              <p className="text-gray-700">
                We welcome volunteers for event coordination, mentorship, content creation, and administrative support. Contact us to learn about current volunteer opportunities and how you can contribute to the movement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">What is your vision for the future?</h3>
              <p className="text-gray-700">
                Our vision is to raise 10,000 Kingdom leaders in the next 5 years who will soar above compromise and transform nations through ethical leadership, innovation, and service in marketplace, governance, and technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">How can I stay updated on your activities?</h3>
              <p className="text-gray-700">
                Follow us on social media (@TheEagleGeneration254 on Facebook, Instagram, Twitter/X, and LinkedIn), subscribe to our newsletter, and visit our website regularly for updates on programs and events.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-blue-900 italic mb-6">
              "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you." – Matthew 7:7
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
