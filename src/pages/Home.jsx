import React, { useState } from 'react';
import { MapPin, Plane, Hotel, Camera, Shield, Clock, Send, ChevronRight } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp link with form data
    const message = `Hello! I'm interested in booking a tour.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDestination: ${formData.destination}\nMessage: ${formData.message}`;
    const whatsappLink = `https://wa.me/919288000530?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
    }, 2000);
  };

  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Flight Bookings",
      description: "Domestic and international flight reservations at competitive prices"
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hotel Accommodations",
      description: "Premium hotels, resorts, and budget stays worldwide"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Tour Packages",
      description: "Customized and pre-planned tour packages for all budgets"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Adventure Tours",
      description: "Thrilling trekking, camping, and adventure activities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Travel Insurance",
      description: "Comprehensive coverage for safe and secure travels"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Visa Assistance",
      description: "Complete visa documentation and processing support"
    }
  ];

  const destinations = [
    { name: "Switzerland", image: "🏔️", description: "Alpine beauty and mountain adventures" },
    { name: "Italy", image: "🏛️", description: "History, culture, and Mediterranean charm" },
    { name: "Thailand", image: "🏝️", description: "Tropical paradise and cultural experiences" },
    { name: "Japan", image: "🎌", description: "Ancient temples and modern wonders" },
    { name: "Egypt", image: "🏜️", description: "Ancient wonders and archaeological marvels" },
    { name: "Bali", image: "🌴", description: "Beaches, temples, and island tranquility" }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span style={{ color: '#ED1C24' }}>Titlis</span> Tours
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-red-600 transition">Services</a>
            <a href="#destinations" className="hover:text-red-600 transition">Destinations</a>
            <a href="#about" className="hover:text-red-600 transition">About</a>
            <a href="#contact" className="hover:text-red-600 transition">Contact</a>
          </div>
          <a href="#contact" className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition text-sm font-semibold"
            style={{ backgroundColor: '#ED1C24' }}>
            Book Now
          </a>
        </nav>
      </header>

      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Explore the World with <span style={{ color: '#ED1C24' }}>Titlis</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your trusted travel companion for unforgettable journeys. From tropical beaches to mountain peaks, we create experiences that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="px-8 py-4 text-white font-semibold rounded-full inline-flex items-center gap-2 hover:shadow-lg transition" 
              style={{ backgroundColor: '#ED1C24' }}>
              Start Your Journey <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#destinations" className="px-8 py-4 border-2 border-gray-300 font-semibold rounded-full hover:border-red-600 transition">
              Explore Destinations
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span style={{ color: '#ED1C24' }}>Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete travel solutions for every type of traveler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition group border border-gray-100">
                <div className="mb-4 inline-block p-3 bg-white rounded-lg group-hover:text-white transition" 
                  style={{ color: '#ED1C24' }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Destinations */}
      <section id="destinations" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Popular <span style={{ color: '#ED1C24' }}>Destinations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked destinations across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition group">
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                  {dest.image}
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <p className="text-gray-600 text-sm">{dest.description}</p>
                  <button className="text-sm font-semibold inline-flex items-center gap-2 mt-4 group" style={{ color: '#ED1C24' }}>
                    Explore <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Why Choose <span style={{ color: '#ED1C24' }}>Titlis</span>?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over a decade of experience in travel, we've perfected the art of creating unforgettable journeys.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Expert Guides", desc: "Professional and knowledgeable travel experts" },
                  { title: "Best Prices", desc: "Competitive rates without compromising quality" },
                  { title: "24/7 Support", desc: "Round-the-clock customer assistance" },
                  { title: "Customization", desc: "Tailor-made packages for your preferences" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                      style={{ backgroundColor: '#ED1C24' }}>
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl flex items-center justify-center text-8xl border-4 border-gray-100">
              ✈️
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What Our <span style={{ color: '#ED1C24' }}>Travelers</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", city: "Delhi", text: "Amazing experience! Every detail was perfectly arranged. Titlis made our honeymoon truly special." },
              { name: "Rajesh Kumar", city: "Mumbai", text: "Professional service, great prices, and unforgettable memories. Will definitely book again for our family trip." },
              { name: "Ananya Singh", city: "Bangalore", text: "The customer support was exceptional. They handled everything seamlessly from start to finish." }
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ED1C24' }}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="text-sm font-semibold">{testimonial.name}</div>
                <div className="text-gray-500 text-xs">{testimonial.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Contact Form */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Plan Your <span style={{ color: '#ED1C24' }}>Adventure</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and our team will contact you shortly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  style={{ '--tw-ring-color': '#ED1C24' }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  style={{ '--tw-ring-color': '#ED1C24' }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  style={{ '--tw-ring-color': '#ED1C24' }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  required
                  placeholder="Where do you want to go?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  style={{ '--tw-ring-color': '#ED1C24' }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Tell us about your travel preferences..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition resize-none"
                style={{ '--tw-ring-color': '#ED1C24' }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 text-white font-semibold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2 text-lg"
              style={{ backgroundColor: '#ED1C24' }}
            >
              <Send className="w-5 h-5" />
              Send to WhatsApp
            </button>

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                ✓ Opening WhatsApp with your details...
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Section 7: Footer with Contact Info */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span style={{ color: '#ED1C24' }}>Titlis</span> Tours
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted travel partner for discovering the world's most beautiful destinations.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#destinations" className="hover:text-white transition">Destinations</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Tour Packages</a></li>
                <li><a href="#" className="hover:text-white transition">Hotel Booking</a></li>
                <li><a href="#" className="hover:text-white transition">Visa Services</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contact Info</h4>
              <div className="text-sm text-gray-400 space-y-3">
                <p className="flex items-center gap-2">
                  <span className="text-red-600">📞</span>
                  <a href="https://wa.me/919288000530" className="hover:text-white transition">
                    +91 9288 000 530
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-red-600">📧</span>
                  info@titlistours.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2024 Titlis Tours and Travels. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
                <a href="#" className="hover:text-white transition">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}