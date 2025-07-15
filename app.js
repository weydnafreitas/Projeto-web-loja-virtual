// Dados dos produtos da página inicial
const homePageProducts = [
    {
        id: 1,
        name: "Macaquinho Short Saia",
        price: 104.99,
        image: "imagens/macaquinho-short-saia.jpg",
        category: "macaquinho"
    },
    {
        id: 2,
        name: "Macaquinho Rosa",
        price: 114.99,
        image: "imagens/macaquinho-rosa.jpg",
        category: "macaquinho"
    },
    {
        id: 3,
        name: "Macacão",
        price: 125.99,
        image: "imagens/macacão.jpg",
        category: "macacão"
    },
    {
        id: 4,
        name: "Macacão Azul Marinho",
        price: 137.99,
        image: "imagens/macacão-azul-marinho.jpg",
        category: "macacão"
    }
];

// Dados dos produtos para a página 'Nossos Produtos'
const allProducts = [
  {
    "id": 5,
    "name": "Conjunto 1",
    "image": "imagens/conjunto (1).jpg",
    "category": "conjunto",
    "price": 89.90
  },
  {
    "id": 6,
    "name": "Conjunto 2",
    "image": "imagens/conjunto (2).jpg",
    "category": "conjunto",
    "price": 92.50
  },
  {
    "id": 7,
    "name": "Conjunto 3",
    "image": "imagens/conjunto (3).jpg",
    "category": "conjunto",
    "price": 87.00
  },
  {
    "id": 8,
    "name": "Conjunto 4",
    "image": "imagens/conjunto (4).jpg",
    "category": "conjunto",
    "price": 95.90
  },
  {
    "id": 9,
    "name": "Conjunto 5",
    "image": "imagens/conjunto (5).jpg",
    "category": "conjunto",
    "price": 79.99
  },
  {
    "id": 10,
    "name": "Conjunto 6",
    "image": "imagens/conjunto (6).jpg",
    "category": "conjunto",
    "price": 91.50
  },
  {
    "id": 11,
    "name": "Conjunto 7",
    "image": "imagens/conjunto (7).jpg",
    "category": "conjunto",
    "price": 88.80
  },
  {
    "id": 12,
    "name": "Conjunto 8",
    "image": "imagens/conjunto (8).jpg",
    "category": "conjunto",
    "price": 90.00
  },
  {
    "id": 13,
    "name": "Conjunto 9",
    "image": "imagens/conjunto (9).jpg",
    "category": "conjunto",
    "price": 93.70
  },
  {
    "id": 14,
    "name": "Conjunto 10",
    "image": "imagens/conjunto (10).jpg",
    "category": "conjunto",
    "price": 86.90
  },
  {
    "id": 15,
    "name": "Conjunto 11",
    "image": "imagens/conjunto (11).jpg",
    "category": "conjunto",
    "price": 97.20
  },
  {
    "id": 16,
    "name": "Conjunto 12",
    "image": "imagens/conjunto (12).jpg",
    "category": "conjunto",
    "price": 84.00
  },
  {
    "id": 17,
    "name": "Conjunto 13",
    "image": "imagens/conjunto (13).jpg",
    "category": "conjunto",
    "price": 85.90
  },
  {
    "id": 18,
    "name": "Conjunto 14",
    "image": "imagens/conjunto (14).jpg",
    "category": "conjunto",
    "price": 90.90
  },
  {
    "id": 19,
    "name": "Conjunto 15",
    "image": "imagens/conjunto (15).jpg",
    "category": "conjunto",
    "price": 94.99
  },
  {
    "id": 20,
    "name": "Conjunto 16",
    "image": "imagens/conjunto (16).jpg",
    "category": "conjunto",
    "price": 89.00
  },
  {
    "id": 21,
    "name": "Conjunto 17",
    "image": "imagens/conjunto (17).jpg",
    "category": "conjunto",
    "price": 93.30
  },
  {
    "id": 22,
    "name": "Conjunto 18",
    "image": "imagens/conjunto (18).jpg",
    "category": "conjunto",
    "price": 88.00
  },
  {
    "id": 23,
    "name": "Conjunto 19",
    "image": "imagens/conjunto (19).jpg",
    "category": "conjunto",
    "price": 91.80
  },
  {
    "id": 25,
    "name": "Conjunto 21",
    "image": "imagens/conjunto (21).jpg",
    "category": "conjunto",
    "price": 92.00
  },
  {
    "id": 26,
    "name": "Conjunto 22",
    "image": "imagens/conjunto (22).jpg",
    "category": "conjunto",
    "price": 86.50
  },
  {
    "id": 27,
    "name": "Conjunto 23",
    "image": "imagens/conjunto (23).jpg",
    "category": "conjunto",
    "price": 89.70
  },
  {
    "id": 28,
    "name": "Conjunto 24",
    "image": "imagens/conjunto (24).jpg",
    "category": "conjunto",
    "price": 90.30
  },
];

