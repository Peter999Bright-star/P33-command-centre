import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* The Hero Section */}
      <section className="relative min-h-[90vh] bg-void-deep flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 opacity-0 animate-[var(--animate-slow-fade)]">
          Drop Anchor in the<br className="md:hidden" />
          <span className="text-alchemical-gold"> Windless Place.</span>
        </h1>
        <p className="text-muted text-xl md:text-2xl max-w-3xl font-light tracking-wide leading-relaxed opacity-0 animate-[var(--animate-slow-fade)]">
          I know the thrumming hum of anxiety that comes from carrying both the spiritual and material worlds. But that exhaustion isn't you; it is just the static of an old program. Clear the channel and claim Sovereign Ownership of your Design.
        </p>
        <Link href="#deployment-tracks" className="mt-12 opacity-0 animate-[var(--animate-slow-fade-delayed)]">
          <button className="px-10 py-5 bg-alchemical-gold text-void-deep font-bold tracking-widest uppercase hover:bg-white transition-colors duration-500 rounded-sm">
            OPEN THE CHANNEL
          </button>
        </Link>
      </section>

      {/* The Paralysis of Integration */}
      <section className="w-full bg-void-public py-32 px-6">
        <div className="max-w-4xl mx-auto border-l border-platinum pl-8 md:pl-16">
          <h2 className="text-3xl md:text-4xl text-alchemical-gold font-medium tracking-wide mb-8">
            The Paralysis of Integration.
          </h2>
          <div className="text-muted text-lg font-light leading-loose space-y-6">
            <p>
              I know that tightness in the chest, the profound exhaustion of being Lost at Sea while holding up the sky through sheer willpower. You possess deep insight, yet your biological nervous system secretly prepares for war.
            </p>
            <p>
              But you are not broken. You are simply caught in a Karmic Knot, an energetic imprint anchoring you in old defensive postures. It is the Echo of a jammed signal.
            </p>
            <p className="text-primary font-medium italic">
              We acknowledge the mud, then build the bridge over it. Here are the coordinates to clear the channel.
            </p>
          </div>
        </div>
      </section>

      {/* The Crucible */}
      <section className="w-full bg-void-deep py-32 px-6 border-y border-platinum-subtle">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white font-medium tracking-wide">
              The Crucible: Protocol 33
            </h2>
            <div className="w-16 h-1 bg-alchemical-gold mx-auto mt-6 mb-6" />
            <p className="text-muted text-lg max-w-3xl mx-auto font-light leading-relaxed">
              A somatic technology engineered to extract the bottom-up trauma. We navigate the physical depths to dissolve the Karmic Static and reimprint your biological alignment.
            </p>
            <Link href="/hub" className="mt-8">
              <button className="px-8 py-3 border border-platinum text-platinum font-bold tracking-widest uppercase hover:bg-white hover:text-void-deep transition-colors duration-500 rounded-sm">
                ACCESS THE BLUEPRINT
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <article className="border border-platinum p-10 bg-void-public hover:border-alchemical-gold transition-colors duration-500 flex flex-col group cursor-pointer opacity-0 animate-[var(--animate-slow-fade-delayed)]">
              <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-4">01 //</span>
              <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-alchemical-gold transition-colors duration-300">
                Calcination
              </h3>
              <p className="text-muted font-light leading-relaxed flex-grow">
                Clearing the static. We eliminate the physical trauma imprint, bypassing intellectual defense mechanisms to communicate directly with the amygdala, signaling profound safety.
              </p>
              <div className="h-1 w-12 bg-platinum-subtle group-hover:bg-alchemical-gold transition-colors duration-500 mt-8" />
            </article>

            {/* Card 2 */}
            <article className="border border-platinum p-10 bg-void-public hover:border-alchemical-gold transition-colors duration-500 flex flex-col group cursor-pointer opacity-0 animate-[var(--animate-slow-fade-delayed)]">
              <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-4">02 //</span>
              <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-alchemical-gold transition-colors duration-300">
                Navigational Coherence
              </h3>
              <p className="text-muted font-light leading-relaxed flex-grow">
                Rebuilding the compass. Transitioning the biology from chronic arousal or shutdown into ventral vagal social engagement. The body learns it is finally safe to rest and orient truthfully.
              </p>
              <div className="h-1 w-12 bg-platinum-subtle group-hover:bg-alchemical-gold transition-colors duration-500 mt-8" />
            </article>

            {/* Card 3 */}
            <article className="border border-platinum p-10 bg-void-public hover:border-alchemical-gold transition-colors duration-500 flex flex-col group cursor-pointer opacity-0 animate-[var(--animate-slow-fade-delayed)]">
              <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-4">03 //</span>
              <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-alchemical-gold transition-colors duration-300">
                The Fleet Commander
              </h3>
              <p className="text-muted font-light leading-relaxed flex-grow">
                Taking the helm. With the vessel stabilized, we align the internal frequency. You transition from surviving your history to authoring your reality from a state of total structural freedom.
              </p>
              <div className="h-1 w-12 bg-platinum-subtle group-hover:bg-alchemical-gold transition-colors duration-500 mt-8" />
            </article>
          </div>
        </div>
      </section>

      {/* The Service Architecture */}
      <section id="deployment-tracks" className="w-full bg-void-public py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              The Deployment Tracks: Choose Your Channel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
            {/* Left Card: Tactical Relief */}
            <article className="border border-platinum p-12 bg-void-public flex flex-col opacity-0 animate-[var(--animate-slow-fade)]">
              <h3 className="text-2xl text-white font-medium mb-2 uppercase tracking-wide">
                Tactical Relief
              </h3>
              <div className="w-12 h-1 bg-platinum mb-8" />

              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-alchemical-gold font-mono text-sm tracking-widest mb-1">SERVICE</h4>
                  <p className="text-white text-lg">Clinical EFT</p>
                </div>
                <div>
                  <h4 className="text-alchemical-gold font-mono text-sm tracking-widest mb-1">MECHANISM</h4>
                  <p className="text-muted font-light">Bottom-Up Trauma Resolution</p>
                </div>
                <div>
                  <h4 className="text-alchemical-gold font-mono text-sm tracking-widest mb-1">ANALOGY</h4>
                  <p className="text-muted font-light leading-relaxed">
                    A vital intervention to extinguish the localized fire and release the somatic block.
                  </p>
                </div>
              </div>

              <Link href="/contact" className="w-full mt-12 block">
                <button className="px-8 py-4 border border-platinum text-white font-bold tracking-widest uppercase hover:bg-white hover:text-void-deep transition-colors duration-300 w-full">
                  INITIATE TACTICAL RELIEF
                </button>
              </Link>
            </article>

            {/* Right Card: The OS Upgrade */}
            <article className="border-2 border-[#ddb940] p-12 bg-void-deep shadow-2xl flex flex-col opacity-0 animate-[var(--animate-slow-fade-delayed)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#ddb940] text-void-deep text-xs font-bold px-3 py-1 uppercase tracking-widest">
                Premium
              </div>
              <h3 className="text-2xl text-alchemical-gold font-medium mb-2 uppercase tracking-wide">
                The OS Upgrade
              </h3>
              <div className="w-12 h-1 bg-[#ddb940] mb-8" />

              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-platinum font-mono text-sm tracking-widest mb-1">SERVICE</h4>
                  <p className="text-white text-lg">Program for Awakening (P33-AW)</p>
                </div>
                <div>
                  <h4 className="text-platinum font-mono text-sm tracking-widest mb-1">MECHANISM</h4>
                  <p className="text-muted font-light">Top-Down Infusion</p>
                </div>
                <div>
                  <h4 className="text-platinum font-mono text-sm tracking-widest mb-1">ANALOGY</h4>
                  <p className="text-muted font-light leading-relaxed">
                    The bridge from healing to awakening. We clear the Grey Fog and install the structural code of Embodied Sovereignty.
                  </p>
                </div>
              </div>

              <Link href="/contact" className="w-full mt-12 block">
                <button className="px-8 py-4 bg-[#ddb940] text-void-deep font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 w-full">
                  ENTER THE HIGHWAY
                </button>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* The Final Threshold */}
      <section className="w-full bg-void-deep py-32 px-6 border-t border-platinum-subtle flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tight mb-10 opacity-0 animate-[var(--animate-slow-fade)]">
          Awaiting Your Command.
        </h2>
        <Link href="/contact" className="opacity-0 animate-[var(--animate-slow-fade-delayed)]">
          <button className="px-10 py-5 bg-white text-void-deep font-bold tracking-widest uppercase hover:bg-alchemical-gold transition-colors duration-500 rounded-sm">
            INITIATE TRANSMISSION
          </button>
        </Link>
      </section>
    </div>
  );
}
