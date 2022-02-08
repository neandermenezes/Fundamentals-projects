const cart = document.querySelector('.cart__items');
const buttonEmpty = document.querySelector('.empty-cart');
const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=$computador';

function totalPrice() {
  const priceBox = document.createElement('h2');
  const cartItems = document.querySelectorAll('.cart__item');
  const array = [];
  const priceDisplay = document.querySelector('.total-price');
  
  if (priceDisplay) priceDisplay.remove();

  cartItems.forEach((elem) => array.push(parseFloat(elem.innerText.split('$')[1])));
  const priceTotal = array.reduce((acc, curr) => acc + curr, 0);

  priceBox.innerHTML = `${priceTotal}`;
  priceBox.className = 'total-price';
  document.querySelector('.cart').appendChild(priceBox);
}

function emptyCart() {
  const cartItems = document.querySelectorAll('.cart__item');
  cartItems.forEach((elem) => elem.remove());
  localStorage.clear();
  totalPrice();
}

function localStorageAddRemove(element) {
  localStorage.setItem('cartList', element);
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({
  id: sku,
  title: name,
  thumbnail: image,
}) {
  const section = document.createElement('section');
  const items = document.querySelector('.items');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  items.appendChild(section);
  return items;
}

/* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

function cartItemClickListener(event) {
  /* localStorage.removeItem(event); */
  event.target.remove();
  totalPrice();
}

function createCartItemElement(
  sku,
  name,
  salePrice,
) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function addButton() {
  const button = document.querySelectorAll('.item__add');
  /* console.log(button); */

  button.forEach((item) => item.addEventListener('click', async (e) => {
    const itemClass = e.target.parentNode;
    const itemId = itemClass.firstChild; // ADD .innerText
    const itemName = itemId.nextSibling.innerText;
    const price = await fetch(`https://api.mercadolibre.com/items/${itemId.innerText}`)
      .then((response) => response.json())
      .then((response) => response.price);
    cart.appendChild(createCartItemElement(itemId.innerText, itemName, price));
    localStorageAddRemove(cart.innerHTML);
    totalPrice();
  }));
}

const listProducts = async () => {
  const loader = document.createElement('div');
  loader.className = 'loading';
  document.body.appendChild(loader);
  const list = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.results);
  list.forEach((item) => createProductItemElement(item));
  addButton();
  totalPrice();
  loader.remove();
};

function saveCart() {
  for (let i = 0; i < localStorage.length; i += 1) {
    cart.innerHTML += localStorage.getItem(localStorage.key(i));
  }
  cart.addEventListener('click', cartItemClickListener);
  totalPrice();
}

window.onload = () => {
  listProducts();
  saveCart();
  buttonEmpty.addEventListener('click', emptyCart);
};