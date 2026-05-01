import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default supabase







/*
supabase queries

create table passwords (
  id uuid default gen_random_uuid() primary key,
  website_name text not null,
  url text,
  password text not null,
  notes text,
  created_at timestamp default now()
);

*/