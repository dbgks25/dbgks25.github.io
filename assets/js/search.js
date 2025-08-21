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
    const searchInputs = document.querySelectorAll('#search-input, #search-input-main, .search-input');
    
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
    const listContent = document.getElementById('search-results');
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
        <div class="search-result-item">
          <h3 class="search-result-title">
            <a href="${item.url}">${highlightText(item.title, query)}</a>
          </h3>
          <div class="search-result-meta">
            <time datetime="${item.date}">${formatDate(item.date || '')}</time>
            <span class="search-result-type">${item.type === 'post' ? '포스트' : item.type === 'project' ? '프로젝트' : '페이지'}</span>
          </div>
          <div class="search-result-excerpt">
            <p>${highlightText(item.summary || item.content.substring(0, 150), query)}...</p>
          </div>
          ${item.tags && item.tags.trim() ? `
            <div class="search-result-tags">
              <ul class="tag-list">
                ${item.tags.split(' ').filter(tag => tag.trim()).slice(0, 3).map(tag => 
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
    const listContent = document.getElementById('search-results');
    if (listContent) {
      listContent.innerHTML = `
        <div class="search-placeholder">
          <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" class="placeholder-icon">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <h3>검색어를 입력해주세요</h3>
          <p>최소 2글자 이상 입력하시면 검색 결과가 표시됩니다.</p>
        </div>
      `;
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
