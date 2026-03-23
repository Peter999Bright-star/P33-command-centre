import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Missing Supabase environment variables. The CRM backend connection will fail.");
}

// Initialize the Supabase client connection (The Metal Boundary)
// We provide safe fallbacks so Next.js static build doesn't crash when Vercel compiles the project without env vars.
export const supabase = createClient(
  supabaseUrl || 'https://build-placeholder.supabase.co',
  supabaseAnonKey || 'build-placeholder-key'
);

// Basic Database Types for the Protocol 33 CRM
export type ClientRecord = {
  id: string; // UUID
  created_at: string; // TIMESTAMP
  first_name: string;
  last_name: string;
  email: string; // UNIQUE
  phone: string | null;
  last_contact_date: string; // TIMESTAMP
};

export type BlueprintRecord = {
  id: string; // UUID
  client_id: string; // UUID (Foreign Key)
  birth_date: string; // DATE
  birth_time: string; // TIME
  birth_location: string;
  status: string;
};

export type ClinicalLogRecord = {
  id: string; // UUID
  client_id: string; // UUID (Foreign Key)
  session_date: string; // DATE
  gold_standard_notes: string;
};
