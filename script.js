// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// Thread glow follows scroll position down the rail
const threadGlow = document.getElementById('threadGlow');
function updateThreadGlow() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
  const rail = window.innerHeight; // rail height equals viewport height (fixed)
  const y = progress * (document.documentElement.scrollHeight - rail);
  if (threadGlow) {
    threadGlow.style.top = Math.min(progress * 100, 100) + '%';
  }
}
window.addEventListener('scroll', updateThreadGlow, { passive: true });
updateThreadGlow();

// Gallery carousel controls
const track = document.getElementById('galleryTrack');
const prevBtn = document.getElementById('galPrev');
const nextBtn = document.getElementById('galNext');
if (track && prevBtn && nextBtn) {
  const scrollAmount = 340;
  prevBtn.addEventListener('click', () => track.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => track.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
}
