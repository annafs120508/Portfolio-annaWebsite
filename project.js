document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const projectContents = document.querySelectorAll(".project-content");
    const projectCards = document.querySelectorAll(".project-card");
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalVideo = document.getElementById("modalVideo");
    const modalDescription = document.getElementById("modalDescription");
    const closeBtn = document.querySelector(".close-btn");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Hapus kelas "active" dari semua tombol filter
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");
            projectContents.forEach(content => {
                content.classList.remove("active");
                if (filter === "all" || content.classList.contains(filter)) {
                    content.classList.add("active");
                }
            });
        });
    });

    // Event listener untuk setiap kartu proyek
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project");

            // Menampilkan modal
            modal.style.display = "flex";

            // Menampilkan data sesuai dengan projectId
            if (projectId === "web1") {
                modalTitle.textContent = "Proyek Web 1";
                modalVideo.innerHTML = '<iframe src="https://www.youtube.com/embed/xyz123" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                document.getElementById("aboutProject").textContent = "Deskripsi tentang Proyek Web 1...";
                document.getElementById("problem").textContent = "Masalah yang dihadapi dalam Proyek Web 1...";
            } else if (projectId === "app1") {
                modalTitle.textContent = "Proyek App 1";
                modalVideo.innerHTML = '<iframe src="https://www.youtube.com/embed/abc456" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                document.getElementById("aboutProject").textContent = "Deskripsi tentang Proyek App 1...";
                document.getElementById("problem").textContent = "Masalah yang dihadapi dalam Proyek App 1...";
            }
            // Tambahkan lebih banyak kondisi untuk proyek lainnya sesuai kebutuhan
        });
    });

    // Menutup modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Menutup modal jika klik di luar modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
