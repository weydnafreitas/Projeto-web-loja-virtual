// Dados dos produtos
const products = [
    {
        id: 1,
        name: "MARQUIP Macrodão",
        price: 100.00,
        image: "https://via.placeholder.com/250x200?text=Macrodão",
        category: "vestidos"
    },
    {
        id: 2,
        name: "MARQUIP Calça Alta",
        price: 100.00,
        image: "https://via.placeholder.com/250x200?text=Calça+Alta",
        category: "calcas"
    },
    {
        id: 3,
        name: "MARQUIP Macrodão Formal",
        price: 100.00,
        image: "https://via.placeholder.com/250x200?text=Macrodão+Formal",
        category: "vestidos"
    },
    {
        id: 4,
        name: "SOLICACHE Vestidinho",
        price: 100.00,
        image: "https://via.placeholder.com/250x200?text=Vestidinho",
        category: "vestidos"
    }
];

// Carrinho de compras
let cart = [];

// Função para carregar produtos na página
function loadProducts() {
    const productsContainer = document.getElementById('products-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
            <button class="btn add-to-cart" data-id="${product.id}">Adicionar ao carrinho</button>
        `;
        productsContainer.appendChild(productCard);
    });
    
    // Adiciona eventos aos botões
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Função para adicionar produto ao carrinho
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Função para atualizar o contador do carrinho
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    // Aqui você pode adicionar um elemento no DOM para mostrar o contador
    console.log(`Itens no carrinho: ${cartCount}`);
}

// Função para mostrar notificação
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
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Menu mobile (para telas pequenas)
function setupMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰ Menu';
    menuToggle.style.display = 'none';
    menuToggle.style.background = 'var(--rosa-escuro)';
    menuToggle.style.color = 'white';
    menuToggle.style.border = 'none';
    menuToggle.style.padding = '10px 15px';
    menuToggle.style.fontSize = '1.2em';
    menuToggle.style.cursor = 'pointer';
    
    const nav = document.querySelector('nav');
    nav.parentNode.insertBefore(menuToggle, nav);
    
    function toggleMenu() {
        const ul = document.querySelector('nav ul');
        if (ul.style.display === 'flex' || ul.style.display === '') {
            ul.style.display = 'none';
        } else {
            ul.style.display = 'flex';
        }
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            document.querySelector('nav ul').style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            document.querySelector('nav ul').style.display = 'flex';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupMobileMenu();
    
    // Aqui você pode adicionar mais inicializações
});
