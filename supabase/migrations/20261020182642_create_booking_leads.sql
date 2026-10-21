/*
# Create booking lead requests

1. New Tables
- `booking_leads`
- `id` (uuid, primary key) — unique request identifier.
- `name` (text) — visitor's name, limited to 120 characters.
- `phone` (text) — visitor's phone number, limited to 40 characters.
- `category` (text) — selected treatment, limited to 120 characters.
- `appointment_date` (date) — requested appointment date.
- `appointment_time` (time) — requested appointment time.
- `notes` (text) — optional visitor notes, limited to 1000 characters.
- `language` (text) — language used when submitting the form: nl, en, or de.
- `created_at` (timestamptz) — server-generated submission time.

2. Security
- Enable row-level security on `booking_leads`.
- Allow anonymous and authenticated visitors to insert a new booking request only.
- Deny public reading, updating, and deleting of booking requests so submitted contact details are not exposed.

3. Important Notes
- This is a single-tenant public booking form and does not require sign-in.
- Database constraints validate required fields and reasonable input lengths at the storage boundary.
*/

CREATE TABLE IF NOT EXISTS public.booking_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(trim(name)) BETWEEN 2 AND 120),
  phone text NOT NULL CHECK (char_length(trim(phone)) BETWEEN 5 AND 40),
  category text NOT NULL CHECK (char_length(trim(category)) BETWEEN 2 AND 120),
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  notes text NOT NULL DEFAULT '' CHECK (char_length(notes) <= 1000),
  language text NOT NULL DEFAULT 'nl' CHECK (language IN ('nl', 'en', 'de')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.booking_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit booking leads" ON public.booking_leads;
CREATE POLICY "Public can submit booking leads"
ON public.booking_leads FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(name)) BETWEEN 2 AND 120
  AND char_length(trim(phone)) BETWEEN 5 AND 40
  AND char_length(trim(category)) BETWEEN 2 AND 120
  AND char_length(notes) <= 1000
  AND language IN ('nl', 'en', 'de')
);

DROP POLICY IF EXISTS "Public cannot read booking leads" ON public.booking_leads;
CREATE POLICY "Public cannot read booking leads"
ON public.booking_leads FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "Public cannot update booking leads" ON public.booking_leads;
CREATE POLICY "Public cannot update booking leads"
ON public.booking_leads FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

DROP POLICY IF EXISTS "Public cannot delete booking leads" ON public.booking_leads;
CREATE POLICY "Public cannot delete booking leads"
ON public.booking_leads FOR DELETE
TO anon, authenticated
USING (false);
