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
        category: "macacao"
    },
    {
        id: 4,
        name: "Macacão Azul Marinho",
        price: 137.99,
        image: "imagens/macacão-azul-marinho.jpg",
        category: "macacao"
    }
];

// Dados dos produtos para a página 'Nossos Produtos'
const allProducts = [
    {
        id: 5,
        name: "MARQUIP Macacão (Calça Slim)",
        price: 100.00,
        oldPrice: 190.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+1",
        category: "FEMININO / Calça Slim"
    },
    {
        id: 6,
        name: "MARQUIP Macacão (Calça Slim)",
        price: 100.00,
        oldPrice: 190.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+2",
        category: "FEMININO / Calça Slim"
    },
    {
        id: 7,
        name: "EDUÇÃO Vestidinho",
        price: 100.00,
        oldPrice: 190.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+3",
        category: "FEMININO / Vestidinho"
    },
    {
        id: 8,
        name: "CAMISA Casual",
        price: 75.00,
        oldPrice: 120.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+4",
        category: "MASCULINO / Camisa"
    },
    {
        id: 9,
        name: "SAIA Plissada",
        price: 90.00,
        oldPrice: 150.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+5",
        category: "FEMININO / Saia"
    },
    {
        id: 10,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+6",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 11,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+7",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 12,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+8",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 13,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+9",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 14,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+10",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 15,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+11",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 16,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+12",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 17,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+13",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 18,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+14",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 19,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+15",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 20,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+16",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 21,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+17",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 22,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+18",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 23,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+19",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 24,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+20",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 25,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+21",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 26,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+22",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 27,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+23",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 28,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+24",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 29,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+25",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 30,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+26",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 31,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+27",
        category: "INFANTIL / Conjunto"
    },
    {
        id: 32,
        name: "CONJUNTO Infantil",
        price: 50.00,
        oldPrice: 80.00,
        image: "https://via.placeholder.com/200x200/F5F5F5/888888?text=Produto+28",
        category: "INFANTIL / Conjunto"
    }
];

