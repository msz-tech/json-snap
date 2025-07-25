import { formatJSON, minifyJSON } from './utils.js';
import { isValidJSON } from './utils/validateJSON.js';

let useMinify = false;

function formatPageJSON() {
  const pre = document.querySelector('pre');
  if (!pre) return;

  const raw = pre.textContent;

  if (!isValidJSON(raw)) {
    console.warn('[JSON Snap] Skipped: invalid JSON');
    return;
  }

  const formatted = useMinify
    ? minifyJSON(raw)
    : formatJSON(raw);

  if (formatted !== raw) {
    pre.textContent = formatted;
  }
}

formatPageJSON();
