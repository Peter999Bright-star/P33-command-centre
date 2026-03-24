'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlueprintGateway() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    great_work: '',
    core_values: '',
    the_crux: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit the blueprint form.');
      }

      setStatus('success');
      // Redirect to the vault or another route upon success
      setTimeout(() => router.push('/vault'), 2000);

    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  return (
    <main className="min-h-screen p-8 lg:p-16 xl:p-24 bg-void-public text-primary pt-32 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-alchemical-gold mb-4">
                True Calling Blueprint.
            </h1>
            <p className="text-muted font-light tracking-wide">
                Enter your coordinates to establish the connection.
            </p>
            <div className="w-12 h-px bg-platinum mt-8" />
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 bg-void-deep p-8 border border-platinum rounded-sm shadow-xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first_name" className="text-xs font-mono text-muted uppercase tracking-widest">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                value={formData.first_name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-platinum-subtle pb-2 text-white focus:outline-none focus:border-alchemical-gold transition-colors"
                placeholder="Required"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="last_name" className="text-xs font-mono text-muted uppercase tracking-widest">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                value={formData.last_name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-platinum-subtle pb-2 text-white focus:outline-none focus:border-alchemical-gold transition-colors"
                placeholder="Required"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-mono text-muted uppercase tracking-widest">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-platinum-subtle pb-2 text-white focus:outline-none focus:border-alchemical-gold transition-colors"
              placeholder="Required"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs font-mono text-muted uppercase tracking-widest flex items-center gap-2">
              Phone Number <span className="text-alchemical-gold lowercase tracking-normal">(WhatsApp / SMS)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-platinum-subtle pb-2 text-white focus:outline-none focus:border-alchemical-gold transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="space-y-4 pt-4 border-t border-platinum-subtle mt-4">
            <h3 className="text-xl font-medium text-alchemical-gold mb-6">Somatic Hardware Assessment</h3>
            
            <div className="space-y-2">
              <label htmlFor="great_work" className="text-xs font-mono text-muted uppercase tracking-widest leading-loose block">
                Your 'Great Work': What are your primary goals for the next 6-12 months?
              </label>
              <textarea
                id="great_work"
                name="great_work"
                value={formData.great_work}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent border-b border-platinum-subtle pb-2 text-white focus:outline-none focus:border-alchemical-gold transition-colors resize-none"
                placeholder="Expand on your vision..."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="core_values" className="text-xs font-mono text-muted uppercase tracking-widest leading-loose block">
                Your 'Values': What are your 3-5 core personal or spiritual values?
              </label>
              <textarea
                id="core_values"
                name="core_values"
                value={formData.core_values}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent border-b border-platinum-subtle pb-2 text-white focus:outline-none focus:border-alchemical-gold transition-colors resize-none"
                placeholder="List your values..."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="the_crux" className="text-xs font-mono text-muted uppercase tracking-widest leading-loose block">
                The 'Crux': What is the single biggest challenge or 'stuck point' you are facing right now?
              </label>
              <textarea
                id="the_crux"
                name="the_crux"
                value={formData.the_crux}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent border-b border-platinum-subtle pb-2 text-white focus:outline-none focus:border-alchemical-gold transition-colors resize-none"
                placeholder="Describe the resistance..."
              />
            </div>
          </div>

          {status === 'error' && (
            <div className="border-l border-red-500 pl-4 py-2 mt-6">
                <p className="text-sm text-red-400">{errorMessage}</p>
            </div>
          )}

          {status === 'success' && (
            <div className="border-l border-alchemical-gold pl-4 py-2 mt-6">
                <p className="text-sm text-alchemical-gold">Transmission complete. Redirecting...</p>
            </div>
          )}

          <div className="pt-8">
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="w-full py-4 border border-alchemical-gold text-alchemical-gold hover:bg-alchemical-gold hover:text-void-deep transition-all duration-300 tracking-widest font-mono uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Authenticating...' : 'Submit Coordinates'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
