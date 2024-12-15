document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn'); // Select buttons
    const cartCountElement = document.getElementById('cart-count'); // Select the cart count span
    let cart = []; // Initialize cart array

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card'); // Select product card
            const productName = productCard.querySelector('h3').textContent; // Get product name
            const productPrice = productCard.querySelector('.product-price').textContent; // Get product price

            // Add product to cart array
            cart.push({ name: productName, price: productPrice });

            // Update cart count visually
            cartCountElement.textContent = cart.length;

            // Show confirmation
            alert(`Added to Cart:\n${productName}\nPrice: ${productPrice}`);
        });
    });
});