// Dados dos produtos para a página de Promoções (NOVO ARRAY)
const promotionsProducts = [
  {
    "id": 33,
    "name": "São João (1)",
    "image": "imagens/sao joao (1).jpg",
    "category": "promoção",
    "price": 89.90,
    "oldPrice": 129.90
  },
  {
    "id": 34,
    "name": "São João (2)",
    "image": "imagens/sao joao (2).jpg",
    "category": "promoção",
    "price": 92.50,
    "oldPrice": 135.00
  },
  {
    "id": 35,
    "name": "São João (3)",
    "image": "imagens/sao joao (3).jpg",
    "category": "promoção",
    "price": 87.00,
    "oldPrice": 124.00
  },
  {
    "id": 36,
    "name": "São João (4)",
    "image": "imagens/sao joao (4).jpg",
    "category": "promoção",
    "price": 95.90,
    "oldPrice": 140.00
  },
  {
    "id": 37,
    "name": "São João (5)",
    "image": "imagens/sao joao (5).jpg",
    "category": "promoção",
    "price": 79.99,
    "oldPrice": 119.90
  },
  {
    "id": 38,
    "name": "São João (6)",
    "image": "imagens/sao joao (6).jpg",
    "category": "promoção",
    "price": 91.50,
    "oldPrice": 132.00
  },
  {
    "id": 39,
    "name": "São João (7)",
    "image": "imagens/sao joao (7).jpg",
    "category": "promoção",
    "price": 88.80,
    "oldPrice": 125.00
  },
  {
    "id": 40,
    "name": "São João (8)",
    "image": "imagens/sao joao (8).jpg",
    "category": "promoção",
    "price": 90.00,
    "oldPrice": 129.90
  },
  {
    "id": 41,
    "name": "São João (9)",
    "image": "imagens/sao joao (9).jpg",
    "category": "promoção",
    "price": 93.70,
    "oldPrice": 138.90
  },
  {
    "id": 42,
    "name": "São João (10)",
    "image": "imagens/sao joao (10).jpg",
    "category": "promoção",
    "price": 86.90,
    "oldPrice": 130.00
  },
  {
    "id": 43,
    "name": "São João (11)",
    "image": "imagens/sao joao (11).jpg",
    "category": "promoção",
    "price": 97.20,
    "oldPrice": 145.00
  },
  {
    "id": 44,
    "name": "São João (12)",
    "image": "imagens/sao joao (12).jpg",
    "category": "promoção",
    "price": 84.00,
    "oldPrice": 123.00
  },
  {
    "id": 45,
    "name": "São João (13)",
    "image": "imagens/sao joao (13).jpg",
    "category": "promoção",
    "price": 85.90,
    "oldPrice": 128.00
  },
  {
    "id": 46,
    "name": "São João (14)",
    "image": "imagens/sao joao (14).jpg",
    "category": "promoção",
    "price": 90.90,
    "oldPrice": 136.00
  },
  {
    "id": 47,
    "name": "São João (15)",
    "image": "imagens/sao joao (15).jpg",
    "category": "promoção",
    "price": 94.99,
    "oldPrice": 144.99
  },
  {
    "id": 48,
    "name": "São João (16)",
    "image": "imagens/sao joao (16).jpg",
    "category": "promoção",
    "price": 95.00,
    "oldPrice": 140.00
  }
];

// Carrossel
const imagens = document.querySelectorAll('.carrossel-img');
let index = 0;

if (imagens.length > 0) {
  setInterval(() => {
    imagens[index].classList.remove('ativo');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('ativo');
  }, 3000);
}


// Carrinho de compras
let cart = [];

