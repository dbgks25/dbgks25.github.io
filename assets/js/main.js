// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initCodeBlocks();
  initLazyLoading();
  initSmoothScrolling();
});

// Code block functionality with copy button
function initCodeBlocks() {
  const codeBlocks = document.querySelectorAll('.highlight, pre');
  
  codeBlocks.forEach(block => {
    // Wrap in container if not already
    if (!block.parentElement.classList.contains('code-block')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block';
      block.parentNode.insertBefore(wrapper, block);
      wrapper.appendChild(block);
    }
    
    // Add copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = '복사';
    copyButton.setAttribute('aria-label', '코드 복사');
    
    copyButton.addEventListener('click', async () => {
      const code = block.querySelector('code') || block;
      const text = code.textContent;
      
      try {
        await navigator.clipboard.writeText(text);
        copyButton.textContent = '복사됨!';
        setTimeout(() => {
          copyButton.textContent = '복사';
        }, 2000);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        copyButton.textContent = '복사됨!';
        setTimeout(() => {
          copyButton.textContent = '복사';
        }, 2000);
      }
    });
    
    block.parentElement.appendChild(copyButton);
  });
}

// Lazy loading for images
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
      img.classList.add('lazy');
      imageObserver.observe(img);
    });
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not(.tag)');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without jumping
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
