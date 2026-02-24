import React from "react";

const columns = [
    { id: "p1", title: "Phase 1: Foundation", items: [] },
    { id: "p2", title: "Phase 2: Layout", items: [] },
    {
        id: "p3",
        title: "Phase 3: Manifestation",
        items: [
            { id: "t1", title: "Awakening Page" },
            { id: "t2", title: "Hub Page" },
            { id: "t3", title: "Backend Dashboard" },
            { id: "t4", title: "Vault Portals" },
        ],
    },
    { id: "p4", title: "Phase 4: Nervous System Polish", items: [] },
];

export default function CommandCenter() {
    return (
        <main className="min-h-screen p-8 lg:p-12">
            <header className="mb-12 border-b border-platinum-subtle pb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
                        Command Center
                    </h1>
                    <p className="text-muted text-lg font-light tracking-wide">
                        Protocol 33 // Project Tracker
                    </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-alchemical-gold flex items-center justify-center">
                    <span className="text-alchemical-gold text-xs font-bold tracking-widest">
                        P33
                    </span>
                </div>
            </header>

            {/* Kanban Board Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {columns.map((col) => (
                    <div
                        key={col.id}
                        className="border border-platinum-subtle p-6 rounded-sm bg-void/50 backdrop-blur-sm shadow-xl flex flex-col h-[70vh]"
                    >
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-platinum-subtle/50">
                            <h2 className="text-lg font-medium text-white tracking-wide">
                                {col.title}
                            </h2>
                            <span className="text-muted text-sm font-mono bg-white/5 px-2 py-0.5 rounded-sm">
                                {col.items.length}
                            </span>
                        </div>

                        <div className="flex flex-col gap-4 flex-grow overflow-y-auto pr-2">
                            {col.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-5 border border-platinum hover:border-alchemical-gold transition-colors duration-300 cursor-pointer bg-void group"
                                >
                                    <h3 className="text-primary font-medium group-hover:text-alchemical-gold transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <div className="mt-4 flex justify-end">
                                        <div className="h-1.5 w-8 bg-platinum-subtle group-hover:bg-alchemical-gold transition-colors duration-300" />
                                    </div>
                                </div>
                            ))}
                            {col.items.length === 0 && (
                                <div className="flex-grow flex items-center justify-center border border-dashed border-platinum-subtle/30 text-muted/50 text-sm italic tracking-widest uppercase py-8">
                                    Empty Void
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
