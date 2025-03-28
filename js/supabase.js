import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'
import config from './config.js'

export const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey)

// Handle auth state changes
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        console.log('User signed in:', session.user)
        // Redirect to welcome page
        window.location.href = '/welcome.html'
    } else if (event === 'SIGNED_OUT') {
        console.log('User signed out')
        // Redirect to sign in page
        window.location.href = '/signin.html'
    }
}) 