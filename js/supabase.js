import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'
import config from './config.js'

export const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey)

// Handle auth state changes
supabase.auth.onAuthStateChange((event, session) => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    if (event === 'SIGNED_IN') {
        // If not on welcome page and not on a valid public page, redirect to welcome
        if (currentPath !== 'welcome.html' && !['index.html', 'signup.html'].includes(currentPath)) {
            window.location.href = `${config.redirectUrl}/welcome.html`;
        }
    } else if (event === 'SIGNED_OUT') {
        // If not already on signin or public pages, redirect to signin
        if (!['signin.html', 'index.html', 'signup.html'].includes(currentPath)) {
            window.location.href = `${config.redirectUrl}/signin.html`;
        }
    }
}) 