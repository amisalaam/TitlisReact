import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BriefcaseBusiness,
  CarFront,
  Camera,
  ChevronRight,
  Clock,
  FileCheck,
  Hotel,
  MapPin,
  MapPinned,
  Menu,
  Plane,
  PlaneTakeoff,
  Send,
  Shield,
  Sparkles,
  Ticket,
  X,
} from 'lucide-react';
import Logo from '../assets/Logo/titlisLogo.png';
import heroMountain from '../assets/Home/hero-mountain.jpg';
import beachResort from '../assets/Home/beachResort.jpg';
import chinaBusinessTourImage from '../assets/Home/china-business-tour.png';
import keralaServiceImage from '../assets/Home/kerala-service.png';
import resortServiceImage from '../assets/Home/resort-service.png';
import gallery1 from '../assets/Home/gallery1.jpg';
import gallery5 from '../assets/Home/gallery5.jpg';
import gallery6 from '../assets/Home/gallery6.jpg';
import malaysiaTourImage from '../assets/Home/malaysia-tour.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Website lead%0A${formData.name} tried to connect from your website.`;
    const whatsappLink = `https://wa.me/919288000533?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '' });
    }, 2000);
  };

  const services = [
    {
      icon: MapPinned,
      eyebrow: 'Signature Escapes',
      title: 'Kerala Tour Packages',
      description:
        'Backwater stays, hill-station routes, beach holidays, and handpicked Kerala itineraries planned around your pace.',
      image: keralaServiceImage,
      imagePosition: 'center center',
      featured: true,
    },
    {
      icon: Hotel,
      eyebrow: 'Stay Collection',
      title: 'Resort Booking',
      description: 'Luxury resorts, family stays, and honeymoon retreats with curated property options.',
      image: resortServiceImage,
      imagePosition: 'center center',
      tall: true,
    },
    {
      icon: CarFront,
      eyebrow: 'Road Freedom',
      title: 'Self Drive Car Rental Kerala',
      description: 'Flexible self-drive rentals across Kerala for scenic coastal drives and hill routes.',
      image: 'https://www.mangocabs.in/_next/image?q=75&url=%2Fimages%2Fservices%2Frent-a-car-desktop.png&w=3840',
      imagePosition: 'center center',
    },
    {
      icon: Ticket,
      eyebrow: 'Fly Smart',
      title: 'Air Ticket',
      description: 'Domestic and international air ticketing with smooth booking support and fare guidance.',
      image: 'https://exciting-basket-1cebec2b8a.media.strapiapp.com/departure_board_inside_an_airpor_88260f482c.webp',
      imagePosition: 'center center',
      compact: true,
    },
    {
      icon: FileCheck,
      eyebrow: 'Visa Desk',
      title: 'China Visa',
      description: 'Visa processing support for China travel with document guidance and application assistance.',
      image: 'https://media.assettype.com/deccanherald%2F2025-09-22%2Fmmvgqt9k%2FiStock-174750364.jpg?ar=40%3A21&auto=format%2Ccompress&mode=crop&ogImage=true&rect=0%2C145%2C3864%2C2029&w=1200',
      imagePosition: 'center center',
    },
    {
      icon: BriefcaseBusiness,
      eyebrow: 'Corporate Travel',
      title: 'China Business Tour',
      description: 'Professionally coordinated business itineraries for meetings, trade visits, and corporate travel.',
      image: chinaBusinessTourImage,
      imagePosition: 'center center',
      wide: true,
    },
    {
      icon: Plane,
      eyebrow: 'Island Getaways',
      title: 'Sri Lanka Tour Packages',
      description: 'Culture, coast, tea-country, and family-friendly itineraries across Sri Lanka.',
      image: 'https://ceylonroute.com/images/blog/colombo-to-galle.jpg',
      imagePosition: 'center center',
    },
    {
      icon: Camera,
      eyebrow: 'Beach & Nightlife',
      title: 'Thailand Tour Packages',
      description: 'Bangkok, Phuket, Pattaya, Krabi and beyond with flexible leisure-focused packages.',
      image: 'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcontain%2Cgravity%3Dcenter%2Cquality%3D60%2Cwidth%3D1440%2Cheight%3D650%2Cdpr%3D1/tour_img/d47f6e7b424524756b6a546ff04c3caf2e91a3b1d197704df341ebc9729313ef.jpg',
      imagePosition: 'center center',
    },
    {
      icon: Sparkles,
      eyebrow: 'City + Escape',
      title: 'Malaysia Tour Packages',
      description: 'Urban experiences, shopping, theme parks, and tropical escapes built into one journey.',
      image: malaysiaTourImage,
      imagePosition: 'center center',
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <section id="home" className="relative overflow-hidden bg-[#061924] px-0 pb-0 pt-0">
        <div className="relative w-full">
          <div className="relative min-h-[100svh] w-full overflow-hidden rounded-none">
            <img
              src={heroMountain}
              alt="Mountain landscape"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(90deg,rgba(4,12,24,0.82)_0%,rgba(4,12,24,0.38)_38%,rgba(4,12,24,0.14)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(6,25,36,0)_0%,rgba(6,25,36,0.72)_100%)]" />

            <header className="relative z-20 px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
              <nav className="flex items-center justify-between gap-4">
                <a
                  href="#home"
                  className="flex items-center"
                >
                  <img src={Logo} alt="Titlis Tours logo" className="h-9 w-auto sm:h-12 lg:h-14" />
                </a>

                <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                  <div className="flex items-center rounded-full border border-white/10 bg-black/70 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                    {navItems.map((item, index) =>
                      <a
                        key={item.label}
                        href={item.href}
                        className="rounded-full px-7 py-2 text-base font-medium text-white transition hover:text-white/80"
                      >
                        {item.label}
                      </a>,
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#contact"
                    className="hidden rounded-full border border-white/20 bg-black/70 px-5 py-2.5 text-sm font-medium text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:bg-black/80 md:inline-flex lg:px-6 lg:py-3 lg:text-base"
                  >
                    Contact Us
                    <span className="ml-3">→</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="inline-flex rounded-full border border-white/20 bg-black/55 p-2 text-white backdrop-blur-xl lg:hidden"
                    aria-label="Toggle navigation"
                  >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                </div>
              </nav>

              {isMenuOpen && (
                <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-black/70 p-4 text-sm text-white/90 backdrop-blur-xl lg:hidden">
                  <div className="flex flex-col gap-3">
                    {navItems.map((item, index) =>
                      <a
                        key={item.label}
                        href={item.href}
                        className="rounded-2xl px-3 py-2 text-white transition hover:bg-white/10"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>,
                    )}
                    <a
                      href="#contact"
                      className="mt-2 inline-flex justify-center rounded-full border border-white/20 bg-white px-5 py-3 font-semibold text-[#0d1b2a]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
            </header>

            <div className="relative z-10 flex min-h-[100svh] items-center px-4 pb-16 pt-16 sm:px-8 sm:pb-32 sm:pt-24 lg:px-12 lg:pb-40 lg:pt-28 2xl:px-16">
              <div className="mx-auto w-full max-w-7xl 2xl:max-w-[90rem]">
                <div className="max-w-4xl">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70 sm:mb-6 sm:text-sm sm:tracking-[0.35em]">
                    Titlis Tours &amp; Travels
                  </p>
                  <h1 className="max-w-4xl text-[2.35rem] font-semibold leading-[0.92] tracking-[-0.06em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.38)] sm:text-[4rem] lg:text-[5.35rem] xl:text-[6.15rem] 2xl:text-[6.9rem]">
                    We&apos;re here
                    <br />
                    to get you there
                  </h1>
                  <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0d1b2a] transition hover:bg-white/90 sm:px-7 sm:py-3.5"
                    >
                      Start Your Journey
                    </a>
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-black/55 sm:px-7 sm:py-3.5"
                    >
                      Explore Services
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-4 py-12 sm:px-5 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl 2xl:max-w-[90rem]">
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between lg:mb-9">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ED1C24]">
                About Titlis
              </p>
              <h2 className="max-w-3xl text-[1.9rem] font-bold tracking-[-0.04em] text-[#111827] sm:text-[2.15rem] md:text-[2.6rem] xl:text-[3rem]">
                We help people travel with less stress and a lot more confidence.
              </h2>
              <p className="max-w-2xl text-[15px] leading-7 text-gray-600 sm:text-base sm:leading-8">
                At Titlis Tours &amp; Travels, we believe a good trip starts with good guidance.
                Whether you are planning a family holiday, a couple&apos;s getaway, or a business
                journey, we stay involved from the first conversation to the final booking.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              Talk to our team
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
                  Our approach
                </p>
                <h3 className="mt-4 max-w-lg text-[1.65rem] font-semibold tracking-[-0.04em] text-[#111827] sm:text-[2rem] xl:text-[2.35rem]">
                  We plan travel the way people actually need it: clear, personal, and well supported.
                </h3>
              </div>

              <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:mt-8 sm:text-base">
                <p>
                  Good travel planning is not just about booking tickets or finding a hotel. It is
                  about understanding the person behind the trip and making sure everything fits
                  their timing, comfort, and purpose.
                </p>
                <p>
                  That is how we work at Titlis. We listen first, guide carefully, and help shape
                  each journey in a way that feels practical from the start and smooth all the way through.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200">
              {[
                {
                  icon: Shield,
                  title: 'Careful planning, not rushed booking',
                  desc: 'We focus on getting the details right before the trip begins, so travelers feel more confident about every step.',
                },
                {
                  icon: MapPin,
                  title: 'Advice shaped by real travel needs',
                  desc: 'Destinations, stays, and travel options are suggested based on what actually suits the traveler, not just what looks good.',
                },
                {
                  icon: Clock,
                  title: 'Support that stays present',
                  desc: 'From the first enquiry to the final booking stage, we stay available and clear in the way we communicate.',
                },
                {
                  icon: PlaneTakeoff,
                  title: 'One place for different kinds of travel',
                  desc: 'Holidays, resort stays, flights, visa help, and business travel can all be handled with one connected team.',
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="grid gap-3 border-b border-gray-200 py-4 sm:gap-4 sm:py-5 sm:grid-cols-[auto_1fr]"
                  >
                    <div className="pt-1">
                      <Icon className="h-5 w-5 text-[#ED1C24]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold tracking-[-0.03em] text-[#111827] sm:text-xl">
                        {item.title}
                      </h4>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2.5rem]">
            <div className="relative">
              <img
                src={beachResort}
                alt="Titlis travel experience"
                className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[340px] xl:h-[380px]"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="max-w-2xl text-xl font-semibold tracking-[-0.04em] sm:text-[1.7rem] lg:text-[1.95rem]">
                  We do not just help people reach a destination. We help them feel sure about the journey before it begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-16 sm:px-5 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl 2xl:max-w-[90rem]">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between lg:mb-14">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ED1C24]">
                Travel Services
              </p>
              <h2 className="text-[2rem] font-bold tracking-[-0.04em] text-[#111827] sm:text-[2.3rem] md:text-5xl xl:text-[3rem]">
                Our <span style={{ color: '#ED1C24' }}>Services</span>
              </h2>
              <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Travel planning, ticketing, rentals, visa support, and destination packages
                designed to make every trip smoother from start to finish.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              Plan with us
            </a>
          </div>

          <div className="border-t border-gray-200">
            {services.map((service) => {
              const Icon = service.icon;
              const isEven = services.indexOf(service) % 2 === 0;

              return (
                <article
                  key={service.title}
                  className="border-b border-gray-200 py-8 sm:py-9 lg:py-10"
                >
                  <div
                    className={`grid items-center gap-5 lg:gap-8 xl:gap-10 ${
                      isEven ? 'lg:grid-cols-[0.95fr_1.05fr]' : 'lg:grid-cols-[1.05fr_0.95fr]'
                    }`}
                  >
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] lg:rounded-[2.2rem]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className={`w-full object-cover ${
                            service.featured
                              ? 'h-[260px] sm:h-[340px] lg:h-[380px]'
                              : service.tall
                                ? 'h-[250px] sm:h-[300px] lg:h-[340px]'
                                : service.compact
                                  ? 'h-[220px] sm:h-[240px] lg:h-[260px]'
                                  : 'h-[230px] sm:h-[270px] lg:h-[300px]'
                          }`}
                          style={{ objectPosition: service.imagePosition || 'center' }}
                        />
                      </div>
                    </div>

                    <div className={isEven ? '' : 'lg:order-1'}>
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ED1C24]">
                            {service.eyebrow}
                          </span>
                          <span className="h-px flex-1 bg-gray-200" />
                        </div>
                        <div className="mt-5 flex items-start gap-3 sm:gap-4">
                          <div className="pt-1">
                            <Icon className="h-5 w-5 text-[#ED1C24] sm:h-6 sm:w-6" />
                          </div>
                          <div>
                            <h3
                              className={`font-semibold tracking-[-0.04em] text-[#111827] ${
                                service.featured ? 'text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem]' : 'text-[1.6rem] sm:text-[1.95rem] lg:text-[2.2rem]'
                              }`}
                            >
                              {service.title}
                            </h3>
                            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-5 sm:py-16 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-7xl 2xl:max-w-[90rem]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ED1C24]">
                Before You Connect
              </p>
              <h2 className="mt-4 max-w-3xl text-[2rem] font-bold tracking-[-0.04em] text-[#111827] sm:text-[2.3rem] md:text-5xl xl:text-[3rem]">
                A better trip usually starts with one clear conversation.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                You do not need a full itinerary before reaching out. Some people come to us with a
                destination, some with dates, and some with nothing more than an idea. That is
                enough for us to begin.
              </p>

              <div className="mt-8 border-l border-gray-200 pl-5 sm:mt-10 sm:pl-8">
                {[
                  {
                    title: 'Tell us where you are in the planning stage',
                    desc: 'Maybe you already know the place, or maybe you are still comparing options. We work from wherever you are starting.',
                  },
                  {
                    title: 'We help simplify the decisions',
                    desc: 'Destinations, stays, flights, visa support, and business travel details become easier when someone helps you sort them properly.',
                  },
                  {
                    title: 'Then we guide you toward the right next step',
                    desc: 'Instead of pushing a fixed package, we help shape something that feels suitable, practical, and well planned.',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`${index === 0 ? '' : 'mt-7 sm:mt-8'} relative`}
                  >
                    <span className="absolute -left-[1.8rem] top-1 h-3 w-3 rounded-full bg-[#ED1C24] sm:-left-[2.65rem]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="overflow-hidden rounded-[2.4rem]">
                <img
                  src={gallery1}
                  alt="Travel planning inspiration"
                  className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[380px] xl:h-[420px]"
                />
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="max-w-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
                    What we can help with
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#111827] sm:text-lg sm:leading-8">
                    Holidays, resort stays, flight planning, visa guidance, and business travel
                    arrangements that need a smoother process.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-500 sm:mt-8 sm:gap-x-8">
                  <span>Family holidays</span>
                  <span>Couple getaways</span>
                  <span>Business travel</span>
                  <span>International tours</span>
                  <span>Resort bookings</span>
                  <span>Visa support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-12 sm:px-5 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl 2xl:max-w-[90rem]">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#151515] px-4 py-9 text-white sm:rounded-[2.75rem] sm:px-8 sm:py-14 lg:px-14 lg:py-18 xl:px-16 xl:py-20">
            <div className="absolute left-0 top-14 hidden h-36 w-28 rounded-r-[4.5rem] border border-l-0 border-white/16 sm:block" />
            <div className="absolute bottom-10 left-0 hidden h-32 w-24 rounded-r-[4rem] border border-l-0 border-white/16 sm:block" />
            <div className="absolute right-0 top-0 hidden h-36 w-32 rounded-bl-[4.5rem] border border-r-0 border-t-0 border-[#ED1C24]/30 sm:block" />

            <div className="relative mx-auto max-w-4xl text-center">
              <h2 className="mx-auto max-w-4xl text-[2rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[3.2rem] lg:text-[4.3rem] xl:text-[5rem]">
                Let&apos;s Plan Your Next Journey Together
              </h2>
              <p className="mx-auto mt-4 max-w-3xl px-2 text-sm leading-6 text-white/65 sm:mt-6 sm:px-0 sm:text-lg sm:leading-8">
                Share your name and start a conversation with our team for holidays, resort
                stays, flights, visa support, and personalized travel planning.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-7 max-w-3xl rounded-[1.5rem] bg-[#1f1f1f] p-2 sm:mt-10 sm:rounded-full sm:flex sm:items-center"
              >
                <label htmlFor="contact-name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Full Name"
                  className="h-12 w-full rounded-full bg-transparent px-4 text-sm text-white placeholder:text-white/35 focus:outline-none sm:h-14 sm:px-6 sm:text-base"
                />

                <button
                  type="submit"
                  className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white sm:mt-0 sm:h-14 sm:w-auto sm:min-w-[220px] sm:px-8 sm:text-base"
                  style={{ backgroundColor: '#ED1C24' }}
                >
                  <Send className="h-4 w-4" />
                  Connect
                </button>
              </form>

              <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-white/45 sm:mt-8 sm:text-sm sm:leading-7">
                Quick planning for Kerala packages, international holidays, business trips, and
                travel support that feels personal from the first message.
              </p>

              {submitted && (
                <div className="mx-auto mt-5 max-w-xl rounded-[1rem] border border-white/12 bg-white/6 px-4 py-3 text-xs text-white/80 sm:mt-6 sm:rounded-full sm:px-6 sm:text-sm">
                  WhatsApp is opening with your message now.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="overflow-hidden rounded-t-[2.5rem] bg-[#111111] px-4 py-7 text-white sm:rounded-t-[4rem] sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto max-w-7xl 2xl:max-w-[90rem]">
          <div className="grid gap-5 border-b border-white/10 pb-6 sm:gap-10 sm:pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <div className="max-w-md">
              <img src={Logo} alt="Titlis Tours logo" className="h-8 w-auto sm:h-12" />
              <p className="mt-4 hidden text-sm leading-6 text-white/60 sm:mt-6 sm:block sm:text-[15px] sm:leading-7">
                Titlis Tours &amp; Travels helps you plan holidays, business trips, stays,
                ticketing, and travel support with a personal approach that feels simple from the
                beginning.
              </p>
              <a
                href="#contact"
                className="mt-4 hidden rounded-full border border-white/12 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/5 sm:mt-6 sm:inline-flex sm:py-3"
              >
                Plan with us
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:block sm:grid-cols-none sm:gap-0 lg:col-span-3 lg:grid lg:grid-cols-[0.8fr_0.8fr_1fr] lg:gap-10">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.22em]">
                Navigation
              </h4>
              <div className="mt-3 space-y-2 text-xs text-white/65 sm:mt-5 sm:space-y-3 sm:text-sm">
                <a href="#home" className="block transition hover:text-white">
                  Home
                </a>
                <a href="#about" className="block transition hover:text-white">
                  About
                </a>
                <a href="#services" className="block transition hover:text-white">
                  Services
                </a>
                <a href="#contact" className="block transition hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.22em]">
                Services
              </h4>
              <div className="mt-3 space-y-2 text-xs text-white/65 sm:mt-5 sm:space-y-3 sm:text-sm">
                <p>Kerala Tour Packages</p>
                <p>Resort Booking</p>
                <p>Air Ticketing</p>
                <p>Visa Support</p>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-sm sm:tracking-[0.22em]">
                Contact
              </h4>
              <div className="mt-3 space-y-2 text-xs text-white/65 sm:mt-5 sm:space-y-4 sm:text-sm">
                <a href="https://wa.me/919288000533" className="block transition hover:text-white">
                  +91 9288000533
                </a>
                <a href="mailto:info@titlistours.com" className="block transition hover:text-white">
                  info@titlistours.com
                </a>
                <p className="hidden leading-6 text-white/50 sm:block sm:leading-7">
                  Reach out for holiday planning, bookings, business travel, and destination support.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 text-xs text-white/45 sm:gap-4 sm:pt-6 sm:text-sm md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 Titlis Tours &amp; Travels.</p>
            <div className="flex flex-wrap gap-3 sm:gap-5">
              <Link to="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="transition hover:text-white">
                Terms of Service
              </Link>
              <Link to="/support" className="transition hover:text-white">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
