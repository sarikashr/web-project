// Select all remove buttons
const removeButtons = document.querySelectorAll('.remove-btn');

// Add click event listener to each remove button
removeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Remove the parent element of the remove button (which is the cart item)
        event.target.closest('.cart-item').remove();
    });
});
