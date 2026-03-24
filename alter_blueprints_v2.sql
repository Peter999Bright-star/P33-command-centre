-- Phase 1: Database Schema Expansion
-- Run this in your Supabase SQL Editor

ALTER TABLE public.blueprints
ADD COLUMN great_work TEXT,
ADD COLUMN core_values TEXT,
ADD COLUMN the_crux TEXT;
