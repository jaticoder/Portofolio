// ===== PROJECT: folder ala Windows Explorer =====
// Tiap folder punya daftar isi ("items"). Mau tambah karya? Salin satu blok { ... } di dalam items, jangan lupa koma.
// Satu karya bisa punya banyak gambar: isi "gallery" (lihat contoh Ojol Rush), maka popup-nya jadi galeri yang bisa digeser.
// Mau tambah folder baru? Salin satu blok folder, tempel di bawahnya. Kalau foldernya lebih dari 3, barisnya otomatis bisa digeser ke kanan.
// Semua judul dan deskripsi di bawah ini draf dariku, silakan ganti dengan tulisanmu sendiri.
const designTools = ["Picsart", "Canva", "Ibis Paint X"];

// Logo untuk pill "Tools Used" di halaman detail. Kunci = nama persis seperti di field "tools" tiap karya.
// src = file logo, fb = huruf cadangan kalau file-nya belum ada, c = warna huruf cadangan.
const toolLogos = {
  "Unity":        { src: "assets/tech/unity.png",         fb: "U",  c: "#222" },
  "C#":           { src: "assets/tech/csharp.png",        fb: "C#", c: "#5b46e0" },
  "C++":          { src: "assets/tech/cpp.png",           fb: "C+", c: "#00599c" },
  "Kotlin":       { src: "assets/tech/kotlin.png",        fb: "Kt", c: "#7f52ff" },
  "JavaScript":   { src: "assets/tech/javascript.png",    fb: "JS", c: "#b59800" },
  "Node.js":      { src: "assets/tech/nodejs.png",        fb: "No", c: "#3c873a" },
  "Android Studio": { src: "assets/tech/androidstudio.png", fb: "AS", c: "#3ddc84" },
  "VS Code":      { src: "assets/tools/vscode.png",       fb: "VS", c: "#0a7acc" },
  "Antigravity":  { src: "assets/tools/antigravity.png",  fb: "AG", c: "#3b82f6" },
  "Canva":        { src: "assets/tools/canva.png",        fb: "Ca", c: "#00a3ad" },
  "Picsart":      { src: "assets/tools/picsart.png",      fb: "Pa", c: "#b3139b" },
  "PixelLab":     { src: "assets/tools/pixellab.png",     fb: "PL", c: "#e8590c" },
  "Alight Motion": { src: "assets/tools/alightmotion.png", fb: "AM", c: "#0a84c6" },
  "CapCut":       { src: "assets/tools/capcut.png",       fb: "CC", c: "#222222" },
  "Ibis Paint X": { src: "assets/tools/ibispaint.png",    fb: "iP", c: "#e5383b" }
};

const folders = [
    {
    name: "Game",
    items: [
      {
        title: "Ojol Rush",
        badge: "In development",
        desc: "A 2D top-down endless dodger: avoid obstacles for as long as you can.",
        tools: ["Unity", "C#"],
        thumb: "assets/ojol-rush.png",   // gambar kartu di jendela folder
        ratio: "4 / 5",                 // rasio gambar kartu (screenshot gamemu 9:16), supaya tidak terpotong
        // Galeri di dalam popup: screenshot dan GIF yang bisa digeser. Mau tambah? Salin satu blok { ... }.
        // thumb = gambar kecil di bawah popup, src = gambar besar (boleh .gif), desc boleh dikosongkan.
        gallery: [
          { caption: "Logo", thumb: "assets/ojol-rush.png", src: "assets/ojol-rush.png" },
          {
            caption: "Gameplay",
            desc: "Weaving through highway traffic on a motorbike. Dodge the trucks, collect coins, and keep your score multiplier going.",
            thumb: "assets/game/gameplay-thumb.jpg",
            src: "assets/game/gameplay.gif"
          },
          {
            caption: "Main Menu",
            desc: "The main menu, with buttons for playing, the shop, credits, and exiting.",
            thumb: "assets/game/mainmenu-thumb.jpg",
            src: "assets/game/mainmenu.jpg"
          },
          {
            caption: "Garage",
            desc: "The garage, where you browse locked motorbikes and unlock new ones with the coins you've earned.",
            thumb: "assets/game/garage-thumb.jpg",
            src: "assets/game/garage.jpg"
          }
        ],
        features: [
          "Endless dodging down a multi-lane highway",
          "Score multiplier that climbs the longer you survive",
          "Collect Rp coins along the road",
          "Three helmets as lives, with a local highscore",
          "Garage shop to unlock new motorbikes and maps with your coins"
        ],
        itch: "",
        github: ""
      }
    ]
  },
  {
    name: "Graphic Design",
    items: [
      {
        title: "Thuram",
        badge: "Poster",
        desc: "Thuram (Inter Milan) poster on a lavender background with a big dark-blue circle. A brush-style title across the top, with touches of the French flag colors in the corners.",
        tools: designTools,
        thumb: "assets/desain/thuram-thumb.jpg",
        image: "assets/desain/thuram.jpg"
      },
      {
        title: "Neymar",
        badge: "Poster",
        desc: "Neymar poster in a Barcelona kit. A cream background with a halftone dot texture, slanted name letters striped in blue and red, and several photo cutouts layered together. The tagline reads 'The Last Jogo Bonito'.",
        tools: designTools,
        thumb: "assets/desain/neymar-thumb.jpg",
        image: "assets/desain/neymar.jpg"
      },
      {
        title: "Rashford",
        badge: "Poster",
        desc: "Rashford poster in a Barcelona jersey. A deep dark-blue mood with a giant gradient name behind three photo cutouts, plus a glow effect along the edges.",
        tools: designTools,
        thumb: "assets/desain/rashford-thumb.jpg",
        image: "assets/desain/rashford.jpg"
      },
      {
        title: "Cristiano Ronaldo",
        badge: "Poster",
        desc: "'The GOAT' poster for Cristiano Ronaldo at Al Nassr. Black-and-white photos with thick white outlines, paired with yellow kits that keep their color, over a stadium background and a large club logo.",
        tools: designTools,
        thumb: "assets/desain/ronaldo-thumb.jpg",
        image: "assets/desain/ronaldo.jpg"
      },
      {
        title: "Lionel Messi",
        badge: "Poster",
        desc: "Messi poster in Inter Miami pink. A big close-up face meets a small figure running to celebrate a goal, complete with curved text reading 'The Greatest of All Time', the number 10, and a signature.",
        tools: designTools,
        thumb: "assets/desain/messi-thumb.jpg",
        image: "assets/desain/messi.jpg"
      },
      {
        title: "Bruno Fernandes",
        badge: "Poster",
        desc: "Bruno Fernandes poster (Manchester United, number 8). Big 'FERNANDES' typography sits behind the player, with a faint giant number 8 and a brush-style handwritten 'Bruno' over a red grainy background.",
        tools: designTools,
        thumb: "assets/desain/bruno-thumb.jpg",
        image: "assets/desain/bruno.jpg"
      }
    ]
  },
  { name: "Coming Soon", soon: true, items: [] }
];

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
};
const FOLDER_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>';
const countText = (n) => (n ? `${n} ${n === 1 ? "item" : "items"}` : "Empty");

