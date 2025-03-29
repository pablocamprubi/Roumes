import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'
import config from './config.js'

export const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey)

// Handle auth state changes
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        // Always redirect to welcome.html when signed in
        window.location.href = `${config.redirectUrl}/welcome.html`;
    } else if (event === 'SIGNED_OUT') {
        // Get current path
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        // If not already on signin or public pages, redirect to signin
        if (!['signin.html', 'index.html', 'signup.html'].includes(currentPath)) {
            window.location.href = `${config.redirectUrl}/signin.html`;
        }
    }
}) 