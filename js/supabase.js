import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'

const supabaseUrl = 'https://hfjezwyfhinlwzphvtmh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmamV6d3lmaGlubHd6cGh2dG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzE4OTcsImV4cCI6MjA1ODc0Nzg5N30.K6KSd_pRL4aekm6MfpYCydHAjub22GwdtzApU8q5MhY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Handle auth state changes
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        console.log('User signed in:', session.user)
        // Redirect to dashboard or home page
        window.location.href = '/index.html'
    } else if (event === 'SIGNED_OUT') {
        console.log('User signed out')
        // Redirect to sign in page
        window.location.href = '/signin.html'
    }
}) 