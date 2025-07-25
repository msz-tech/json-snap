/**
 * Checks if a string is valid JSON.
 * @param {string} str - The JSON string to validate.
 * @returns {boolean} True if valid JSON, false otherwise.
 */
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    console.warn('[JSON Snap] Skipped: invalid JSON');
    return false;
  }
}

/**
 * Beautifies a JSON string with indentation for readability.
 * @param {string} jsonString - The JSON string to format.
 * @returns {string} The formatted JSON string or the original string if invalid.
 */
function formatJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return JSON.stringify(obj, null, 2);
  } catch {
    return jsonString;
  }
}

/**
 * Minifies a JSON string by removing all whitespace.
 * @param {string} jsonString - The JSON string to minify.
 * @returns {string} The minified JSON string or the original string if invalid.
 */
function minifyJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return JSON.stringify(obj);
  } catch {
    return jsonString;
  }
}

// Toggle: minified or collapsible view
let useMinify = false;

/**
 * Recursively builds an interactive JSON tree with collapsible nodes.
 * All nodes are collapsed by default but display summary info.
 *
 * @param {HTMLElement} container - Where to inject the tree.
 * @param {any} json - The parsed JSON data.
 * @param {number} depth - Current depth level.
 * @param {number} maxOpenDepth - How many levels open by default.
 */
function createCollapsibleJSON(container, json, depth = 0, maxOpenDepth = 0) {
  if (typeof json !== 'object' || json === null) {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(json);
    container.appendChild(span);
    return;
  }

  const isArray = Array.isArray(json);
  const wrapper = document.createElement('div');
  wrapper.style.marginLeft = '1em';

  Object.entries(json).forEach(([key, value]) => {
    const item = document.createElement('div');
    item.style.marginBottom = '2px';

    const toggleBtn = document.createElement('button');
    toggleBtn.style.marginRight = '0.5em';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.width = '1.2em';
    toggleBtn.style.border = 'none';
    toggleBtn.style.background = 'transparent';
    toggleBtn.style.color = '#ff79c6';

    const label = document.createElement('span');
    label.style.fontWeight = 'bold';

    const valueContainer = document.createElement('span');
    valueContainer.style.marginLeft = '0.5em';

    if (typeof value === 'object' && value !== null) {
      const isInitiallyOpen = depth < maxOpenDepth;
      const type = Array.isArray(value)
        ? `Array (${value.length})`
        : `Object {}`;

      toggleBtn.textContent = isInitiallyOpen ? '−' : '+';
      valueContainer.style.display = isInitiallyOpen ? 'inline' : 'none';

      label.textContent = `${key}: ${type}`;

      toggleBtn.onclick = () => {
        const isOpen = valueContainer.style.display !== 'none';
        valueContainer.style.display = isOpen ? 'none' : 'inline';
        toggleBtn.textContent = isOpen ? '+' : '−';
      };

      createCollapsibleJSON(valueContainer, value, depth + 1, maxOpenDepth);
    } else {
      toggleBtn.style.visibility = 'hidden';
      label.textContent = `${key}: ${JSON.stringify(value)}`;
    }

    item.appendChild(toggleBtn);
    item.appendChild(label);
    item.appendChild(valueContainer);
    wrapper.appendChild(item);
  });

  container.appendChild(wrapper);
}

/**
 * Detects <pre> blocks with JSON and renders them as formatted or interactive.
 */
function formatPageJSON() {
  console.log('[JSON Snap] content.js loaded');

  const pre = document.querySelector('pre');
  if (!pre) return;

  const raw = pre.textContent;
  if (!isValidJSON(raw)) return;

  if (useMinify) {
    pre.textContent = minifyJSON(raw);
  } else {
    try {
      const jsonObj = JSON.parse(raw);
      pre.textContent = '';
      const container = document.createElement('div');
      pre.appendChild(container);
      createCollapsibleJSON(container, jsonObj, 0, 0); // All nodes collapsed
    } catch {
      pre.textContent = formatJSON(raw); // fallback
    }
  }
}

// Execute on page load
formatPageJSON();
