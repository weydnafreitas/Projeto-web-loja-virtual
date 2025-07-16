// Dados dos produtos da página inicial
const homePageProducts = [
    { id: 1, name: "Macaquinho Short Saia", price: 104.99, image: "imagens/macaquinho-short-saia.jpg", category: "macaquinho" },
    { id: 2, name: "Macaquinho Rosa", price: 114.99, image: "imagens/macaquinho-rosa.jpg", category: "macaquinho" },
    { id: 3, name: "Macacão", price: 125.99, image: "imagens/macacão.jpg", category: "macacão" },
    { id: 4, name: "Macacão Azul Marinho", price: 137.99, image: "imagens/macacão-azul-marinho.jpg", category: "macacão" }
];

// Dados dos produtos para a página 'Nossos Produtos'
const allProducts = [
    { "id": 5, "name": "Conjunto 1", "image": "imagens/conjunto (1).jpg", "category": "conjunto", "price": 89.90 },
    { "id": 6, "name": "Conjunto 2", "image": "imagens/conjunto (2).jpg", "category": "conjunto", "price": 92.50 },
    { "id": 7, "name": "Conjunto 3", "image": "imagens/conjunto (3).jpg", "category": "conjunto", "price": 87.00 },
    { "id": 8, "name": "Conjunto 4", "image": "imagens/conjunto (4).jpg", "category": "conjunto", "price": 95.90 },
    { "id": 9, "name": "Conjunto 5", "image": "imagens/conjunto (5).jpg", "category": "conjunto", "price": 79.99 },
    { "id": 10, "name": "Conjunto 6", "image": "imagens/conjunto (6).jpg", "category": "conjunto", "price": 91.50 },
    { "id": 11, "name": "Conjunto 7", "image": "imagens/conjunto (7).jpg", "category": "conjunto", "price": 88.80 },
    { "id": 12, "name": "Conjunto 8", "image": "imagens/conjunto (8).jpg", "category": "conjunto", "price": 90.00 },
    { "id": 13, "name": "Conjunto 9", "image": "imagens/conjunto (9).jpg", "category": "conjunto", "price": 93.70 },
    { "id": 14, "name": "Conjunto 10", "image": "imagens/conjunto (10).jpg", "category": "conjunto", "price": 86.90 },
    { "id": 15, "name": "Conjunto 11", "image": "imagens/conjunto (11).jpg", "category": "conjunto", "price": 97.20 },
    { "id": 16, "name": "Conjunto 12", "image": "imagens/conjunto (12).jpg", "category": "conjunto", "price": 84.00 },
    { "id": 17, "name": "Conjunto 13", "image": "imagens/conjunto (13).jpg", "category": "conjunto", "price": 85.90 },
    { "id": 18, "name": "Conjunto 14", "image": "imagens/conjunto (14).jpg", "category": "conjunto", "price": 90.90 },
    { "id": 19, "name": "Conjunto 15", "image": "imagens/conjunto (15).jpg", "category": "conjunto", "price": 94.99 },
    { "id": 20, "name": "Conjunto 16", "image": "imagens/conjunto (16).jpg", "category": "conjunto", "price": 89.00 },
    { "id": 21, "name": "Conjunto 17", "image": "imagens/conjunto (17).jpg", "category": "conjunto", "price": 93.30 },
    { "id": 22, "name": "Conjunto 18", "image": "imagens/conjunto (18).jpg", "category": "conjunto", "price": 88.00 },
    { "id": 23, "name": "Conjunto 19", "image": "imagens/conjunto (19).jpg", "category": "conjunto", "price": 91.80 },
    { "id": 24, "name": "Conjunto 20", "image": "imagens/conjunto (20).jpg", "category": "conjunto", "price": 94.00 }, // Restaurado
    { "id": 25, "name": "Conjunto 21", "image": "imagens/conjunto (21).jpg", "category": "conjunto", "price": 92.00 },
    { "id": 26, "name": "Conjunto 22", "image": "imagens/conjunto (22).jpg", "category": "conjunto", "price": 86.50 },
    { "id": 27, "name": "Conjunto 23", "image": "imagens/conjunto (23).jpg", "category": "conjunto", "price": 89.70 },
    { "id": 28, "name": "Conjunto 24", "image": "imagens/conjunto (24).jpg", "category": "conjunto", "price": 90.30 }
    // Removidos os placeholders de placehold.co para consistência com suas imagens locais
];

