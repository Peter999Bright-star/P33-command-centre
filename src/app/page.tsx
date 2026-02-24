import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Step 2: The Hero Section (The Invitation) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          Enter the <br className="md:hidden" />
          <span className="text-alchemical-gold">Windless Place.</span>
        </h1>
        <p className="text-muted text-xl md:text-2xl max-w-3xl font-light tracking-wide leading-relaxed">
          Radical Somatic Sovereignty and Clinical Trauma Resolution for the Advanced Seeker.
        </p>
        <button className="mt-12 px-10 py-5 bg-alchemical-gold text-void-deep font-bold tracking-widest uppercase hover:bg-white transition-colors duration-500 rounded-sm">
          Begin the Work
        </button>
      </section>

      {/* Step 3: The Resonance Section (The Reality Check) */}
      <section className="w-full bg-void-public py-32 px-6">
        <div className="max-w-4xl mx-auto border-l border-platinum pl-8 md:pl-16">
          <h2 className="text-3xl md:text-4xl text-alchemical-gold font-medium tracking-wide mb-8">
            The Paralysis of Integration.
          </h2>
          <div className="text-muted text-lg font-light leading-loose space-y-6">
            <p>
              You have studied the maps. You understand the architecture of the mind. You possess deep spiritual and intellectual insight into your own behavioral loops. Yet, the body remains anchored in old defensive postures.
            </p>
            <p>
              This is the gap between knowing the path and walking it. It is the profound exhaustion of holding up the sky through sheer willpower and cognitive dominance, while the biological nervous system secretly prepares for war.
            </p>
            <p className="text-primary font-medium italic">
              Insight without somatic resolution is merely highly educated suffering.
            </p>
          </div>
        </div>
      </section>

      {/* Step 4: The Clinical Architecture (The Solution) */}
      <section className="w-full bg-void-deep py-32 px-6 border-y border-platinum-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white font-medium tracking-wide">
              The Sovereign Architecture
            </h2>
            <div className="w-16 h-1 bg-alchemical-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <article className="border border-platinum p-10 bg-void-public hover:border-alchemical-gold transition-colors duration-500 flex flex-col group cursor-pointer">
              <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-4">01 //</span>
              <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-alchemical-gold transition-colors duration-300">
                Clinical EFT
              </h3>
              <p className="text-muted font-light leading-relaxed flex-grow">
                Precise, targeted intervention to erase the physical trauma imprint. We bypass the intellectual defense mechanisms to communicate directly with the amygdala, signaling safety and permanently collapsing maladaptive neural pathways.
              </p>
              <div className="h-1 w-12 bg-platinum-subtle group-hover:bg-alchemical-gold transition-colors duration-500 mt-8" />
            </article>

            {/* Card 2 */}
            <article className="border border-platinum p-10 bg-void-public hover:border-alchemical-gold transition-colors duration-500 flex flex-col group cursor-pointer">
              <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-4">02 //</span>
              <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-alchemical-gold transition-colors duration-300">
                Nervous System<br /> Regulation
              </h3>
              <p className="text-muted font-light leading-relaxed flex-grow">
                Rebuilding the biological foundation of safety. Moving the biology from chronic sympathetic arousal (fight/flight) or dorsal vagal shutdown (freeze), into ventral vagal social engagement. The body learns it is finally safe to rest.
              </p>
              <div className="h-1 w-12 bg-platinum-subtle group-hover:bg-alchemical-gold transition-colors duration-500 mt-8" />
            </article>

            {/* Card 3 */}
            <article className="border border-platinum p-10 bg-void-public hover:border-alchemical-gold transition-colors duration-500 flex flex-col group cursor-pointer">
              <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-4">03 //</span>
              <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-alchemical-gold transition-colors duration-300">
                Sovereign Alchemy
              </h3>
              <p className="text-muted font-light leading-relaxed flex-grow">
                The final integration to the Living Stone. Once the static is cleared and the vessel is stabilized, we align the internal frequency. This is the transition from surviving your history to authoring your reality from a state of total structural freedom.
              </p>
              <div className="h-1 w-12 bg-platinum-subtle group-hover:bg-alchemical-gold transition-colors duration-500 mt-8" />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
