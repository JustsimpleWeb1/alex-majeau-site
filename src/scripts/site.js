/* Interactions du site (reprises du prototype). */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Calendrier d'octobre 2026 (le 1er tombe un jeudi; l'Action de grâce est le lundi 12)
  var cal = document.getElementById("cal");
  if (cal) {
  for (var b = 0; b < 3; b++) cal.insertAdjacentHTML("beforeend", "<span></span>");
  for (var d = 1; d <= 31; d++) {
    var dow = (d + 2) % 7; // 0 = lundi
    var off = dow >= 5 || d === 12;
    var cls = d === 7 ? "d sel" : (off ? "d off" : "d on");
    cal.insertAdjacentHTML("beforeend", '<span class="' + cls + '">' + d + "</span>");
  }
  cal.addEventListener("click", function (e) {
    var t = e.target;
    if (!t.classList.contains("on") && !t.classList.contains("sel")) return;
    cal.querySelectorAll(".sel").forEach(function (x) { x.classList.remove("sel"); x.classList.add("on"); });
    t.classList.remove("on"); t.classList.add("sel");
  });
  document.getElementById("slots").addEventListener("click", function (e) {
    if (!e.target.classList.contains("slot")) return;
    this.querySelectorAll(".slot").forEach(function (x) { x.classList.remove("sel"); });
    e.target.classList.add("sel");
  });
  }

  // En-tête : bordure au défilement
  var header = document.getElementById("header");
  var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-reveal]").forEach(function (el) { el.classList.add("is-in"); });
    return;
  }

  // Apparition au défilement
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });

  // Jargon : bascule et traduction sur place
  var jgCard = document.getElementById("jg-card");
  if (jgCard) {
    var jgBtns = jgCard.querySelectorAll("[data-jg]"), jgTouched = false, jgMode = "jargon";
    var glyphs = "abcdefghijklmnopqrstuvwxyz";
    var says = jgCard.querySelectorAll("[data-scramble]");
    // La vraie phrase reste en place (invisible) et fixe la hauteur ; le brouillage est dessiné par-dessus
    says.forEach(function (el) {
      var txt = el.textContent;
      el.textContent = "";
      var real = document.createElement("span"); real.className = "real"; real.textContent = txt;
      var scr = document.createElement("span"); scr.className = "scr"; scr.setAttribute("aria-hidden", "true");
      el.appendChild(real); el.appendChild(scr);
      el._txt = txt; el._run = 0;
    });
    var scramble = function (el, delay) {
      var txt = el._txt, scr = el.querySelector(".scr"), run = ++el._run;
      if (reduce) return;
      var dur = 700, t0 = null;
      el.classList.add("is-scr");
      var step = function (now) {
        if (run !== el._run) return;
        if (t0 === null) t0 = now + delay;
        var p = Math.max(0, Math.min(1, (now - t0) / dur)), n = Math.floor(txt.length * p), out = txt.slice(0, n);
        for (var i = n; i < txt.length; i++) out += /\s/.test(txt[i]) ? txt[i] : glyphs[(Math.random() * glyphs.length) | 0];
        scr.textContent = out;
        if (p < 1) requestAnimationFrame(step);
        else { el.classList.remove("is-scr"); scr.textContent = ""; }
      };
      requestAnimationFrame(step);
    };
    var jgSet = function (mode) {
      if (mode === jgMode) return;
      jgMode = mode;
      jgBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.jg === mode)); });
      jgCard.classList.toggle("is-fr", mode === "fr");
      says.forEach(function (el, i) {
        if (mode === "fr") scramble(el, 160 + i * 110);
        else { el._run++; el.classList.remove("is-scr"); el.querySelector(".scr").textContent = ""; }
      });
    };
    jgBtns.forEach(function (b) { b.addEventListener("click", function () { jgTouched = true; jgSet(b.dataset.jg); }); });
    new IntersectionObserver(function (e, obs) {
      if (!e[e.length - 1].isIntersecting) return;
      obs.disconnect();
      setTimeout(function () { if (!jgTouched) jgSet("fr"); }, reduce ? 0 : 2200);
    }, { threshold: 0.5 }).observe(jgCard);
  }

  // Chiffres qui montent
  var counters = document.querySelectorAll("[data-count]");
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      co.unobserve(en.target);
      var el = en.target, target = +el.dataset.count, before = el.dataset.before || "", unit = el.querySelector("small"), small = unit ? unit.outerHTML : "";
      if (reduce) return;
      var t0 = null, dur = 1400;
      var tick = function (ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
        el.innerHTML = before + Math.round(target * eased) + small;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  counters.forEach(function (el) { co.observe(el); });

})();
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---- Canevas réactif du hero : grille de points, balayage et curseur ---- */
  var hero = document.querySelector(".hero");
  var cv = document.getElementById("heroCanvas");
  if (hero && cv && cv.getContext) {
    hero.classList.add("has-canvas");
    var ctx = cv.getContext("2d"), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, pts = [], gap = 30, mx = -9999, my = -9999, tx = -9999, ty = -9999, running = false, visible = true, t0 = performance.now();
    var resize = function () {
      var r = hero.getBoundingClientRect(); W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = [];
      for (var y = gap / 2; y < H; y += gap) for (var x = gap / 2; x < W; x += gap) {
        var dx = (x - W * .3) / (W * .7), dy = (y - H * .4) / (H * .6);
        var fade = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy));
        if (fade > .02) pts.push([x, y, fade]);
      }
      draw(performance.now());
    };
    var draw = function (now) {
      ctx.clearRect(0, 0, W, H);
      mx += (tx - mx) * .12; my += (ty - my) * .12;
      var scan = reduce ? -999 : ((now - t0) * .045) % (H + 200) - 100;
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i], dx = p[0] - mx, dy = p[1] - my, d = Math.sqrt(dx * dx + dy * dy);
        var f = Math.max(0, 1 - d / 170), s = Math.max(0, 1 - Math.abs(p[1] - scan) / 38);
        var a = (.16 + f * .6 + s * .22) * p[2];
        var r = 1.1 + f * 2.8 + s * .6;
        if (f > .62) { ctx.fillStyle = "rgba(58, 168, 255," + Math.min(1, (f - .62) * 3.2) + ")"; ctx.beginPath(); ctx.arc(p[0], p[1], r + 2.5, 0, 6.2832); ctx.fill(); }
        ctx.fillStyle = "rgba(16,19,17," + a.toFixed(3) + ")";
        ctx.beginPath(); ctx.arc(p[0], p[1], r, 0, 6.2832); ctx.fill();
      }
    };
    var loop = function (now) { if (!running) return; draw(now); requestAnimationFrame(loop); };
    var start = function () { if (reduce || running || !visible || document.hidden) return; running = true; requestAnimationFrame(loop); };
    var stop = function () { running = false; };
    if (finePointer) {
      hero.addEventListener("mousemove", function (e) { var r = hero.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top; if (mx < -999) { mx = tx; my = ty; } });
      hero.addEventListener("mouseleave", function () { tx = -9999; ty = -9999; });
    }
    if ("IntersectionObserver" in window) new IntersectionObserver(function (e) { visible = e[e.length - 1].isIntersecting; visible ? start() : stop(); }).observe(hero);
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
    window.addEventListener("resize", resize);
    resize(); start();
  }

  /* ---- Parallaxe de la photo, ligne de la méthode ---- */
  var photo = document.querySelector(".hero-photo");
  var steps = document.querySelector(".steps");
  var onScroll = function () {
    if (photo && !reduce && scrollY < innerHeight * 1.2) photo.style.translate = "0 " + (scrollY * .08).toFixed(1) + "px";
    if (steps) {
      var items = steps.querySelectorAll("li"), last = items[items.length - 1];
      var top = steps.getBoundingClientRect().top + 23, maxFill = last.offsetTop;
      var fill = Math.max(0, Math.min(maxFill, innerHeight * .6 - top));
      steps.style.setProperty("--fill", fill.toFixed(1) + "px");
      items.forEach(function (li) { li.classList.toggle("lit", li.offsetTop <= fill + 1); });
    }
  };
  addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", onScroll); onScroll();

  if (!("IntersectionObserver" in window)) return;

  /* ---- Navigation active et indicateur de section ---- */
  var names = { services: ["01", "Services"], resultats: ["02", "Résultats"], methode: ["03", "Méthode"], apropos: ["04", "À propos"], faq: ["05", "FAQ"], contact: ["06", "Réservation"] };
  var links = document.querySelectorAll(".nav ul a");
  var ro = document.getElementById("readout"), roIdx = document.getElementById("ro-idx"), roName = document.getElementById("ro-name");
  var order = Object.keys(names);
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var id = en.target.id;
      links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + id); });
      if (ro && names[id]) {
        roIdx.textContent = names[id][0];
        roName.textContent = names[id][1];
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  order.forEach(function (id) { var el = document.getElementById(id); if (el) spy.observe(el); });
  var heroEl = document.getElementById("top");
  if (ro && heroEl) new IntersectionObserver(function (e) {
    var past = !e[e.length - 1].isIntersecting;
    ro.classList.toggle("show", past);
    if (!past) links.forEach(function (a) { a.classList.remove("active"); });
  }, { threshold: .15 }).observe(heroEl);

  /* ---- Requête Google tapée en direct ---- */
  var typed = document.querySelector(".typed"), search = document.querySelector(".ui-search");
  if (typed && search) {
    if (reduce) { typed.classList.add("done"); search.classList.add("show-ad"); }
    else {
      typed.textContent = "";
      new IntersectionObserver(function (e, obs) {
        if (!e[e.length - 1].isIntersecting) return;
        obs.disconnect();
        var txt = typed.dataset.text, i = 0;
        setTimeout(function tick() {
          typed.textContent = txt.slice(0, ++i);
          if (i < txt.length) setTimeout(tick, 45 + Math.random() * 50);
          else setTimeout(function () { typed.classList.add("done"); search.classList.add("show-ad"); }, 350);
        }, 500);
      }, { threshold: .6 }).observe(search);
    }
  }

  /* ---- Chiffres du rapport qui montent ---- */
  var sep = document.documentElement.lang.indexOf("en") === 0 ? "," : "\u00a0";
  var fmt = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep); };
  var kpis = document.querySelectorAll(".kpis b[data-to]");
  if (kpis.length && !reduce) {
    new IntersectionObserver(function (e, obs) {
      if (!e[e.length - 1].isIntersecting) return;
      obs.disconnect();
      kpis.forEach(function (b) {
        var to = +b.dataset.to, pre = b.dataset.pre || "", suf = b.dataset.suf.replace("&nbsp;", " "), t0 = null, dur = 1500;
        var tick = function (ts) { if (!t0) t0 = ts; var p = Math.min((ts - t0) / dur, 1), v = Math.round(to * (1 - Math.pow(1 - p, 3))); b.textContent = pre + fmt(v) + suf; if (p < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      });
    }, { threshold: .5 }).observe(document.querySelector(".report"));
  }
})();
(function () {
  // Menu mobile : ouverture, fermeture, clavier
  var btn = document.getElementById("menu-btn"), menu = document.getElementById("mnav");
  if (!btn || !menu) return;
  var closeBtn = menu.querySelector(".mnav-close");
  var focusables = function () { return menu.querySelectorAll("a[href], button"); };
  var open = function () {
    menu.classList.add("open"); menu.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
    setTimeout(function () { closeBtn.focus(); }, 60);
  };
  var close = function (restore) {
    if (!menu.classList.contains("open")) return;
    menu.classList.remove("open"); menu.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
    if (restore) btn.focus();
  };
  btn.addEventListener("click", open);
  closeBtn.addEventListener("click", function () { close(true); });
  menu.querySelectorAll("a[href*='#']").forEach(function (a) { a.addEventListener("click", function () { close(false); }); });
  document.addEventListener("keydown", function (e) {
    if (!menu.classList.contains("open")) return;
    if (e.key === "Escape") { close(true); return; }
    if (e.key !== "Tab") return;
    var f = focusables(), first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  window.addEventListener("resize", function () { if (window.innerWidth > 960) close(false); });
})();
