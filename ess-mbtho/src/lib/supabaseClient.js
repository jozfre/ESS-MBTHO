import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://cjwwxsyhxpyjyyuzkpdp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqd3d4c3loeHB5anl5dXprcGRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyMjU1MzIsImV4cCI6MjA0OTgwMTUzMn0.yY8wR8J9BRg1qDc97tDkJb-DcJ3Nwj3W69IE1Is0GXM')