// Dados dos produtos para a página de Promoções
const promotionsProducts = [
    { "id": 33, "name": "São João (1)", "image": "imagens/sao joao (1).jpg", "category": "promoção", "price": 89.90, "oldPrice": 129.90 },
    { "id": 34, "name": "São João (2)", "image": "imagens/sao joao (2).jpg", "category": "promoção", "price": 92.50, "oldPrice": 135.00 },
    { "id": 35, "name": "São João (3)", "image": "imagens/sao joao (3).jpg", "category": "promoção", "price": 87.00, "oldPrice": 124.00 },
    { "id": 36, "name": "São João (4)", "image": "imagens/sao joao (4).jpg", "category": "promoção", "price": 95.90, "oldPrice": 140.00 },
    { "id": 37, "name": "São João (5)", "image": "imagens/sao joao (5).jpg", "category": "promoção", "price": 79.99, "oldPrice": 119.90 },
    { "id": 38, "name": "São João (6)", "image": "imagens/sao joao (6).jpg", "category": "promoção", "price": 91.50, "oldPrice": 132.00 },
    { "id": 39, "name": "São João (7)", "image": "imagens/sao joao (7).jpg", "category": "promoção", "price": 88.80, "oldPrice": 125.00 },
    { "id": 40, "name": "São João (8)", "image": "imagens/sao joao (8).jpg", "category": "promoção", "price": 90.00, "oldPrice": 129.90 },
    { "id": 41, "name": "São João (9)", "image": "imagens/sao joao (9).jpg", "category": "promoção", "price": 93.70, "oldPrice": 138.90 },
    { "id": 42, "name": "São João (10)", "image": "imagens/sao joao (10).jpg", "category": "promoção", "price": 86.90, "oldPrice": 130.00 },
    { "id": 43, "name": "São João (11)", "image": "imagens/sao joao (11).jpg", "category": "promoção", "price": 97.20, "oldPrice": 145.00 },
    { "id": 44, "name": "São João (12)", "image": "imagens/sao joao (12).jpg", "category": "promoção", "price": 84.00, "oldPrice": 123.00 },
    { "id": 45, "name": "São João (13)", "image": "imagens/sao joao (13).jpg", "category": "promoção", "price": 85.90, "oldPrice": 128.00 },
    { "id": 46, "name": "São João (14)", "image": "imagens/sao joao (14).jpg", "category": "promoção", "price": 90.90, "oldPrice": 136.00 },
    { "id": 47, "name": "São João (15)", "image": "imagens/sao joao (15).jpg", "category": "promoção", "price": 94.99, "oldPrice": 144.99 },
    { "id": 48, "name": "São João (16)", "image": "imagens/sao joao (16).jpg", "category": "promoção", "price": 95.00, "oldPrice": 140.00 }
];
























// Variável global para o carrinho, carregada do localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para adicionar produto ao carrinho
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));

    // Procura o produto em TODOS os arrays de produtos (homePageProducts, allProducts, promotionsProducts)
    // Certifique-se de que esses arrays estejam definidos no seu app.js completo
    const product = homePageProducts.find(p => p.id === productId) ||
                    allProducts.find(p => p.id === productId) ||
                    promotionsProducts.find(p => p.id === productId);

    if (!product) {
        console.error('Produto não encontrado:', productId);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Salva o array atualizado no localStorage
    updateCartCount();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Função para atualizar o contador de itens no carrinho na navegação
function updateCartCount() {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = storedCart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-icon .cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    console.log(`Itens no carrinho: ${cartCount}`);
}

// Função para mostrar notificação de adição ao carrinho
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--rosa-principal)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s ease-in-out';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 3000);
}

// Funções específicas da página do carrinho (chamadas apenas em carrinho.html)
function loadCartItems() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartSummary = document.querySelector('.cart-summary');
    const cartActions = document.querySelector('.cart-actions');

    cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'block';
        cartItemsList.innerHTML = '';
        cartSummary.style.display = 'none';
        cartActions.style.display = 'none';
        updateCartCount();
        return;
    } else {
        cartEmptyMessage.style.display = 'none';
        cartSummary.style.display = 'block';
        cartActions.style.display = 'flex';
    }

    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="price">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="decrease-quantity" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="increase-quantity" data-id="${item.id}">+</button>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">Remover</button>
        `;
        cartItemsList.appendChild(cartItemDiv);
    });

    cartItemsList.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    cartItemsList.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    cartItemsList.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', removeItemFromCart);
    });

    updateCartSummary();
    updateCartCount();
}

function decreaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
    }
}

function increaseQuantity(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
    }
}

function removeItemFromCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
}

function updateCartSummary() {
    const subtotalElement = document.getElementById('cart-subtotal');
    const shippingElement = document.getElementById('cart-shipping');
    const totalElement = document.getElementById('cart-total');

    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let shipping = 0;

    if (subtotal === 0) {
        shipping = 0;
    } else {
        shipping = 0; // Mantendo frete grátis para o exemplo inicial
    }

    let total = subtotal + shipping;

    subtotalElement.textContent = subtotal.toFixed(2).replace('.', ',');
    shippingElement.textContent = shipping.toFixed(2).replace('.', ',');
    totalElement.textContent = total.toFixed(2).replace('.', ',');
}

