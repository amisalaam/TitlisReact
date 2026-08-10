import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/titlisLogo.png';

export default function Support() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-5 lg:px-8">
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Titlis Tours logo" className="h-12 w-auto" />
          </Link>
          <Link
            to="/"
            className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
          >
            Back Home
          </Link>
        </div>

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ED1C24]">
            Support
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            We&apos;re here when you need help
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-600">
            If you need help with travel planning, booking updates, itinerary questions, or trip
            support, our team is available to guide you in a clear and personal way.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">WhatsApp support</h2>
            <p className="mt-3 leading-7 text-gray-600">
              For the quickest response, contact us directly on WhatsApp and share your trip
              requirement, booking question, or support request.
            </p>
            <a
              href="https://wa.me/919288000533"
              className="mt-6 inline-flex rounded-full bg-[#ED1C24] px-5 py-3 text-sm font-semibold text-white"
            >
              Message on WhatsApp
            </a>
          </section>

          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Email support</h2>
            <p className="mt-3 leading-7 text-gray-600">
              If you prefer email, you can write to us with your travel plans, booking details, or
              general questions and our team will get back to you.
            </p>
            <a
              href="mailto:info@titlistours.com"
              className="mt-6 inline-flex rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700"
            >
              Email our team
            </a>
          </section>

          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8 md:col-span-2">
            <h2 className="text-2xl font-semibold">What we can help with</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Our support covers tour packages, resort stays, flights, visa-related guidance,
              business travel coordination, travel changes, and general trip planning questions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
