/* ====== assets/js/script.js ====== */
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en][data-ne]');
    elements.forEach(el => {
        el.textContent = lang === 'en' ? el.dataset.en : el.dataset.ne;
    });
}

