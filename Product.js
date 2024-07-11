// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all product boxes
    const products = document.querySelectorAll('.box');

    products.forEach(product => {
        const cartBtn = product.querySelector('.fa-shopping-cart');
        const wishlistBtn = product.querySelector('.fa-heart');
        const viewBtn = product.querySelector('.fa-eye');

        // Add to cart functionality
        cartBtn.addEventListener('click', function() {
            const productName = product.querySelector('h3').textContent;
            addToCart(productName);
        });

        // Add to wishlist functionality
        wishlistBtn.addEventListener('click', function() {
            const productName = product.querySelector('h3').textContent;
            addToWishlist(productName);
        });

        // View product details functionality
        viewBtn.addEventListener('click', function() {
            const productName = product.querySelector('h3').textContent;
            viewProductDetails(productName);
        });
    });
});

function addToCart(productName) {
    alert(`${productName} added to cart!`);
    // Here you would typically update the cart in your application
}

function addToWishlist(productName) {
    alert(`${productName} added to wishlist!`);
    // Here you would typically update the wishlist in your application
}

function viewProductDetails(productName) {
    alert(`Viewing details for ${productName}`);
    // Here you would typically open a modal or navigate to a product detail page
}

