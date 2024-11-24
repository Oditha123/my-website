// Select the custom cursor element
const cursor = document.getElementById('cursor');

// Update cursor position on mousemove
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Add hover effect for interactive elements (buttons, links, etc.)
const hoverables = document.querySelectorAll('.interactive');

hoverables.forEach(el => {
    el.addEventListener('mouseover', () => {
        cursor.style.transform = 'scale(1.5)'; // Scale cursor on hover
        cursor.style.backgroundColor = 'rgba(0, 0, 255, 0.8)'; // Change color (optional)
    });
    el.addEventListener('mouseout', () => {
        cursor.style.transform = 'scale(1)'; // Revert cursor size
        cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Revert color (optional)
    });
});

// Optional: Add fade-in/out behavior for cursor visibility
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0'; // Hide cursor when mouse leaves the window
});
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1'; // Show cursor when mouse re-enters the window
});

// Performance optimization: Debounce cursor movement for smoother transitions
let timeout;
document.addEventListener('mousemove', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    }, 10); // Adjust delay as needed for performance
});

// Accessibility: Ensure the custom cursor does not interfere with screen readers
cursor.setAttribute('aria-hidden', 'true');
