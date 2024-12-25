// Filter button functionality
const filterButtons = document.querySelectorAll('.filter-button');
const skillContents = document.querySelectorAll('.skill-content');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Reset active class on all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter skill content
        skillContents.forEach(content => {
            if (filter === 'all' || content.getAttribute('data-category') === filter) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});
