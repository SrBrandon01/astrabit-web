'use strict';

// Contacto oficial. Cambia este número solo si modificas el WhatsApp de AstraBit.
const WHATSAPP_NUMBER = '522204711563';
const whatsappLink = message => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Links personalizados para servicios y paquetes.
for (const link of document.querySelectorAll('[data-service]')) {
  const service = link.dataset.service;
  link.href = whatsappLink(`Hola AstraBit 👋. Quisiera cotizar: ${service}. ¿Me puedes dar más información?`);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
}

// Menú móvil navegable con teclado.
const toggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (toggle && mobileNav) {
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    mobileNav.hidden = true;
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    mobileNav.hidden = !open;
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !mobileNav.hidden) {
      closeMenu();
      toggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 940) closeMenu();
  });
}

// Filtros en la sección de servicios.
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const serviceCards = [...document.querySelectorAll('.service-card')];
for (const btn of filterButtons) {
  btn.addEventListener('click', () => {
    const category = btn.dataset.filter;
    filterButtons.forEach(item => {
      const selected = item === btn;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    for (const card of serviceCards) {
      card.hidden = category !== 'todos' && card.dataset.category !== category;
    }
  });
}

// El formulario NO manda información a un servidor: prepara el mensaje de WhatsApp.
const form = document.getElementById('quote-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = document.getElementById('customer-name').value.trim();
    const service = document.getElementById('quote-service').value;
    const modality = document.getElementById('quote-modality').value;
    const details = document.getElementById('quote-message').value.trim();
    if (!service || !details) return;
    const message = [
      `¡Hola, AstraBit! 👋${name ? ` Soy ${name}.` : ''}`,
      `Quisiera solicitar una cotización.`,
      `🛠️ Servicio: ${service}`,
      `🏠 Modalidad: ${modality}`,
      `📝 Mi idea: ${details}`,
      `¡Gracias!`
    ].join('\n');
    window.location.href = whatsappLink(message);
  });
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
