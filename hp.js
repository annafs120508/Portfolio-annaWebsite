// Ambil semua kartu proyek
const projectCards = document.querySelectorAll('.project-card');

// Modal elements
const projectModal = document.getElementById('projectModal');
const projectModalTitle = document.getElementById('modalTitle');
const projectModalVideo = document.querySelector('#modalVideo video');
const projectAbout = document.getElementById('aboutProject');
const projectProblem = document.getElementById('problem');
const closeModalBtn = document.querySelector('.close-btn');

// Event listener untuk setiap kartu proyek
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        // Ambil data dari atribut data-* pada kartu yang dipilih
        const videoSource = card.getAttribute('data-video');
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        
        // Update modal dengan data dari kartu yang diklik
        projectModalTitle.textContent = title;
        projectModalVideo.src = videoSource;
        projectAbout.textContent = description;
        
        // Tampilkan modal
        projectModal.style.display = 'flex';
    });
});

// Menutup modal ketika klik tombol close
closeModalBtn.addEventListener('click', () => {
    projectModal.style.display = 'none';
    projectModalVideo.pause(); // Stop video ketika modal ditutup
});

// Menutup modal ketika klik di luar konten modal
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        projectModalVideo.pause(); // Stop video
    }
});

// Filter button functionality
const filterProjectBtns = document.querySelectorAll('.filter-button');
const projectItems = document.querySelectorAll('.project-content');

filterProjectBtns.forEach(button => {
    button.addEventListener('click', () => {
        const selectedFilter = button.getAttribute('data-filter');

        filterProjectBtns.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        projectItems.forEach(item => {
            if (selectedFilter === 'all' || item.classList.contains(selectedFilter)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});
