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
// IMPORTANTE: Certifique-se de que os IDs aqui são ÚNICOS e não se sobrepõem
// aos IDs dos produtos da página inicial.
const allProducts = [
    {
        id: 5, // Começa do ID 5 para não conflitar com os da página inicial
        name: "MARQUIP Macacão (Calça Slim)",
        price: 100.00,
        oldPrice: 190.00, // Adicionado oldPrice para exibição
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


// Carrossel
const imagens = document.querySelectorAll('.carrossel-img');
let index = 0;

if (imagens.length > 0) { // Adiciona uma verificação para garantir que as imagens do carrossel existam na página
  setInterval(() => {
    imagens[index].classList.remove('ativo');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('ativo');
  }, 3000);
}


// Carrinho de compras
let cart = [];

// Função para carregar produtos na página
// Agora aceita um array de produtos e o ID do contêiner onde devem ser carregados
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

    // Adiciona eventos aos botões dentro do contêiner específico
    productsContainer.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Função para adicionar produto ao carrinho
// Procura o produto tanto no array de produtos da página inicial quanto no array de todos os produtos
function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));

    const product = homePageProducts.find(p => p.id === productId) || allProducts.find(p => p.id === productId);

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
    const cartCountElement = document.querySelector('.cart-icon .cart-count'); // Elemento span que você adicionou
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
    notification.style.opacity = '0'; // Começa invisível
    notification.style.transition = 'opacity 0.5s ease-in-out'; // Transição suave

    document.body.appendChild(notification);

    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10); // Pequeno atraso para permitir que o elemento seja renderizado antes da transição

    // Fade out e remoção
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) { // Verifica se ainda existe antes de tentar remover
                document.body.removeChild(notification);
            }
        }, 500); // Espera a transição de fade-out
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
    if (!menuToggle) { // Cria apenas se não existir
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
                ul.style.display = 'none'; // Esconde o menu em telas pequenas por padrão
            } else {
                menuToggle.style.display = 'none';
                ul.style.display = 'flex'; // Mostra o menu em telas maiores
            }
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // Chama na inicialização para definir o estado correto
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
    let cardWidth = 0; // Largura de um cartão incluindo a margem
    let visibleCards = 0; // Quantos cards são visíveis por vez

    function updateCarouselPosition() {
        if (cardWidth === 0 || visibleCards === 0) return; // Garante que os valores foram calculados

        // Calcula a posição de rolagem baseada no índice atual e na largura do cartão
        const newPosition = -currentIndex * cardWidth;
        carouselTrack.style.transform = `translateX(${newPosition}px)`;
    }

    function calculateCardMetrics() {
        if (testimonialCards.length > 0) {
            // Obter a largura computada de um cartão e sua margem direita
            const cardStyle = window.getComputedStyle(testimonialCards[0]);
            const cardMarginRight = parseFloat(cardStyle.marginRight);
            const cardClientWidth = testimonialCards[0].offsetWidth; // Largura do elemento sem margem

            cardWidth = cardClientWidth + cardMarginRight;

            // Determinar quantos cards são visíveis
            const containerWidth = document.querySelector('.testimonials-carousel-container').offsetWidth;
            visibleCards = Math.floor(containerWidth / cardWidth);

            // Ajustar o currentIndex para não ir além do limite de cards visíveis
            const maxIndex = testimonialCards.length - visibleCards;
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex > 0 ? maxIndex : 0;
            }
             // Se não há cartões suficientes para rolar, desabilitar as setas
            if (testimonialCards.length <= visibleCards) {
                prevArrow.style.display = 'none';
                nextArrow.style.display = 'none';
            } else {
                prevArrow.style.display = ''; // Volta ao padrão
                nextArrow.style.display = ''; // Volta ao padrão
            }
        }
        updateCarouselPosition();
    }

    function slideNext() {
        const maxIndex = testimonialCards.length - visibleCards;
        if (maxIndex <= 0) return; // Não slide se não houver cards suficientes para rolar

        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta para o início se estiver no final (loop)
        }
        updateCarouselPosition();
    }

    function slidePrev() {
        const maxIndex = testimonialCards.length - visibleCards;
        if (maxIndex <= 0) return; // Não slide se não houver cards suficientes para rolar

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex; // Vai para o final se estiver no início (loop)
        }
        updateCarouselPosition();
    }

    // Event Listeners para os botões de navegação
    nextArrow.addEventListener('click', slideNext);
    prevArrow.addEventListener('click', slidePrev);

    // Recalcular métricas quando a janela for redimensionada
    window.addEventListener('resize', calculateCardMetrics);

    // Calcular as métricas iniciais quando a página carrega
    // Usamos setTimeout para garantir que todos os estilos e larguras foram computados
    setTimeout(calculateCardMetrics, 100);
}


// Quando o DOM estiver carregado, inicializa as funções
document.addEventListener('DOMContentLoaded', () => {
    // Carrega os produtos da página inicial APENAS na página inicial
    if (document.getElementById('products-container')) {
        loadProducts(homePageProducts, 'products-container');
    }

    // Carrega os produtos da página de "Nossos Produtos" APENAS na página de produtos
    if (document.getElementById('all-products-grid')) {
        loadProducts(allProducts, 'all-products-grid');
    }

    setupMobileMenu();
    setupTestimonialCarousel();
    updateCartCount(); // Atualiza o contador do carrinho ao carregar a página
});
