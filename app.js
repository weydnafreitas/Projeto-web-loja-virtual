// Dados dos produtos da página inicial
const products = [
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

//Carrossel
  const imagens = document.querySelectorAll('.carrossel-img');
  let index = 0;

  setInterval(() => {
    imagens[index].classList.remove('ativo');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('ativo');
  }, 3000);


// Carrinho de compras
let cart = [];

// Função para carregar produtos na página
function loadProducts() {
    const productsContainer = document.getElementById('products-container');

    if (!productsContainer) {
        console.warn('Elemento #products-container não encontrado. Os produtos não serão carregados.');
        return;
    }

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
    const nav = document.querySelector('nav');
    if (!nav) {
        console.warn('Elemento <nav> não encontrado. O menu mobile não será configurado.');
        return;
    }

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

    // Inserir o botão de toggle antes do elemento nav
    nav.parentNode.insertBefore(menuToggle, nav);

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
        console.warn('Elementos do carrossel não encontrados. O carrossel de depoimentos não funcionará.');
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
    loadProducts();
    setupMobileMenu();
    setupTestimonialCarousel(); // Chama a função para inicializar o carrossel
});