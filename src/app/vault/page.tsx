import Link from "next/link";
import React from "react";

export default function Vault() {
    const modules = [
        "Deep Rhythmic Abdominal breaths (3 minutes)",
        "9 Gamut Procedure",
        "Round 1: Foundation",
        "  Intention 1",
        "  Intention 2",
        "  Intention 3",
        "  Intention 4",
        "  Intention 5",
        "  Intention 6",
        "  Intention 7",
        "  Intention 8",
        "  Intention 9",
        "  Intention 10",
        "  Intention 11",
        "Protocol 33 breath (3 minutes)",
        "Round 2: Expansion",
        "  Intention 12",
        "  Intention 13",
        "  Intention 14",
        "  Intention 15",
        "  Intention 16",
        "  Intention 17",
        "  Intention 18",
        "  Intention 19",
        "  Intention 20",
        "  Intention 21",
        "  Intention 22",
        "Deep Rhythmic Abdominal breaths (3 minutes)",
        "Round 3: Actualisation",
        "  Intention 23",
        "  Intention 24",
        "  Intention 25",
        "  Intention 26",
        "  Intention 27",
        "  Intention 28",
        "  Intention 29",
        "  Intention 30",
        "  Intention 31",
        "  Intention 32",
        "  Intention 33",
        "Closing Declaration"
    ];

    return (
        <main className="min-h-screen p-8 lg:p-12 bg-void-deep text-primary pt-24">
            <header className="mb-10">
                <Link href="/hub" className="text-alchemical-gold text-sm tracking-widest font-mono hover:text-white transition-colors duration-300">
                    &larr; BACK TO INNER SANCTUM
                </Link>
                <h1 className="text-4xl font-bold tracking-tight text-white mb-2 mt-6">
                    Protocol 33: Program for Awakening
                </h1>
                <p className="text-muted text-lg font-light tracking-wide">
                    The Vault Portal // Core Somatic Sequence
                </p>
                <div className="w-16 h-1 bg-alchemical-gold mt-6" />
            </header>

            <div className="flex flex-col lg:flex-row gap-8 max-w-[1400px] mx-auto">
                {/* Main Content Area (70%) */}
                <div className="w-full lg:w-[70%]">
                    {/* Video Player Placeholder Area */}
                    <div className="w-full aspect-video bg-[#0A0410] border border-platinum rounded-sm flex items-center justify-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-void-public/50 flex flex-col items-center justify-center backdrop-blur-[2px]">
                            <svg className="w-16 h-16 text-platinum-subtle group-hover:text-alchemical-gold transition-colors duration-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-muted tracking-widest font-mono text-sm uppercase">Video Transmission Offline</span>
                        </div>
                    </div>

                    <div className="mt-8 border border-platinum-subtle bg-void-public p-8 rounded-sm">
                        <h2 className="text-2xl font-medium text-white mb-4">Deep Rhythmic Abdominal breaths</h2>
                        <p className="text-muted leading-relaxed font-light">
                            Begin the sequence by grounding the nervous system. Follow the 3-minute breath protocol to establish biological safety before initiating the tapping rounds. Ensure the exhale is longer than the inhale to manually pull the system out of sympathetic arousal.
                        </p>
                    </div>
                </div>

                {/* Module Navigation Sidebar (30%) */}
                <div className="w-full lg:w-[30%]">
                    <div className="bg-void-public border border-platinum rounded-sm h-[70vh] flex flex-col items-stretch overflow-hidden">
                        <div className="p-6 border-b border-platinum">
                            <h3 className="text-alchemical-gold font-medium tracking-wide">
                                Sequence Architecture
                            </h3>
                            <p className="text-xs text-muted font-mono tracking-widest mt-1">42 STRUCTURAL STAGES</p>
                        </div>

                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 custom-scrollbar">
                            {modules.map((mod, index) => {
                                const isRound = mod.includes("Round");
                                const isIntention = mod.includes("Intention");
                                const isBreath = mod.includes("breath");

                                return (
                                    <div
                                        key={index}
                                        className={`
                                            w-full text-left px-4 py-3 rounded-sm text-sm transition-all duration-300 cursor-pointer border border-transparent
                                            ${index === 0 ? 'bg-void-deep border-alchemical-gold/30 text-white' : 'hover:bg-void-deep/50 hover:border-platinum-subtle text-muted'}
                                            ${isRound ? 'mt-4 font-medium text-platinum' : ''}
                                            ${isIntention ? 'pl-8 text-xs font-mono' : ''}
                                            ${isBreath && index !== 0 ? 'mt-4 mb-2 italic' : ''}
                                        `}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{mod.trim()}</span>
                                            {index === 0 && <span className="w-2 h-2 rounded-full bg-alchemical-gold animate-pulse" />}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
