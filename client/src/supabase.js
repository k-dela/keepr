
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://qjcsfyxqhhbkdyvykrtx.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqY3NmeXhxaGhia2R5dnlrcnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5Mjc1ODEsImV4cCI6MTk5OTUwMzU4MX0.ERJ0Me85ydpe9oRfFUrjWHSEhDWpbnE6vS1nz1puL5Q')

export default supabase;