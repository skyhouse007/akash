import React, { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "🛒",
      description: "Full-featured online store with payment integration",
    },
    {
      title: "Mobile Banking App",
      category: "App Development",
      image: "💳",
      description: "Secure banking application with biometric authentication",
    },
    {
      title: "Healthcare Management",
      category: "Software Development",
      image: "🏥",
      description: "Complete patient management system for clinics",
    },
    {
      title: "Tech Startup Brand",
      category: "Branding",
      image: "🚀",
      description: "Complete brand identity for emerging tech company",
    },
  ];

  return (
    <div
      className={`${isDarkMode ? "bg-black text-white" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 ${isDarkMode ? "bg-black/90 border-gray-800" : "bg-white/90 border-gray-200"} backdrop-blur-md border-b transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Akash Venture
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-8">
                  <a
                    href="#home"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Services
                  </a>
                  <a
                    href="#portfolio"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Portfolio
                  </a>
                  <a
                    href="#quote"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Get Quote
                  </a>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors duration-300`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 relative overflow-hidden">
        <div
          className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20" : "bg-gradient-to-br from-blue-100/50 to-purple-100/50"}`}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Digital Innovation
              </span>
              <br />
              <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                Starts Here
              </span>
            </h1>
            <p
              className={`text-xl md:text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-8 max-w-3xl mx-auto`}
            >
              We craft exceptional websites, mobile apps, software solutions,
              and brand identities that drive business growth and digital
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 text-white"
              >
                Get Free Quote
              </a>
              <a
                href="#portfolio"
                className={`border ${isDarkMode ? "border-gray-600 hover:border-blue-400 hover:bg-gray-900" : "border-gray-300 hover:border-blue-400 hover:bg-gray-100"} px-8 py-4 rounded-full text-lg font-semibold transition-all`}
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t ${isDarkMode ? "from-black" : "from-white"} to-transparent`}
        ></div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-20 ${isDarkMode ? "bg-gray-900/50" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}
            >
              Comprehensive digital solutions tailored to elevate your business
              presence and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${isDarkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"} backdrop-blur-sm border rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  {service.title}
                </h3>
                <p
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}
                >
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"} flex items-center`}
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}
            >
              Showcasing our latest work and successful digital transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group ${isDarkMode ? "bg-gray-800/30 border-gray-700" : "bg-white border-gray-200"} backdrop-blur-sm border rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-lg`}
              >
                <div
                  className={`aspect-square ${isDarkMode ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20" : "bg-gradient-to-br from-blue-100/50 to-purple-100/50"} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p
                    className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get Your Quote
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Tell us about your project and we'll provide a detailed proposal
              within 24 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Required *
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="website">Website Development</option>
                  <option value="app">Mobile App Development</option>
                  <option value="software">Software Development</option>
                  <option value="branding">Branding & Design</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="new">New Project</option>
                  <option value="redesign">Redesign/Upgrade</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP (Rush Job)</option>
                <option value="1-month">Within 1 Month</option>
                <option value="2-3-months">2-3 Months</option>
                <option value="3-6-months">3-6 Months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Description *
              </label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Describe your project requirements, goals, and any specific features you need..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Why Choose Us?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                With years of experience in digital innovation, Akash Venture
                has been at the forefront of creating cutting-edge solutions
                that drive business success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-300">
                    Expert team of developers and designers
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-300">
                    Latest technologies and best practices
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-4"></div>
                  <span className="text-gray-300">
                    Timely delivery and ongoing support
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-300">
                    Competitive pricing and flexible packages
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  100%
                </div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your digital transformation? Let's discuss your
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Email Us</h3>
              <p className="text-gray-300">hello@akashventure.com</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">
                Call Us
              </h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-pink-400 mb-2">Visit Us</h3>
              <p className="text-gray-300">
                123 Innovation Street
                <br />
                Tech City, TC 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Akash Venture
            </div>
            <p className="text-gray-400 mb-6">
              Transforming ideas into digital reality since 2021
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Dribbble
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 Akash Venture. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