const folderRow = document.getElementById("folder-row");
const explorer = document.getElementById("explorer");
const viewer = document.getElementById("viewer");

if (folderRow && explorer && viewer) {
  const exSide = document.getElementById("ex-side");
  const exBody = document.getElementById("ex-body");
  const exTitle = document.getElementById("ex-title");
  const exPath = document.getElementById("ex-path");
  const exStatus = document.getElementById("ex-status");
  const exClose = document.getElementById("ex-close");
  const vwBox = viewer.querySelector(".vw-img");
  const vwImg = document.getElementById("vw-img");
  const vwBadge = document.getElementById("vw-badge");
  const vwTitle = document.getElementById("vw-title");
  const vwDesc = document.getElementById("vw-desc");
  const vwToolsWrap = document.getElementById("vw-tools-wrap");
  const vwTools = document.getElementById("vw-tools");
  const vwLinks = document.getElementById("vw-links");
  const vwPrev = document.getElementById("vw-prev");
  const vwNext = document.getElementById("vw-next");
  const vwBack = document.getElementById("vw-back");
  const vwStats = document.getElementById("vw-stats");
  const vwFeatWrap = document.getElementById("vw-feat-wrap");
  const vwFeatTitle = document.getElementById("vw-feat-title");
  const vwFeat = document.getElementById("vw-feat");
  const exWin = explorer.querySelector(".win");
  const vwCap = document.getElementById("vw-cap");
  const vwCount = document.getElementById("vw-count");
  const vwGalWrap = document.getElementById("vw-gal-wrap");
  const vwStrip = document.getElementById("vw-strip");
  const vwShotDesc = document.getElementById("vw-shotdesc");
  let cur = 0, curItem = 0, shot = 0, opener = null, fileOpener = null;

  const lockScroll = () => document.documentElement.classList.toggle("modal-open", !explorer.hidden);   // halaman detail sekarang ada DI DALAM jendela folder, jadi cukup cek jendelanya
  const show = (box) => { box.hidden = false; lockScroll(); requestAnimationFrame(() => box.classList.add("open")); };
  const hide = (box, after) => {
    box.classList.remove("open");
    setTimeout(() => { box.hidden = true; lockScroll(); if (after) after(); }, 300);
  };

  // ----- isi jendela folder -----
  const showFolder = (i) => {
    cur = i;
    const f = folders[i];
    exTitle.textContent = f.name;
    exPath.textContent = f.name;
    exStatus.textContent = countText(f.items.length);

    exSide.textContent = "";                       // daftar folder di kiri
    folders.forEach((g, k) => {
      const b = el("button", "side-item" + (k === i ? " on" : "") + (g.soon ? " soon" : ""));
      b.type = "button";
      b.insertAdjacentHTML("afterbegin", FOLDER_SVG);
      b.append(el("span", null, g.name));
      b.addEventListener("click", () => showFolder(k));
      exSide.appendChild(b);
    });

    exBody.textContent = "";                       // isi folder di kanan
    exBody.scrollTop = 0;
    if (!f.items.length) {
      exBody.appendChild(el("p", "win-empty", "This folder is empty for now. New work is coming soon."));
      return;
    }
    f.items.forEach((it, n) => {
      const file = el("button", "file");
      file.type = "button";
      file.style.setProperty("--n", n);
      file.setAttribute("aria-label", `View ${it.title}`);
      const th = el("span", "file-thumb skeleton");   // skeleton shimmer sampai gambar siap
      if (it.ratio) th.style.setProperty("--ratio", it.ratio);
      const img = new Image();
      img.alt = it.title; img.decoding = "async";
      img.onload = () => { th.appendChild(img); th.classList.remove("skeleton"); };
      img.onerror = () => th.classList.remove("skeleton");
      img.src = it.thumb;
      file.append(th, el("span", "file-name", it.title));
      file.addEventListener("click", () => openViewer(n, file));
      exBody.appendChild(file);
    });
  };

  const openExplorer = (i, from) => {
    opener = from;
    viewer.hidden = true; viewer.classList.remove("open"); exWin.classList.remove("detail");
    showFolder(i);
    show(explorer);
    setTimeout(() => exClose.focus({ preventScroll: true }), 60);
  };
  const closeExplorer = () => hide(explorer, () => {
    viewer.hidden = true; viewer.classList.remove("open"); exWin.classList.remove("detail");   // reset halaman detail kalau jendela ditutup saat detail terbuka
    if (opener) opener.focus({ preventScroll: true });
  });
  exClose.addEventListener("click", closeExplorer);
  explorer.addEventListener("click", (e) => { if (e.target === explorer) closeExplorer(); });

  // ----- popup detail karya (bisa berupa galeri screenshot dan GIF) -----
  const shotsOf = (it) => (it.gallery && it.gallery.length ? it.gallery : null);

  const renderShot = () => {                       // tampilkan gambar ke-"shot" dari karya yang sedang dibuka
    const it = folders[cur].items[curItem];
    const shots = shotsOf(it);
    const sh = shots ? shots[shot] : { src: it.image };
    vwBox.classList.add("skeleton");
    vwImg.onload = () => vwBox.classList.remove("skeleton");
    vwImg.onerror = () => vwBox.classList.remove("skeleton");
    vwImg.alt = sh.caption ? `${it.title}: ${sh.caption}` : it.title;
    vwImg.src = sh.src;
    if (vwImg.complete && vwImg.naturalWidth) vwBox.classList.remove("skeleton");
    vwCap.textContent = sh.caption || "";
    vwCount.textContent = shots && shots.length > 1 ? `${shot + 1} / ${shots.length}` : "";
    vwShotDesc.textContent = sh.desc || "";
    vwShotDesc.hidden = !sh.desc;
    [...vwStrip.children].forEach((b, k) => b.classList.toggle("on", k === shot));
  };

  const openViewer = (n, from) => {
    if (from) fileOpener = from;
    curItem = n;
    shot = 0;
    const it = folders[cur].items[n];
    const shots = shotsOf(it);
    vwBadge.textContent = it.badge || "";
    vwBadge.hidden = !it.badge;
    vwTitle.textContent = it.title;
    vwDesc.textContent = it.desc || "";
    vwTools.textContent = "";
    (it.tools || []).forEach((name) => {            // logo + nama tool (huruf cadangan kalau file logo belum ada)
      const t = toolLogos[name] || {};
      const chip = el("span", "dt-tool");
      const box = el("span", "logo-box");
      box.dataset.fallback = t.fb || name.slice(0, 2);
      box.style.setProperty("--c", t.c || "#222");
      if (t.src) { const im = new Image(); im.alt = ""; im.src = t.src; im.onerror = () => im.remove(); box.appendChild(im); }
      chip.append(box, el("span", null, name));
      vwTools.appendChild(chip);
    });
    vwToolsWrap.hidden = !(it.tools && it.tools.length);
    vwLinks.textContent = "";                      // tombol link: kalau field-nya ada tapi masih kosong, tampil redup "Coming soon"
    [["itch", "btn btn-solid", "Play on itch.io"], ["github", "btn btn-ghost", "Source code"]].forEach(([key, cls, label]) => {
      if (!(key in it)) return;
      if (!it[key]) { vwLinks.appendChild(el("span", "dt-nolink", label + " · soon")); return; }
      const a = el("a", cls, label);
      a.href = it[key]; a.target = "_blank"; a.rel = "noopener";
      vwLinks.appendChild(a);
    });
    const feats = it.features || [];               // kartu Key Features (isi lewat field "features": [...] di data karya)
    vwFeat.textContent = "";
    feats.forEach((t) => vwFeat.appendChild(el("li", null, t)));
    vwFeatTitle.textContent = it.featuresTitle || "Key Features";
    vwFeatWrap.hidden = !feats.length;
    vwStats.textContent = "";                      // kotak statistik kecil
    [[(it.tools || []).length, "Tools Used"], [shots ? shots.length : 1, "Images"], [feats.length, "Key Features"]].forEach(([num, label]) => {
      if (!num) return;
      const box = el("div", "dt-stat");
      box.append(el("b", null, String(num)), el("span", null, label));
      vwStats.appendChild(box);
    });
    exPath.textContent = `${folders[cur].name} \u203A ${it.title}`;
    exStatus.textContent = `${n + 1} of ${folders[cur].items.length} items`;
    const gallery = !!(shots && shots.length > 1);
    vwStrip.textContent = "";                      // deretan gambar kecil di bawah deskripsi
    vwGalWrap.hidden = !gallery;
    if (gallery) shots.forEach((sh, k) => {
      const b = el("button", "vw-thumb");
      b.type = "button";
      b.setAttribute("aria-label", `Show ${sh.caption || "image " + (k + 1)}`);
      const im = new Image();
      im.alt = ""; im.decoding = "async"; im.src = sh.thumb || sh.src;
      b.appendChild(im);
      b.addEventListener("click", () => { shot = k; renderShot(); });
      vwStrip.appendChild(b);
    });
    renderShot();
    vwPrev.hidden = vwNext.hidden = gallery ? false : folders[cur].items.length < 2;
    if (viewer.hidden) {                           // halaman detail muncul DI DALAM jendela folder, jendelanya melebar
      viewer.hidden = false; exWin.classList.add("detail");
      requestAnimationFrame(() => viewer.classList.add("open"));
      exBody.parentElement.scrollTop = 0;
      setTimeout(() => vwBack.focus({ preventScroll: true }), 60);
    }
    viewer.scrollTop = 0;
  };

  const step = (d) => {                            // panah: geser gambar di galeri, atau pindah karya kalau tidak ada galeri
    const items = folders[cur].items;
    const shots = shotsOf(items[curItem]);
    if (shots && shots.length > 1) { shot = (shot + d + shots.length) % shots.length; renderShot(); return; }
    openViewer((curItem + d + items.length) % items.length);
  };

  let swipeX = null;                               // geser jari atau mouse di atas gambar
  vwBox.addEventListener("pointerdown", (e) => { swipeX = e.target.closest(".vw-nav") ? null : e.clientX; });
  vwBox.addEventListener("pointerup", (e) => {
    if (swipeX === null) return;
    const dx = e.clientX - swipeX;
    swipeX = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  });
  vwBox.addEventListener("pointercancel", () => { swipeX = null; });
  const closeViewer = () => {                      // tombol Back: kembali ke daftar karya
    viewer.classList.remove("open"); viewer.hidden = true; exWin.classList.remove("detail");
    exPath.textContent = folders[cur].name;
    exStatus.textContent = countText(folders[cur].items.length);
    if (fileOpener && fileOpener.isConnected) fileOpener.focus({ preventScroll: true });
  };
  vwPrev.addEventListener("click", () => step(-1));
  vwNext.addEventListener("click", () => step(1));
  vwBack.addEventListener("click", closeViewer);

  addEventListener("keydown", (e) => {
    if (!viewer.hidden) {
      if (e.key === "Escape") closeViewer();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    } else if (!explorer.hidden && e.key === "Escape") closeExplorer();
  });

  // ----- baris folder di halaman -----
  const peekAuto = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  folders.forEach((f, idx) => {
    const btn = el("button", "folder reveal" + (f.soon ? " soon" : ""));
    btn.type = "button";
    btn.style.setProperty("--d", idx);
    btn.setAttribute("aria-label", f.soon ? "Coming Soon folder, nothing inside yet" : `Open folder ${f.name}, ${countText(f.items.length)}`);

    const art = el("span", "f-art");
    const peek = el("span", "f-peek");
    const n = f.items.length;
    const roll = n > 3;                             // lebih dari 3 poster: kartunya bergulir
    const shown = roll ? 4 : Math.min(3, n);        // 3 kartu terlihat + 1 kartu yang menunggu di belakang
    peek.dataset.n = roll ? "roll" : shown;
    const cardEls = [];
    for (let k = 0; k < shown; k++) {               // poster yang mengintip dari folder
      const card = el("span", "peek-card");
      const im = new Image();
      im.alt = ""; im.decoding = "async";
      im.src = f.items[k < 3 ? k : n - 1].thumb;    // kartu ke-4 menunggu dengan poster terakhir
      if (roll) card.dataset.slot = k < 3 ? k : 4;  // slot: 0 kiri, 1 tengah, 2 kanan, 3 menyelinap ke belakang, 4 menunggu di kiri
      card.appendChild(im);
      peek.appendChild(card);
      cardEls.push(card);
    }
    art.append(el("span", "f-back"), peek, el("span", "f-front"));
    btn.append(art, el("span", "f-name", f.name), el("span", "f-meta", f.soon ? "Stay tuned" : countText(f.items.length)), el("span", "f-hint", f.soon ? "" : "Click to open"));
    folderRow.appendChild(btn);

    btn.addEventListener("click", () => {
      if (!f.soon) { openExplorer(idx, btn); return; }
      btn.classList.add("wiggle");                 // folder kosong: cuma bergoyang
      btn.querySelector(".f-hint").textContent = "Nothing inside yet";
      setTimeout(() => btn.classList.remove("wiggle"), 600);
    });

    if (peekAuto && roll) {                         // kartu bergulir: kiri ke tengah, tengah ke kanan, kanan menyelinap ke belakang
      let off = 0, visible = false, hover = false;
      new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.2 }).observe(btn);
      btn.addEventListener("pointerenter", () => { hover = true; });
      btn.addEventListener("pointerleave", () => { hover = false; });
      setInterval(() => {
        if (!visible || hover || document.hidden) return;
        off = (off - 1 + n) % n;                    // nomor poster yang masuk dari kiri
        cardEls.forEach((c) => {                    // semua kartu geser satu slot (animasinya diatur CSS)
          const slot = +c.dataset.slot;
          c.dataset.slot = slot === 4 ? 0 : slot + 1;
        });
        setTimeout(() => {                          // kartu yang sudah di belakang pindah diam-diam ke antrean kiri
          const gone = cardEls.find((c) => c.dataset.slot === "3");
          if (!gone) return;
          gone.querySelector("img").src = f.items[(off - 1 + n) % n].thumb;   // poster untuk giliran berikutnya
          gone.style.transition = "none";
          gone.dataset.slot = 4;
          void gone.offsetWidth;
          gone.style.transition = "";
        }, 800);
      }, 4200);
    }
  });
}

