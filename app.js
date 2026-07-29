/* ==========================================================================
   LIQUIDA - ROBINHOOD CHAIN LIQUIDITY INFRASTRUCTURE INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickySlideObserver();
});

// Smooth Sticky Slide Observer & Scroll Indicators
function initStickySlideObserver() {
  const slides = document.querySelectorAll('[data-slide]');
  if (!slides.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  slides.forEach(slide => observer.observe(slide));
}

// Request Access Modal Drawer
function openAccessModal() {
  const modal = document.getElementById('accessModalLiquida');
  if (modal) modal.style.display = 'flex';
}

function closeAccessModal() {
  const modal = document.getElementById('accessModalLiquida');
  if (modal) modal.style.display = 'none';
}

function submitAccessForm(e) {
  if (e) e.preventDefault();
  closeAccessModal();
  showLiquidaToast('⚡ Request submitted! Our institutional team will contact you shortly.');
}

function showLiquidaToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 28px; right: 28px; z-index: 1000;
    background: #1f2e4d; color: #f6f1e4; border: 1px solid #c2a46f;
    padding: 14px 22px; border-radius: 9999px; font-family: var(--font-sans);
    font-size: 0.85rem; box-shadow: 0 10px 30px rgba(31, 46, 77, 0.4);
    font-weight: 500;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}