// Dados dos produtos para a página de Promoções (NOVO ARRAY)
const promotionsProducts = [
    {
        id: 33, // IDs únicos para a página de promoções
        name: "Vestido Floral Verão",
        price: 89.99,
        oldPrice: 150.00,
        image: "https://placehold.co/200x200/FFD1DC/FFFFFF?text=Promocao+1",
        category: "FEMININO / Vestido"
    },
    {
        id: 34,
        name: "Calça Jeans Conforto",
        price: 75.00,
        oldPrice: 130.00,
        image: "https://placehold.co/200x200/FFC0CB/FFFFFF?text=Promocao+2",
        category: "FEMININO / Calça"
    },
    {
        id: 35,
        name: "Blusa de Malha Leve",
        price: 49.99,
        oldPrice: 90.00,
        image: "https://placehold.co/200x200/FF69B4/FFFFFF?text=Promocao+3",
        category: "FEMININO / Blusa"
    },
    {
        id: 36,
        name: "Conjunto Fitness",
        price: 110.00,
        oldPrice: 180.00,
        image: "https://placehold.co/200x200/FF1493/FFFFFF?text=Promocao+4",
        category: "FEMININO / Fitness"
    },
    {
        id: 37,
        name: "Saia Midi Plissada",
        price: 65.00,
        oldPrice: 110.00,
        image: "https://placehold.co/200x200/DB7093/FFFFFF?text=Promocao+5",
        category: "FEMININO / Saia"
    },
    {
        id: 38,
        name: "Macacão Casual",
        price: 95.00,
        oldPrice: 160.00,
        image: "https://placehold.co/200x200/C71585/FFFFFF?text=Promocao+6",
        category: "FEMININO / Macacão"
    },
    {
        id: 39,
        name: "Short Jeans Despojado",
        price: 55.00,
        oldPrice: 95.00,
        image: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Promocao+7",
        category: "FEMININO / Short"
    },
    {
        id: 40,
        name: "Blazer Elegante",
        price: 140.00,
        oldPrice: 220.00,
        image: "https://placehold.co/200x200/FFD1DC/FFFFFF?text=Promocao+8",
        category: "FEMININO / Casaco"
    },
    {
        id: 41,
        name: "Vestido de Festa",
        price: 180.00,
        oldPrice: 300.00,
        image: "https://placehold.co/200x200/FF69B4/FFFFFF?text=Promocao+9",
        category: "FEMININO / Vestido"
    },
    {
        id: 42,
        name: "Camiseta Básica Algodão",
        price: 35.00,
        oldPrice: 60.00,
        image: "https://placehold.co/200x200/DB7093/FFFFFF?text=Promocao+10",
        category: "FEMININO / Camiseta"
    },
    {
        id: 43,
        name: "Jaqueta Jeans Clássica",
        price: 120.00,
        oldPrice: 200.00,
        image: "https://placehold.co/200x200/C71585/FFFFFF?text=Promocao+11",
        category: "FEMININO / Jaqueta"
    },
    {
        id: 44,
        name: "Body Renda",
        price: 60.00,
        oldPrice: 100.00,
        image: "https://placehold.co/200x200/FF1493/FFFFFF?text=Promocao+12",
        category: "FEMININO / Body"
    },
    {
        id: 45,
        name: "Saída de Praia",
        price: 70.00,
        oldPrice: 120.00,
        image: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Promocao+13",
        category: "FEMININO / Praia"
    },
    {
        id: 46,
        name: "Macaquinho Estampado",
        price: 80.00,
        oldPrice: 140.00,
        image: "https://placehold.co/200x200/FFD1DC/FFFFFF?text=Promocao+14",
        category: "FEMININO / Macaquinho"
    },
    {
        id: 47,
        name: "Moletom Confortável",
        price: 90.00,
        oldPrice: 150.00,
        image: "https://placehold.co/200x200/FF69B4/FFFFFF?text=Promocao+15",
        category: "UNISSEX / Moletom"
    },
    {
        id: 48,
        name: "Legging Esportiva",
        price: 50.00,
        oldPrice: 85.00,
        image: "https://placehold.co/200x200/DB7093/FFFFFF?text=Promocao+16",
        category: "FEMININO / Legging"
    },
    {
        id: 49,
        name: "Camisa Social Feminina",
        price: 70.00,
        oldPrice: 120.00,
        image: "https://placehold.co/200x200/C71585/FFFFFF?text=Promocao+17",
        category: "FEMININO / Camisa"
    },
    {
        id: 50,
        name: "Bermuda Jeans",
        price: 60.00,
        oldPrice: 100.00,
        image: "https://placehold.co/200x200/FF1493/FFFFFF?text=Promocao+18",
        category: "FEMININO / Bermuda"
    },
    {
        id: 51,
        name: "Top Cropped",
        price: 40.00,
        oldPrice: 70.00,
        image: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Promocao+19",
        category: "FEMININO / Top"
    },
    {
        id: 52,
        name: "Cardigã Leve",
        price: 75.00,
        oldPrice: 130.00,
        image: "https://placehold.co/200x200/FFD1DC/FFFFFF?text=Promocao+20",
        category: "FEMININO / Casaco"
    },
    {
        id: 53,
        name: "Vestido Tubinho",
        price: 85.00,
        oldPrice: 140.00,
        image: "https://placehold.co/200x200/FF69B4/FFFFFF?text=Promocao+21",
        category: "FEMININO / Vestido"
    },
    {
        id: 54,
        name: "Macacão Pantacourt",
        price: 105.00,
        oldPrice: 170.00,
        image: "https://placehold.co/200x200/DB7093/FFFFFF?text=Promocao+22",
        category: "FEMININO / Macacão"
    },
    {
        id: 55,
        name: "Short Alfaiataria",
        price: 68.00,
        oldPrice: 115.00,
        image: "https://placehold.co/200x200/C71585/FFFFFF?text=Promocao+23",
        category: "FEMININO / Short"
    },
    {
        id: 56,
        name: "Blusa Ciganinha",
        price: 52.00,
        oldPrice: 90.00,
        image: "https://placehold.co/200x200/FF1493/FFFFFF?text=Promocao+24",
        category: "FEMININO / Blusa"
    },
    {
        id: 57,
        name: "Conjunto de Lingerie",
        price: 78.00,
        oldPrice: 130.00,
        image: "https://placehold.co/200x200/FFB6C1/FFFFFF?text=Promocao+25",
        category: "FEMININO / Lingerie"
    },
    {
        id: 58,
        name: "Calça Pantalona",
        price: 92.00,
        oldPrice: 155.00,
        image: "https://placehold.co/200x200/FFD1DC/FFFFFF?text=Promocao+26",
        category: "FEMININO / Calça"
    },
    {
        id: 59,
        name: "Body Manga Longa",
        price: 65.00,
        oldPrice: 110.00,
        image: "https://placehold.co/200x200/FF69B4/FFFFFF?text=Promocao+27",
        category: "FEMININO / Body"
    },
    {
        id: 60,
        name: "Saia Lápis",
        price: 58.00,
        oldPrice: 98.00,
        image: "https://placehold.co/200x200/DB7093/FFFFFF?text=Promocao+28",
        category: "FEMININO / Saia"
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
