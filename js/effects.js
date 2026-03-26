/* ============================================
   EFFECTS ENGINE
   ============================================ */

// === EYES THAT FOLLOW MOUSE ===
function initEyes() {
  const eyes = document.querySelectorAll('.eye');

  document.addEventListener('mousemove', (e) => {
    eyes.forEach(eye => {
      const pupil = eye.querySelector('.pupil');
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const maxDist = 10;
      const dist = Math.min(
        Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10,
        maxDist
      );

      const x = Math.cos(angle) * dist;
      const y = Math.sin(angle) * dist;

      pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
  });
}

// === VISITOR COUNTER (FAKE, obviously) ===
function initVisitorCounter() {
  const counter = document.getElementById('visitor-count');
  if (!counter) return;

  let count = 48173 + Math.floor(Math.random() * 1000);
  const digits = counter.querySelectorAll('.odo-digit');

  function updateCounter() {
    count += Math.floor(Math.random() * 3);
    const str = count.toString().padStart(digits.length, '0');
    digits.forEach((d, i) => {
      d.textContent = str[i];
    });
  }

  updateCounter();
  setInterval(updateCounter, 3000 + Math.random() * 5000);
}

// === DANCING LETTERS ===
function initDancingLetters() {
  document.querySelectorAll('.dance-text').forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'dance-letter';
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = (i * 0.08) + 's';
      el.appendChild(span);
    });
  });
}

// === INIT ALL EFFECTS ===
document.addEventListener('DOMContentLoaded', () => {
  initEyes();
  initVisitorCounter();
  initDancingLetters();
});
