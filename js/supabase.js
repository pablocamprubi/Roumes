import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'
import config from './config.js'

export const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey)

// Handle auth state changes
supabase.auth.onAuthStateChange((event, session) => {
    const currentPath = window.location.pathname.split('/').pop();
    
    if (event === 'SIGNED_IN' && currentPath !== 'welcome.html') {
        console.log('User signed in:', session.user)
        // Only redirect to welcome page if not already there
        window.location.href = `${config.baseUrl}/welcome.html`
    } else if (event === 'SIGNED_OUT' && currentPath !== 'signin.html') {
        console.log('User signed out')
        // Only redirect to sign in page if not already there
        window.location.href = `${config.baseUrl}/signin.html`
    }
}) 