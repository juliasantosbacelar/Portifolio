/* FILTRO DE PROJETOS*/
function filtrar(btn, categoria) {
    document.querySelectorAll('.filtro').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    document.querySelectorAll('.proj-card').forEach(card => {
        const categorias = card.dataset.categoria.split(' ');
        if (categoria === 'todos' || categorias.includes(categoria)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

/* ══════════════════════════════
   MENU HAMBURGUER MOBILE
══════════════════════════════ */
document.getElementById('navToggle').addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('aberto');
    this.classList.toggle('ativo');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('aberto');
        document.getElementById('navToggle').classList.remove('ativo');
    });
});

/*══════════════════════════════
   LIGHT / DARK MODE
   Sincroniza os dois botões (desktop + mobile)
══════════════════════════════ 
const themeToggle       = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');

function setTheme(isLight) {
    document.body.classList.toggle('light-mode', isLight);
    const icon = isLight ? '🌙' : '☀️';
    themeToggle.textContent       = icon;
    themeToggleMobile.textContent = icon;
    localStorage.setItem('tema', isLight ? 'light' : 'dark');
}

// Carrega preferência salva
const savedTheme = localStorage.getItem('tema');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
setTheme(savedTheme === 'light' || (!savedTheme && prefersLight));

themeToggle.addEventListener('click', () =>
    setTheme(!document.body.classList.contains('light-mode'))
);
themeToggleMobile.addEventListener('click', () =>
    setTheme(!document.body.classList.contains('light-mode'))
);

══════════════════════════════
   IDIOMA (PT-BR / EN)
   Sem JSON — usa classes .pt e .en no HTML
   CSS cuida de mostrar/esconder
   JS só muda o atributo lang do <html>
══════════════════════════════ 
function trocarIdioma(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);

    // Atualiza aria-pressed em todos os botões de idioma (desktop + mobile)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
}

// Listeners em todos os botões de idioma (desktop + mobile)
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => trocarIdioma(btn.dataset.lang));
});

// Carrega preferência salva
const savedLang  = localStorage.getItem('lang');
const browserLang = (navigator.language || 'pt-BR').toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
trocarIdioma(savedLang || browserLang);

 ══════════════════════════════
   LOGO — TROCA DE FOTO NO HOVER
══════════════════════════════ */
const logoFotos = [
    'img/euCafeteria.png',
    'img/euLogo.png',
];

let logoAtual = '';
const logoAvatar = document.getElementById('logoAvatar');
const logoImg    = document.getElementById('logoImg');

logoAvatar.addEventListener('mouseenter', () => {
    if (!logoFotos.length) return;
    trocarFotoLogo();
});

logoAvatar.addEventListener('mouseleave', () => {
    logoImg.style.opacity = '0';
    setTimeout(() => { logoImg.src = ''; }, 300);
});

function trocarFotoLogo() {
    const opcoes = logoFotos.filter(f => f !== logoAtual);
    const lista  = opcoes.length ? opcoes : logoFotos;
    const proxima = lista[Math.floor(Math.random() * lista.length)];

    logoImg.style.opacity = '0';
    setTimeout(() => {
        logoImg.src = proxima;
        logoImg.style.opacity = '1';
        logoAtual = proxima;
    }, 150);
}

const textElement = document.getElementById('typing-text');
const nameReveal = document.getElementById('hero-reveal');
const elementsReveal = document.getElementById('hero-elements-reveal');
const message = "Hello World!";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        textElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeWriter, 250); // Velocidade da digitação
    } else {
        // 1. Terminou de digitar? Mostra o nome "Julia Bacelar"
        /*setTimeout(() => {
            nameReveal.classList.remove('hidden');
            nameReveal.classList.add('visible');
        }, 300);*/

        // 2. Um pouco depois, mostra o resto (cargo e botões)
        setTimeout(() => {
            nameReveal.classList.remove('hidden');
            nameReveal.classList.add('visible');
            elementsReveal.classList.remove('hidden');
            elementsReveal.classList.add('visible');
            
            // Remove o cursor após terminar tudo
            textElement.style.setProperty('--cursor-display', 'none'); 
        }, 800);
    }
}

// Inicia quando a página carregar
window.addEventListener('load', typeWriter);