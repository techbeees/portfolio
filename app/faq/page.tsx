import Link from "next/link";

export default function FAQ() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Centered Techbeees Text Logo */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 z-20 flex justify-center">
        <Link href="/" className="select-none cursor-pointer">
          <span className="text-3xl md:text-4xl font-black bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tighter transition-transform hover:scale-105">
            techbeees
          </span>
        </Link>
      </div>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[40vh] py-20 px-4 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-black to-blue-900/40 pointer-events-none z-0" />
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob z-0" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 z-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Frequently Asked <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Everything you need to know before starting your project with us.
          </p>
        </div>
      </section>

      {/* FAQ Cards Section */}
      <section className="relative flex items-center justify-center px-4 pb-24">
        {/* Decorative background for FAQ */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-[18rem] bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="max-w-3xl w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
              <div
                key={idx}
                className={`group p-8 rounded-2xl border border-purple-500/20 bg-purple-900/5 hover:bg-purple-900/20 transition-all duration-300 shadow-xl relative overflow-hidden ${idx % 2 === 1 ? 'md:-translate-y-8' : 'md:translate-y-8'}`}
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-2xl z-0" />
                <h3 className="text-xl font-bold mb-3 text-white relative z-10">{item.q}</h3>
                <p className="text-gray-400 relative z-10">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
