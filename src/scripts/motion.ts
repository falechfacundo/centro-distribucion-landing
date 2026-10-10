import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, Flip);

const $ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

const root = document.documentElement;
root.dataset.motion = 'ready';
// sin js-motion (reduced motion o fallback por timeout en Layout) el contenido ya es visible: no animar
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || !root.classList.contains('js-motion');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- static fallbacks (reduced motion) ---------- */
if (reduced) {
  $$('[data-bento]').forEach((el) => el.classList.add('in'));
  $$('[data-count-to]').forEach((el) => (el.textContent = el.dataset.countTo ?? ''));
  $$('.flow-item').forEach((el) => el.classList.add('on'));
  $('[data-flow-fill]')?.style.setProperty('--p', '1');
  $$('.sc-bar i').forEach((el) => el.style.setProperty('--p', '1'));
}

/* ---------- smooth scroll ---------- */
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  document.addEventListener('menu:toggle', (e) => ((e as CustomEvent<boolean>).detail ? lenis!.stop() : lenis!.start()));
}

const scrollToY = (y: number) => (lenis ? lenis.scrollTo(y, { duration: 1.4 }) : window.scrollTo({ top: y, behavior: 'smooth' }));
$$<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href')!;
    const target = id === '#top' ? null : $(id);
    if (id !== '#top' && !target) return;
    e.preventDefault();
    scrollToY(target ? target.getBoundingClientRect().top + scrollY - 20 : 0);
  });
});

