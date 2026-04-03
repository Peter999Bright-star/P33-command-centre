import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Protocol 33",
  description: "Privacy Policy for Protocol 33 EFT",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen p-8 lg:p-16 xl:p-24 bg-void-public text-primary pt-12 lg:pt-24">
            <article className="max-w-4xl mx-auto">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-alchemical-gold mb-6">
                        Privacy Policy
                    </h1>
                    <div className="flex flex-col gap-2">
                        <span className="text-xl text-white font-medium tracking-wide">Protocol 33 EFT</span>
                        <span className="text-sm text-muted font-mono uppercase tracking-widest mt-2">Last updated: April 3, 2026</span>
                    </div>
                    <div className="w-24 h-px bg-platinum mt-12" />
                </header>

                <div className="space-y-12 text-muted font-light leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl md:text-3xl text-white font-medium mb-6 tracking-wide">Data We Collect</h2>
                        <p>
                            Protocol 33 EFT collects email addresses and optional location information submitted voluntarily through signup forms on this website. We do not collect sensitive personal data without explicit consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl text-white font-medium mb-6 tracking-wide">How We Use Your Data</h2>
                        <p>
                            Your email address is used solely to deliver The Compass Pulse daily forecast and related Protocol 33 EFT communications. Your data is never sold or shared with third parties for marketing purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl text-white font-medium mb-6 tracking-wide">Third-Party Services</h2>
                        <p>
                            This website uses Meta (Facebook/Instagram) APIs for content publishing. We use Resend for email delivery. These services have their own privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl text-white font-medium mb-6 tracking-wide">Your Rights</h2>
                        <p>
                            You may unsubscribe from communications at any time using the unsubscribe link in any email, or by contacting us directly.
                        </p>
                    </section>

                    <section className="pt-8">
                        <div className="w-16 h-px bg-platinum mb-8" />
                        <h2 className="text-2xl md:text-3xl text-white font-medium mb-6 tracking-wide">Contact</h2>
                        <p>
                            For privacy enquiries:{' '}
                            <a href="mailto:peter@p33eft.com" className="text-alchemical-gold hover:brightness-125 transition-all">
                                peter@p33eft.com
                            </a>
                        </p>
                    </section>
                </div>
            </article>
        </div>
    );
}
