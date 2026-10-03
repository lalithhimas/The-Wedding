(function () {
  const W = window.WEDDING || {};
  const $ = (id) => document.getElementById(id);
  const text = (id, value) => { const el = $(id); if (el) el.textContent = value || ""; };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

  /* ---------- Fill content ---------- */
  document.title = `${W.groom} & ${W.bride} — Wedding Invitation`;
  text("heroGroom", W.groom); text("heroBride", W.bride);
  text("heroDate", W.weddingDateText);
  text("hostLine", W.hostLine);
  text("inviteLine", W.inviteLine);
  text("nameGroom", W.groom); text("nameBride", W.bride);
  text("groomParents", W.groomParents); text("brideParents", W.brideParents);
  text("closeGroom", W.groom); text("closeBride", W.bride);

  /* ---------- Painting stories: pinned painting, zoom into the figure, blur the rest ---------- */
  const storiesWrap = $("stories");
  const stories = [];
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const ease = (t) => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;

  function buildStory(key, name, parents) {
    const src = W[key + "Image"];
    if (!src) return;
    const focus = Object.assign({ x: .5, y: .5, size: .5 }, W[key + "Focus"] || {});
    const sec = document.createElement("section");
    sec.className = "story"; sec.id = key;
    sec.setAttribute("aria-label", name);
    // Mask that keeps the figure sharp: an ellipse around the focus point, in picture coordinates
    sec.innerHTML = `
      <div class="story-stage">
        <div class="story-ambient"></div>
        <div class="story-canvas">
          <img class="story-sharp" alt="">
          <img class="story-blur" alt="" aria-hidden="true">
          <img class="story-focus" alt="" aria-hidden="true">
        </div>
        <div class="panel story-card">
          <p class="person-name"></p>
          <p class="lead"></p>
        </div>
      </div>
      ${W[key + "Caption"] ? '<p class="story-caption"></p>' : ""}`;
    const imgs = sec.querySelectorAll(".story-canvas img");
    imgs.forEach((im) => (im.src = src));
    imgs[0].alt = W[key + "ImageAlt"] || name;
    sec.querySelector(".story-ambient").style.backgroundImage = `url("${src}")`;
    sec.querySelector(".person-name").textContent = name;
    sec.querySelector(".story-card .lead").textContent = parents || "";
    const cap = sec.querySelector(".story-caption");
    if (cap) cap.textContent = W[key + "Caption"];
    storiesWrap.appendChild(sec);

    const st = {
      sec, focus,
      stage: sec.querySelector(".story-stage"),
      canvas: sec.querySelector(".story-canvas"),
      blur: sec.querySelector(".story-blur"),
      sharpFocus: sec.querySelector(".story-focus"),
      card: sec.querySelector(".story-card"),
      iw: 0, ih: 0
    };
    imgs[0].addEventListener("load", () => {
      st.iw = imgs[0].naturalWidth; st.ih = imgs[0].naturalHeight;
      st.canvas.style.width = st.iw + "px"; st.canvas.style.height = st.ih + "px";
      const ry = focus.size * 62;                      // % of picture height
      const rx = ry * 0.8 * st.ih / st.iw;             // % of picture width
      const m = `radial-gradient(ellipse ${rx}% ${ry}% at ${focus.x*100}% ${focus.y*100}%, #000 55%, rgba(0,0,0,.5) 78%, transparent 100%)`;
      st.sharpFocus.style.webkitMaskImage = m; st.sharpFocus.style.maskImage = m;
      render(st);
    });
    if (imgs[0].complete && imgs[0].naturalWidth) imgs[0].dispatchEvent(new Event("load"));
    stories.push(st);
  }

  function render(st) {
    if (!st.iw) return;
    const vw = st.stage.clientWidth, vh = st.stage.clientHeight;
    const r = st.sec.getBoundingClientRect();
    const p = reduceMotion ? 1 : clamp01(-r.top / (r.height - vh));
    const z = reduceMotion ? 1 : ease(clamp01((p - .2) / .42));   // zoom progress
    const c = reduceMotion ? 1 : clamp01((p - .56) / .14);        // name card
    const mobile = vw < 760;
    const { x: fx, y: fy, size } = st.focus;

    // Start: whole painting fitted on screen. End: figure fills most of the height.
    const s0 = Math.min(vw * .92 / st.iw, vh * .86 / st.ih);
    const s1 = Math.max(s0 * 1.2, (vh * (mobile ? .58 : .82)) / (size * st.ih));
    const s = s0 * Math.pow(s1 / s0, z);
    const f0x = (vw - st.iw * s0) / 2 + fx * st.iw * s0;
    const f0y = (vh - st.ih * s0) / 2 + fy * st.ih * s0;
    const f1x = mobile ? vw * .5 : vw * .33;
    const f1y = mobile ? vh * .36 : vh * .5;
    const tx = f0x + (f1x - f0x) * z - fx * st.iw * s;
    const ty = f0y + (f1y - f0y) * z - fy * st.ih * s;
    st.canvas.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
    st.blur.style.opacity = z;
    st.canvas.style.boxShadow = `0 20px 60px rgba(0,0,0,${(.5 * (1 - z)).toFixed(3)})`;
    st.sharpFocus.style.opacity = z;
    st.card.style.opacity = c;
    const lift = (1 - c) * 30;
    st.card.style.transform = mobile ? `translateY(${lift}px)` : `translateY(calc(-50% + ${lift}px))`;
  }

  buildStory("groom", W.groom, W.groomParents);
  buildStory("bride", W.bride, W.brideParents);
  let storyTick = false;
  const renderAll = () => { stories.forEach(render); storyTick = false; };
  addEventListener("scroll", () => { if (!storyTick) { storyTick = true; requestAnimationFrame(renderAll); } }, { passive: true });
  addEventListener("resize", renderAll);

  /* ---------- Events ---------- */
  const flourish = (cls) =>
    `<svg class="${cls}" viewBox="0 0 64 28" aria-hidden="true"><path d="M32 2c4 6 10 9 18 8-4 4-10 5-14 4 3 3 4 7 2 12-2-4-4-6-6-7-2 1-4 3-6 7-2-5-1-9 2-12-4 1-10 0-14-4 8 1 14-2 18-8Z"/></svg>`;
  const evWrap = $("events");
  (W.events || []).forEach((ev) => {
    const link = ev.mapLink || mapsUrl(ev.venue);
    const el = document.createElement("article");
    el.className = "event reveal";
    el.innerHTML = `
      <div class="gold-frame">${flourish("crest")}<img src="${ev.image}" alt="${ev.name}" loading="lazy">${flourish("foot")}</div>
      <h3></h3>
      <p class="ev-date"></p><p class="ev-time"></p><p class="ev-venue"></p>
      <a target="_blank" rel="noopener">See the route</a>`;
    el.querySelector("h3").textContent = ev.name;
    el.querySelector(".ev-date").textContent = ev.date;
    el.querySelector(".ev-time").textContent = ev.time;
    el.querySelector(".ev-venue").textContent = ev.venue;
    el.querySelector("a").href = link;
    evWrap.appendChild(el);
  });

  /* ---------- Map ---------- */
  const v = W.venue || {};
  const q = [v.name, v.address].filter(Boolean).join(", ");
  text("venueText", q);
  $("map").src = "https://maps.google.com/maps?q=" + encodeURIComponent(q) + "&z=15&output=embed";
  $("mapBtn").href = v.mapLink || mapsUrl(q);

  /* ---------- Gallery slideshow ---------- */
  const slides = $("slides"), dots = $("dots");
  const imgs = (W.gallery || []).map((src, i) => {
    const img = document.createElement("img");
    img.src = src; img.alt = `Photo ${i + 1} of ${W.groom} and ${W.bride}`;
    img.loading = i === 0 ? "eager" : "lazy";
    slides.appendChild(img);
    const dot = document.createElement("button");
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Show photo ${i + 1}`);
    dot.addEventListener("click", () => { show(i); restart(); });
    dots.appendChild(dot);
    return img;
  });
  let current = 0, timer;
  function show(i) {
    if (!imgs.length) return;
    current = (i + imgs.length) % imgs.length;
    imgs.forEach((im, k) => im.classList.toggle("active", k === current));
    [...dots.children].forEach((d, k) => d.setAttribute("aria-selected", k === current));
  }
  function restart() {
    clearInterval(timer);
    if (!reduceMotion && imgs.length > 1) timer = setInterval(() => show(current + 1), 4000);
  }
  show(0); restart();
  let startX = null;
  slides.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
  slides.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { show(current + (dx < 0 ? 1 : -1)); restart(); }
    startX = null;
  });
  if (!imgs.length) $("gallery").remove();

  /* ---------- RSVP / Instagram ---------- */
  const r = W.rsvp || {};
  $("rsvpBtn").href = `https://wa.me/${(r.whatsapp || "").replace(/\D/g, "")}?text=${encodeURIComponent(r.message || "")}`;
  const ig = W.instagram || {};
  text("hashtag", ig.hashtag);
  if (ig.url) $("instaBtn").href = ig.url; else $("insta").remove();

  /* ---------- Things to know ---------- */
  const know = $("knowList");
  (W.thingsToKnow || []).forEach((t) => {
    const d = document.createElement("div");
    const dt = document.createElement("dt"); dt.textContent = t.title;
    const dd = document.createElement("dd"); dd.textContent = t.text;
    d.append(dt, dd); know.appendChild(d);
  });
  if (!know.children.length) $("know").remove();

  /* ---------- Countdown ---------- */
  const target = new Date(W.weddingDate).getTime();
  const cd = $("countdown");
  function tick() {
    if (isNaN(target)) { cd.remove(); return; }
    let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
    if (s === 0) { cd.innerHTML = `<p class="lead">The celebrations have begun!</p>`; return; }
    const parts = [["days", 86400], ["hours", 3600], ["minutes", 60], ["seconds", 1]].map(([label, n]) => {
      const val = Math.floor(s / n); s -= val * n; return `<div><b>${val}</b><span>${label}</span></div>`;
    });
    cd.innerHTML = parts.join("");
  }
  tick(); setInterval(tick, 1000);

  /* ---------- Reveal events on scroll ---------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.2 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));

  /* ---------- Cow procession walks with the scroll ---------- */
  const track = $("cowsTrack");
  if (track && !reduceMotion) {
    let ticking = false;
    const move = () => {
      const rect = track.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < innerHeight) track.style.backgroundPositionX = `${-scrollY * 0.6}px`;
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(move); } }, { passive: true });
    move();
  }

  /* ---------- Falling petals ---------- */
  function petals() {
    const c = $("petals"); if (!c || W.petals === false || reduceMotion) return;
    const ctx = c.getContext("2d");
    const colors = ["#c8243b", "#e04a62", "#f28aa0", "#b3122e", "#f6b3c0"];
    let w, h, list = [];
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize(); addEventListener("resize", resize);
    const count = Math.round(Math.min(46, w / 28));
    const make = (top) => ({
      x: Math.random() * w, y: top ? Math.random() * h : -20,
      s: 6 + Math.random() * 9, vy: .5 + Math.random() * 1.1, vx: -.3 + Math.random() * .6,
      a: Math.random() * Math.PI * 2, va: -.03 + Math.random() * .06,
      sway: Math.random() * Math.PI * 2, color: colors[(Math.random() * colors.length) | 0]
    });
    for (let i = 0; i < count; i++) list.push(make(true));
    let visible = true;
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(c);
    (function frame() {
      if (visible) {
        ctx.clearRect(0, 0, w, h);
        list.forEach((p, i) => {
          p.sway += .02; p.y += p.vy; p.x += p.vx + Math.sin(p.sway) * .6; p.a += p.va;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a);
          ctx.scale(1, Math.abs(Math.cos(p.sway)) * .6 + .4);
          ctx.fillStyle = p.color; ctx.globalAlpha = .9;
          ctx.beginPath();
          ctx.moveTo(0, -p.s);
          ctx.bezierCurveTo(p.s * .9, -p.s * .6, p.s * .7, p.s * .7, 0, p.s);
          ctx.bezierCurveTo(-p.s * .7, p.s * .7, -p.s * .9, -p.s * .6, 0, -p.s);
          ctx.fill(); ctx.restore();
          if (p.y > h + 20) list[i] = make(false);
        });
      }
      requestAnimationFrame(frame);
    })();
  }
  petals();

  /* ---------- Music ---------- */
  if (W.music) {
    const audio = $("music"), btn = $("musicBtn");
    audio.src = W.music; btn.hidden = false;
    btn.addEventListener("click", () => {
      if (audio.paused) { audio.play(); btn.classList.add("playing"); btn.setAttribute("aria-label", "Pause music"); }
      else { audio.pause(); btn.classList.remove("playing"); btn.setAttribute("aria-label", "Play music"); }
    });
  }
})();
