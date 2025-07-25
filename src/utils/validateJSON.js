export function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    console.warn('[JSON Snap] Invalid JSON:', e);
    return false;
  }
}
