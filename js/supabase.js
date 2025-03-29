import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'
import config from './config.js'

export const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey)

// Handle auth state changes
supabase.auth.onAuthStateChange((event, session) => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    if (event === 'SIGNED_IN') {
        // Only redirect if we're not already on welcome.html
        if (currentPath !== 'welcome.html') {
            window.location.href = `${config.redirectUrl}/welcome.html`;
        }
    } else if (event === 'SIGNED_OUT') {
        // If not already on signin or public pages, redirect to signin
        if (!['signin.html', 'index.html', 'signup.html'].includes(currentPath)) {
            window.location.href = `${config.redirectUrl}/signin.html`;
        }
    }
}) 