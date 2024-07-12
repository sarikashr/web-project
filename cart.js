// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Select all remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');

    // Add click event listener to each remove button
    removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Get the parent cart item element
            const cartItem = event.target.closest('.cart-item');
            
            // Remove the cart item from the DOM
            cartItem.remove();

            // Optional: You can add additional functionality here, like updating total price, etc.
        });
    });
});
