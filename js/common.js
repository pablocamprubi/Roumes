// Handle sidebar toggle
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.toggle-sidebar');
const sidebarState = localStorage.getItem('sidebarState');

if (sidebarState === 'closed') {
    sidebar.classList.add('closed');
    document.body.classList.add('sidebar-closed');
}

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    document.body.classList.toggle('sidebar-closed');
    localStorage.setItem('sidebarState', sidebar.classList.contains('closed') ? 'closed' : 'open');
});

// Handle logout
async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
        window.location.href = 'index.html';
    }
}

// Get and display user email
async function getUserEmail() {
    try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const userEmail = document.querySelector('.user-email');
            if (userEmail) {
                userEmail.textContent = user.email;
            }
        }
    } catch (error) {
        console.error('Error getting user email:', error);
    }
}

// Call getUserEmail when the page loads
getUserEmail(); 