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
  { title: "Project berikutnya", description: "Slot untuk game selanjutnya.", status: "Segera hadir", image: "", itch: "", github: "" },
  { title: "Eksperimen", description: "Prototype kecil dan latihan mekanik game.", status: "Segera hadir", image: "", itch: "", github: "" }
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