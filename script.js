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

// Foto About miring mengikuti kursor
const tilt = document.getElementById("tilt");
if (tilt && matchMedia("(hover: hover)").matches) {
  tilt.addEventListener("mousemove", (e) => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  });
  tilt.addEventListener("mouseleave", () => { tilt.style.transform = ""; });
}