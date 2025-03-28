// Configuration for different environments
const config = {
    development: {
        supabaseUrl: 'https://hfjezwyfhinlwzphvtmh.supabase.co',
        supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmamV6d3lmaGlubHd6cGh2dG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzE4OTcsImV4cCI6MjA1ODc0Nzg5N30.K6KSd_pRL4aekm6MfpYCydHAjub22GwdtzApU8q5MhY',
        redirectUrl: 'http://localhost:5000'
    },
    production: {
        supabaseUrl: 'https://hfjezwyfhinlwzphvtmh.supabase.co',
        supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmamV6d3lmaGlubHd6cGh2dG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzE4OTcsImV4cCI6MjA1ODc0Nzg5N30.K6KSd_pRL4aekm6MfpYCydHAjub22GwdtzApU8q5MhY',
        redirectUrl: window.location.origin
    }
};

// Determine environment based on URL
const isProduction = window.location.hostname !== 'localhost';
const currentConfig = isProduction ? config.production : config.development;

export default currentConfig; 