// ===== MICRO INTERACTION =====
document.documentElement.classList.add("js");

// Muncul pelan-pelan saat di-scroll
const reveal = new IntersectionObserver((list) => list.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

// Garis progress scroll di atas halaman
const bar = document.querySelector(".progress");
addEventListener("scroll", () => {
  const d = document.documentElement;
  bar.style.transform = `scaleX(${d.scrollTop / (d.scrollHeight - d.clientHeight)})`;
}, { passive: true });

// Menu nav menyala sesuai section yang sedang dilihat
const navLinks = [...document.querySelectorAll(".nav nav a")];
const spy = new IntersectionObserver((list) => list.forEach((e) => {
  if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

// Efek riak saat tombol diklik
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  const r = btn.getBoundingClientRect();
  const size = Math.max(r.width, r.height);
  const dot = document.createElement("span");
  dot.className = "ripple";
  dot.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
  btn.appendChild(dot);
  setTimeout(() => dot.remove(), 600);
});

// Tumpukan foto: kartu bergulir (kiri ke tengah, tengah ke kanan, kanan menyelinap ke belakang).
// Klik, geser, atau tombol panah untuk berganti. Tiap tumpukan berjalan sendiri.
document.querySelectorAll(".stack-group").forEach((group, n) => {
  const stack = group.querySelector(".photo-stack");
  const dotsBox = group.querySelector(".stack-dots");
  const cards = [...stack.querySelectorAll(".pcard")];
  const dots = cards.map(() => dotsBox.appendChild(document.createElement("i")));
  const roll = cards.length >= 3;                  // kurang dari 3 foto: tidak bergulir
  // slot kartu: 0 kiri, 1 tengah, 2 kanan, 3 menyelinap ke belakang, 4 menunggu di sisi kiri (tampilannya diatur CSS)
  const slotOf = (c) => +c.dataset.slot;
  const setSlot = (c, s) => { c.dataset.slot = s; c.classList.toggle("top", s === 1); };
  const find = (s) => cards.find((c) => slotOf(c) === s);
  const queue = [];                                // kartu yang menunggu giliran masuk dari kiri
  let busy = false, drag = false, moved = false, sx = 0, dx = 0;

  const showDots = () => dots.forEach((d, k) => d.classList.toggle("on", slotOf(cards[k]) === 1));
  cards.forEach((c, k) => {                        // susunan awal: foto pertama di tengah, kedua di kiri, terakhir di kanan
    const s = k === 0 ? 1 : k === 1 ? 0 : k === cards.length - 1 ? 2 : 4;
    setSlot(c, s);
    if (s === 4) queue.push(c);
  });
  showDots();

  const jump = (c, s) => {                         // pindah slot tanpa animasi (hanya untuk kartu yang sedang tak terlihat)
    c.style.transition = "none";
    setSlot(c, s);
    void c.offsetWidth;
    c.style.transition = "";
  };

  const next = () => {                             // kiri ke tengah, tengah ke kanan, kanan ke belakang, kartu baru masuk dari kiri
    if (busy || !roll) return;
    busy = true;
    const L = find(0), C = find(1), R = find(2);
    const enter = queue.shift();
    if (L) setSlot(L, 1);
    if (C) setSlot(C, 2);
    if (R) setSlot(R, 3);
    if (enter) setSlot(enter, 0);
    showDots();
    setTimeout(() => {
      if (R) { jump(R, 4); queue.push(R); }        // yang sudah di belakang pindah diam-diam ke antrean kiri
      if (!enter && R) { const nx = queue.shift(); requestAnimationFrame(() => setSlot(nx, 0)); }   // hanya 3 foto: masuk menyusul
      busy = false;
    }, 760);
  };

  const prev = () => {                             // kebalikannya: tengah ke kiri, kanan ke tengah, kartu baru muncul dari belakang kanan
    if (busy || !roll) return;
    if (!queue.length) { next(); return; }
    busy = true;
    const L = find(0), C = find(1), R = find(2);
    const enter = queue.pop();
    jump(enter, 3);
    if (L) setSlot(L, 4);
    if (C) setSlot(C, 0);
    if (R) setSlot(R, 1);
    setSlot(enter, 2);
    showDots();
    setTimeout(() => { if (L) queue.unshift(L); busy = false; }, 760);
  };

  stack.addEventListener("pointerdown", (e) => {
    const top = find(1);
    if (busy || !top || e.target.closest(".pcard") !== top) return;
    drag = true; moved = false; sx = e.clientX; dx = 0;
    top.classList.add("dragging");
    stack.setPointerCapture(e.pointerId);
  });
  stack.addEventListener("pointermove", (e) => {
    if (!drag) return;
    dx = e.clientX - sx;
    if (Math.abs(dx) > 5) moved = true;
    const lim = Math.max(-70, Math.min(70, dx));   // kartu hanya ikut bergeser sedikit, tidak menutupi teks
    find(1).style.transform = `translateX(${lim}px) rotate(${lim / 14}deg)`;
  });
  const end = () => {
    if (!drag) return;
    drag = false;
    const top = find(1);
    top.classList.remove("dragging");
    top.style.transform = "";
    if (Math.abs(dx) > 80) { if (dx > 0) next(); else prev(); }   // geser ke kanan = maju, ke kiri = mundur
    else if (!moved) next();                                       // klik biasa
    start();
  };
  stack.addEventListener("pointerup", end);
  stack.addEventListener("pointercancel", end);
  stack.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
    start();
  });

  // Ganti foto otomatis tiap 4 detik. Berhenti saat kursor di atas foto, tab disembunyikan, atau tumpukan tidak terlihat.
  const autoplay = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timer = null, visible = false, hover = false;
  const start = () => {
    clearInterval(timer);
    if (autoplay) timer = setInterval(() => { if (visible && !hover && !drag && !document.hidden) next(); }, 4000);
  };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.3 }).observe(stack);
  stack.addEventListener("pointerenter", () => { hover = true; });
  stack.addEventListener("pointerleave", () => { hover = false; });
  setTimeout(start, n * 2000);                     // tumpukan kedua mulai telat 2 detik supaya tidak serempak
});

