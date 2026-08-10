import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/titlisLogo.png';

export default function PrivacyPolicy() {
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
            Privacy Policy
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            How we handle your information
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-600">
            Titlis Tours &amp; Travels respects your privacy. This page explains what information
            we may collect when you contact us, how we use it, and how we help keep it protected.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Information we collect</h2>
            <p className="mt-3 leading-7 text-gray-600">
              When you contact us, we may collect details such as your name, phone number, email
              address, destination preferences, travel dates, and any information you choose to
              share about your trip.
            </p>
          </section>

          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">How we use your information</h2>
            <p className="mt-3 leading-7 text-gray-600">
              We use your information to respond to enquiries, suggest travel options, process
              bookings, coordinate support, and improve the way we serve our travelers. We do not
              use your details for unrelated purposes.
            </p>
          </section>

          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Sharing and protection</h2>
            <p className="mt-3 leading-7 text-gray-600">
              We may share necessary travel details with booking partners, hotels, airlines, visa
              service providers, or other trusted partners only when needed to support your travel
              plans. We take reasonable steps to keep your information secure.
            </p>
          </section>

          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Your choices</h2>
            <p className="mt-3 leading-7 text-gray-600">
              If you would like to review, update, or request removal of the personal information
              you shared with us, you can contact our team directly and we will do our best to
              assist you.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
