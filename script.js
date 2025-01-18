// Select elements
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

// Toggle sidebar visibility
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Toggle dropdown menu visibility
dropdownToggle.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    dropdown.classList.toggle('active');
});


 