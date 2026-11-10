// ===== DAFTAR PROJECT =====
// Mau tambah game baru? Salin satu blok { ... }, tempel di bawahnya, lalu ganti isinya.
// Jangan lupa koma (,) di antara blok.
const projects = [
  {
    title: "Ojol Rush",
    description: "Game 2D top-down endless dodger buatan sendiri: hindari rintangan selama mungkin.",
    status: "Sedang dikembangkan",
    image: "assets/ojol-rush.png",   // taruh gambar di folder assets
    itch: "",                        // isi link itch.io kalau sudah rilis
    github: ""                       // isi link repo GitHub-mu
  },
  {
    title: "Game berikutnya",
    description: "Slot ini disiapkan untuk project selanjutnya.",
    status: "Segera hadir",
    image: "",
    itch: "",
    github: ""
  }
];

// ===== MEMBUAT CARD =====
const grid = document.getElementById("project-grid");

projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "card";

  // Tombol hanya muncul kalau linknya diisi
  let links = "";
  if (p.itch) links += `<a class="btn" href="${p.itch}" target="_blank" rel="noopener">Main di itch.io</a>`;
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

  // Skeleton shimmer: berhenti saat gambar selesai dimuat
  const thumb = card.querySelector(".thumb");
  const finish = () => thumb.classList.remove("skeleton");

  if (!p.image) {
    setTimeout(finish, 900);  // tanpa gambar: shimmer sebentar, lalu tampilkan nama
    return;
  }
  const img = new Image();
  img.alt = `Cuplikan ${p.title}`;
  img.onload = () => {
    // jeda 900ms hanya supaya efek shimmer sempat terlihat saat testing; boleh dihapus
    setTimeout(() => { thumb.innerHTML = ""; thumb.appendChild(img); finish(); }, 900);
  };
  img.onerror = finish;       // gambar belum ada: tampilkan nama project saja
  img.src = p.image;
});