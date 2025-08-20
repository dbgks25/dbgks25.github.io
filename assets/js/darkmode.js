// Dark mode functionality
(function() {
  const THEME_KEY = 'theme';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  
  // Get initial theme
  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }
    
    return THEME_LIGHT;
  }
  
  // Apply theme
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeIcons(theme);
  }
  
  // Update theme toggle icons
  function updateThemeIcons(theme) {
    const lightIcons = document.querySelectorAll('.theme-icon-light');
    const darkIcons = document.querySelectorAll('.theme-icon-dark');
    
    if (theme === THEME_DARK) {
      lightIcons.forEach(icon => icon.style.display = 'none');
      darkIcons.forEach(icon => icon.style.display = 'inline');
    } else {
      lightIcons.forEach(icon => icon.style.display = 'inline');
      darkIcons.forEach(icon => icon.style.display = 'none');
    }
  }
  
  // Toggle theme
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(newTheme);
  }
  
  // Initialize theme on page load
  function initTheme() {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    
    // Add event listeners to theme toggle buttons
    const themeToggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    themeToggleButtons.forEach(button => {
      button.addEventListener('click', toggleTheme);
    });
    
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem(THEME_KEY)) {
          applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
      });
    }
  }
  
  // Initialize immediately to prevent flash
  const initialTheme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  // Initialize fully when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