// Tombol salin email (alamatnya diambil otomatis dari tombol Kirim email)
const mailLink = document.getElementById("mail-link");
const copyBtn = document.getElementById("copy-mail");
if (mailLink && copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = mailLink.getAttribute("href").replace("mailto:", "");
    try { await navigator.clipboard.writeText(email); copyBtn.textContent = "Copied ✓"; }
    catch { copyBtn.textContent = email; }
    setTimeout(() => { copyBtn.textContent = "Copy email"; }, 2000);
  });
}

// Chatbox kontak: kirim pesan ke email lewat FormSubmit, lalu tampilkan konfirmasi
const form = document.getElementById("contact-form");
if (form) {
  const chat = document.getElementById("chat-body");
  const toBottom = () => requestAnimationFrame(() => chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" }));
  const bubble = (cls, text) => {
    const b = document.createElement("div");
    b.className = "bubble " + cls;
    b.textContent = text;
    chat.appendChild(b);
    toBottom();
    return b;
  };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const btn = form.querySelector("button[type=submit]");
    const name = String(data.get("name")).trim();
    btn.disabled = true; btn.textContent = "Sending...";
    bubble("me", String(data.get("message")).trim());
    const status = document.createElement("div");      // keterangan kecil di bawah pesan, seperti centang di aplikasi chat
    status.className = "msg-status";
    status.textContent = "Sending...";
    chat.appendChild(status);
    toBottom();
    try {
      const [res] = await Promise.all([
        fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: data }),
        new Promise((r) => setTimeout(r, 700))
      ]);
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) throw new Error("gagal");
      status.className = "msg-status ok";
      status.textContent = "✓ Message sent";
      form.reset();
      const typing = bubble("them typing", "");         // lalu balasan terpisah dari kamu
      await new Promise((r) => setTimeout(r, 1000));
      typing.className = "bubble them";
      typing.textContent = `Thanks, ${name}! Your message is in my inbox, and I'll reply by email.`;
    } catch {
      status.className = "msg-status error";
      status.textContent = "Not sent";
      bubble("them error", "Your message wasn't sent. Please try again in a moment, or email me directly below.");
    }
    toBottom();
    btn.disabled = false; btn.textContent = "Send";
  });
}

