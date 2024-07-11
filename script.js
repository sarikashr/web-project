document.addEventListener('DOMContentLoaded', () => {
    let login = document.querySelector('.login-form');
    let navbar = document.querySelector('.navbar');
  
    document.querySelector('#login-btn').onclick = () => {
        login.classList.toggle('active');
        navbar.classList.remove('active');
    }
  
    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        login.classList.remove('active');
    }
  
    window.onscroll = () => {
        login.classList.remove('active');
        navbar.classList.remove('active');
    }
  
    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
        },
    });
  
    const cartItems = document.querySelectorAll('.cart-item');
    const totalElement = document.querySelector('.total span');
    const removeButtons = document.querySelectorAll('.remove-item');
  
    const updateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.price').innerText.replace('$', ''));
            const quantity = parseInt(item.querySelector('input').value);
            total += price * quantity;
        });
        totalElement.innerText = `$${total.toFixed(2)}`;
    };
  
    cartItems.forEach(item => {
        const quantityInput = item.querySelector('input');
        quantityInput.addEventListener('change', updateTotal);
    });
  
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.target.closest('.cart-item');
            item.remove(); // Remove the item from the cart
            updateTotal(); // Update the total price after removing an item
        });
    });
  
    updateTotal(); // Initial update of total price on page load
  });