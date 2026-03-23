-- Protocol 33 CRM SQL Schema: The Metal Boundary
-- Run this script in the Supabase SQL Editor to initialize the Clinical Intelligence Loop.

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- TABLE 1: clients
-- ==========================================
CREATE TABLE public.clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

-- ==========================================
-- TABLE 2: blueprints
-- ==========================================
CREATE TABLE public.blueprints (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
    birth_date DATE,
    birth_time TIME,
    birth_location TEXT,
    status TEXT DEFAULT 'pending'::text
);

-- Index for faster queries on client_id
CREATE INDEX idx_blueprints_client_id ON public.blueprints(client_id);

-- ==========================================
-- TABLE 3: clinical_logs
-- ==========================================
CREATE TABLE public.clinical_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
    session_date DATE NOT NULL,
    gold_standard_notes TEXT
);

-- Index for faster queries on client_id
CREATE INDEX idx_clinical_logs_client_id ON public.clinical_logs(client_id);

-- ==========================================
-- ROW LEVEL SECURITY (RLS)
-- Enables strict boundaries for all CRM tables
-- ==========================================

-- 1. Enable RLS on all tables
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blueprints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clinical_logs ENABLE ROW LEVEL SECURITY;

-- 2. Define baseline policies (Structure is Freedom)
-- NOTE: Update these policies according to your authentication strategy.
-- Below are standard authenticated-only read/write policies.

-- Clients Policy: Service Role or Authenticated Admin can manage clients.
CREATE POLICY "Enable read access for authenticated users" 
ON public.clients FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users" 
ON public.clients FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users" 
ON public.clients FOR UPDATE USING (auth.role() = 'authenticated');

-- Blueprints Policy: Service Role or Authenticated Admin can manage blueprints.
CREATE POLICY "Enable read access for authenticated users" 
ON public.blueprints FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users" 
ON public.blueprints FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users" 
ON public.blueprints FOR UPDATE USING (auth.role() = 'authenticated');

-- Clinical Logs Policy: Service Role or Authenticated Admin can manage logs.
CREATE POLICY "Enable read access for authenticated users" 
ON public.clinical_logs FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users" 
ON public.clinical_logs FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users" 
ON public.clinical_logs FOR UPDATE USING (auth.role() = 'authenticated');

-- To allow public creation via server-side API (e.g. Next.js App Router actions using service_role key), RLS checks can be bypassed by the service_role key automatically.

-- ==========================================
-- SCHEMA UPDATES
-- ==========================================

-- Add phone and last_contact_date to clients matrix for 1:1 business integration
ALTER TABLE public.clients
ADD COLUMN phone TEXT,
ADD COLUMN last_contact_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now());
