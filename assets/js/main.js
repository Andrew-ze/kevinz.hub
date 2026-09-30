/* Kevinz Collection — SHOWCASE SITE behaviour
   This is a static demo: the "cart" below is stored in the browser's
   localStorage purely so the pages have something interactive to show.
   It is NOT a real order system — there is no server, no payment, and
   nothing here is saved anywhere except the visitor's own browser. */

const KVZ_CART_KEY = 'kvz_showcase_cart';

function kvzGetCart() {
  try {
    return JSON.parse(localStorage.getItem(KVZ_CART_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function kvzSaveCart(cart) {
  localStorage.setItem(KVZ_CART_KEY, JSON.stringify(cart));
  kvzUpdateCartBadge();
}

function kvzAddToCart(productId, qty) {
  const cart = kvzGetCart();
  productId = String(productId);
  cart[productId] = (cart[productId] || 0) + (qty || 1);
  kvzSaveCart(cart);
}

function kvzUpdateQty(productId, qty) {
  const cart = kvzGetCart();
  productId = String(productId);
  if (qty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = qty;
  }
  kvzSaveCart(cart);
}

function kvzRemoveFromCart(productId) {
  const cart = kvzGetCart();
  delete cart[String(productId)];
  kvzSaveCart(cart);
}

function kvzCartCount() {
  const cart = kvzGetCart();
  return Object.values(cart).reduce((sum, q) => sum + q, 0);
}

function kvzUpdateCartBadge() {
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = kvzCartCount();
}

/**
 * Opens WhatsApp (app on mobile, web.whatsapp.com on desktop) with a
 * pre-filled message to the business number. The customer still has to
 * tap "Send" inside WhatsApp — a static site has no way to send a
 * message silently on its own — but this removes all the typing for
 * them, so in practice almost everyone just taps send.
 */
function kvzSendWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${KEVINZ_WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  kvzUpdateCartBadge();

  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Quantity steppers (product detail page)
  document.querySelectorAll('[data-qty-stepper]').forEach((stepper) => {
    const input = stepper.querySelector('input[type="number"]');
    if (!input) return;
    stepper.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const step = parseInt(btn.dataset.step, 10);
        const max = parseInt(input.max || '999', 10);
        const min = parseInt(input.min || '1', 10);
        let val = parseInt(input.value, 10) || min;
        val = Math.min(max, Math.max(min, val + step));
        input.value = val;
      });
    });
  });

  // Any form marked data-demo-form just shows a friendly confirmation
  // instead of actually submitting anywhere (there is no backend here).
  document.querySelectorAll('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#c9615c';
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) return;
      const successBox = form.parentElement.querySelector('.demo-success');
      if (successBox) {
        successBox.style.display = 'block';
        form.reset();
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
});
