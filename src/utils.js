export function formatJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return JSON.stringify(obj, null, 2); 
  } catch {
    return jsonString; 
  }
}
export function minifyJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return JSON.stringify(obj); 
  } catch {
    return jsonString;
  }
}