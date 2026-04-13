// Pattern 14: 対比的デザイン - ダークとライトの対比
// JavaScript機能

// ===== DOM要素取得 =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const fadeElements = document.querySelectorAll('.fade-in');
const titleLines = document.querySelectorAll('.title-line');
const sectionTitles = document.querySelectorAll('.section-title');
const serviceCards = document.querySelectorAll('.service-card');
const strengthItems = document.querySelectorAll('.strength-item');

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

// ===== スクロールアニメーション =====
function handleScrollAnimation() {
    const triggerBottom = window.innerHeight * 0.85;

    // 汎用フェードイン要素
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('visible');
        }
    });

    // ヒーロータイトルライン
    titleLines.forEach(line => {
        const lineTop = line.getBoundingClientRect().top;

        if (lineTop < triggerBottom) {
            line.classList.add('visible');
        }
    });

    // セクションタイトル
    sectionTitles.forEach(title => {
        const titleTop = title.getBoundingClientRect().top;

        if (titleTop < triggerBottom) {
            title.classList.add('visible');
        }
    });

    // ヒーローセクション
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');

    if (heroLeft) {
        const leftTop = heroLeft.getBoundingClientRect().top;
        if (leftTop < triggerBottom) {
            heroLeft.classList.add('visible');
        }
    }

    if (heroRight) {
        const rightTop = heroRight.getBoundingClientRect().top;
        if (rightTop < triggerBottom) {
            heroRight.classList.add('visible');
        }
    }

    // 会社概要セクション
    const aboutLeft = document.querySelector('.about-left');
    const aboutRight = document.querySelector('.about-right');

    if (aboutLeft) {
        const aboutLeftTop = aboutLeft.getBoundingClientRect().top;
        if (aboutLeftTop < triggerBottom) {
            aboutLeft.classList.add('visible');
        }
    }

    if (aboutRight) {
        const aboutRightTop = aboutRight.getBoundingClientRect().top;
        if (aboutRightTop < triggerBottom) {
            aboutRight.classList.add('visible');
        }
    }

    // 事業内容カード
    serviceCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150);
        }
    });

    // 強みアイテム
    strengthItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 150);
        }
    });

    // お問い合わせアクション
    const contactAction = document.querySelector('.contact-action');
    if (contactAction) {
        const actionTop = contactAction.getBoundingClientRect().top;
        if (actionTop < triggerBottom) {
            contactAction.classList.add('visible');
        }
    }
}

// 初期ロード時とスクロール時にアニメーションをチェック
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// ===== ヒーローセクションのアニメーション =====
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero-left, .hero-right');
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

    // 事業内容セクション
    const servicesBg = document.querySelector('.services-bg');
    if (servicesBg && scrolled > 1000 && scrolled < 2500) {
        servicesBg.style.transform = `translateY(${(scrolled - 1000) * 0.15}px)`;
    }

    // お問い合わせセクション
    const contactBg = document.querySelector('.contact-bg');
    if (contactBg && scrolled > 3500) {
        contactBg.style.transform = `translateY(${(scrolled - 3500) * 0.2}px)`;
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
        border-radius: 0;
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
const contactButton = document.querySelector('.contact-button');
if (contactButton) {
    contactButton.addEventListener('mouseenter', () => {
        contactButton.style.transform = 'translateY(-3px)';
    });

    contactButton.addEventListener('mouseleave', () => {
        contactButton.style.transform = 'translateY(0)';
    });
}

// ===== サービスカードのホバー効果強化 =====
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ===== 強みアイテムのホバー効果強化 =====
strengthItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// ===== コンタクトカードのホバー効果強化 =====
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateX(10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateX(0)';
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

// ===== セクションナンバリングアニメーション =====
const sectionNumbers = document.querySelectorAll('.section-number');
sectionNumbers.forEach(number => {
    const text = number.textContent;
    number.textContent = '';

    let currentNum = 0;
    const targetNum = parseInt(text);
    const duration = 2000;
    const increment = targetNum / (duration / 16);

    function animateNumber() {
        currentNum += increment;
        if (currentNum < targetNum) {
            number.textContent = Math.floor(currentNum).toString().padStart(2, '0');
            requestAnimationFrame(animateNumber);
        } else {
            number.textContent = text;
        }
    }

    // スクロールで表示されたらアニメーション開始
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(number.parentElement);
});

// ===== 初期化 =====
console.log('Pattern 14: 対比的デザイン - ダークとライトの対比');
console.log('Sannyou Group Webサイト');
console.log('#2f4f4fアクセントカラー + アニメーション + 写真');
