import { formatJSON } from './utils.js';

let useMinify = false;
function formatPageJSON() {
  const pre = document.querySelector('pre');
  if (!pre) return;

  const raw = pre.textContent;
  const formatted = formatJSON(raw);
  if (formatted !== raw) {
    pre.textContent = formatted;
  }
}

formatPageJSON();
