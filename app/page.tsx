'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'clsx-merge';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);

      // Calculate scroll progress for expand effect
      const progress = Math.min(scrollTop / 300, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate pink opacity for gradient: steps of 10, min 10, max 40
  const pinkOpacity = Math.min(40, Math.max(10, Math.round(scrollProgress * 40 / 10) * 10));

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-black to-blue-900/40 pointer-events-none z-0" />
        {/* Extra background shapes for visual interest */}
        <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] bg-gradient-radial from-purple-700/40 to-transparent rounded-full blur-3xl z-0" />
        <div className="absolute -bottom-40 right-0 w-[28rem] h-[28rem] bg-gradient-radial from-blue-700/30 to-transparent rounded-full blur-3xl z-0" />
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-gradient-radial from-pink-600/20 to-transparent rounded-full blur-2xl z-0" style={{ transform: 'translate(-50%, -50%)' }} />
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob z-0" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 z-0" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-4xl">
          {/* Logo */}
          <div className="text-center">
            <h1 className="text-7xl md:text-8xl font-black bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tighter">
              techbeees
            </h1>
            <div className="h-1 w-32 bg-linear-to-r from-purple-400 to-blue-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Headline */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We build products that make <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">business</span>, not just toys
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Innovative solutions for modern businesses. We craft digital experiences that drive growth, engagement, and real business value.
            </p>
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <p className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50+</p>
              <p className="text-gray-400 text-sm mt-2">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-linear-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">100+</p>
              <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10+</p>
              <p className="text-gray-400 text-sm mt-2">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Sticky Expanding CTA/App Bar */}
        <div
          className={cn(
            "fixed bottom-22 left-1/2 z-50 flex items-center transition-all duration-500 ease-out shadow-lg bg-linear-to-r backdrop-blur-md",
            {
              "from-purple-600/10 to-pink-900/10": pinkOpacity === 10,
              "from-purple-600/20 to-pink-900/10": pinkOpacity === 20,
              "from-purple-600/30 to-pink-900/30": pinkOpacity === 30,
              "from-purple-600/40 to-pink-900/40": pinkOpacity === 40,
            }
          )}
          style={{
            transform: 'translateX(-50%)',
            opacity: 1,
            borderRadius: `8px`,
            paddingLeft: `${(scrollProgress > 0.01 ? 1 : 0) * (scrollProgress * 32 + 24)}px`,
            paddingRight: `${(scrollProgress > 0.01 ? 1 : 0) * (scrollProgress * 32 + 24)}px`,
            paddingTop: `${(scrollProgress > 0.01 ? 1 : 0) * 16}px`,
            paddingBottom: `${(scrollProgress > 0.01 ? 1 : 0) * 16}px`,
          }}
        >
          {/* Animated content transition */}
          <nav className="flex items-center justify-between w-full transition-all duration-500">
            {/* Left: Links appear as bar expands */}
            <div
              className="overflow-hidden transition-all duration-500 flex flex-row justify-around"
              style={{
                width: `${200 * scrollProgress}px`,
                opacity: scrollProgress,
                marginRight: scrollProgress > 0.1 ? '1.5rem' : '0',
              }}
            >
              <button
                onClick={() => scrollToSection('home')}
                className="text-sm text-gray-200 hover:text-white font-medium transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm text-gray-200 hover:text-white font-medium transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Projects
              </button>
            </div>

            {/* Center: Button text morphs */}
            <Link
              href="/contact"
              className={`transition-all duration-500 font-semibold focus:outline-none text-white text-base px-8 py-3 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg transform hover:scale-105 block`}
              style={{
                zIndex: 2,
              }}
            >
              Get In Touch
            </Link>
            {/* Right: Links appear as bar expands */}
            <div
              className="overflow-hidden transition-all duration-500 flex flex-row justify-around"
              style={{
                width: `${200 * scrollProgress}px`,
                opacity: scrollProgress,
                marginLeft: scrollProgress > 0.1 ? '1.5rem' : '0',
              }}
            >
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-gray-200 hover:text-white font-medium transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-sm text-gray-200 hover:text-white font-medium transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Pricing
              </button>
            </div>
          </nav>
        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={cn("text-center flex flex-col-reverse gap-1 justify-center items-center", {
            'opacity-0': scrollProgress > 0.1,
          })}>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className='text-gray-400 text-sm'>Scroll to explore</p>
          </div>
        </div>
      </section>
      {/* Add padding to prevent content overlap with sticky bar */}
      <div className="h-24" />

      {/* Services Section */}
      <section id="services" className="relative min-h-screen bg-linear-to-b from-black via-purple-900/10 to-black px-4 py-20 flex items-center justify-center overflow-hidden">
        {/* Decorative background for services */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-[18rem] bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to transform your business vision into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 bg-purple-900/5 hover:bg-purple-900/10 transition-all duration-300">
              <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-pink-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-400">Modern, scalable web applications built with cutting-edge technologies and best practices.</p>
            </div>

            {/* Service Card 2 */}
            <div className="group p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 bg-pink-900/5 hover:bg-pink-900/10 transition-all duration-300">
              <div className="w-12 h-12 bg-linear-to-r from-pink-600 to-blue-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-3">Mobile Apps</h3>
              <p className="text-gray-400">Native and cross-platform mobile solutions that deliver exceptional user experiences.</p>
            </div>

            {/* Service Card 3 */}
            <div className="group p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 bg-blue-900/5 hover:bg-blue-900/10 transition-all duration-300">
              <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-3">Cloud Solutions</h3>
              <p className="text-gray-400">Secure, scalable cloud infrastructure for seamless deployment and operations.</p>
            </div>

            {/* Service Card 4 */}
            <div className="group p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 bg-purple-900/5 hover:bg-purple-900/10 transition-all duration-300">
              <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400">Intelligent solutions powered by AI to optimize your business processes.</p>
            </div>

            {/* Service Card 5 */}
            <div className="group p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 bg-pink-900/5 hover:bg-pink-900/10 transition-all duration-300">
              <div className="w-12 h-12 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-gray-400">Beautiful, intuitive interfaces that users love to interact with.</p>
            </div>

            {/* Service Card 6 */}
            <div className="group p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 bg-blue-900/5 hover:bg-blue-900/10 transition-all duration-300">
              <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-pink-600 rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-3">Consulting</h3>
              <p className="text-gray-400">Strategic guidance to help you navigate digital transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Projects Section - Zig-Zag Grid */}
      <section id="projects" className="relative min-h-screen bg-linear-to-b from-black to-purple-900/10 px-4 py-20 flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative background for projects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 right-1/3 w-[28rem] h-[16rem] bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="bg-linear-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcase of our most impactful work across industries
            </p>
          </div>
          {/* Zig-zag grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Project Card 1 */}
            <div className="group bg-linear-to-br from-purple-900/60 to-pink-900/40 rounded-3xl shadow-xl border border-purple-500/30 hover:border-pink-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden md:translate-y-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-pink-500/20 to-purple-500/10 rounded-bl-3xl z-0" />
              <div className="relative z-10 flex flex-col items-center justify-center p-8">
                <div className="text-6xl mb-4 animate-bounce-slow">🚀</div>
                <h3 className="text-2xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-gray-400 text-sm mb-4 text-center">Built a scalable e-commerce solution serving 100K+ users monthly</p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">React</span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">Node.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">AWS</span>
                </div>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group bg-linear-to-br from-pink-900/60 to-blue-900/40 rounded-3xl shadow-xl border border-pink-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden md:-translate-y-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-500/20 to-pink-500/10 rounded-bl-3xl z-0" />
              <div className="relative z-10 flex flex-col items-center justify-center p-8">
                <div className="text-6xl mb-4 animate-bounce-slow">📱</div>
                <h3 className="text-2xl font-bold mb-2">Fitness Tracking App</h3>
                <p className="text-gray-400 text-sm mb-4 text-center">Cross-platform mobile app with AI-powered workout recommendations</p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">Flutter</span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">Firebase</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">TensorFlow</span>
                </div>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="group bg-linear-to-br from-blue-900/60 to-purple-900/40 rounded-3xl shadow-xl border border-blue-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden md:translate-y-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-purple-500/20 to-blue-500/10 rounded-bl-3xl z-0" />
              <div className="relative z-10 flex flex-col items-center justify-center p-8">
                <div className="text-6xl mb-4 animate-bounce-slow">🏢</div>
                <h3 className="text-2xl font-bold mb-2">Enterprise SaaS Platform</h3>
                <p className="text-gray-400 text-sm mb-4 text-center">Complete business management system adopted by Fortune 500 companies</p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">Next.js</span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">PostgreSQL</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">Kubernetes</span>
                </div>
              </div>
            </div>
            {/* Project Card 4 */}
            <div className="group bg-linear-to-br from-purple-900/60 to-blue-900/40 rounded-3xl shadow-xl border border-purple-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer relative overflow-hidden md:-translate-y-8">
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-500/20 to-purple-500/10 rounded-bl-3xl z-0" />
              <div className="relative z-10 flex flex-col items-center justify-center p-8">
                <div className="text-6xl mb-4 animate-bounce-slow">🎯</div>
                <h3 className="text-2xl font-bold mb-2">Real-time Analytics Dashboard</h3>
                <p className="text-gray-400 text-sm mb-4 text-center">Advanced data visualization with real-time insights and reporting</p>
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">Vue.js</span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300">Python</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">ElasticSearch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen bg-linear-to-b from-purple-900/10 to-black px-4 py-20 flex items-center justify-center overflow-hidden">
        {/* Decorative background for about */}
        <div className="absolute -top-20 right-1/4 w-[24rem] h-[14rem] bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="max-w-5xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">techbeees</span>
              </h2>
              <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                We are a team of passionate technologists and innovators dedicated to building products that create real business value.
              </p>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Since our founding, we've partnered with startups and enterprises to deliver cutting-edge solutions that drive growth, efficiency, and transformation.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our mission is simple: build technology that matters. We believe in quality, innovation, and client success.
              </p>
              <button className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Right: Stats */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-900/10">
                <p className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">50+</p>
                <p className="text-gray-400">Projects Delivered</p>
              </div>
              <div className="p-6 rounded-2xl border border-pink-500/20 bg-pink-900/10">
                <p className="text-4xl font-bold bg-linear-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">100+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-900/10">
                <p className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">50+</p>
                <p className="text-gray-400">Team Members</p>
              </div>
              <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-900/10">
                <p className="text-4xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">10+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative min-h-screen bg-linear-to-b from-black via-purple-900/10 to-black px-4 py-20 flex items-center justify-center overflow-hidden">
        {/* Decorative background for testimonials */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[10rem] bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              What Our <span className="bg-linear-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real feedback from real clients who trust us with their digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10 hover:bg-purple-900/20 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The team at techbeees transformed our vision into reality. Their expertise and dedication were instrumental in our success."
              </p>
              <div>
                <p className="font-bold">Sarah Anderson</p>
                <p className="text-sm text-gray-400">CEO, TechStart Inc</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 rounded-2xl border border-pink-500/20 bg-pink-900/10 hover:bg-pink-900/20 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Exceptional quality and outstanding support. They go above and beyond to ensure our satisfaction."
              </p>
              <div>
                <p className="font-bold">Michael Chen</p>
                <p className="text-sm text-gray-400">Founder, Digital Solutions Co</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-900/10 hover:bg-blue-900/20 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Working with techbeees was a game-changer for our company. They delivered results beyond expectations."
              </p>
              <div>
                <p className="font-bold">Emma Thompson</p>
                <p className="text-sm text-gray-400">Director, Global Innovations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative min-h-screen bg-linear-to-b from-purple-900/10 to-black px-4 py-20 flex items-center justify-center overflow-hidden">
        {/* Decorative background for pricing */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[28rem] h-[12rem] bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Simple, Transparent <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your project. Always flexible to scale with your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Tier */}
            <div className="p-8 rounded-2xl border border-purple-500/20 bg-purple-900/5 hover:bg-purple-900/10 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-400 text-sm mb-6">Perfect for small projects</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$2,999</span>
                <p className="text-gray-400 text-sm mt-2">one-time project</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Up to 40 hours development
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Single page application
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  2 weeks timeline
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Email support
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span className="w-5 h-5 border border-gray-600 rounded-full flex items-center justify-center text-xs">✗</span>
                  Ongoing maintenance
                </li>
              </ul>
              <button className="w-full px-6 py-3 border border-purple-500/50 rounded-lg font-semibold transition-all hover:bg-purple-500/10">
                Get Started
              </button>
            </div>

            {/* Professional Tier (Featured) */}
            <div className="p-8 rounded-2xl border-2 border-pink-500 bg-pink-900/15 hover:bg-pink-900/25 transition-all duration-300 flex flex-col relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-linear-to-r from-pink-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-4">Professional</h3>
              <p className="text-gray-300 text-sm mb-6">Best for growing businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold bg-linear-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">$7,999</span>
                <p className="text-gray-400 text-sm mt-2">one-time project</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Up to 120 hours development
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Full-stack web application
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  4-6 weeks timeline
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Priority support
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <span className="w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  1 month free maintenance
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-linear-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50">
                Start Your Project
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-900/5 hover:bg-blue-900/10 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-6">For large-scale solutions</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">Custom</span>
                <p className="text-gray-400 text-sm mt-2">tailored pricing</p>
              </div>
              <ul className="space-y-3 mb-8 grow">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Unlimited development hours
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Complex integrations & APIs
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Custom timeline
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Dedicated account manager
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs">✓</span>
                  Long-term support & maintenance
                </li>
              </ul>
              <button className="w-full px-6 py-3 border border-blue-500/50 rounded-lg font-semibold transition-all hover:bg-blue-500/10">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg">
              All plans include deployment, testing, and documentation. <span className="text-white font-semibold">No hidden fees.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-screen bg-linear-to-br from-black via-purple-900/20 to-black px-4 py-20 flex items-center justify-center overflow-hidden">
        {/* Decorative background for CTA */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Build <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Something Amazing?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate and turn your ideas into powerful digital products that drive real business value.
          </p>
          <button className="px-10 py-4 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-purple-500/10 px-4 py-12 overflow-hidden">
        {/* Decorative background for footer */}
        <div className="absolute -bottom-20 right-0 w-[24rem] h-40 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-2xl z-0" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">techbeees</h3>
              <p className="text-gray-400 text-sm">Building products that matter.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white transition">Cloud Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button
                  onClick={() => scrollToSection('about')} className="hover:text-white transition cursor-pointer">About</button></li>
                <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 techbeees. All rights reserved.</p>
          </div>
          <div className="h-40"></div>
        </div>
      </footer>
    </div>
  );
}
