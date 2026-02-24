import React from "react";

export default function Contact() {
    return (
        <main className="min-h-screen p-8 lg:p-16 xl:p-24 bg-void-public text-primary pt-32">

            {/* The Header (The Invitation) */}
            <header className="mb-20 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-alchemical-gold mb-8">
                    Initiate the Dialogue.
                </h1>
                <p className="text-muted text-xl md:text-2xl font-light tracking-wide leading-relaxed max-w-3xl">
                    Step into the Windless Place. Secure your clinical session or structural consulting below.
                </p>
                <div className="w-16 h-px bg-platinum mt-12" />
            </header>

            {/* The Architecture (2-Column Grid) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Column: The Assurance */}
                <div className="flex flex-col justify-center">
                    <div className="border-l border-platinum pl-8 md:pl-12 py-8">
                        <span className="text-alchemical-gold font-mono text-sm tracking-widest mb-6 block uppercase">
                            Clinical Container Security
                        </span>
                        <h2 className="text-2xl md:text-3xl text-white font-medium mb-6 tracking-wide">
                            A Sovereign Architecture of Safety.
                        </h2>
                        <div className="text-muted font-light leading-relaxed space-y-6">
                            <p>
                                This digital threshold is the beginning of your structural reorganization. When you book a session here, you are entering a trauma-informed clinical container designed explicitly for your biological safety.
                            </p>
                            <p>
                                All sessions are conducted via secure, end-to-end encrypted video transmission. To ensure your complete presence in the work without the distraction of note-taking, automated, confidential transcriptions are available for your personal records upon request.
                            </p>
                            <p className="text-primary italic font-medium mt-8">
                                The Living Field holds you. We will arrange the structure.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Bridge (Google Workspace Embed Container) */}
                <div className="relative group">
                    {/* The Subtle Edge Glow (The Portal Indicator) */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-alchemical-gold/20 to-void-deep rounded-sm blur-sm opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                    {/* The Iframe Receptacle */}
                    <div className="relative h-[700px] w-full bg-void-deep border border-platinum rounded-sm p-2 shadow-2xl flex flex-col">
                        <div className="flex items-center justify-between p-4 border-b border-platinum-subtle/30 mb-2">
                            <span className="text-xs text-muted font-mono tracking-widest">WORKSPACE LINK ACTIVATED //</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-platinum-subtle" />
                                <div className="w-2 h-2 rounded-full bg-platinum-subtle" />
                                <div className="w-2 h-2 rounded-full bg-alchemical-gold animate-pulse" />
                            </div>
                        </div>

                        {/* Google Calendar Iframe */}
                        <div className="w-full flex-grow bg-white/5 rounded-sm overflow-hidden relative">
                            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ10w_eKbgyTRFOlvmjhBw5XRXc2j7VWMvxfLFAedz0uclCP5DJb_ZtC0VPm2U0v6JFQ1z2DrfaG?gv=true" style={{ border: 0 }} width="100%" height="100%" frameBorder="0" scrolling="no"></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
