"use client";

import React, { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SubscribeForm() {
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
        .insert([{ email }]);

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

  return (
    <div className="w-full max-w-xl mx-auto mt-12 mb-8 bg-void-deep border border-platinum p-8">
      <h3 className="text-xl text-alchemical-gold font-medium mb-4 tracking-wide text-center uppercase">
        The Silent Setter
      </h3>
      <p className="text-muted text-center font-light mb-8 leading-relaxed">
        Stop sailing blind. Join the Fleet. Enter your email to have The Pulse—my direct intelligence briefings on the somatic and cosmic weather—beamed directly to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          className="bg-platinum text-void-deep font-bold tracking-widest uppercase p-4 hover:bg-alchemical-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
