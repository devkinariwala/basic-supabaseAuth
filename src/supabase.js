import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xfjcvimsshrnmaxulhja.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmamN2aW1zc2hybm1heHVsaGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4Mjg0MjIsImV4cCI6MjA1OTQwNDQyMn0.RaW-d6DA_US5eZJD47qXmymZlXrWHQe1Hy4TZgwpAhc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
