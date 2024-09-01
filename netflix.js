// Highlight the clicked menu item
function handleMenuClick(event) {
    // Remove 'active' class from all menu items
    let menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked menu item
    event.target.classList.add('active');
}

// Attach click event to each menu item
let menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => item.addEventListener('click', handleMenuClick));

// Function to handle hover effect on images
function handleImageHover(event) {
    event.target.style.transform = 'scale(1.1)';
    event.target.style.transition = 'transform 0.2s ease-in-out';
}

function handleImageOut(event) {
    event.target.style.transform = 'scale(1)';
}

// Attach hover event to each image
let images = document.querySelectorAll('.first img');
images.forEach(img => {
    img.addEventListener('mouseover', handleImageHover);
    img.addEventListener('mouseout', handleImageOut);
});

// Optional: Adding functionality to display video title on hover
function showTitle(event) {
    const title = event.target.alt || "Video Title";
    const titleElement = document.createElement('div');
    titleElement.className = 'video-title';
    titleElement.innerText = title;
    document.body.appendChild(titleElement);

    titleElement.style.left = `${event.pageX}px`;
    titleElement.style.top = `${event.pageY}px`;
}

function hideTitle() {
    const titleElement = document.querySelector('.video-title');
    if (titleElement) {
        titleElement.remove();
    }
}

// Attach hover event to show titles
images.forEach(img => {
    img.addEventListener('mouseover', showTitle);
    img.addEventListener('mouseout', hideTitle);
});
// script.js

// Function to handle the menu item click
function handleMenuClick(event) {
    // Remove 'active' class from all menu items
    let menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked menu item
    event.target.classList.add('active');
}

// Attach click event to each menu item
let menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => item.addEventListener('click', handleMenuClick));

// Function to handle hover effect on images
function handleImageHover(event) {
    event.target.style.transform = 'scale(1.1)';
    event.target.style.transition = 'transform 0.2s ease-in-out';
}

function handleImageOut(event) {
    event.target.style.transform = 'scale(1)';
}

// Attach hover event to each image
let images = document.querySelectorAll('.first img');
images.forEach(img => {
    img.addEventListener('mouseover', handleImageHover);
    img.addEventListener('mouseout', handleImageOut);
});
