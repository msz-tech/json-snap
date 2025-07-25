/**
 * Formats a JSON string with indentation for improved readability.
 * @param {string} jsonString - The JSON string to format.
 * @returns {string} - The beautified JSON string or the original string if parsing fails.
 */
export function formatJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    // Convert object back to string with 2 spaces indentation
    return JSON.stringify(obj, null, 2);
  } catch {
    // Return original string if it's not valid JSON
    return jsonString;
  }
}

/**
 * Minifies a JSON string by removing all whitespace.
 * @param {string} jsonString - The JSON string to minify.
 * @returns {string} - The minified JSON string or the original string if parsing fails.
 */
export function minifyJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    // Convert object back to string without any whitespace
    return JSON.stringify(obj);
  } catch {
    // Return original string if it's not valid JSON
    return jsonString;
  }
}
