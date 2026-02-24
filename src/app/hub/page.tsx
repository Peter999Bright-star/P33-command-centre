import Link from "next/link";
import React from "react";

export default function Hub() {
    return (
        <main className="min-h-screen p-8 lg:p-12 bg-void-deep text-primary">
            <header className="mb-16 border-b border-platinum-subtle pb-6 pt-20">
                <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
                    The Inner Sanctum
                </h1>
                <p className="text-muted text-lg font-light tracking-wide">
                    Protocol 33 // Secure Client Dashboard
                </p>
                <div className="w-16 h-1 bg-alchemical-gold mt-6" />
            </header>

            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Program for Awakening Card */}
                <Link href="/vault" className="block group">
                    <article className="h-full border border-platinum p-10 bg-void-public hover:border-alchemical-gold transition-colors duration-500 flex flex-col cursor-pointer shadow-xl">
                        <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-4">ACCESS GRANTED //</span>
                        <h2 className="text-3xl text-white font-medium mb-6 group-hover:text-alchemical-gold transition-colors duration-300">
                            Protocol 33:<br /> Program for Awakening
                        </h2>
                        <p className="text-muted font-light leading-relaxed flex-grow">
                            The core sequence. Moving the biology from chronic survival responses into total structural freedom and alignment.
                        </p>
                        <div className="h-1 w-12 bg-platinum-subtle group-hover:bg-alchemical-gold transition-colors duration-500 mt-8" />
                    </article>
                </Link>

                {/* Walking the Seven Portals Card */}
                <Link href="/vault" className="block group">
                    <article className="h-full border border-platinum p-10 bg-void-public hover:border-alchemical-gold transition-colors duration-500 flex flex-col cursor-pointer shadow-xl">
                        <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-4">ACCESS GRANTED //</span>
                        <h2 className="text-3xl text-white font-medium mb-6 group-hover:text-alchemical-gold transition-colors duration-300">
                            Walking the Seven Portals
                        </h2>
                        <p className="text-muted font-light leading-relaxed flex-grow">
                            Advanced somatic integration. Transmuting dense emotional states into elevated frequencies through precise energy psychology.
                        </p>
                        <div className="h-1 w-12 bg-platinum-subtle group-hover:bg-alchemical-gold transition-colors duration-500 mt-8" />
                    </article>
                </Link>
            </div>
        </main>
    );
}
