import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-void-public border-t border-platinum py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted font-light tracking-wide">
                <p>&copy; 2026 Protocol 33 Clinic. Radical Somatic Sovereignty.</p>
                <div className="mt-4 md:mt-0 flex gap-6">
                    <span className="hover:text-alchemical-gold transition-colors cursor-pointer">Privacy</span>
                    <span className="hover:text-alchemical-gold transition-colors cursor-pointer">Terms</span>
                </div>
            </div>
        </footer>
    );
}
