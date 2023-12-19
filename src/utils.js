
export function getPageNoFromUrl(url) {
    if (!url) return null;
  
    const _url = new URL(url);
  
    return _url.searchParams.get('page');
  }