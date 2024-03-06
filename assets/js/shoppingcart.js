let openShopping = document.querySelector('.shopping-cart');
let closeShopping = document.querySelector('.closeShopping');
let listProduct = document.querySelector('.product-list-container');
let listCard = document.querySelector('.list-shopping-cart-side');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let listGioHang = document

openShopping.addEventListener('click', () => {
        body.classList.add('active');
    })
    // closeShopping.addEventListener('click', ()=>{
    //     body.classList.remove('active');
    // })

let products = [{
        id: 1,
        name: 'Nước rửa chén HA-BIO hương chanh 1',
        image: 'product1.png',
        price: 120000,
        priceOriginal: 140000,
        promotion: "-10%"
    },
    {
        id: 2,
        name: 'Nước rửa chén HA-BIO hương chanh 2',
        image: 'product2.png',
        price: 120000,
        priceOriginal: 140000,
        promotion: "-10%"
    },
    {
        id: 3,
        name: 'Nước rửa chén HA-BIO hương chanh 3',
        image: 'product_3.png',
        price: 220000,
        priceOriginal: 140000,
        promotion: "-5%"
    },
    {
        id: 4,
        name: 'Nước rửa chén HA-BIO hương chanh 4',
        image: 'product4.png',
        price: 123000,
        priceOriginal: 140000,
        promotion: "-5%"
    },
    {
        id: 4,
        name: 'Nước rửa chén HA-BIO hương chanh 5',
        image: 'product1.png',
        price: 220000,
        priceOriginal: 140000,
        promotion: "-5%"
    },
    {
        id: 5,
        name: 'Nước rửa chén HA-BIO hương chanh 6',
        image: 'product2.png',
        price: 123000,
        priceOriginal: 140000,
        promotion: "-5%"
    }
];
let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <a href="chi-tiet-san-pham.html">
            <img src="/assets/images/${value.image}">
            <span class="badge">${value.promotion} </span>
            <div class="title">${value.name}</div>
            </a>
            <div class="price-o"><del>${value.price.toLocaleString()} VNĐ </del></div>
            <div class="price">${value.price.toLocaleString()} VNĐ</div>
            <button onclick="addToCard(${key})">Thêm vào giỏ hàng</button>
            `;
        listProduct.appendChild(newDiv);
    })
    listCard.innerHTML = '<div class="ps-3 text-secondary">Chưa có sản phẩm trong giỏ hàng</div>';
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }

    reloadCard();

}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="assets/images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div> `;
            listCard.appendChild(newDiv);

        }
    })
    let totalDiv = document.createElement('div');
    totalDiv.innerHTML = `
        <hr>
        <div class="checkOut">
            <div>Tổng tiền hàng: <span>${totalPrice.toLocaleString()}</span></div>      
        </div>
        <hr>
        <div class="text-center">
            <a href="gio-hang.html" class="btn btn-success"><b>Xem giỏ hàng</b></a>
        </div>`;
    listCard.appendChild(totalDiv);
    quantity.innerText = count;




}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}