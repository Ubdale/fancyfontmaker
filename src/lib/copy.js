// Shared copy-to-clipboard + toast. Any element with [data-copy] copies its value on click.

let toastTimer;

export function showToast(msg = 'Copied!') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1400);
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  showToast('Copied!');
}

export function initCopy() {
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-copy]');
    if (!el) return;
    copyText(el.dataset.copy);
    el.classList.add('copied');
    setTimeout(() => el.classList.remove('copied'), 900);
  });
}
