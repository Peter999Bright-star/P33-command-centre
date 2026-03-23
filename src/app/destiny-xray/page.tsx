import React from 'react';
import Link from 'next/link';

export default function DestinyXRay() {
  return (
    <main className="min-h-screen bg-[#1C1A27] text-[#F5F4F6] font-sans selection:bg-[#D4B993] selection:text-[#1C1A27]">
      
      {/* 
        ======================================================== 
        SECTION 1: THE VANGUARD (Top Fold) 
        ======================================================== 
      */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#D4B993] mb-6">
          The Destiny X-Ray.
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-[#F5F4F6]/80 mb-10 max-w-3xl leading-relaxed tracking-wide">
          Stop treating the smoke. Map your Somatic Hardware and locate the Karmic Knot.
        </h2>
        
        <div className="w-16 h-px bg-[#F5F4F6]/30 mb-10" />
        
        <p className="max-w-4xl text-lg font-light leading-loose text-[#F5F4F6]/70">
          Chasing symptoms is an endless loop. The Astro-Synthesis model bypasses the noise by pulling the exact structural blueprint of your incarnation. We locate where the flow is crimped at the source code level, mapping your bio-energetic hardware to reveal not just what is stuck, but exactly how it was designed to operate.
        </p>
      </section>

      {/* 
        ======================================================== 
        SECTION 2: THE CORE DIAGNOSTIC (The Products) 
        ======================================================== 
      */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* TIER 1: The Blueprint */}
          <div className="flex flex-col h-full border border-[#F5F4F6]/20 bg-[#1C1A27]/50 rounded-lg p-10 hover:border-[#F5F4F6]/40 transition-colors duration-500">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#F5F4F6]/50 mb-4">Tier 1 // Core Architecture</h3>
            <h2 className="text-3xl font-medium text-[#F5F4F6] mb-6">The True Calling Alignment Blueprint</h2>
            <p className="text-[#F5F4F6]/70 leading-relaxed font-light flex-grow mb-12">
              The foundational X-Ray of the soul's design. A single, comprehensive report detangling the energetic architecture of your purpose, identifying precisely where the karmic static is interfering with your sovereign transmission.
            </p>
            <Link 
              href="/blueprint"
              className="mt-auto block text-center w-full py-4 border border-[#F5F4F6]/30 text-[#F5F4F6] hover:bg-[#F5F4F6] hover:text-[#1C1A27] transition-all duration-300 tracking-widest uppercase text-sm font-medium"
            >
              Initiate Scan
            </Link>
          </div>

          {/* TIER 2: The Trinity Package (Highlighted) */}
          <div className="flex flex-col h-full border border-[#D4B993] bg-[#D4B993]/5 rounded-lg p-10 relative shadow-[0_0_40px_-15px_rgba(212,185,147,0.3)]">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#D4B993] text-[#1C1A27] text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
              The Complete Protocol
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4B993]/70 mb-4">Tier 2 // Holistic Integration</h3>
            <h2 className="text-3xl font-medium text-[#D4B993] mb-6">The Trinity Package</h2>
            <ul className="text-[#F5F4F6]/80 leading-relaxed font-light flex-grow mb-12 space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-[#D4B993]">01 /</span>
                <span><strong>The Map:</strong> The foundational Architectural Blueprint.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#D4B993]">02 /</span>
                <span><strong>The Tool:</strong> The AI Compass for continuous daily recalibration.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#D4B993]">03 /</span>
                <span><strong>The Soul:</strong> The New Identity Storybook, writing the future self into the present.</span>
              </li>
            </ul>
            <Link 
              href="/blueprint"
              className="mt-auto block text-center w-full py-4 bg-[#D4B993] text-[#1C1A27] hover:bg-[#F5F4F6] transition-all duration-300 tracking-widest uppercase text-sm font-bold"
            >
              Secure The Trinity
            </Link>
          </div>

        </div>
      </section>

      {/* 
        ======================================================== 
        SECTION 3: ADVANCED PROTOCOLS (Lower Fold) 
        ======================================================== 
      */}
      <section className="bg-[#F5F4F6] text-[#1C1A27] py-32 px-6 md:px-12 mt-16 border-t border-[#D4B993]/50">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1C1A27]/20 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Advanced Protocols & Fleet Command</h2>
              <p className="text-[#1C1A27]/60 font-medium tracking-wide">For those navigating the deep architecture of the Citadel.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Protocol 1 */}
            <div className="group border-l-2 border-[#1C1A27]/10 pl-6 hover:border-[#D4B993] transition-colors duration-500">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D4B993] mb-4">Ascension Level I</div>
              <h3 className="text-2xl font-bold mb-4">1:1 Coaching</h3>
              <p className="text-[#1C1A27]/70 leading-relaxed font-light mb-8">
                Direct integration of Astrology and Structural Strategy. A high-bandwidth energetic transfer to recalibrate your operational capacity in real-time.
              </p>
              <div className="text-xs tracking-[0.2em] font-medium uppercase text-[#1C1A27]/30">Module Locked/Future Deployment</div>
            </div>

            {/* Protocol 2 */}
            <div className="group border-l-2 border-[#1C1A27]/10 pl-6 hover:border-[#D4B993] transition-colors duration-500">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D4B993] mb-4">Ascension Level II</div>
              <h3 className="text-2xl font-bold mb-4">The Compass</h3>
              <p className="text-[#1C1A27]/70 leading-relaxed font-light mb-8">
                A weekly Alchemical Report delivering hyper-specific navigational coordinates. Tune out the static and align with your ongoing energetic topography.
              </p>
              <div className="text-xs tracking-[0.2em] font-medium uppercase text-[#1C1A27]/30">Module Locked/Future Deployment</div>
            </div>

            {/* Protocol 3 */}
            <div className="group border-l-2 border-[#1C1A27]/10 pl-6 hover:border-[#D4B993] transition-colors duration-500">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D4B993] mb-4">Ascension Level III</div>
              <h3 className="text-2xl font-bold mb-4">The Constellation Protocol</h3>
              <p className="text-[#1C1A27]/70 leading-relaxed font-light mb-8">
                High-Ticket B2B systemic architecture. Aligning corporate and enterprise entities with the Living Field for elite organizational coherence.
              </p>
              <div className="text-xs tracking-[0.2em] font-medium uppercase text-[#1C1A27]/30">Module Locked/Future Deployment</div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
