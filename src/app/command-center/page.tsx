import React from "react";

const columns = [
    {
        id: "p1-4",
        title: "Completed Architecture",
        phase: "Phases 1-4",
        status: "Secure",
        items: [
            { id: "t1", title: "Foundation", status: "Secure" },
            { id: "t2", title: "The Scaffold", status: "Secure" },
            { id: "t3", title: "The Front Door", status: "Secure" },
            { id: "t4", title: "Inner Sanctum", status: "Secure" },
        ],
    },
    {
        id: "p5",
        title: "Active Build",
        phase: "Phase 5",
        status: "In Progress",
        items: [
            { id: "t5", title: "The Threshold", status: "Contact & Booking Portal" },
        ],
    },
    {
        id: "p6",
        title: "Data Synthesis",
        phase: "Phase 6",
        status: "Pending",
        items: [
            { id: "t6", title: "The Clinical Proof", status: "P33-AW Page Synthesis" },
        ],
    },
    {
        id: "p7",
        title: "The Triad",
        phase: "Phase 7",
        status: "Pending",
        items: [
            { id: "t7", title: "The Watch", status: "Integration of Living Intelligence" },
            { id: "t8", title: "Ale'Meron", status: "Wisdom Integration" },
            { id: "t9", title: "Physics of Love", status: "Academy Genesis" },
        ],
    },
];

export default function CommandCenter() {
    return (
        <main className="min-h-screen p-10 lg:p-20 bg-void-deep text-primary animate-[var(--animate-slow-fade)]">
            <header className="mb-20 pb-10 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-platinum-subtle/50 relative">
                <div className="max-w-3xl">
                    <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-6 block uppercase">
                        Protocol 33 // Project Architecture
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                        Command Center
                    </h1>
                    <p className="text-muted text-xl lg:text-2xl font-light tracking-wide leading-relaxed">
                        The Master Plan for the Sovereign Sanctuary.
                    </p>
                </div>

                <div className="mt-8 md:mt-0 flex items-center gap-6">
                    <div className="text-right hidden md:block">
                        <span className="text-xs text-muted font-mono tracking-widest block mb-1">SYSTEM STATUS</span>
                        <span className="text-sm text-white tracking-widest uppercase">Resonance Active</span>
                    </div>
                    <div className="w-16 h-16 rounded-full border border-alchemical-gold flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-alchemical-gold/10 group-hover:bg-alchemical-gold/20 transition-colors duration-700" />
                        <span className="text-alchemical-gold text-sm font-bold tracking-widest relative z-10">
                            P33
                        </span>
                    </div>
                </div>
            </header>

            {/* Architectural Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                {columns.map((col) => {
                    const isActive = col.status === "In Progress";
                    const isSecure = col.status === "Secure";

                    return (
                        <div
                            key={col.id}
                            className={`p-8 rounded-sm bg-void-deep flex flex-col h-[75vh] transition-all duration-700 ${isActive ? 'border border-alchemical-gold shadow-[0_0_30px_rgba(221,185,64,0.05)]' : 'border border-platinum-subtle'
                                }`}
                        >
                            <div className="flex flex-col mb-10 pb-6 border-b border-platinum-subtle/30">
                                <span className={`text-xs font-mono tracking-widest mb-3 ${isActive ? 'text-alchemical-gold' : 'text-muted'}`}>
                                    {col.phase} // {col.status}
                                </span>
                                <h2 className="text-2xl font-medium text-white tracking-wide">
                                    {col.title}
                                </h2>
                            </div>

                            <div className="flex flex-col gap-6 flex-grow overflow-y-auto pr-4 custom-scrollbar">
                                {col.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="p-8 border border-platinum hover:border-alchemical-gold transition-colors duration-700 cursor-default bg-void-public/50 group"
                                    >
                                        <h3 className={`text-lg font-medium tracking-wide transition-colors duration-700 ${isSecure ? 'text-white' : 'text-primary group-hover:text-alchemical-gold'
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-muted text-sm font-light mt-4 tracking-wide">
                                            {item.status}
                                        </p>

                                        <div className="mt-8 flex justify-end">
                                            <div className={`h-[1px] w-12 transition-all duration-1000 ${isSecure ? 'bg-platinum' : 'bg-platinum-subtle group-hover:bg-alchemical-gold group-hover:w-full'
                                                }`} />
                                        </div>
                                    </div>
                                ))}
                                {col.items.length === 0 && (
                                    <div className="flex-grow flex items-center justify-center text-muted/30 text-sm italic tracking-widest uppercase py-12">
                                        Void Space
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
