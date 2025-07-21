import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ccyarewbwkfzkloebazy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjeWFyZXdid2tmemtsb2ViYXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMjYwMjgsImV4cCI6MjA2MjYwMjAyOH0.ysRS0NIsedWwDSzXJZCSu362nlQsn2XStvVaYRlOrg4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
