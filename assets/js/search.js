// Search functionality using Lunr.js
(function() {
  let searchIndex;
  let searchData;
  let isSearchReady = false;
  
  // Initialize search when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initSearch();
  });
  
  async function initSearch() {
    try {
      // Load Lunr.js from CDN
      if (typeof lunr === 'undefined') {
        await loadScript('https://unpkg.com/lunr@2.3.9/lunr.min.js');
      }
      
      // Load search data
      const response = await fetch('/search/search.json');
      searchData = await response.json();
      
      // Build search index
      searchIndex = lunr(function() {
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('content', { boost: 5 });
        this.field('tags', { boost: 8 });
        this.field('summary', { boost: 7 });
        
        searchData.forEach(function(doc) {
          this.add(doc);
        }, this);
      });
      
      isSearchReady = true;
      setupSearchUI();
      
    } catch (error) {
      console.error('Failed to initialize search:', error);
    }
  }
  
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  function setupSearchUI() {
    const searchInputs = document.querySelectorAll('#search-input, .search-input');
    
    searchInputs.forEach(input => {
      input.addEventListener('input', debounce(handleSearch, 300));
      input.addEventListener('keydown', handleSearchKeydown);
    });
  }
  
  function handleSearch(event) {
    const query = event.target.value.trim();
    
    if (query.length < 2) {
      clearSearchResults();
      return;
    }
    
    if (!isSearchReady) {
      return;
    }
    
    try {
      // Perform search with fuzzy matching
      const results = searchIndex.search(`${query}~1 ${query}*`);
      displaySearchResults(results, query);
    } catch (error) {
      console.error('Search error:', error);
    }
  }
  
  function handleSearchKeydown(event) {
    if (event.key === 'Escape') {
      clearSearchResults();
      event.target.blur();
    }
  }
  
  function displaySearchResults(results, query) {
    const listContent = document.getElementById('list-content');
    if (!listContent) return;
    
    if (results.length === 0) {
      listContent.innerHTML = `
        <div class="search-results">
          <div class="search-header">
            <h2>"${query}"에 대한 검색 결과</h2>
            <p>검색 결과가 없습니다.</p>
          </div>
        </div>
      `;
      return;
    }
    
    const searchResultsHtml = results.map(result => {
      const item = searchData.find(doc => doc.id === result.ref);
      if (!item) return '';
      
      return `
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
              <a href="${item.url}">${highlightText(item.title, query)}</a>
            </h3>
            <div class="card-meta">
              <time datetime="${item.date}">${formatDate(item.date)}</time>
              <span class="card-type">${item.type === 'post' ? '포스트' : '프로젝트'}</span>
            </div>
          </div>
          <div class="card-content">
            <p>${highlightText(item.summary || item.content.substring(0, 150), query)}...</p>
          </div>
          ${item.tags ? `
            <div class="card-footer">
              <ul class="tag-list">
                ${item.tags.split(' ').slice(0, 3).map(tag => 
                  `<li><a href="/tags/#tag-${tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}" class="tag">${tag}</a></li>`
                ).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
    
    listContent.innerHTML = `
      <div class="search-results">
        <div class="search-header">
          <h2>"${query}"에 대한 검색 결과 (${results.length}개)</h2>
        </div>
        <div class="card-grid">
          ${searchResultsHtml}
        </div>
      </div>
    `;
  }
  
  function clearSearchResults() {
    const listContent = document.getElementById('list-content');
    if (listContent && listContent.querySelector('.search-results')) {
      location.reload(); // Simple way to restore original content
    }
  }
  
  function highlightText(text, query) {
    if (!query || !text) return text;
    
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
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
})();
