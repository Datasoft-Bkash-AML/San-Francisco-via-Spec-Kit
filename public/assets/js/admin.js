// Admin Panel JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Admin Panel loaded successfully!');

    // Tab navigation
    const navLinks = document.querySelectorAll('.admin-nav a');
    const sections = document.querySelectorAll('.admin-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Settings form
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const settings = {};

            for (let [key, value] of formData.entries()) {
                settings[key] = value;
            }

            console.log('Settings to save:', settings);
            alert('Settings saved successfully! (This is a demo - data not actually saved)');
        });
    }

    // Edit buttons
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const id = row.cells[0].textContent;
            const name = row.cells[1].textContent;

            alert(`Edit functionality for "${name}" (ID: ${id}) coming soon!`);
        });
    });

    // Delete buttons
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const name = row.cells[1].textContent;

            if (confirm(`Are you sure you want to delete "${name}"?`)) {
                alert('Delete functionality coming soon! (This is a demo)');
            }
        });
    });

    // Add new buttons
    const addButtons = document.querySelectorAll('.btn-primary');
    addButtons.forEach(button => {
        if (button.textContent.includes('Add New')) {
            button.addEventListener('click', function() {
                const section = this.closest('.admin-section');
                const sectionTitle = section.querySelector('h2').textContent;

                alert(`Add new functionality for ${sectionTitle} coming soon!`);
            });
        }
    });

    // Simulate real-time updates
    setInterval(() => {
        const statsNumbers = document.querySelectorAll('.stat-number');
        statsNumbers.forEach(stat => {
            // Random small changes for demo
            const currentValue = parseInt(stat.textContent.replace('$', '').replace(',', ''));
            if (!isNaN(currentValue) && Math.random() > 0.95) {
                const change = Math.floor(Math.random() * 10) - 5;
                const newValue = Math.max(0, currentValue + change);
                if (stat.textContent.includes('$')) {
                    stat.textContent = '$' + newValue;
                } else {
                    stat.textContent = newValue;
                }
            }
        });
    }, 5000);
});