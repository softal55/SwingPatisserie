
function initCart() {
 

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const total = parseFloat(localStorage.getItem('total')) || 0;

  const cartContainer = document.getElementById('cart-items-container');
  console.log(cartContainer.innerHTML);
  cartContainer.innerHTML = '';

  cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="/${item.image}" alt="${item.alt}" class="cart-item-image">
      <div class="cart-item-details">
        <h3 class="cart-item-name">${item.name}</h3>
        <p class="cart-item-price">${item.price} Da</p>
      </div>
      <button class="remove-from-cart" onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });


  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = `Total: ${total.toFixed(2)} Da`;
}

function removeFromCart(itemId) {
 
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const itemIndex = cart.findIndex(item => item.id === itemId);
  if (itemIndex > -1) {
    cart.splice(itemIndex, 1);
  }
  const newTotal = cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0);

 
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('total', newTotal);

  initCart();
}