/* ---------- nav + progress ---------- */
const nav = $('#nav');
const progress = $('#progress');
const onScroll = () => {
  nav?.classList.toggle('is-stuck', scrollY > 24);
  if (progress) {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? clamp(scrollY / max) : 0})`;
  }
};
onScroll();
addEventListener('scroll', onScroll, { passive: true });

/* ---------- hero: fit + intro ---------- */
const fitEl = $('[data-hero-fit]');
const appEl = $('[data-app]');
function fitHero() {
  if (!fitEl || !appEl) return;
  const w = appEl.offsetWidth;
  const s = Math.min(1, fitEl.clientWidth / w);
  appEl.style.transform = `scale(${s})`;
  appEl.style.left = `${Math.max(0, (fitEl.clientWidth - w * s) / 2)}px`;
  fitEl.style.height = `${appEl.offsetHeight * s}px`;
}
fitHero();
if (fitEl) new ResizeObserver(fitHero).observe(fitEl);
document.fonts?.ready.then(() => {
  fitHero();
  ScrollTrigger.refresh();
});

if (!reduced) {
  gsap.set('[data-hero-in]', { opacity: 0, y: 26 });
  gsap.set(nav, { y: -30, opacity: 0 });
  const stage = $('[data-hero-tilt]');
  if (stage) gsap.set(stage, { rotateX: 24, scale: 0.9, transformOrigin: '50% 0%' });
  if (appEl) gsap.set('.app .card', { opacity: 0, y: 16, scale: 0.94 });

  const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
  intro
    .to(nav, { y: 0, opacity: 1, duration: 1.2 }, 0)
    .to('.split-line > span', { y: 0, duration: 1.5, stagger: 0.13 }, 0.15)
    .to('[data-hero-in]', { opacity: 1, y: 0, duration: 1.3, stagger: 0.1 }, 0.55)
    .add(() => startBoardLoop(), 2.6);
  if (appEl) intro.to('.app .card', { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: { each: 0.06, from: 'start' }, ease: 'power3.out' }, 1.3);

  // tilt flattens while scrolling
  if (stage) gsap.to(stage, {
    rotateX: 0, scale: 1, ease: 'none',
    scrollTrigger: { trigger: '[data-hero-stage]', start: 'top 92%', end: 'top 18%', scrub: 0.6 },
  });

  // subtle pointer tilt
  if (finePointer && fitEl) {
    const rx = gsap.quickTo(fitEl, 'rotateX', { duration: 0.9, ease: 'power3' });
    const ry = gsap.quickTo(fitEl, 'rotateY', { duration: 0.9, ease: 'power3' });
    addEventListener('pointermove', (e) => {
      ry((e.clientX / innerWidth - 0.5) * 3.2);
      rx((0.5 - e.clientY / innerHeight) * 2.4);
    }, { passive: true });
  }

  $$('[data-parallax]').forEach((el) => {
    gsap.to(el, { y: Number(el.dataset.parallax), ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } });
  });
}

/* ---------- hero board: living demo ---------- */
function startBoardLoop() {
  const board = $('[data-board]');
  if (!board || reduced) return;
  const cursor = $('[data-cursor]', board)!;
  const cursor2 = $('[data-cursor2]', board)!;
  const cols = $$('[data-col]', board);
  const cards = $$('[data-card]', board);
  const pct = $('[data-pct]')!;
  const bar = $('[data-bar]')!;
  const counts = $$('[data-count]', board);
  const original = cols.map((c) => Array.from(c.children) as HTMLElement[]);

  let visible = true;
  ScrollTrigger.create({ trigger: '[data-hero-stage]', start: 'top bottom', end: 'bottom top', onToggle: (s) => (visible = s.isActive) });

  const sleep = (s: number) => new Promise<void>((r) => gsap.delayedCall(s, r));
  const to = (target: gsap.TweenTarget, vars: gsap.TweenVars) => new Promise<void>((r) => gsap.to(target, { ...vars, onComplete: r }));
  const until = async () => { while (!visible) await sleep(0.4); };
  const card = (id: string) => cards.find((c) => c.dataset.card === id)!;

  const pos = (el: HTMLElement) => {
    let x = 0, y = 0, n: HTMLElement | null = el;
    while (n && n !== board) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent as HTMLElement | null; }
    return { x, y };
  };
  const grabPoint = (el: HTMLElement) => { const p = pos(el); return { x: p.x + el.offsetWidth * 0.5, y: p.y + 30 }; };

  function refresh(animate = true) {
    cols.forEach((c, i) => (counts[i].textContent = String(c.children.length)));
    const done = cols[3].children.length;
    const total = cards.length;
    const v = Math.round((done / total) * 100);
    const o = { v: parseInt(pct.textContent ?? '0', 10) };
    if (animate) gsap.to(o, { v, duration: 0.8, ease: 'power2.out', onUpdate: () => (pct.textContent = `${Math.round(o.v)}%`) });
    else pct.textContent = `${v}%`;
    gsap.to(bar, { width: `${v}%`, duration: animate ? 0.9 : 0, ease: 'power3.out' });
    cards.forEach((c) => c.classList.toggle('done', c.parentElement === cols[3]));
  }

  async function move(id: string, colIndex: number, who: HTMLElement) {
    const c = card(id);
    const start = grabPoint(c);
    await to(who, { x: start.x, y: start.y, opacity: 1, duration: 1.15, ease: 'power3.inOut' });
    gsap.to(who.querySelector('svg'), { scale: 0.82, duration: 0.14, transformOrigin: '0 0' });
    c.classList.add('lifted');
    await sleep(0.35);

    const state = Flip.getState(cards);
    cols[colIndex].prepend(c);
    const end = grabPoint(c);
    Flip.from(state, { duration: 1, ease: 'power3.inOut', nested: true });
    await to(who, { x: end.x, y: end.y, duration: 1, ease: 'power3.inOut' });

    c.classList.remove('lifted');
    gsap.to(who.querySelector('svg'), { scale: 1, duration: 0.3, ease: 'back.out(3)' });
    refresh();
    if (colIndex === 3) {
      const ring = document.createElement('div');
      ring.className = 'drop-ring';
      const p = pos(c);
      ring.style.left = `${p.x + c.offsetWidth / 2}px`;
      ring.style.top = `${p.y + c.offsetHeight / 2}px`;
      board!.appendChild(ring);
      setTimeout(() => ring.remove(), 1000);
    }
    await sleep(0.55);
  }

  function reset() {
    const state = Flip.getState(cards);
    original.forEach((list, i) => list.forEach((el) => cols[i].appendChild(el)));
    Flip.from(state, { duration: 0.8, ease: 'power3.inOut', nested: true });
    refresh();
  }

  function wander() {
    const w = board!.offsetWidth, h = board!.offsetHeight;
    gsap.to(cursor2, {
      x: 60 + Math.random() * (w - 200), y: 90 + Math.random() * (h - 220),
      opacity: 0.95, duration: 2.2 + Math.random() * 1.6, ease: 'sine.inOut',
      onComplete: () => { gsap.delayedCall(0.6 + Math.random() * 1.4, wander); },
    });
  }
  gsap.set(cursor2, { x: board.offsetWidth * 0.78, y: 120 });
  wander();
  refresh(false);

  (async function loop() {
    await sleep(1.2);
    for (;;) {
      await until();
      await move('gh', 2, cursor);
      await until();
      await move('gh', 3, cursor);
      await sleep(0.5);
      await until();
      await move('scope', 1, cursor);
      await sleep(0.9);
      await to(cursor, { opacity: 0, duration: 0.5 });
      await sleep(0.6);
      reset();
      await sleep(2.2);
    }
  })();
}

/* ---------- reveals ---------- */
if (!reduced) {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 89%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.09, overwrite: true }),
  });
}

/* ---------- spotlight + magnetic ---------- */
if (finePointer) {
  $$('.spot').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
  if (!reduced) {
    $$('[data-magnetic]').forEach((el) => {
      const x = gsap.quickTo(el, 'x', { duration: 0.7, ease: 'elastic.out(1, 0.6)' });
      const y = gsap.quickTo(el, 'y', { duration: 0.7, ease: 'elastic.out(1, 0.6)' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        x((e.clientX - (r.left + r.width / 2)) * 0.28);
        y((e.clientY - (r.top + r.height / 2)) * 0.4);
      });
      el.addEventListener('pointerleave', () => { x(0); y(0); });
    });
  }
}

/* ---------- showcase (pinned scroll) ---------- */
(function showcase() {
  const root = $('[data-showcase]');
  if (!root) return;
  const steps = $$<HTMLButtonElement>('[data-step]', root);
  const label = $('[data-sc-label]', root);
  const names = (label?.dataset.names ?? '').split('|');
  const prefix = label?.dataset.prefix ?? '';
  let current = -1;

  const setStep = (i: number) => {
    if (i === current) return;
    current = i;
    root.setAttribute('data-active', String(i));
    steps.forEach((s, k) => s.setAttribute('aria-selected', String(k === i)));
    if (label) label.textContent = `${prefix} · ${names[i]}`;
  };
  setStep(0);

  if (reduced) {
    steps.forEach((s, i) => s.addEventListener('click', () => setStep(i)));
    return;
  }

  const mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', () => {
    const sticky = $('[data-sc-sticky]', root)!;
    const st = ScrollTrigger.create({
      trigger: sticky,
      start: 'center center',
      end: () => `+=${innerHeight * 3}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const p = self.progress * 4;
        const i = Math.min(3, Math.floor(p));
        setStep(i);
        steps.forEach((s, k) => s.querySelector<HTMLElement>('.sc-bar i')?.style.setProperty('--p', String(k < i ? 1 : k === i ? clamp(p - i) : 0)));
      },
    });
    const handlers = steps.map((s, i) => {
      const fn = () => scrollToY(st.start + ((i + 0.5) / 4) * (st.end - st.start));
      s.addEventListener('click', fn);
      return [s, fn] as const;
    });
    return () => handlers.forEach(([s, fn]) => s.removeEventListener('click', fn));
  });
  mm.add('(max-width: 1023px)', () => {
    steps.forEach((s) => s.querySelector<HTMLElement>('.sc-bar i')?.style.setProperty('--p', '1'));
    const handlers = steps.map((s, i) => {
      const fn = () => setStep(i);
      s.addEventListener('click', fn);
      return [s, fn] as const;
    });
    return () => handlers.forEach(([s, fn]) => s.removeEventListener('click', fn));
  });
})();

