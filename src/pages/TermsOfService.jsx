import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/titlisLogo.png';

export default function TermsOfService() {
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
            Terms of Service
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            The basic terms for using our services
          </h1>
          <p className="mt-5 text-base leading-8 text-gray-600">
            These terms explain how Titlis Tours &amp; Travels provides travel planning, booking
            assistance, and related support services. By using our services, you agree to these
            general terms.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Bookings and confirmations</h2>
            <p className="mt-3 leading-7 text-gray-600">
              All bookings are subject to availability and confirmation from airlines, hotels,
              resorts, transport providers, visa partners, and other travel vendors involved in
              your plan.
            </p>
          </section>

          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Pricing and payments</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Travel prices may change depending on availability, seasonal demand, policy changes,
              exchange rates, or supplier updates. Final pricing is confirmed at the time of
              booking or payment request.
            </p>
          </section>

          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Cancellations and changes</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Cancellation charges, date changes, and refund timelines depend on the policies of
              the relevant travel provider. We will always communicate these details as clearly as
              possible during the process.
            </p>
          </section>

          <section className="rounded-[2rem] border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Traveler responsibility</h2>
            <p className="mt-3 leading-7 text-gray-600">
              Travelers are responsible for providing accurate personal details, valid travel
              documents, and any information needed to complete bookings, visa applications, or
              travel-related formalities.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
