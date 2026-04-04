import React from "react";
import { supabase } from "../../lib/supabase";
import SubscribeForm from "./SubscribeForm";
import Link from "next/link";

export const dynamic = 'force-dynamic'; // Enforce real-time server rendering

function formatPulseDate(dateStr: string) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  
  const dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateObj);
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObj);
  const yearStr = dateObj.getFullYear();
  const day = parseInt(parts[2]);
  
  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };
  
  return `${dayName} ${getOrdinal(day)} March, ${yearStr}`.replace('March', monthName); 
}

export default async function PulsePage() {
  // Fetch today's broadcast
  const today = new Date().toISOString().split("T")[0];
  
  const { data: broadcast, error } = await supabase
    .from("pulse_broadcasts")
    .select("*")
    .eq("date", today)
    .single();

  if (error) {
    console.error("Supabase /pulse fetch error:", error);
  }

  const cities = ["Auckland", "Sydney", "Singapore", "Mumbai", "Dubai", "London", "New York", "Los Angeles"];

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

        {broadcast && broadcast.date && (
          <div className="mt-10 flex flex-col items-center justify-center space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#9ca3af] border-b border-alchemical-gold/30 pb-1">
              Forecast
            </span>
            <span className="text-lg font-light text-white/90 tracking-wide">
              {formatPulseDate(broadcast.date)}
            </span>
          </div>
        )}

        <div className="w-24 h-px bg-platinum mx-auto mt-10" />
      </header>

      {/* Conditional Rendering: Data vs Fallback */}
      {!broadcast || error ? (
        <section className="max-w-3xl mx-auto text-center py-20 mb-20 border border-platinum/30 bg-void-deep">
          <h2 className="text-2xl text-muted font-light tracking-widest uppercase mb-4">
            Signal Interrupted
          </h2>
          <p className="text-xl text-white font-mono tracking-wide px-8">
            The Oracle is recalibrating. Next broadcast imminent.
          </p>
          {error && (
            <p className="border border-red-500/50 bg-red-500/10 text-red-400 p-4 mt-8 text-sm font-mono tracking-tight mx-8 text-left break-all">
              SYSTEM ERROR: {error.message}
            </p>
          )}
        </section>
      ) : (
        <div className="max-w-4xl mx-auto mb-16">
          {/* Core Dispatch Blocks */}
          <section className="space-y-12 mb-16">
            <div className="border-l-2 border-platinum pl-6 py-2">
              <h3 className="text-sm font-mono tracking-widest text-muted mb-3 uppercase">Weather Summary</h3>
              <p className="text-lg md:text-xl font-light text-white leading-relaxed">
                {broadcast.weather_summary}
              </p>
            </div>
            
            <div className="border-l-2 border-alchemical-gold pl-6 py-2">
              <h3 className="text-sm font-mono tracking-widest text-[#ddb940] mb-3 uppercase">Somatic Impact</h3>
              <p className="text-lg md:text-xl font-light text-white leading-relaxed">
                {broadcast.somatic_impact}
              </p>
            </div>

            <div className="border-l-2 border-white pl-6 py-2">
              <h3 className="text-sm font-mono tracking-widest text-white mb-3 uppercase">Sovereign Command</h3>
              <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                {broadcast.sovereign_command}
              </p>
            </div>
          </section>

          {/* Temporal Weather / Global Fleet */}
          {broadcast.global_shadow_windows && (
            <section className="mt-20 border border-platinum/50 bg-void-deep p-8">
              <h3 className="text-2xl text-alchemical-gold font-medium text-center mb-10 uppercase tracking-widest">
                Temporal Weather
              </h3>

              <div className="max-w-4xl mx-auto mb-12 text-left border-l-2 border-platinum/50 pl-6 py-2">
                <h4 className="text-sm font-mono tracking-widest text-[#9ca3af] mb-4 uppercase">The Shadow Windows</h4>
                <p className="text-lg md:text-xl font-light text-[#f3f4f6]/80 leading-relaxed mb-6">
                  The universe does not move in a straight line; it breathes in cycles of momentum and static. The times listed below are daily Vedic &quot;Shadow Windows&quot;&mdash;predictable, mathematical pockets of cosmic friction. By mapping these windows in your local timezone, you stop fighting the current and reclaim your operational energy.
                </p>
                <ul className="space-y-4 text-base md:text-lg font-light text-[#f3f4f6]/80 bg-void-public/50 p-6 border border-platinum/10">
                  <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="text-alchemical-gold font-bold whitespace-nowrap min-w-[240px]">RAHU (The Static Window):</span>
                    <span className="leading-relaxed">High energetic volatility and illusion. Do not sign contracts, launch products, or engage in high-stakes communication. Do focus on internal audits, routine administration, and structural review.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="text-red-400 font-bold whitespace-nowrap min-w-[240px]">YAMA (The Inertia Window):</span>
                    <span className="leading-relaxed">Heavy, dense gravitational pull. Do not try to force momentum or initiate new creative projects. Do focus on deep research, physical grounding, or scheduled rest.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cities.map((city) => {
                  const window = broadcast.global_shadow_windows[city];
                  return (
                    <div key={city} className="flex flex-col border border-platinum/20 p-4 bg-void-public text-center">
                      <span className="text-xs uppercase font-mono tracking-widest text-[#9ca3af] mb-4 border-b border-platinum/20 pb-2">{city}</span>
                      {window ? (
                        <div className="flex justify-between items-center text-xs">
                          <div className="flex flex-col">
                            <span className="text-alchemical-gold font-bold mb-1">RAHU</span>
                            <span className="text-[#f3f4f6]">{window.Rahu}</span>
                          </div>
                          <div className="w-px h-8 bg-platinum/30 mx-2"></div>
                          <div className="flex flex-col">
                            <span className="text-red-400 font-bold mb-1">YAMA</span>
                            <span className="text-[#f3f4f6]">{window.Yama}</span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-sm font-medium text-red-400 mt-2">Data Syncing...</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}

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
