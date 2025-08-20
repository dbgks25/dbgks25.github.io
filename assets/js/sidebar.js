// Sidebar functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  
  if (!sidebar || !overlay || !menuToggle) return;
  
  // Toggle sidebar
  function toggleSidebar() {
    const isOpen = sidebar.classList.contains('sidebar-open');
    
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
  
  // Open sidebar
  function openSidebar() {
    sidebar.classList.add('sidebar-open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    const firstFocusable = sidebar.querySelector('a, button');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }
  
  // Close sidebar
  function closeSidebar() {
    sidebar.classList.remove('sidebar-open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Return focus to menu toggle
    menuToggle.focus();
  }
  
  // Event listeners
  menuToggle.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', closeSidebar);
  
  // Close sidebar on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar.classList.contains('sidebar-open')) {
      closeSidebar();
    }
  });
  
  // Close sidebar when clicking on main content links (mobile)
  const sidebarLinks = sidebar.querySelectorAll('a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        closeSidebar();
      }
    });
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      closeSidebar();
    }
  });
});
