
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    console.warn('[JSON Snap] Skipped: invalid JSON');
    return false;
  }
}


function formatJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return JSON.stringify(obj, null, 2);
  } catch {
    return jsonString;
  }
}

function minifyJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return JSON.stringify(obj);
  } catch {
    return jsonString;
  }
}


let useMinify = false;

function formatPageJSON() {
  console.log('[JSON Snap] content.js loaded');

  const pre = document.querySelector('pre');
  if (!pre) return;

  const raw = pre.textContent;

  if (!isValidJSON(raw)) {
    return;
  }

  const formatted = useMinify ? minifyJSON(raw) : formatJSON(raw);

  if (formatted !== raw) {
    pre.textContent = formatted;
  }
}

formatPageJSON();
