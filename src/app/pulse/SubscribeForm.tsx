"use client";

import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const { error } = await supabase
        .from("subscribers")
        .insert([{ email, name }]);

      if (error) {
        if (error.code === '23505') { // unique violation
          setStatus("success");
          setMessage("You are already part of the Fleet.");
        } else {
          throw error;
        }
      } else {
        setStatus("success");
        setMessage("Transmission coordinates secured. Welcome to the Fleet.");
        setEmail("");
      }
    } catch (err: any) {
      setStatus("error");
      setMessage("Failed to establish link. Please try again.");
    }
  };

  if (status === "success" && message !== "You are already part of the Fleet.") {
    return (
      <div className="w-full max-w-xl mx-auto mt-12 mb-8 bg-void-deep border border-alchemical-gold p-8 text-center">
        <span className="text-4xl mb-4 block text-alchemical-gold">✦</span>
        <h3 className="text-xl text-alchemical-gold font-medium mb-4 tracking-wide uppercase">
          Transmission Secured
        </h3>
        <p className="text-white font-light leading-relaxed mb-6">
          Your first Pulse arrives tomorrow at dawn.
        </p>
        <div className="bg-void-public border border-platinum/20 p-6 text-left">
          <span className="text-[10px] text-alchemical-gold uppercase tracking-widest block mb-4">To Ensure Delivery</span>
          <p className="text-muted text-sm leading-relaxed mb-4">
            1. Check your <strong className="text-white">Junk / Spam folder</strong> for the first dispatch and move it to your inbox.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            2. Add <strong className="text-white">pulse@mailer.p33eft.com</strong> to your contacts so future transmissions arrive directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-12 mb-8 bg-void-deep border border-platinum p-8">
      <h3 className="text-xl text-alchemical-gold font-medium mb-4 tracking-wide text-center uppercase">
        Receive the Forecast
      </h3>
      <p className="text-muted text-center font-light mb-8 leading-relaxed">
        Stop sailing blind. Join the Fleet. Enter your details to have The Pulse—my direct intelligence briefings on the somatic and cosmic weather—beamed directly to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ENTER YOUR NAME"
          className="bg-void-public border border-platinum/50 p-4 text-white font-mono tracking-widest placeholder:text-muted/50 focus:outline-none focus:border-alchemical-gold transition-colors"
          required
          disabled={status === "loading" || status === "success"}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER YOUR EMAIL"
          className="bg-void-public border border-platinum/50 p-4 text-white font-mono tracking-widest placeholder:text-muted/50 focus:outline-none focus:border-alchemical-gold transition-colors"
          required
          disabled={status === "loading" || status === "success"}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-platinum text-void-deep font-bold tracking-widest uppercase p-4 hover:bg-alchemical-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        >
          {status === "loading" ? "TRANSMITTING..." : status === "success" ? "LINK ESTABLISHED" : "JOIN THE FLEET"}
        </button>
      </form>
      
      {message && (
        <p className={`mt-4 text-center text-sm font-mono tracking-wider ${status === 'success' ? 'text-alchemical-gold' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
