// Pattern 13: ミニマルモダンデザイン + #2f4f4fアクセント + アニメーション + 写真
// JavaScript機能

// ===== DOM要素取得 =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const fadeElements = document.querySelectorAll('.fade-in');
const serviceCards = document.querySelectorAll('.service-card');

// ===== スティッキーナビゲーション =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // スクロール時のナビゲーションバーの効果
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== スクロールスパイ（現在のセクションをハイライト） =====
const sections = document.querySelectorAll('section[id]');

function scrollSpy() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
}

window.addEventListener('scroll', scrollSpy);

// ===== スムーズスクロール =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // モバイルメニューを閉じる
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ===== モバイルメニュー =====
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// ===== スクロールアニメーション（フェードイン） =====
function handleScrollAnimation() {
    const triggerBottom = window.innerHeight * 0.85;

    // 汎用フェードイン要素
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('visible');
        }
    });

    // セクションタイトル
    const sectionTitles = document.querySelectorAll('.section-title, .contact-title');
    sectionTitles.forEach(title => {
        const titleTop = title.getBoundingClientRect().top;

        if (titleTop < triggerBottom) {
            title.classList.add('visible');
        }
    });

    // セクション説明
    const sectionDescriptions = document.querySelectorAll('.section-description, .contact-description');
    sectionDescriptions.forEach(desc => {
        const descTop = desc.getBoundingClientRect().top;

        if (descTop < triggerBottom) {
            desc.classList.add('visible');
        }
    });

    // 会社概要セクション
    const aboutPhoto = document.querySelector('.about-photo');
    const aboutInfo = document.querySelector('.about-info');

    if (aboutPhoto) {
        const photoTop = aboutPhoto.getBoundingClientRect().top;
        if (photoTop < triggerBottom) {
            aboutPhoto.classList.add('visible');
        }
    }

    if (aboutInfo) {
        const infoTop = aboutInfo.getBoundingClientRect().top;
        if (infoTop < triggerBottom) {
            aboutInfo.classList.add('visible');
        }
    }

    // 強みカード
    const strengthCards = document.querySelectorAll('.strength-card');
    strengthCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150);
        }
    });

    // 事業内容カード
    serviceCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150);
        }
    });

    // お問い合わせアクション
    const contactActions = document.querySelector('.contact-actions');
    if (contactActions) {
        const actionsTop = contactActions.getBoundingClientRect().top;
        if (actionsTop < triggerBottom) {
            contactActions.classList.add('visible');
        }
    }

    // お問い合わせ情報
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        const infoTop = contactInfo.getBoundingClientRect().top;
        if (infoTop < triggerBottom) {
            contactInfo.classList.add('visible');
        }
    }
}

// 初期ロード時とスクロール時にアニメーションをチェック
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// ===== ヒーローセクションのアニメーション =====
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero-content .fade-in');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200);
    });
});

// ===== パララックス効果 =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // ヒーローセクション
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
    }

    // 会社概要セクション
    const aboutBg = document.querySelector('.about-bg');
    if (aboutBg && scrolled > 500 && scrolled < 2000) {
        aboutBg.style.transform = `translateY(${(scrolled - 500) * 0.15}px)`;
    }

    // 強みセクション
    const strengthsBg = document.querySelector('.strengths-bg');
    if (strengthsBg && scrolled > 1500 && scrolled < 3000) {
        strengthsBg.style.transform = `translateY(${(scrolled - 1500) * 0.15}px)`;
    }

    // お問い合わせセクション
    const contactBg = document.querySelector('.contact-bg');
    if (contactBg && scrolled > 3000) {
        contactBg.style.transform = `translateY(${(scrolled - 3000) * 0.2}px)`;
    }
});

// ===== ページトップボタン =====
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #2f4f4f;
        color: #fff;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(47, 79, 79, 0.3);
    `;

    document.body.appendChild(button);

    // スクロール時の表示/非表示
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    // クリック時のスクロール
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ホバー効果
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.backgroundColor = 'rgba(47, 79, 79, 0.8)';
        button.style.boxShadow = '0 6px 20px rgba(47, 79, 79, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.backgroundColor = '#2f4f4f';
        button.style.boxShadow = '0 4px 12px rgba(47, 79, 79, 0.3)';
    });
};

// ページトップボタンを作成
createBackToTopButton();

// ===== ボタンホバー効果強化 =====
const contactButtons = document.querySelectorAll('.contact-button');
contactButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// ===== 強みカードのホバー効果強化 =====
const strengthCards = document.querySelectorAll('.strength-card');
strengthCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== 事業内容カードのホバー効果強化 =====
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ===== パフォーマンス最適化：スクロールイベントのスロットル =====
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
        handleScrollAnimation();
        scrollSpy();
    }, 10);
});

// ===== カーソル追従エフェクト（オプション） =====
const createCursorFollower = () => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background-color: rgba(47, 79, 79, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease;
        mix-blend-mode: multiply;
    `;

    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        requestAnimationFrame(animateCursor);
    }

    animateCursor();
};

// カーソル追従エフェクトを有効化（デスクトップのみ）
if (window.innerWidth > 1024) {
    createCursorFollower();
}

// ===== 初期化 =====
console.log('Pattern 13: ミニマルモダンデザイン + #2f4f4fアクセント + アニメーション + 写真');
console.log('Sannyou Group Webサイト');
console.log('ビジネスの未来を共に創造する');
