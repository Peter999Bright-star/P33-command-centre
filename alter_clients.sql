// SQL Command to run in Supabase SQL Editor

ALTER TABLE public.clients
ADD COLUMN phone TEXT,
ADD COLUMN last_contact_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now());