// Função para carregar produtos na página
function loadProducts(productsArray, containerId) {
    const productsContainer = document.getElementById(containerId);

    if (!productsContainer) {
        console.warn(`Elemento #${containerId} não encontrado. Os produtos não serão carregados.`);
        return;
    }

    productsContainer.innerHTML = ''; // Limpa o conteúdo existente antes de adicionar novos produtos

    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="category">${product.category || ''}</div>
            <h3>${product.name}</h3>
            ${product.oldPrice ? `<div class="old-price">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</div>` : ''}
            <div class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
            <button class="btn add-to-cart" data-id="${product.id}">Adicionar ao carrinho</button>
        `;
        productsContainer.appendChild(productCard);
    });

    productsContainer.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Função para adicionar produto ao carrinho
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));

    // Procura o produto em TODOS os arrays de produtos
    const product = homePageProducts.find(p => p.id === productId) ||
                    allProducts.find(p => p.id === productId) ||
                    promotionsProducts.find(p => p.id === productId); // Busca também em promotionsProducts

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

    updateCartCount();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Função para atualizar o contador do carrinho
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-icon .cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
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

// Menu mobile (para telas pequenas)
function setupMobileMenu() {
    const nav = document.querySelector('nav');
    if (!nav) {
        console.warn('Elemento <nav> não encontrado. O menu mobile não será configurado.');
        return;
    }

    let menuToggle = document.querySelector('.menu-toggle');
    if (!menuToggle) {
        menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰ Menu';
        menuToggle.style.display = 'none';
        menuToggle.style.background = 'var(--rosa-escuro)';
        menuToggle.style.color = 'white';
        menuToggle.style.border = 'none';
        menuToggle.style.padding = '10px 15px';
        menuToggle.style.fontSize = '1.2em';
        menuToggle.style.cursor = 'pointer';
        nav.parentNode.insertBefore(menuToggle, nav);
    }

    function toggleMenu() {
        const ul = document.querySelector('nav ul');
        if (ul) {
            if (ul.style.display === 'flex' || ul.style.display === '') {
                ul.style.display = 'none';
            } else {
                ul.style.display = 'flex';
            }
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    function checkScreenSize() {
        const ul = document.querySelector('nav ul');
        if (ul) {
            if (window.innerWidth <= 768) {
                menuToggle.style.display = 'block';
                ul.style.display = 'none';
            } else {
                menuToggle.style.display = 'none';
                ul.style.display = 'flex';
            }
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Lógica do Carrossel de Depoimentos
function setupTestimonialCarousel() {
    const carouselTrack = document.querySelector('.testimonials-carousel-track');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    if (!carouselTrack || !prevArrow || !nextArrow || testimonialCards.length === 0) {
        console.warn('Elementos do carrossel de depoimentos não encontrados. O carrossel não funcionará.');
        return;
    }

    let currentIndex = 0;
    let cardWidth = 0;
    let visibleCards = 0;

    function updateCarouselPosition() {
        if (cardWidth === 0 || visibleCards === 0) return;
        const newPosition = -currentIndex * cardWidth;
        carouselTrack.style.transform = `translateX(${newPosition}px)`;
    }

    function calculateCardMetrics() {
        if (testimonialCards.length > 0) {
            const cardStyle = window.getComputedStyle(testimonialCards[0]);
            const cardMarginRight = parseFloat(cardStyle.marginRight);
            const cardClientWidth = testimonialCards[0].offsetWidth;

            cardWidth = cardClientWidth + cardMarginRight;

            const containerWidth = document.querySelector('.testimonials-carousel-container').offsetWidth;
            visibleCards = Math.floor(containerWidth / cardWidth);

            const maxIndex = testimonialCards.length - visibleCards;
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex > 0 ? maxIndex : 0;
            }
            if (testimonialCards.length <= visibleCards) {
                prevArrow.style.display = 'none';
                nextArrow.style.display = 'none';
            } else {
                prevArrow.style.display = '';
                nextArrow.style.display = '';
            }
        }
        updateCarouselPosition();
    }

    function slideNext() {
        const maxIndex = testimonialCards.length - visibleCards;
        if (maxIndex <= 0) return;

        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarouselPosition();
    }

    function slidePrev() {
        const maxIndex = testimonialCards.length - visibleCards;
        if (maxIndex <= 0) return;

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }
        updateCarouselPosition();
    }

    nextArrow.addEventListener('click', slideNext);
    prevArrow.addEventListener('click', slidePrev);

    window.addEventListener('resize', calculateCardMetrics);
    setTimeout(calculateCardMetrics, 100);
}


// Quando o DOM estiver carregado, inicializa as funções
document.addEventListener('DOMContentLoaded', () => {
    // Carrega os produtos da página inicial
    if (document.getElementById('products-container')) {
        loadProducts(homePageProducts, 'products-container');
    }

    // Carrega os produtos da página de "Nossos Produtos"
    if (document.getElementById('all-products-grid')) {
        loadProducts(allProducts, 'all-products-grid');
    }

    // Carrega os produtos da página de "Promoções"
    if (document.getElementById('promotions-grid')) {
        loadProducts(promotionsProducts, 'promotions-grid');
    }

    setupMobileMenu();
    setupTestimonialCarousel();
    updateCartCount(); // Atualiza o contador do carrinho ao carregar a página
});
