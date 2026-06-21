// main.js — Dr Polle

// ── Traitements : scroll timeline ────────────────────────────
(function () {
  const items      = document.querySelectorAll('.traitements__item');
  const lineActive = document.querySelector('.traitements__line-active');
  const section    = document.querySelector('.traitements');

  if (!items.length || !lineActive || !section) return;

  function update() {
    const viewportCenter = window.scrollY + window.innerHeight * 0.5;
    let activeIndex = 0;
    let closestDist = Infinity;

    items.forEach((item, i) => {
      const itemTop    = item.getBoundingClientRect().top + window.scrollY;
      const itemCenter = itemTop + item.offsetHeight / 2;
      const dist       = Math.abs(viewportCenter - itemCenter);
      if (dist < closestDist) {
        closestDist  = dist;
        activeIndex  = i;
      }
    });

    // Mise à jour des classes
    items.forEach((item, i) =>
      item.classList.toggle('traitements__item--active', i === activeIndex)
    );

    // Déplacer l'indicateur rouge
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const itemTop    = items[activeIndex].getBoundingClientRect().top + window.scrollY;
    lineActive.style.top = (itemTop - sectionTop) + 'px';
  }

  window.addEventListener('scroll', update, { passive: true });
  // État initial après rendu
  requestAnimationFrame(update);
})();

// ── Chirurgies carousel (mobile) ──────────────────────────────
(function () {
  const grid = document.querySelector('.chirurgies__grid');
  const dots = document.querySelectorAll('.chirurgies__dot');

  if (!grid || !dots.length) return;

  function updateDots() {
    const card = grid.querySelector('.chirurgies__card');
    if (!card) return;
    const cardW = card.offsetWidth + 12; // card width + gap
    const index = Math.round(grid.scrollLeft / cardW);
    dots.forEach((dot, i) =>
      dot.classList.toggle('chirurgies__dot--active', i === index)
    );
  }

  grid.addEventListener('scroll', updateDots, { passive: true });
})();

// ── Blog carousel (mobile) ────────────────────────────────────
(function () {
  const grid = document.querySelector('.blog__grid');
  const dots = document.querySelectorAll('.blog__dot');

  if (!grid || !dots.length) return;

  function updateDots() {
    const card = grid.querySelector('.blog__card');
    if (!card) return;
    const cardW = card.offsetWidth + 12;
    const index = Math.round(grid.scrollLeft / cardW);
    dots.forEach((dot, i) =>
      dot.classList.toggle('blog__dot--active', i === index)
    );
  }

  grid.addEventListener('scroll', updateDots, { passive: true });
})();

// ── Pathologies carousel (mobile) ─────────────────────────────
(function () {
  const grid = document.querySelector('.pathologies__grid');
  const dots = document.querySelectorAll('.pathologies__dot');

  if (!grid || !dots.length) return;

  function updateDots() {
    const card = grid.querySelector('.pathologies__card');
    if (!card) return;
    const cardW = card.offsetWidth + 12;
    const index = Math.round(grid.scrollLeft / cardW);
    dots.forEach((dot, i) =>
      dot.classList.toggle('pathologies__dot--active', i === index)
    );
  }

  grid.addEventListener('scroll', updateDots, { passive: true });
})();
