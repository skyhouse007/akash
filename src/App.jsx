import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const heroRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = ["home", "services", "portfolio", "quote", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    });
  };

  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description:
        "Custom websites built with modern technologies, responsive design, and optimal performance.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Mobile First",
      ],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: "📱",
      title: "App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "iOS & Android",
        "Cross Platform",
        "UI/UX Design",
        "App Store Deploy",
      ],
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Custom software solutions, enterprise applications, and system integrations.",
      features: [
        "Custom Solutions",
        "Enterprise Apps",
        "API Integration",
        "Cloud Deploy",
      ],
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: "🎨",
      title: "Branding & Design",
      description:
        "Complete brand identity, logo design, and visual communication strategies.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "Visual Strategy",
      ],
      gradient: "from-orange-500 to-red-400",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "🛒",
      description: "Full-featured online store with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-blue-600 to-blue-400",
    },
    {
      title: "Mobile Banking App",
      category: "App Development",
      image: "💳",
      description: "Secure banking application with biometric authentication",
      tech: ["React Native", "Firebase", "Biometrics"],
      gradient: "from-purple-600 to-purple-400",
    },
    {
      title: "Healthcare Management",
      category: "Software Development",
      image: "🏥",
      description: "Complete patient management system for clinics",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      gradient: "from-green-600 to-green-400",
    },
    {
      title: "Tech Startup Brand",
      category: "Branding",
      image: "🚀",
      description: "Complete brand identity for emerging tech company",
      tech: ["Figma", "Adobe CC", "Branding"],
      gradient: "from-orange-600 to-orange-400",
    },
  ];

  // Particle system for background
  const Particles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          if (particle.x < 0 || particle.x > canvas.width)
            particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height)
            particle.speedY *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${particle.opacity})`;
          ctx.fill();
        });

        requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
    );
  };

  return (
    <div
      className={`${isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"} min-h-screen transition-all duration-500 relative overflow-hidden`}
    >
      {/* Particles Background */}
      <Particles />

      {/* Mouse Follower */}
      <div
        className="fixed w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 pointer-events-none z-50 transition-all duration-100 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x ? 1 : 0})`,
        }}
      />

      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 ${isDarkMode ? "bg-black/80 border-gray-800" : "bg-white/80 border-gray-200"} backdrop-blur-xl border-b transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
                Akash Venture
              </span>
              <div className="ml-3 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#services", label: "Services" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#quote", label: "Get Quote" },
                  { href: "#contact", label: "Contact" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`relative font-medium transition-all duration-300 hover:text-blue-400 ${
                      activeSection === item.href.slice(1)
                        ? "text-blue-400"
                        : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                        activeSection === item.href.slice(1)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className={`relative p-3 rounded-2xl ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-all duration-300 group overflow-hidden`}
                aria-label="Toggle theme"
              >
                <div className="relative z-10 text-xl transition-transform duration-300 group-hover:scale-110">
                  {isDarkMode ? "☀️" : "🌙"}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" : "bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50"}`}
          ></div>
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
            style={{
              left: "10%",
              top: "20%",
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          ></div>
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
            style={{
              right: "10%",
              bottom: "20%",
              transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
              animationDelay: "1s",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                <span
                  className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
                  style={{
                    animationDuration: "3s",
                    transform: `translateY(${scrollY * -0.1}px)`,
                  }}
                >
                  Digital
                </span>
                <span
                  className={`block ${isDarkMode ? "text-white" : "text-gray-900"} relative`}
                  style={{
                    transform: `translateY(${scrollY * -0.05}px)`,
                  }}
                >
                  Innovation
                  <span className="absolute -top-4 -right-4 text-2xl animate-bounce">
                    ✨
                  </span>
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>

              {/* Floating Elements */}
              <div className="absolute -top-10 left-10 w-6 h-6 bg-blue-400 rounded-full animate-float opacity-60"></div>
              <div
                className="absolute top-20 right-10 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-60"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -bottom-5 left-1/4 w-5 h-5 bg-pink-400 rounded-full animate-float opacity-60"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            <p
              className={`text-xl md:text-3xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-4xl mx-auto leading-relaxed font-light`}
            >
              We craft{" "}
              <span className="text-blue-400 font-semibold">exceptional</span>{" "}
              websites, mobile apps, software solutions, and brand identities
              that drive{" "}
              <span className="text-purple-400 font-semibold">
                business growth
              </span>{" "}
              and digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#quote"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-lg font-bold text-white overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Get Free Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a
                href="#portfolio"
                className={`group relative px-10 py-4 border-2 ${isDarkMode ? "border-gray-600 hover:border-blue-400 hover:bg-gray-900/50" : "border-gray-300 hover:border-blue-400 hover:bg-gray-100/50"} rounded-full text-lg font-bold transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div
                className={`w-6 h-10 border-2 ${isDarkMode ? "border-gray-400" : "border-gray-600"} rounded-full flex justify-center`}
              >
                <div
                  className={`w-1 h-3 ${isDarkMode ? "bg-gray-400" : "bg-gray-600"} rounded-full mt-2 animate-pulse`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        id="services"
        className={`py-24 ${isDarkMode ? "bg-gray-900/50" : "bg-gray-50"} relative`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p
              className={`text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto font-light`}
            >
              Comprehensive digital solutions tailored to elevate your business
              presence and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative ${isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"} backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 5}px)`,
                }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Floating Icon */}
                <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>

                <p
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-6 leading-relaxed`}
                >
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"} flex items-center group-hover:text-blue-400 transition-colors duration-300`}
                    >
                      <span
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:animate-pulse`}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p
              className={`text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto font-light`}
            >
              Showcasing our latest work and successful digital transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative ${isDarkMode ? "bg-gray-800/30 border-gray-700" : "bg-white border-gray-200"} backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div
                  className={`aspect-square bg-gradient-to-br ${project.gradient} flex items-center justify-center text-8xl relative overflow-hidden`}
                >
                  <div className="text-white/90 group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>

                  {/* Tech Stack Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white text-sm font-semibold mb-2">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/20 rounded text-xs text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-blue-400 mb-2 font-semibold">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p
                    className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm leading-relaxed`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Quote Form Section */}
      <section
        id="quote"
        className={`py-24 ${isDarkMode ? "bg-gray-900/50" : "bg-gray-50"} relative`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Get Your Quote
              </span>
            </h2>
            <p
              className={`text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} font-light`}
            >
              Tell us about your project and we'll provide a detailed proposal
              within 24 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`${isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"} backdrop-blur-xl border rounded-3xl p-10 shadow-2xl relative overflow-hidden`}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  name: "name",
                  label: "Full Name",
                  type: "text",
                  required: true,
                  placeholder: "Your full name",
                },
                {
                  name: "email",
                  label: "Email Address",
                  type: "email",
                  required: true,
                  placeholder: "your@email.com",
                },
                {
                  name: "phone",
                  label: "Phone Number",
                  type: "tel",
                  required: false,
                  placeholder: "+1 (555) 123-4567",
                },
                {
                  name: "service",
                  label: "Service Required",
                  type: "select",
                  required: true,
                  options: [
                    { value: "", label: "Select a service" },
                    { value: "website", label: "Website Development" },
                    { value: "app", label: "Mobile App Development" },
                    { value: "software", label: "Software Development" },
                    { value: "branding", label: "Branding & Design" },
                    { value: "multiple", label: "Multiple Services" },
                  ],
                },
                {
                  name: "projectType",
                  label: "Project Type",
                  type: "select",
                  required: false,
                  options: [
                    { value: "", label: "Select project type" },
                    { value: "new", label: "New Project" },
                    { value: "redesign", label: "Redesign/Upgrade" },
                    { value: "maintenance", label: "Maintenance" },
                    { value: "consultation", label: "Consultation" },
                  ],
                },
                {
                  name: "budget",
                  label: "Budget Range",
                  type: "select",
                  required: false,
                  options: [
                    { value: "", label: "Select budget range" },
                    { value: "under-5k", label: "Under $5,000" },
                    { value: "5k-15k", label: "$5,000 - $15,000" },
                    { value: "15k-50k", label: "$15,000 - $50,000" },
                    { value: "50k-plus", label: "$50,000+" },
                  ],
                },
              ].map((field, index) => (
                <div key={index} className="group">
                  <label
                    className={`block text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-3 group-focus-within:text-blue-400 transition-colors duration-300`}
                  >
                    {field.label}{" "}
                    {field.required && <span className="text-red-400">*</span>}
                  </label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      required={field.required}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 ${isDarkMode ? "bg-gray-700/50 border-gray-600 focus:bg-gray-700" : "bg-gray-50 border-gray-300 focus:bg-white"} border rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg`}
                    >
                      {field.options.map((option, idx) => (
                        <option key={idx} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className={`w-full px-6 py-4 ${isDarkMode ? "bg-gray-700/50 border-gray-600 focus:bg-gray-700" : "bg-gray-50 border-gray-300 focus:bg-white"} border rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg`}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="relative z-10 mb-8">
              <label
                className={`block text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-3`}
              >
                Project Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 ${isDarkMode ? "bg-gray-700/50 border-gray-600 focus:bg-gray-700" : "bg-gray-50 border-gray-300 focus:bg-white"} border rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg`}
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP (Rush Job)</option>
                <option value="1-month">Within 1 Month</option>
                <option value="2-3-months">2-3 Months</option>
                <option value="3-6-months">3-6 Months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div className="relative z-10 mb-10">
              <label
                className={`block text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-3`}
              >
                Project Description <span className="text-red-400">*</span>
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                rows="6"
                className={`w-full px-6 py-4 ${isDarkMode ? "bg-gray-700/50 border-gray-600 focus:bg-gray-700" : "bg-gray-50 border-gray-300 focus:bg-white"} border rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg resize-none`}
                placeholder="Describe your project requirements, goals, and any specific features you need..."
              ></textarea>
            </div>

            <div className="relative z-10">
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 px-10 py-5 rounded-xl text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Submit Quote Request</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Why Choose Us?
                </span>
              </h2>
              <p
                className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed font-light`}
              >
                With years of experience in digital innovation, Akash Venture
                has been at the forefront of creating cutting-edge solutions
                that drive business success.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: "👥",
                    text: "Expert team of developers and designers",
                    color: "blue",
                  },
                  {
                    icon: "🚀",
                    text: "Latest technologies and best practices",
                    color: "purple",
                  },
                  {
                    icon: "⏰",
                    text: "Timely delivery and ongoing support",
                    color: "pink",
                  },
                  {
                    icon: "💰",
                    text: "Competitive pricing and flexible packages",
                    color: "green",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center group hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-full flex items-center justify-center mr-6 group-hover:animate-bounce`}
                    >
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <span
                      className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} group-hover:text-blue-400 transition-colors duration-300`}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  number: "50+",
                  label: "Projects Completed",
                  gradient: "from-blue-500 to-blue-600",
                  icon: "🎯",
                },
                {
                  number: "100%",
                  label: "Client Satisfaction",
                  gradient: "from-purple-500 to-purple-600",
                  icon: "⭐",
                },
                {
                  number: "24/7",
                  label: "Support Available",
                  gradient: "from-pink-500 to-pink-600",
                  icon: "🛠️",
                },
                {
                  number: "3+",
                  label: "Years Experience",
                  gradient: "from-green-500 to-green-600",
                  icon: "📈",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${stat.gradient} backdrop-blur-xl border ${isDarkMode ? "border-gray-700" : "border-gray-200"} rounded-2xl p-8 text-center shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-2 overflow-hidden`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-4xl font-black text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/90 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className={`py-24 ${isDarkMode ? "bg-gray-900/50" : "bg-gray-50"} relative`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p
              className={`text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} font-light`}
            >
              Ready to start your digital transformation? Let's discuss your
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📧",
                title: "Email Us",
                info: "hello@akashventure.com",
                color: "blue",
              },
              {
                icon: "📞",
                title: "Call Us",
                info: "+1 (555) 123-4567",
                color: "purple",
              },
              {
                icon: "📍",
                title: "Visit Us",
                info: "123 Innovation Street\nTech City, TC 12345",
                color: "pink",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className={`group text-center p-8 ${isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"} backdrop-blur-xl border rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="text-6xl mb-6 group-hover:animate-bounce">
                  {contact.icon}
                </div>
                <h3
                  className={`text-2xl font-bold text-${contact.color}-400 mb-4 group-hover:text-${contact.color}-300 transition-colors duration-300`}
                >
                  {contact.title}
                </h3>
                <p
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg whitespace-pre-line group-hover:text-blue-400 transition-colors duration-300`}
                >
                  {contact.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer
        className={`${isDarkMode ? "bg-black border-gray-800" : "bg-gray-100 border-gray-200"} border-t py-16 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Akash Venture
            </div>
            <p
              className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-8 text-lg`}
            >
              Transforming ideas into digital reality since 2021
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              {["LinkedIn", "Twitter", "GitHub", "Dribbble"].map(
                (social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} hover:text-blue-400 transition-all duration-300 text-lg font-medium hover:scale-110`}
                  >
                    {social}
                  </a>
                ),
              )}
            </div>
            <div
              className={`border-t ${isDarkMode ? "border-gray-800" : "border-gray-300"} pt-8`}
            >
              <p
                className={`${isDarkMode ? "text-gray-500" : "text-gray-600"} text-sm`}
              >
                © 2024 Akash Venture. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
