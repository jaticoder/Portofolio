// ===== DAFTAR PROJECT =====
// Mau tambah game? Salin satu blok { ... }, tempel di bawahnya, jangan lupa koma.
const projects = [
  {
    title: "Ojol Rush",
    description: "Game 2D top-down endless dodger: hindari rintangan selama mungkin.",
    status: "Sedang dikembangkan",
    image: "assets/ojol-rush.png",
    itch: "",     // isi link itch.io kalau sudah rilis
    github: ""    // isi link repo GitHub
  },
  { title: "Coming Soon", description: "Project Lainnya.", status: "Segera hadir", image: "", itch: "", github: "" },
  { title: "Coming Soon", description: "Project Lainnya.", status: "Segera hadir", image: "", itch: "", github: "" }
];

// ===== MEMBUAT CARD =====
const grid = document.getElementById("project-grid");

projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "card glass";

  let links = "";
  if (p.itch) links += `<a class="btn btn-solid" href="${p.itch}" target="_blank" rel="noopener">Main di itch.io</a>`;
  if (p.github) links += `<a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener">Kode</a>`;

  card.innerHTML = `
    <div class="thumb skeleton"><span>${p.title}</span></div>
    <div class="card-body">
      <span class="status">${p.status}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="card-links">${links}</div>
    </div>`;
  grid.appendChild(card);

  // Cahaya biru mengikuti kursor di dalam card
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  });

  // Skeleton shimmer berhenti saat gambar selesai dimuat
  const thumb = card.querySelector(".thumb");
  const finish = () => thumb.classList.remove("skeleton");

  if (!p.image) { setTimeout(finish, 900); return; }

  const img = new Image();
  img.alt = `Cuplikan ${p.title}`;
  img.onload = () => setTimeout(() => { thumb.innerHTML = ""; thumb.appendChild(img); finish(); }, 900); // jeda boleh dihapus
  img.onerror = finish;
  img.src = p.image;
});

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
      c.style.setProperty("--v", Math.min(i, 1));   // kartu ke-2 dan seterusnya menumpuk persis di belakang kartu ke-2
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
  const bubble = (cls, text) => {
    const b = document.createElement("div");
    b.className = "bubble " + cls;
    b.textContent = text;
    chat.appendChild(b);
    chat.scrollTop = chat.scrollHeight;
    return b;
  };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (data.get("_honey")) return;                 // jebakan untuk bot
    const btn = form.querySelector("button[type=submit]");
    const name = String(data.get("name")).trim();
    btn.disabled = true; btn.textContent = "Mengirim...";
    bubble("me", String(data.get("message")).trim());
    const status = document.createElement("div");      // keterangan kecil di bawah pesan, seperti centang di aplikasi chat
    status.className = "msg-status";
    status.textContent = "Mengirim...";
    chat.appendChild(status);
    chat.scrollTop = chat.scrollHeight;
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
    chat.scrollTop = chat.scrollHeight;
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