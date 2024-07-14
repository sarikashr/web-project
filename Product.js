// Product.js

document.addEventListener('DOMContentLoaded', function() {
    const cartBtns = document.querySelectorAll('.fa-shopping-cart');

    cartBtns.forEach(btn => {
        btn.addEventListener('click', addToCart);
    });

    function addToCart() {
        // Get product details
        const productBox = this.closest('.box');
        const productName = productBox.querySelector('h3').textContent;
        const productPrice = productBox.querySelector('.price').textContent;

        // Store product in localStorage or sessionStorage (for demonstration, using localStorage)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = {
            name: productName,
            price: productPrice
        };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to cart page
        window.location.href = 'cart.html'; // Replace with your actual cart page URL
    }
});

