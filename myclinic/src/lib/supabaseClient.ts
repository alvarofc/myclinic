// import env from static

import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://hqbhmzmaxolhucmremqa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxYmhtem1heG9saHVjbXJlbXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4NTc5NTQsImV4cCI6MjAwNTQzMzk1NH0.QySIJamNqYRV4Czy_XSZdDe3sFgEmg3WShjeEPwYG94';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);