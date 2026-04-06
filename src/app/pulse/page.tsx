import React from "react";
import SubscribeForm from "./SubscribeForm";
import PulseContent from "./PulseContent";
import Link from "next/link";

export const dynamic = 'force-dynamic'; // Enforce real-time server rendering

export default async function PulsePage() {
  return (
    <main className="min-h-screen bg-void-public text-primary pt-32 pb-24 px-6">
      {/* Hero Area */}
      <header className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 uppercase">
          Compass Pulse
        </h1>
        <p className="text-xl md:text-2xl text-alchemical-gold font-light tracking-wide leading-relaxed">
          Navigational guidance for the collective nervous system.
        </p>

        <div className="w-24 h-px bg-platinum mx-auto mt-10" />
      </header>

      {/* Dynamic Forecast Content (Client-side localized) */}
      <PulseContent />

      {/* Email Capture */}
      <div className="max-w-4xl mx-auto">
        <SubscribeForm />

        {/* CTA Area */}
        <section className="mt-20 text-center border-t border-platinum/20 pt-16">
          <p className="text-lg text-muted font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            This is the macro weather. To locate your personal Karmic Knots and get your exact strategic timing, commission your Destiny X-Ray or subscribe to The Compass here.
          </p>
          <Link href="/destiny-xray">
            <button className="px-10 py-5 border border-alchemical-gold text-alchemical-gold font-bold tracking-widest uppercase hover:bg-alchemical-gold hover:text-void-deep transition-colors duration-500">
              COMMISSION DESTINY X-RAY
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