/* ---------- bento ---------- */
$$('[data-bento]').forEach((card) => {
  if (reduced) return;
  ScrollTrigger.create({
    trigger: card, start: 'top 82%', once: true,
    onEnter: () => {
      card.classList.add('in');
      $$('[data-count-to]', card).forEach((el) => {
        const o = { v: 0 };
        gsap.to(o, { v: Number(el.dataset.countTo), duration: 1.8, delay: 0.2, ease: 'expo.out', onUpdate: () => (el.textContent = String(Math.round(o.v))) });
      });
    },
  });
});

const timer = $('[data-timer]');
if (timer) {
  let secs = Number(timer.dataset.timer);
  const fmt = (n: number) => String(n).padStart(2, '0');
  setInterval(() => {
    secs++;
    timer.textContent = `${fmt(Math.floor(secs / 3600))}:${fmt(Math.floor((secs % 3600) / 60))}:${fmt(secs % 60)}`;
  }, 1000);
}

/* ---------- flow ---------- */
(function flow() {
  const wrap = $('[data-flow-steps]');
  const fill = $('[data-flow-fill]');
  if (!wrap || !fill || reduced) return;
  const items = $$('[data-flow-item]', wrap);
  ScrollTrigger.create({
    trigger: wrap, start: 'top 72%', end: 'bottom 62%', scrub: 0.4,
    onUpdate: (self) => {
      fill.style.setProperty('--p', String(self.progress));
      items.forEach((it, i) => it.classList.toggle('on', self.progress >= (matchMedia('(max-width: 899px)').matches ? (i + 0.15) / items.length : i / items.length + 0.02)));
    },
  });
})();

/* ---------- cta ---------- */
(function cta() {
  const root = $('[data-cta]');
  if (!root || reduced) return;
  const a = $('[data-cta-leaf="a"]', root)!, b = $('[data-cta-leaf="b"]', root)!, c = $('[data-cta-leaf="c"]', root)!;
  gsap.set([a, b, c], { opacity: 0 });
  const tl = gsap.timeline({ paused: true, defaults: { duration: 1.5, ease: 'expo.out' } });
  tl.fromTo(b, { x: -160, opacity: 0 }, { x: 0, opacity: 1 }, 0)
    .fromTo(a, { x: 140, y: -70, opacity: 0 }, { x: 0, y: 0, opacity: 1 }, 0.12)
    .fromTo(c, { x: 140, y: 70, opacity: 0 }, { x: 0, y: 0, opacity: 1 }, 0.24)
    .add(() => {
      gsap.to(a, { x: 10, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to(c, { x: 10, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to(b, { x: -8, duration: 2.9, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    });
  ScrollTrigger.create({ trigger: root, start: 'top 65%', once: true, onEnter: () => tl.play() });
})();

addEventListener('load', () => ScrollTrigger.refresh());
