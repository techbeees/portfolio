import Link from "next/link";

const jobs = [
    {
        title: "Frontend Developer (React/Next.js)",
        location: "Remote / San Francisco, CA",
        type: "Full Time",
        description: "Build beautiful, performant UIs with React and Next.js. Collaborate with designers and backend engineers to deliver world-class digital products.",
        tags: ["React", "Next.js", "TypeScript", "UI/UX"],
    },
    {
        title: "Backend Engineer (Node.js)",
        location: "Remote / New York, NY",
        type: "Full Time",
        description: "Design and implement scalable backend services and APIs. Work with cloud infrastructure and databases.",
        tags: ["Node.js", "API", "Cloud", "PostgreSQL"],
    },
    {
        title: "Product Designer",
        location: "Remote / London, UK",
        type: "Contract",
        description: "Create stunning, user-centered designs for web and mobile apps. Work closely with product and engineering teams.",
        tags: ["Figma", "UI/UX", "Prototyping", "Brand"],
    },
    {
        title: "AI/ML Engineer",
        location: "Remote / Berlin, DE",
        type: "Full Time",
        description: "Develop and deploy machine learning models for real-world business problems. Collaborate on innovative AI solutions.",
        tags: ["Python", "TensorFlow", "AI", "ML"],
    },
];

export default function Careers() {
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
                        Join <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">techbeees</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        We're always looking for talented people to join our team. Explore our open positions below!
                    </p>
                </div>
            </section>

            {/* Careers List Section */}
            <section className="relative flex items-center justify-center px-4 pb-24">
                {/* Decorative background for Careers */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-lg h-72 bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-2xl z-0" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-2xl z-0" />
                <div className="max-w-3xl w-full relative z-10 space-y-10">
                    {jobs.map((job, idx) => (
                        <div key={idx} className="p-8 rounded-2xl border border-purple-500/20 bg-purple-900/5 hover:bg-purple-900/20 transition-all duration-300 shadow-xl relative overflow-hidden group">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                    {job.title}
                                </h2>
                                <span className="px-4 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold border border-purple-500/20">
                                    {job.type}
                                </span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                                <span className="text-sm text-gray-400">{job.location}</span>
                                <div className="flex gap-2 flex-wrap">
                                    {job.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-300 mb-4 mt-2">{job.description}</p>
                            <button className="px-6 py-2 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 text-white">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
