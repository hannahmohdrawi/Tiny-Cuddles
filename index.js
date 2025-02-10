//Banner

let currentIndex = 0;
const banners = document.querySelectorAll('.banner-image');

function showSlide(index) {
    banners.forEach((banner, i) => {
        banner.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % banners.length;
    showSlide(currentIndex);
}


//Shopping Cart 
let cart = [];

function toggleCart(){
    document.getElementById('cartPopup').classList.toggle('open');
}

function addToCart(itemName, itemPrice){
    cart.push({name: itemName, price: itemPrice});
    updateCartDisplay();
}

function updateCartDisplay(){
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - £${item.price.toFixed(2)} `;
        cartItemsContainer.appendChild(listItem);
    });
    cartTotalContainer.innerText = total.toFixed(2);
}
