document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Function to set the dark mode state
    const setDarkMode = (isDarkMode) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            if (darkModeToggle) {
                // Use FontAwesome sun icon and light outline for dark mode
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light'; 
                darkModeToggle.classList.replace('btn-outline-dark', 'btn-outline-light');
            }
        } else {
            body.classList.remove('dark-mode');
            if (darkModeToggle) {
                // Use FontAwesome moon icon and dark outline for light mode
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark'; 
                darkModeToggle.classList.replace('btn-outline-light', 'btn-outline-dark');
            }
        }
        // Save preference to localStorage
        localStorage.setItem('darkMode', isDarkMode);
    };

    // Load saved preference from localStorage
    const savedDarkModePreference = localStorage.getItem('darkMode');
    if (savedDarkModePreference === 'true') {
        setDarkMode(true);
    } else {
        setDarkMode(false); 
    }

    // Toggle dark mode on button click
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isCurrentlyDarkMode = body.classList.contains('dark-mode');
            setDarkMode(!isCurrentlyDarkMode);
        });
    }
});