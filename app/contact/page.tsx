'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Back to Home */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-4 py-2 border border-purple-500/50 rounded-lg text-sm font-semibold hover:bg-purple-500/10 transition-all"
        >
          ← Back Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen bg-linear-to-br from-purple-900/20 via-black to-blue-900/20 px-4 py-20 flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

        <div className="max-w-4xl w-full relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Let's Build <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Something Great</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Form */}
            <div className="md:col-span-2 p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:border-purple-500 focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:border-purple-500 focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Company (Optional)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:border-purple-500 focus:outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-500/30 text-white focus:border-purple-500 focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
                >
                  Send Message
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-center">
                    Thanks for reaching out! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="p-6 rounded-2xl border border-pink-500/20 bg-pink-900/10">
                <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <p className="font-semibold text-pink-300">Email</p>
                    <a href="mailto:hello@techbeees.com" className="hover:text-white transition">
                      hello@techbeees.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-pink-300">Phone</p>
                    <a href="tel:+1234567890" className="hover:text-white transition">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-pink-300">Location</p>
                    <p>San Francisco, CA, USA</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-900/10">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-sm text-gray-300 mb-4">
                  We typically respond within 24 hours. Let's start your project today!
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">Fast Response</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">Expert Team</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-900/10">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-white transition text-sm">Twitter</a>
                  <a href="#" className="text-gray-300 hover:text-white transition text-sm">LinkedIn</a>
                  <a href="#" className="text-gray-300 hover:text-white transition text-sm">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-linear-to-b from-black to-purple-900/5 px-4 py-20 flex items-center justify-center">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Frequently Asked <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Our timelines vary based on project complexity. The Starter plan takes 2 weeks, Professional takes 4-6 weeks. We'll provide a detailed timeline during consultation.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! All our plans include deployment and testing. Professional tier includes 1 month free maintenance, and Enterprise includes long-term support.",
              },
              {
                q: "Can we start with a small project?",
                a: "Absolutely! Our Starter tier is perfect for getting started. We can always scale up as your needs grow.",
              },
              {
                q: "What technologies do you use?",
                a: "We use modern tech stacks including React, Next.js, Vue.js, Node.js, Python, and more. We choose the best tools for each project.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-purple-500/20 bg-purple-900/5 hover:bg-purple-900/10 transition-all">
                <h3 className="text-lg font-bold mb-3 text-white">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-black via-purple-900/20 to-black px-4 py-20 flex items-center justify-center">
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's work together to bring your vision to life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => document.querySelector('input[name="name"]')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Fill Out Form
            </button>
            <Link
              href="/"
              className="px-8 py-3 border border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