// ===== PRESTASI DAN SERTIFIKAT =====
// Mau tambah? Salin satu blok { ... }, tempel di bawahnya, jangan lupa koma.
const achievements = [
  {
    badge: "Finalist",
    title: "Artificial Intelligence Competition of Revolution",
    org: "Informers Ideathon : AI Core 2026, Universitas Tanjungpura",
    date: "10 October 2026",
    thumb: "assets/sertifikat/aicor-thumb.jpg",   // gambar kecil di kartu
    image: "assets/sertifikat/aicor.jpg"          // gambar besar saat diklik
  },
  {
    badge: "Participant",
    title: "UNTAN Programming Contest VI",
    org: "Informatics Student Association (HMIF), Universitas Tanjungpura",
    date: "October 2026",
    thumb: "assets/sertifikat/upc-thumb.jpg",
    image: "assets/sertifikat/upc.jpg"
  }
];

const achGrid = document.getElementById("achievement-grid");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");

const openLightbox = (src, alt) => {
  lbImg.src = src; lbImg.alt = alt;
  lightbox.hidden = false;
  requestAnimationFrame(() => lightbox.classList.add("open"));
};
const closeLightbox = () => {
  lightbox.classList.remove("open");
  setTimeout(() => { lightbox.hidden = true; lbImg.removeAttribute("src"); }, 300);
};

