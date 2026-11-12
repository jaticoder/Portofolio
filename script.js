// ===== PROJECT: folder ala Windows Explorer =====
// Tiap folder punya daftar isi ("items"). Mau tambah karya? Salin satu blok { ... } di dalam items, jangan lupa koma.
// Mau tambah folder baru? Salin satu blok folder, tempel di bawahnya. Kalau foldernya lebih dari 3, barisnya otomatis bisa digeser ke kanan.
// Semua judul dan deskripsi di bawah ini draf dariku, silakan ganti dengan tulisanmu sendiri.
const designTools = ["Picsart", "Canva", "Ibis Paint X"];

const folders = [
  {
    name: "Game",
    items: [
      {
        title: "Ojol Rush",
        badge: "Sedang dikembangkan",
        desc: "Game 2D top-down endless dodger: hindari rintangan selama mungkin.",
        tools: ["Unity", "C#"],
        thumb: "assets/ojol-rush.png",   // gambar kecil di jendela folder
        image: "assets/ojol-rush.png",   // gambar besar di popup
        itch: "",                        // isi link itch.io kalau sudah rilis
        github: ""                       // isi link repo GitHub
      }
    ]
  },
  {
    name: "Graphic Design",
    items: [
      {
        title: "Thuram",
        badge: "Poster",
        desc: "Poster Thuram (Inter Milan) dengan latar lavender dan lingkaran biru tua besar. Judul bergaya kuas di atas, sentuhan warna bendera Prancis di sudut-sudutnya.",
        tools: designTools,
        thumb: "assets/desain/thuram-thumb.png",
        image: "assets/desain/thuram.png"
      },
      {
        title: "Neymar",
        badge: "Poster",
        desc: "Poster Neymar dengan seragam Barcelona. Latar krem bertekstur titik halftone, huruf nama miring bergaris biru dan merah, dan beberapa potongan foto yang ditumpuk. Subjudulnya 'The Last Jogo Bonito'.",
        tools: designTools,
        thumb: "assets/desain/neymar-thumb.png",
        image: "assets/desain/neymar.png"
      },
      {
        title: "Rashford",
        badge: "Poster",
        desc: "Poster Rashford dengan jersey Barcelona. Suasana biru tua pekat dengan nama raksasa bergradasi di belakang tiga potongan foto, ditambah efek cahaya di tepinya.",
        tools: designTools,
        thumb: "assets/desain/rashford-thumb.png",
        image: "assets/desain/rashford.png"
      },
      {
        title: "Cristiano Ronaldo",
        badge: "Poster",
        desc: "Poster 'The GOAT' untuk Cristiano Ronaldo di Al Nassr. Foto hitam-putih bergaris putih tebal dipadukan seragam kuning yang tetap berwarna, di atas latar stadion dan logo klub berukuran besar.",
        tools: designTools,
        thumb: "assets/desain/ronaldo-thumb.png",
        image: "assets/desain/ronaldo.png"
      },
      {
        title: "Lionel Messi",
        badge: "Poster",
        desc: "Poster Messi bernuansa pink Inter Miami. Wajah close-up yang besar bertemu sosok kecil yang berlari merayakan gol, lengkap dengan tulisan melengkung 'The Greatest of All Time', nomor 10, dan tanda tangan.",
        tools: designTools,
        thumb: "assets/desain/messi-thumb.png",
        image: "assets/desain/messi.png"
      },
      {
        title: "Bruno Fernandes",
        badge: "Poster",
        desc: "Poster Bruno Fernandes (Manchester United, nomor 8). Tipografi 'FERNANDES' yang besar berada di belakang pemain, ditambah angka 8 raksasa yang samar dan tulisan tangan 'Bruno' bergaya kuas di atas latar merah bertekstur grain.",
        tools: designTools,
        thumb: "assets/desain/bruno-thumb.png",
        image: "assets/desain/bruno.png"
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
const countText = (n) => (n ? `${n} item` : "Kosong");

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
  const vwClose = document.getElementById("vw-close");
  let cur = 0, curItem = 0, opener = null, fileOpener = null;

  const lockScroll = () => document.documentElement.classList.toggle("modal-open", !explorer.hidden || !viewer.hidden);
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
      exBody.appendChild(el("p", "win-empty", "Folder ini masih kosong. Karya baru segera hadir."));
      return;
    }
    f.items.forEach((it, n) => {
      const file = el("button", "file");
      file.type = "button";
      file.style.setProperty("--n", n);
      file.setAttribute("aria-label", `Lihat ${it.title}`);
      const th = el("span", "file-thumb skeleton");   // skeleton shimmer sampai gambar siap
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
    showFolder(i);
    show(explorer);
    setTimeout(() => exClose.focus({ preventScroll: true }), 60);
  };
  const closeExplorer = () => hide(explorer, () => { if (opener) opener.focus({ preventScroll: true }); });
  exClose.addEventListener("click", closeExplorer);
  explorer.addEventListener("click", (e) => { if (e.target === explorer) closeExplorer(); });

  // ----- popup detail karya -----
  const openViewer = (n, from) => {
    if (from) fileOpener = from;
    curItem = n;
    const it = folders[cur].items[n];
    vwBox.classList.add("skeleton");
    vwImg.onload = () => vwBox.classList.remove("skeleton");
    vwImg.onerror = () => vwBox.classList.remove("skeleton");
    vwImg.alt = it.title;
    vwImg.src = it.image;
    if (vwImg.complete && vwImg.naturalWidth) vwBox.classList.remove("skeleton");
    vwBadge.textContent = it.badge || "";
    vwBadge.hidden = !it.badge;
    vwTitle.textContent = it.title;
    vwDesc.textContent = it.desc || "";
    vwTools.textContent = "";
    (it.tools || []).forEach((t) => vwTools.appendChild(el("span", "award-badge", t)));
    vwToolsWrap.hidden = !(it.tools && it.tools.length);
    vwLinks.textContent = "";
    [[it.itch, "btn btn-solid", "Main di itch.io"], [it.github, "btn btn-ghost", "Kode"]].forEach(([href, cls, label]) => {
      if (!href) return;
      const a = el("a", cls, label);
      a.href = href; a.target = "_blank"; a.rel = "noopener";
      vwLinks.appendChild(a);
    });
    vwPrev.hidden = vwNext.hidden = folders[cur].items.length < 2;
    if (viewer.hidden) { show(viewer); setTimeout(() => vwClose.focus({ preventScroll: true }), 60); }
  };
  const step = (d) => { const len = folders[cur].items.length; openViewer((curItem + d + len) % len); };
  const closeViewer = () => hide(viewer, () => { if (fileOpener && fileOpener.isConnected) fileOpener.focus({ preventScroll: true }); });
  vwPrev.addEventListener("click", () => step(-1));
  vwNext.addEventListener("click", () => step(1));
  vwClose.addEventListener("click", closeViewer);
  viewer.addEventListener("click", (e) => { if (e.target === viewer) closeViewer(); });

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
    btn.setAttribute("aria-label", f.soon ? "Folder Coming Soon, belum ada isi" : `Buka folder ${f.name}, ${countText(f.items.length)}`);

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
    btn.append(art, el("span", "f-name", f.name), el("span", "f-meta", f.soon ? "Segera hadir" : countText(f.items.length)), el("span", "f-hint", f.soon ? "" : "Klik untuk membuka"));
    folderRow.appendChild(btn);

    btn.addEventListener("click", () => {
      if (!f.soon) { openExplorer(idx, btn); return; }
      btn.classList.add("wiggle");                 // folder kosong: cuma bergoyang
      btn.querySelector(".f-hint").textContent = "Belum ada isi";
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

// Tumpukan foto: klik, geser, atau tombol panah untuk berganti (tiap tumpukan berjalan sendiri)
document.querySelectorAll(".stack-group").forEach((group, n) => {
  const stack = group.querySelector(".photo-stack");
  const dotsBox = group.querySelector(".stack-dots");
  const cards = [...stack.querySelectorAll(".pcard")];
  const dots = cards.map(() => dotsBox.appendChild(document.createElement("i")));
  let order = cards.slice();               // order[0] = foto paling depan
  let busy = false, drag = false, moved = false, sx = 0, dx = 0;

  const layout = () => {
    order.forEach((c, i) => {
      c.style.setProperty("--i", i);
      c.classList.toggle("top", i === 0);
      c.style.setProperty("--m", i === 0 ? 0 : 1);   // 0 = kartu depan (tengah), 1 = kartu samping
      c.style.setProperty("--s", i === 2 ? -1 : 1);  // kartu ke-2 mengintip di kanan, kartu ke-3 di kiri, sisanya bersembunyi di belakang kartu kanan
      c.style.transition = "";
      c.style.transform = "";
    });
    dots.forEach((d, k) => d.classList.toggle("on", cards[k] === order[0]));
  };
  layout();

  const send = (dir) => {                  // foto depan terbang keluar, lalu pindah ke belakang
    if (busy || order.length < 2) return;
    busy = true;
    const top = order[0];
    top.style.transition = "transform .28s ease-out";
    top.style.transform = `translateX(${dir * 62}%) rotate(${dir * 9}deg)`;   // keluar sedikit ke samping
    setTimeout(() => { order.push(order.shift()); layout(); busy = false; }, 280);   // lalu menyelip ke belakang tumpukan
  };
  const back = () => { if (busy || order.length < 2) return; order.unshift(order.pop()); layout(); };

  stack.addEventListener("pointerdown", (e) => {
    if (busy || e.target.closest(".pcard") !== order[0]) return;
    drag = true; moved = false; sx = e.clientX; dx = 0;
    order[0].classList.add("dragging");
    stack.setPointerCapture(e.pointerId);
  });
  stack.addEventListener("pointermove", (e) => {
    if (!drag) return;
    dx = e.clientX - sx;
    if (Math.abs(dx) > 5) moved = true;
    order[0].style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)`;
  });
  const end = () => {
    if (!drag) return;
    drag = false;
    order[0].classList.remove("dragging");
    if (Math.abs(dx) > 80) send(dx > 0 ? 1 : -1);
    else if (!moved) send(1);              // klik biasa
    else order[0].style.transform = "";    // geser kurang jauh: balik lagi
    start();
  };
  stack.addEventListener("pointerup", end);
  stack.addEventListener("pointercancel", end);
  stack.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") send(1);
    if (e.key === "ArrowLeft") back();
    start();
  });

  // Ganti foto otomatis tiap 4 detik. Berhenti saat kursor di atas foto, tab disembunyikan, atau tumpukan tidak terlihat.
  const autoplay = !matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timer = null, visible = false, hover = false;
  const start = () => {
    clearInterval(timer);
    if (autoplay) timer = setInterval(() => { if (visible && !hover && !drag && !document.hidden) send(1); }, 4000);
  };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.3 }).observe(stack);
  stack.addEventListener("pointerenter", () => { hover = true; });
  stack.addEventListener("pointerleave", () => { hover = false; });
  setTimeout(start, n * 2000);             // tumpukan kedua mulai telat 2 detik supaya tidak serempak
});

// Tombol salin email (alamatnya diambil otomatis dari tombol Kirim email)
const mailLink = document.getElementById("mail-link");
const copyBtn = document.getElementById("copy-mail");
if (mailLink && copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = mailLink.getAttribute("href").replace("mailto:", "");
    try { await navigator.clipboard.writeText(email); copyBtn.textContent = "Tersalin ✓"; }
    catch { copyBtn.textContent = email; }
    setTimeout(() => { copyBtn.textContent = "Salin email"; }, 2000);
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
    btn.disabled = true; btn.textContent = "Mengirim...";
    bubble("me", String(data.get("message")).trim());
    const status = document.createElement("div");      // keterangan kecil di bawah pesan, seperti centang di aplikasi chat
    status.className = "msg-status";
    status.textContent = "Mengirim...";
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
      status.textContent = "✓ Pesan terkirim";
      form.reset();
      const typing = bubble("them typing", "");         // lalu balasan terpisah dari kamu
      await new Promise((r) => setTimeout(r, 1000));
      typing.className = "bubble them";
      typing.textContent = `Terima kasih, ${name}! Pesanmu sudah masuk ke inbox-ku, nanti kubalas lewat email ya.`;
    } catch {
      status.className = "msg-status error";
      status.textContent = "Belum terkirim";
      bubble("them error", "Pesanmu belum terkirim. Coba lagi sebentar lagi, atau kirim langsung lewat email di bawah.");
    }
    toBottom();
    btn.disabled = false; btn.textContent = "Kirim";
  });
}

// ===== PRESTASI DAN SERTIFIKAT =====
// Mau tambah? Salin satu blok { ... }, tempel di bawahnya, jangan lupa koma.
const achievements = [
  {
    badge: "Finalis",
    title: "Artificial Intelligence Competition of Revolution",
    org: "Mahasiswa Informatika FT Untan, Offline",
    date: "10 Oktober 2026",
    thumb: "assets/sertifikat/aicor-thumb.jpg",   // gambar kecil di kartu
    image: "assets/sertifikat/aicor.jpg"          // gambar besar saat diklik
  },
  {
    badge: "Peserta",
    title: "UNTAN Programming Contest VI",
    org: "Himpunan Mahasiswa Informatika Universitas Tanjungpura",
    date: "Oktober 2026",
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
    card.setAttribute("aria-label", `Lihat sertifikat ${a.badge} ${a.title}`);
    card.innerHTML = `
      <div class="thumb skeleton"><span>${a.title}</span></div>
      <div class="card-body">
        <span class="award-badge">${a.badge}</span>
        <h3>${a.title}</h3>
        <p>${a.org}<br>${a.date}</p>
        <div class="card-links"><span class="btn btn-ghost">Lihat sertifikat</span></div>
      </div>`;
    achGrid.appendChild(card);

    card.addEventListener("mousemove", (e) => {      // cahaya mengikuti kursor, sama seperti kartu project
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
    const open = () => openLightbox(a.image, `Sertifikat ${a.badge} ${a.title}`);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });

    const thumb = card.querySelector(".thumb");      // skeleton shimmer sampai gambar siap
    const img = new Image();
    img.alt = `Sertifikat ${a.title}`;
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