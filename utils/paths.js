// Utility function to handle asset paths for GitHub Pages
export function getAssetPath(path) {
  const basePath = process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_BASE_PATH
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : '';
  return `${basePath}${path}`;
}

// For images specifically
export function getImagePath(path) {
  return getAssetPath(path);
}