if (achGrid && lightbox) {
  achievements.forEach((a) => {
    const card = document.createElement("article");
    card.className = "card glass achv";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View certificate: ${a.badge}, ${a.title}`);
    card.innerHTML = `
      <div class="thumb skeleton"><span>${a.title}</span></div>
      <div class="card-body">
        <span class="award-badge">${a.badge}</span>
        <h3>${a.title}</h3>
        <p>${a.org}<br>${a.date}</p>
        <div class="card-links"><span class="btn btn-ghost">View certificate</span></div>
      </div>`;
    achGrid.appendChild(card);

    card.addEventListener("mousemove", (e) => {      // cahaya mengikuti kursor, sama seperti kartu project
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
    const open = () => openLightbox(a.image, `Certificate: ${a.badge}, ${a.title}`);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });

    const thumb = card.querySelector(".thumb");      // skeleton shimmer sampai gambar siap
    const img = new Image();
    img.alt = `Certificate: ${a.title}`;
    img.onload = () => { thumb.innerHTML = ""; thumb.appendChild(img); thumb.classList.remove("skeleton"); };
    img.onerror = () => thumb.classList.remove("skeleton");
    img.src = a.thumb;
  });
  lightbox.addEventListener("click", (e) => { if (e.target !== lbImg) closeLightbox(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });
}

// ===== LOADING AWAL: skeleton shimmer sampai halaman siap =====
const preloader = document.getElementById("preloader");
const MIN_SHOW = 1200;   // skeleton tampil minimal segini (milidetik)
const MAX_WAIT = 5000;   // tapi jangan menunggu lebih lama dari ini
const pageLoaded = new Promise((r) => (document.readyState === "complete" ? r() : addEventListener("load", r, { once: true })));
const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
const minTime = new Promise((r) => setTimeout(r, MIN_SHOW));
Promise.race([Promise.all([pageLoaded, fontsReady, minTime]), new Promise((r) => setTimeout(r, MAX_WAIT))]).then(() => {
  if (!preloader) return;
  preloader.classList.add("done");
  setTimeout(() => preloader.remove(), 700);
});

// ===== EDUCATION dan EXPERIENCE: tampil 2 item di atas, sisanya bisa di-scroll =====
document.querySelectorAll(".path-scroll").forEach((box) => {
  const items = box.querySelectorAll("li");
  const update = () => {                           // fade muncul hanya kalau masih ada isi yang tersembunyi
    const more = box.scrollHeight - box.clientHeight > 2;
    box.classList.toggle("fade-bottom", more && box.scrollTop + box.clientHeight < box.scrollHeight - 2);
    box.classList.toggle("fade-top", more && box.scrollTop > 2);
  };
  const fit = () => {                              // tinggi kotak = 2 item + sedikit intipan item ke-3
    if (items.length > 2) {
      const h = items[1].getBoundingClientRect().bottom + box.scrollTop - box.getBoundingClientRect().top + 64;
      box.style.maxHeight = Math.round(h) + "px";
    }
    update();
  };
  box.addEventListener("scroll", update, { passive: true });
  addEventListener("resize", fit);
  addEventListener("load", fit);
  if (document.fonts) document.fonts.ready.then(fit);
  fit();
});


// ===== PORTFOLIO SHOWCASE: pill Projects / Certificates / Tech Stack =====
const tabsBox = document.getElementById("tabs");
const tabPanels = document.getElementById("tab-panels");
if (tabsBox && tabPanels) {
  const tabs = [...tabsBox.querySelectorAll('[role="tab"]')];
  const glider = tabsBox.querySelector(".tab-glider");
  const panelOf = (t) => document.getElementById(t.getAttribute("aria-controls"));
  let current = tabs.find((t) => t.classList.contains("on")) || tabs[0];
  let settle = null;

  const moveGlider = () => {                       // pil biru bergeser ke tab yang aktif
    glider.style.width = current.offsetWidth + "px";
    glider.style.transform = `translateX(${current.offsetLeft}px)`;
  };
  const selectTab = (tab, focus) => {
    if (!tab) return;
    if (tab === current) { if (focus) tab.focus(); return; }
    tabPanels.style.height = tabPanels.offsetHeight + "px";   // kunci tinggi lama, lalu animasikan ke tinggi panel baru
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle("on", on);
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      panelOf(t).classList.toggle("on", on);
    });
    current = tab;
    moveGlider();
    const to = panelOf(tab).offsetHeight;
    requestAnimationFrame(() => { tabPanels.style.height = to + "px"; });
    clearTimeout(settle);
    settle = setTimeout(() => { tabPanels.style.height = ""; }, 520);
    if (focus) tab.focus();
  };

  tabs.forEach((t, i) => {
    t.addEventListener("click", () => selectTab(t));
    t.addEventListener("keydown", (e) => {          // panah kiri/kanan berpindah tab
      if (e.key === "ArrowRight") { e.preventDefault(); selectTab(tabs[(i + 1) % tabs.length], true); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); selectTab(tabs[(i - 1 + tabs.length) % tabs.length], true); }
    });
  });
  document.querySelectorAll("[data-open-tab]").forEach((a) =>   // contoh: tombol "View projects" di hero
    a.addEventListener("click", () => selectTab(document.getElementById("tab-" + a.dataset.openTab))));
  addEventListener("resize", moveGlider);
  addEventListener("load", moveGlider);
  if (document.fonts) document.fonts.ready.then(moveGlider);
  moveGlider();
}

// ===== BACKGROUND GRID: garis di dekat kursor menyala =====
const gridGlow = document.getElementById("grid-glow");
if (gridGlow && matchMedia("(hover: hover)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const HALF = 240;                                 // setengah ukuran kotak cahaya (harus sama dengan CSS)
  let gx = 0, gy = 0, queued = false;
  const paint = () => {
    queued = false;
    gridGlow.style.transform = `translate3d(${gx - HALF}px, ${gy - HALF}px, 0)`;
    gridGlow.style.backgroundPosition = `${HALF - gx}px ${HALF - gy}px`;   // pola garis tetap sejajar dengan grid di latar
  };
  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    gx = Math.round(e.clientX); gy = Math.round(e.clientY);
    gridGlow.classList.add("on");
    if (!queued) { queued = true; requestAnimationFrame(paint); }
  }, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => gridGlow.classList.remove("on"));
}

// ===== HERO: efek cairan (liquid) di portrait =====
// Kursor (atau jari di HP) yang menyentuh foto meninggalkan jejak cairan, dan di dalam cairan itu muncul gambar kedua.
// Gambar kedua: taruh PNG transparan di assets/portrait-2.png (ukuran sama dengan portrait.png).
// Kalau file itu belum ada, versi pixel art dibuat otomatis dari portrait.png.
const fxWrap = document.getElementById("portrait-wrap");
const fxCanvas = document.getElementById("portrait-fx");
if (fxWrap && fxCanvas && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const baseImg = fxWrap.querySelector(".portrait");
  const ctx = fxCanvas.getContext("2d");
  const mask = document.createElement("canvas");
  const mctx = mask.getContext("2d", { willReadFrequently: true });
  const MS = 0.5;                                   // mask dibuat setengah ukuran supaya ringan
  const LIFE = 1000;                                // lama satu tetes menyusut (milidetik). Makin besar, makin lama cairannya bertahan
  const sprite = document.createElement("canvas");  // bulatan lembut yang dipakai ulang untuk semua tetes
  sprite.width = sprite.height = 128;
  {
    const g = sprite.getContext("2d");
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, "rgba(255,255,255,1)");
    gr.addColorStop(0.55, "rgba(255,255,255,.5)");
    gr.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  }
  const cut = new Uint8ClampedArray(256);           // tepi lembut diubah jadi tepi cairan yang tegas (tetes yang berdekatan menyatu)
  for (let a = 0; a < 256; a++) cut[a] = Math.max(0, Math.min(1, (a / 255 - 0.46) / 0.1)) * 255;

  let alt = null, altPixel = false, W = 0, H = 0, R = 80, running = false, last = 0, demo = null;
  const pts = [];                                   // jejak tetes: { x, y, r, age, ph }
  const head = { x: 0, y: 0, tx: 0, ty: 0, lx: 0, ly: 0, r: 0, on: false };

  // --- versi pixel art otomatis (dipakai kalau assets/portrait-2.png belum ada) ---
  const pixelArt = (img) => {
    const w = 96, h = Math.max(1, Math.round(w * img.naturalHeight / img.naturalWidth));
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    const x = c.getContext("2d", { willReadFrequently: true });
    x.drawImage(img, 0, 0, w, h);
    const id = x.getImageData(0, 0, w, h), d = id.data;
    const lum = new Float32Array(w * h), hist = new Uint32Array(256);
    let n = 0;
    for (let p = 0; p < w * h; p++) {
      const i = p * 4, v = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      lum[p] = v;
      if (d[i + 3] > 128) { hist[v | 0]++; n++; }
    }
    let lo = 0, hi = 255, acc = 0;                  // rentangkan kontras supaya foto gelap tetap punya 4 warna
    for (let v = 0; v < 256; v++) { acc += hist[v]; if (acc >= n * 0.03) { lo = v; break; } }
    acc = 0;
    for (let v = 255; v >= 0; v--) { acc += hist[v]; if (acc >= n * 0.03) { hi = v; break; } }
    if (hi - lo < 16) hi = lo + 16;
    const pal = [[8, 16, 52], [44, 96, 240], [34, 199, 230], [255, 255, 255]];   // navy, biru, cyan, putih (warna web ini)
    const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
    for (let y = 0; y < h; y++) for (let xx = 0; xx < w; xx++) {
      const p = y * w + xx, i = p * 4;
      if (d[i + 3] < 128) { d[i + 3] = 0; continue; }
      const t = Math.pow(Math.max(0, Math.min(1, (lum[p] - lo) / (hi - lo))), 0.62);   // angkat nada tengah supaya foto gelap tetap terbaca
      const lvl = Math.max(0, Math.min(3, Math.floor((t + (bayer[(y & 3) * 4 + (xx & 3)] / 16 - 0.5) * 0.28) * 4)));
      d[i] = pal[lvl][0]; d[i + 1] = pal[lvl][1]; d[i + 2] = pal[lvl][2]; d[i + 3] = 255;
    }
    x.putImageData(id, 0, 0);
    return c;
  };
  const probe = new Image();
  probe.onload = () => { alt = probe; altPixel = false; if (head.on) kick(); };
  probe.onerror = () => {
    const make = () => { try { alt = pixelArt(baseImg); altPixel = true; if (head.on) kick(); } catch (err) { alt = null; } };
    if (baseImg.complete && baseImg.naturalWidth) make(); else baseImg.addEventListener("load", make, { once: true });
  };
  probe.src = "assets/portrait-2.png";

  const resize = () => {
    const w = fxWrap.offsetWidth, h = fxWrap.offsetHeight;
    if (!w || !h) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = w; H = h; R = w * 0.19;
    fxCanvas.width = Math.round(w * dpr); fxCanvas.height = Math.round(h * dpr);
    mask.width = Math.max(8, Math.round(w * MS)); mask.height = Math.max(8, Math.round(h * MS));
  };
  new ResizeObserver(resize).observe(fxWrap);
  resize();

  const loop = (now) => {
    const dt = Math.min(50, now - last || 16);
    last = now;

    if (demo) {                                     // sapuan pembuka satu kali, supaya pengunjung tahu fotonya bisa disentuh
      const t = (now - demo.t0) / 1900;
      if (t >= 1) { demo = null; head.on = false; }
      else {
        head.tx = W * (0.22 + 0.56 * t);
        head.ty = H * (0.30 + 0.18 * t + 0.2 * Math.sin(t * Math.PI * 1.6));
        if (!head.on) { head.on = true; head.x = head.lx = head.tx; head.y = head.ly = head.ty; }
      }
    }

    if (head.on) {
      head.x += (head.tx - head.x) * 0.32;
      head.y += (head.ty - head.y) * 0.32;
      head.r += (R * 0.9 - head.r) * 0.2;
      const step = R * 0.14, dist = Math.hypot(head.x - head.lx, head.y - head.ly);
      if (dist > step) {                            // tiap beberapa piksel, tinggalkan satu tetes
        const n = Math.min(12, Math.floor(dist / step));
        for (let k = 1; k <= n; k++) {
          const f = k / n;
          pts.push({ x: head.lx + (head.x - head.lx) * f, y: head.ly + (head.y - head.ly) * f, r: R * 0.7, age: 0, ph: Math.random() * 6.28 });
        }
        head.lx = head.x; head.ly = head.y;
        if (pts.length > 160) pts.splice(0, pts.length - 160);
      }
    } else head.r *= 0.88;

    for (let i = pts.length - 1; i >= 0; i--) {
      pts[i].age += dt / LIFE;
      if (pts[i].age >= 1) pts.splice(i, 1);
    }

    if (alt && (pts.length || head.r > 1)) {
      mctx.globalCompositeOperation = "source-over";
      mctx.clearRect(0, 0, mask.width, mask.height);
      mctx.globalCompositeOperation = "lighter";    // tetes dijumlahkan, jadi yang berdekatan menyatu seperti cairan
      for (const p of pts) {
        const rr = p.r * Math.pow(1 - p.age, 0.8) * (1 + 0.1 * Math.sin(now / 180 + p.ph)) * MS;
        if (rr < 0.6) continue;
        mctx.drawImage(sprite, p.x * MS - rr, p.y * MS - rr, rr * 2, rr * 2);
      }
      if (head.r > 1) { const rr = head.r * MS; mctx.drawImage(sprite, head.x * MS - rr, head.y * MS - rr, rr * 2, rr * 2); }
      mctx.globalCompositeOperation = "source-over";
      const id = mctx.getImageData(0, 0, mask.width, mask.height), d = id.data;
      for (let i = 3; i < d.length; i += 4) d[i] = cut[d[i]];
      mctx.putImageData(id, 0, 0);

      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(mask, 0, 0, fxCanvas.width, fxCanvas.height);
      ctx.globalCompositeOperation = "source-in";   // gambar kedua hanya terlihat di dalam cairan
      ctx.imageSmoothingEnabled = !altPixel;
      ctx.drawImage(alt, 0, 0, fxCanvas.width, fxCanvas.height);
      ctx.globalCompositeOperation = "source-over";
    }

    if (head.on || pts.length || head.r > 1 || demo) requestAnimationFrame(loop);
    else { running = false; ctx.clearRect(0, 0, fxCanvas.width, fxCanvas.height); }
  };
  function kick() {
    if (running || !alt) return;
    running = true; last = 0;
    requestAnimationFrame(loop);
  }

  const toLocal = (e) => {                          // posisi kursor di dalam foto (tetap benar walau foto sedang beranimasi)
    const r = fxWrap.getBoundingClientRect();
    return [(e.clientX - r.left) * (W / (r.width || 1)), (e.clientY - r.top) * (H / (r.height || 1))];
  };
  const enter = (e) => {
    demo = null;
    const [x, y] = toLocal(e);
    head.x = head.tx = head.lx = x; head.y = head.ty = head.ly = y;
    head.on = true;
    kick();
  };
  const move = (e) => {
    if (!head.on) { enter(e); return; }
    [head.tx, head.ty] = toLocal(e);
  };
  const leave = () => { head.on = false; };
  const burst = () => {                             // klik atau ketuk: cipratan
    for (let k = 0; k < 7; k++) {
      const a = (k / 7) * 6.283;
      pts.push({ x: head.x + Math.cos(a) * R * 0.45, y: head.y + Math.sin(a) * R * 0.45, r: R * 0.85, age: 0, ph: Math.random() * 6.28 });
    }
    kick();
  };
  fxWrap.addEventListener("pointerenter", enter);
  fxWrap.addEventListener("pointermove", move);
  fxWrap.addEventListener("pointerleave", leave);
  fxWrap.addEventListener("pointerdown", (e) => { enter(e); burst(); });
  fxWrap.addEventListener("pointerup", (e) => { if (e.pointerType !== "mouse") leave(); });
  fxWrap.addEventListener("pointercancel", leave);

  let tries = 0;                                    // sapuan pembuka: tunggu gambar kedua siap dan hero masih terlihat
  const tryDemo = () => {
    if (head.on || demo) return;
    if (scrollY > innerHeight * 0.4) return;
    if (!alt || !W) { if (++tries < 8) setTimeout(tryDemo, 600); return; }
    demo = { t0: performance.now() };
    kick();
  };
  setTimeout(tryDemo, 2600);
}