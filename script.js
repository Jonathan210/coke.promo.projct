// Data for the products
const productData = [
    {
        name: "COCA-COLA ORIGINAL TASTE",
        headline: "THE CLASSIC REFRESHMENT",
        description: "The world's most popular and best-selling soft drink, enjoyed by billions globally since 1886. The classic taste that started it all.",
        imageSrc: "./assets/coke-classic.png",
        bgColor: "#AA0000",
        productTag: "THE ORIGINAL",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "140", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "40mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "39g", dailyValue: "14%" },
            { name: "Total Sugars", amount: "39g", dailyValue: "78%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA ZERO SUGAR",
        headline: "ZERO SUGAR. REAL TASTE.",
        description: "Coca-Cola Zero Sugar, or Coke Zero, is a sugar-free soft drink that tastes like the original but has zero sugar and zero calories.",
        imageSrc: "./assets/coke-zero.png",
        bgColor: "#333333",
        productTag: "COCA COLA ZERO",
        keyIngredients: "Carbonated Water, Caramel Color, Phosphoric Acid, Aspartame, Potassium Benzoate (to protect taste), Natural Flavors, Citric Acid, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "0", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "40mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "0g", dailyValue: "0%" },
            { name: "Total Sugars", amount: "0g", dailyValue: "0%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "DIET COKE",
        headline: "CRISP AND LIGHT",
        description: "Diet Coke offers a light, crisp, zero-calorie refreshment with a flavor profile distinct from Coke Zero.",
        imageSrc: "./assets/coke-diet.png",
        bgColor: "#A0A0A0",
        productTag: "COCA-COLA LIGHT",
        keyIngredients: "Carbonated Water, Caramel Color, Aspartame, Phosphoric Acid, Potassium Benzoate (to protect taste), Natural Flavors, Citric Acid, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "0", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "40mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "0g", dailyValue: "0%" },
            { name: "Total Sugars", amount: "0g", dailyValue: "0%" },
            { name: "Caffeine", amount: "46mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA CHERRY",
        headline: "SWEET CHERRY BURST",
        description: "Coca-Cola with a classic hint of cherry flavor, offering a sweeter and fruitier take on the original.",
        imageSrc: "./assets/coke-cherry.png",
        bgColor: "#8B0000",
        productTag: "CLASSIC FLAVOR",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine, Cherry Flavoring.",
        nutritionBreakdown: [
            { name: "Calories", amount: "150", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "30mg", dailyValue: "1%" },
            { name: "Total Carbohydrates", amount: "42g", dailyValue: "15%" },
            { name: "Total Sugars", amount: "42g", dailyValue: "84%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA VANILLA",
        headline: "SMOOTH VANILLA INFUSION",
        description: "The satisfying taste of Coca-Cola mixed with smooth, rich vanilla flavor.",
        imageSrc: "./assets/coke-vanilla.png",
        bgColor: "#E9967A",
        productTag: "SWEET TREAT",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Natural Flavors, Phosphoric Acid, Caffeine, Vanilla Extract.",
        nutritionBreakdown: [
            { name: "Calories", amount: "140", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "35mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "39g", dailyValue: "14%" },
            { name: "Total Sugars", amount: "39g", dailyValue: "78%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA CHERRY VANILLA",
        headline: "CHERRY MEETS VANILLA",
        description: "A delicious fusion of classic Coca-Cola, sweet cherry, and smooth, creamy vanilla.",
        imageSrc: "./assets/coke-cherry-vanilla.png",
        bgColor: "#6C005E",
        productTag: "DOUBLE FLAVOR",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Cherry Juice Concentrate, Vanilla Extract, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "150", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "30mg", dailyValue: "1%" },
            { name: "Total Carbohydrates", amount: "42g", dailyValue: "15%" },
            { name: "Total Sugars", amount: "42g", dailyValue: "84%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA ORANGE VANILLA",
        headline: "CREAMY CITRUS TWIST",
        description: "A delicious combination of crisp Coca-Cola taste with a smooth, sweet orange and vanilla flavor.",
        imageSrc: "./assets/coke-orange-vanilla.png",
        bgColor: "#FF7F00",
        productTag: "FLAVOR BLAST",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Natural Flavors, Phosphoric Acid, Orange Juice Concentrate, Vanilla Extract, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "140", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "35mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "39g", dailyValue: "14%" },
            { name: "Total Sugars", amount: "39g", dailyValue: "78%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA WITH LEMON",
        headline: "TANGY LEMON ZEST",
        description: "A refreshing twist on the classic cola taste with a vibrant, zesty lemon flavor.",
        imageSrc: "./assets/coke-lemon.png",
        bgColor: "#FFD700",
        productTag: "CITRUS TWIST",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Lemon Juice Concentrate, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "140", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "40mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "39g", dailyValue: "14%" },
            { name: "Total Sugars", amount: "39g", dailyValue: "78%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA WITH LIME",
        headline: "ZESTY LIME KICK",
        description: "A bright, refreshing citrus note added to the classic Coca-Cola formula for extra zing.",
        imageSrc: "./assets/coke-lime.png",
        bgColor: "#8BC34A",
        productTag: "CITRUS POP",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Lime Juice Concentrate, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "140", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "40mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "39g", dailyValue: "14%" },
            { name: "Total Sugars", amount: "39g", dailyValue: "78%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA MANGO",
        headline: "EXOTIC MANGO FLAVOR",
        description: "A bold and fruity twist to the classic cola, combining the refreshing taste of Coca-Cola with sweet tropical mango.",
        imageSrc: "./assets/coke-mango.png",
        bgColor: "#FFB400",
        productTag: "TROPICAL COLA",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Mango Juice Concentrate, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "150", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "30mg", dailyValue: "1%" },
            { name: "Total Carbohydrates", amount: "42g", dailyValue: "15%" },
            { name: "Total Sugars", amount: "42g", dailyValue: "84%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA RASPBERRY LTD",
        headline: "BRIGHT BERRY LIMITED EDITION",
        description: "An exciting, limited-time twist of refreshing raspberry flavor blended perfectly with Coca-Cola.",
        imageSrc: "./assets/coke-raspberry.png",
        bgColor: "#DC143C",
        productTag: "LIMITED EDITION",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Raspberry Juice Concentrate, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "140", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "40mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "39g", dailyValue: "14%" },
            { name: "Total Sugars", amount: "39g", dailyValue: "78%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "COCA-COLA CITRA",
        headline: "LEMON-LIME REFRESHMENT",
        description: "A uniquely refreshing combination of Coca-Cola with a vibrant blend of lemon and lime citrus flavors.",
        imageSrc: "./assets/coke-citra.png",
        bgColor: "#4CAF50",
        productTag: "CITRUS BLAST",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Lemon and Lime Juice Concentrates, Caffeine.",
        nutritionBreakdown: [
            { name: "Calories", amount: "140", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "40mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "39g", dailyValue: "14%" },
            { name: "Total Sugars", amount: "39g", dailyValue: "78%" },
            { name: "Caffeine", amount: "34mg", dailyValue: "-" }
        ]
    },
    {
        name: "CAFFEINE-FREE COCA-COLA",
        headline: "GREAT TASTE, NO CAFFEINE",
        description: "The classic Coca-Cola taste, but completely caffeine-free for any time of day.",
        imageSrc: "./assets/coke-caffine-free.png",
        bgColor: "#B53333",
        productTag: "CAFFEINE FREE",
        keyIngredients: "Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors.",
        nutritionBreakdown: [
            { name: "Calories", amount: "140", dailyValue: "-" },
            { name: "Total Fat", amount: "0g", dailyValue: "0%" },
            { name: "Sodium", amount: "40mg", dailyValue: "2%" },
            { name: "Total Carbohydrates", amount: "39g", dailyValue: "14%" },
            { name: "Total Sugars", amount: "39g", dailyValue: "78%" },
            { name: "Caffeine", amount: "0mg", dailyValue: "-" }
        ]
    }
];

// --- GLOBAL VARIABLES (No Change) ---
let currentIndex = 0;
const totalSlides = productData.length;
let autoSlideInterval;
const scrollContainer = document.getElementById('hero-scroll-container');
const slideshowContent = document.getElementById('slideshow-text-content');
const modal = document.getElementById('product-modal');
const closeModalBtn = modal.querySelector('.close-btn');
let lastFocusedElement = null;
const productSection = document.getElementById('product-section');

// --- SOUND MANAGER (No Change) ---
class SoundManager {
    constructor() {
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.buffers = {};
            this.started = false;
        } catch (e) {
            console.warn("Audio not supported");
        }
    }

    async load(name, url) {
        if (!this.ctx) return;
        try {
            const res = await fetch(url);
            const buf = await res.arrayBuffer();
            this.buffers[name] = await this.ctx.decodeAudioData(buf);
        } catch (error) {
            console.error(`Error loading sound ${name}:`, error);
        }
    }

    play(name, loop = false, volume = 1.0) {
        if (!this.ctx || !this.buffers[name]) return;
        const source = this.ctx.createBufferSource();
        const gainNode = this.ctx.createGain();
        source.buffer = this.buffers[name];
        source.loop = loop;
        gainNode.gain.value = volume;
        source.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        source.start(0);
        return source;
    }
}
const soundMgr = new SoundManager();

// NEW: Grid View Variables
const productGridContainer = document.createElement('div');
productGridContainer.id = 'product-grid-view';
productGridContainer.className = 'product-grid-view';
let isGridViewActive = false; // Track the current view

// NEW: Welcome Video Control Functions
function startWelcomeVideoAndAudio(videoElement) {
    if (videoElement) {
        // Attempt to un-mute and play the video.
        videoElement.muted = false;
        videoElement.play().catch(e => {
            // If play fails (e.g., audio context suspended), console log and re-mute to comply with browser rules
            console.log('Welcome video play failed (browser policy or similar).', e);
            videoElement.muted = true;
        });
    }
}

function stopWelcomeVideoAndAudio(videoElement) {
    if (videoElement) {
        // Mute the audio and pause the video, as requested
        videoElement.muted = true;
        videoElement.pause();
        // Reset to start for a fresh play when scrolling back
        videoElement.currentTime = 0;
    }
}

// --- CAROUSEL CONTROL FUNCTIONS (No Change) ---
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
}

function startAutoSlide() {
    // Only start if it's not already running
    if (autoSlideInterval) return;
    autoSlideInterval = setInterval(() => {
        // Also check if modal is open or grid is open to pause auto-slide
        if (!document.getElementById('product-modal').classList.contains('open') && !isGridViewActive) {
            let next = (currentIndex + 1) % totalSlides;
            scrollToSlideIndex(next);
        }
    }, 5000);
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

function updateSlide(index) {
    if (index === currentIndex) return;

    const data = productData[index];
    const isDesktop = window.innerWidth > 850;

    if (isDesktop) soundMgr.play('trans', false, 0.5);

    // 1. Animate Text Out
    slideshowContent.classList.remove('text-active', 'text-entering');
    slideshowContent.classList.add('text-leaving');

    // 2. Animate Image Out
    const oldImage = document.querySelector('.coke-image[data-index="' + currentIndex + '"]');
    if (oldImage) {
        oldImage.classList.add('image-leaving');
    }


    // Wait for animation to complete (400ms)
    setTimeout(() => {
        // 3. Update Content
        currentIndex = index;

        // Update Text Content
        document.getElementById('product-tag').innerText = data.productTag;
        document.getElementById('product-tag').style.color = data.bgColor;
        document.getElementById('headline').innerText = data.headline;
        document.getElementById('description').innerText = data.description;

        // Update Background Color (via the hero-content)
        const heroContent = document.getElementById('product-hero-content');
        heroContent.style.backgroundImage = `linear-gradient(to bottom, ${data.bgColor}, rgba(0, 0, 0, 0.4))`;


        // Reset all images to hidden and remove old leaving class
        document.querySelectorAll('.coke-image').forEach(img => {
            img.style.opacity = '0';
            img.classList.remove('image-leaving');
        });

        // Show new image
        const newImage = document.querySelector('.coke-image[data-index="' + index + '"]');
        if (newImage) {
            newImage.style.opacity = '1';
        }

        // 4. Animate Text In
        slideshowContent.classList.remove('text-leaving');
        slideshowContent.classList.add('text-entering');
        setTimeout(() => {
            slideshowContent.classList.remove('text-entering');
            slideshowContent.classList.add('text-active');
        }, 100);

        // 5. Update Pagination
        document.getElementById('current-slide').innerText = (index + 1).toString().padStart(2, '0');
        document.getElementById('total-slides').innerText = totalSlides.toString().padStart(2, '0');
    }, 400); // Should match CSS transition speed for animations
}

function scrollToSlideIndex(index) {
    const slide = document.querySelector(`.slide[data-index="${index}"]`);
    if (slide) {
        // Smooth scroll the carousel container horizontally
        scrollContainer.scrollTo({
            left: slide.offsetLeft,
            behavior: 'smooth'
        });
        updateSlide(index);
        // No need to resetAutoSlide here as it's called by showNextSlide/showPrevSlide
    }
}

// NEW: Arrow Navigation Functions (Added by the AI)
function showNextSlide() {
    let next = (currentIndex + 1) % totalSlides;
    scrollToSlideIndex(next);
    resetAutoSlide();
}

function showPrevSlide() {
    // Add totalSlides before modulo to ensure the result is positive when currentIndex is 0
    let prev = (currentIndex - 1 + totalSlides) % totalSlides;
    scrollToSlideIndex(prev);
    resetAutoSlide();
}

// --- MODAL FUNCTIONS (No Change) ---
function openModal() {
    soundMgr.play('open');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    // A11Y: Store the element that was focused before opening the modal
    lastFocusedElement = document.activeElement;
    // Pause auto slide when modal is open
    stopAutoSlide();

    const d = productData[currentIndex];
    document.getElementById('modal-image').src = d.imageSrc;
    document.getElementById('modal-tag').innerText = d.productTag;
    document.getElementById('modal-headline').innerText = d.name;
    document.getElementById('modal-headline').style.color = d.bgColor;
    document.getElementById('modal-description').innerText = d.description;

    const list = document.getElementById('modal-ingredients-list');
    list.innerHTML = ''; // Clear previous content

    // 1. Add Key Ingredients section (Full width row)
    const ingredientsLi = document.createElement('li');
    // Inline styles to force stack layout and visual separation
    ingredientsLi.style.flexDirection = 'column';
    ingredientsLi.style.alignItems = 'flex-start';
    ingredientsLi.style.padding = '10px 0 15px 0';
    ingredientsLi.style.borderBottom = '1px solid rgba(255,255,255,0.2)'; // Solid line for separation
    ingredientsLi.innerHTML = `
                <span style="color:var(--coke-red); font-weight:700; margin-bottom: 5px; font-size:1em;">KEY INGREDIENTS:</span>
                <span style="color:var(--text-dim); font-size: 0.85em; line-height: 1.4;">${d.keyIngredients}</span>
            `;
    list.appendChild(ingredientsLi);


    // 2. Add Nutrition Facts Header (Table Header Row)
    const headerLi = document.createElement('li');
    headerLi.style.fontWeight = '700';
    headerLi.style.borderTop = '4px solid white'; // Thick top line
    headerLi.style.borderBottom = '2px solid white'; // Thicker bottom
    headerLi.style.color = 'white';
    headerLi.innerHTML = `
                <span>AMOUNT PER SERVING</span>
                <span>% DAILY VALUE</span>
            `;
    list.appendChild(headerLi);

    // 3. Add Nutrition Breakdown
    d.nutritionBreakdown.forEach(item => {
        const li = document.createElement('li');
        // Highlight Calories and Caffeine
        if (item.name === 'Calories' || item.name === 'Caffeine') {
            li.style.color = 'white';
            li.style.fontWeight = '700';
        }
        li.innerHTML = `
                    <span>${item.name}: <strong>${item.amount}</strong></span>
                    <span>${item.dailyValue}</span>
                `;
        list.appendChild(li);
    });
}

function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    soundMgr.play('close');
    // A11Y: Return focus to the element that was focused before opening the modal
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
    // Resume auto slide only if we are on the product section and grid view is not active
    if (document.location.hash === '#product-section' && !isGridViewActive) {
        startAutoSlide();
    }
}

// --- PRODUCT GRID FUNCTIONS (No Change) ---
function buildProductGrid() {
    productData.forEach((d, i) => {
        const card = document.createElement('div');
        card.className = 'grid-product-card';
        card.innerHTML = `
                    <span class="grid-product-tag" style="color: ${d.bgColor};">${d.productTag}</span>
                    <img src="${d.imageSrc}" alt="${d.name}">
                    <h4>${d.name.replace('COCA-COLA ', '')}</h4>
                `;
        // MODIFIED: Add event listener to switch to the specific slide
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
                e.preventDefault();
                // 1. Set the current index to the selected product
                currentIndex = i;
                // 2. If the grid view is active, switch back to the slideshow view
                if (isGridViewActive) {
                    toggleProductView();
                }
                // 3. Scroll the main product carousel to the selected slide
                scrollToSlideIndex(i);
            }
        });
        productGridContainer.appendChild(card);
    });
    document.getElementById('product-hero-content').appendChild(productGridContainer);
}

function toggleProductView() {
    const toggleBtn = document.getElementById('toggle-view-btn');
    isGridViewActive = !isGridViewActive;
    if (isGridViewActive) {
        // Switch to Grid View
        productGridContainer.classList.add('active');
        slideshowContent.classList.add('inactive'); // Hide slideshow text
        productSection.classList.add('grid-active'); // Set class on section for background dimming
        toggleBtn.innerText = "Back to Slideshow";
        stopAutoSlide(); // Important: Stop slideshow when grid is open
    } else {
        // Switch back to Slideshow View
        productGridContainer.classList.remove('active');
        slideshowContent.classList.remove('inactive'); // Show slideshow text
        productSection.classList.remove('grid-active'); // Remove class to restore background
        toggleBtn.innerText = "View All Products";
        startAutoSlide(); // Resume slideshow
    }
    soundMgr.play('click');
}

// --- SECTION ANIMATION LOGIC (Scroll Reveal - No Change) ---
function setupSectionAnimations(sectionId) {
    // REFACTORED to be generic
    const section = document.getElementById(sectionId);
    if (!section) return;

    const elementsToAnimate = section.querySelectorAll('.animated-element');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elementsToAnimate.forEach(el => {
                    el.classList.add('animate-ready');
                });
                observer.unobserve(section); // Stop observing after animation
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    observer.observe(section);
}

// --- SECTION TRANSITION LOGIC (No Change) ---
function transitionToSection(targetSelector) {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add('is-transitioning');
    // Play sound
    soundMgr.play('trans', false, 0.8);

    // Navigate after half of the transition animation (400ms)
    setTimeout(() => {
        document.querySelector(targetSelector).scrollIntoView({
            behavior: 'smooth'
        });
    }, 400);

    // Wipe Out (800ms)
    setTimeout(() => {
        overlay.classList.remove('is-transitioning');
        // If navigating to the product section AND grid is NOT active, start the auto slide here
        if (targetSelector === '#product-section' && !isGridViewActive) {
            startAutoSlide();
        }
    }, 800);
}


// MODIFIED: Function to handle initial user interaction for sound.
function startAudio() {
    if (soundMgr.ctx && soundMgr.ctx.state === 'suspended') {
        soundMgr.ctx.resume();
    }
    // MODIFICATION: Unmute and play the welcome video on first interaction if on welcome section
    const welcomeVideo = document.getElementById('welcome-video');
    // Check if we are on the welcome section (or initial load before scrolling) and the video exists
    if ((document.location.hash === '' || document.location.hash === '#welcome-section') && welcomeVideo) {
        welcomeVideo.muted = false; // Allow audio after first interaction
        // Attempt to play (browser will allow since it's user-initiated)
        welcomeVideo.play().catch(e => {
            console.log('Welcome Video resume failed on interaction:', e);
            welcomeVideo.muted = true; // Re-mute if play fails
        });
    }
}


// --- SCROLL SNAP INTERSECTION OBSERVER LOGIC (MODIFIED to include welcome video control) ---
function setupScrollTransitionObserver(welcomeVideo) {
    const sections = document.querySelectorAll('.main-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };
    let lastSectionIndex = 0; // Track last section for transition logic
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionId = '#' + entry.target.id;
                const currentSectionIndex = Array.from(sections).indexOf(entry.target);

                // NEW: WELCOME SECTION VIDEO/AUDIO AUTOPLAY/STOP LOGIC
                if (currentSectionId === '#welcome-section') {
                    startWelcomeVideoAndAudio(welcomeVideo);
                } else {
                    stopWelcomeVideoAndAudio(welcomeVideo);
                }

                // PRODUCT SLIDESHOW AUTOPLAY LOGIC
                if (currentSectionId === '#product-section' && !isGridViewActive) {
                    startAutoSlide();
                } else {
                    stopAutoSlide();
                }

                // TRANSITION LOGIC
                // Only apply transition if moving to a *different* and *adjacent* section
                if (currentSectionIndex !== lastSectionIndex && Math.abs(currentSectionIndex - lastSectionIndex) === 1) {
                    // Immediately apply the wipe transition
                    const overlay = document.getElementById('transition-overlay');
                    overlay.classList.add('is-transitioning');
                    // Play sound
                    soundMgr.play('trans', false, 0.8);

                    // The transition animation takes 0.8s. We remove the class after it completes
                    setTimeout(() => {
                        overlay.classList.remove('is-transitioning');
                    }, 800);
                }

                // Update active navigation link
                document.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === currentSectionId) {
                        a.classList.add('active');
                    }
                });

                lastSectionIndex = currentSectionIndex;
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        scrollObserver.observe(section);
    });
}


// --- CUSTOM CURSOR LOGIC (No Change) ---
function setupCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        // Updated selector to include .grid-product-card
        document.querySelectorAll('a, button, .slide, .stat-box, .close-btn, .grid-product-card, .social-block').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
        });
    }
}


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', async () => {

    document.body.classList.add('loaded'); // Fade in the body once everything is loaded

    // Load Sounds (Paths assumed from original upload)
    const p1 = soundMgr.load('bg', 'assets/switch-150130.mp3');
    const p2 = soundMgr.load('trans', 'assets/transition.mp3');
    const p3 = soundMgr.load('open', 'assets/coke-open-sound.mp3');
    const p4 = soundMgr.load('close', 'assets/switch-150130.mp3');
    const p5 = soundMgr.load('click', 'assets/switch-150130.mp3');

    await Promise.all([p1, p2, p3, p4, p5]);


    // 1. Build Carousel Slides (No Change)
    const carouselInner = document.getElementById('carousel-inner');
    productData.forEach((data, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.setAttribute('data-index', index);
        slide.innerHTML = `
                    <div class="product-visual">
                        <img src="${data.imageSrc}" alt="${data.name}" class="coke-image" data-index="${index}" style="opacity: ${index === 0 ? 1 : 0};">
                    </div>
                `;
        carouselInner.appendChild(slide);
    });

    // Set initial state for pagination
    document.getElementById('current-slide').innerText = '01';
    document.getElementById('total-slides').innerText = totalSlides.toString().padStart(2, '0');

    // 2. Setup Arrow Navigation Listeners (No Change)
    document.getElementById('prev-btn').addEventListener('click', showPrevSlide);
    document.getElementById('next-btn').addEventListener('click', showNextSlide);

    // 3. Start Background Audio on First User Interaction (No Change)
    document.addEventListener('click', {
        once: true
    });
    document.addEventListener('keydown', startAudio, {
        once: true
    });

    // Build Product Grid
    buildProductGrid();

    // Setup Custom Cursor
    setupCustomCursor();

    // NEW: Get reference to the welcome video element
    const welcomeVideo = document.getElementById('welcome-video');

    // Setup Observers
    setupSectionAnimations('about-section');
    setupSectionAnimations('contact-section');
    // MODIFIED: Pass the welcomeVideo element to the observer setup
    setupScrollTransitionObserver(welcomeVideo);

    // 1. Initial State for Slideshow
    if (document.location.hash === '#product-section') {
        startAutoSlide();
    }

    // 2. Toggle View Listener
    document.getElementById('toggle-view-btn').addEventListener('click', toggleProductView);

    // 3. Modal Listeners
    document.getElementById('drink-now-btn').addEventListener('click', (e) => {
        e.preventDefault();
        openModal(e);
    });
    closeModalBtn.addEventListener('click', closeModal);
    document.getElementById('final-drink-now-btn').addEventListener('click', () => {
        soundMgr.play('open');
        closeModal();
    });

    // A11Y: Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    // 5. Section Transition for Nav and Experience Button (No Change)
    document.querySelectorAll('a[href^="#"], #start-experience-btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');

            // Only apply wipe transition to main vertical sections
            if (['#welcome-section', '#product-section', '#about-section', '#contact-section'].includes(target)) {
                transitionToSection(target);
            } else {
                document.querySelector(target).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

// Custom Cursor with Trail Effect
const initCustomCursor = () => {
    const cursor = document.getElementById('custom-cursor');
    const trails = [];
    const trailCount = 5;

    // Create trail elements
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        trails.push(trail);
    }

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 850) return;
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        trails.forEach((trail, index) => {
            const delay = (index + 1) * 0.05;
            trail.style.left = `${cursorX - (mouseX - cursorX) * delay}px`;
            trail.style.top = `${cursorY - (mouseY - cursorY) * delay}px`;
            trail.style.opacity = 1 - (index / trailCount);
        });

        requestAnimationFrame(animate);
    }

    animate();

    const interactiveElements = document.querySelectorAll('.enter-btn, .social-links a');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (window.innerWidth > 850) cursor.classList.add('grow');
        });
        el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
    });
};

// DOM Element references
const liquidFill = document.getElementById('liquid-fill');
const wave = document.getElementById('wave');
const fizz = document.getElementById('fizz');
const percentDisplay = document.getElementById('percent');
const loaderScreen = document.getElementById('loader-screen');

let progress = 0;

/**
 * Creates a single bubble element with randomized properties
 */
function createBubble() {
    if (progress >= 100) return;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const size = Math.random() * 4 + 2 + 'px';
    const speed = Math.random() * 1.5 + 0.8 + 's';
    const distance = -(Math.random() * 150 + 50) + 'px';

    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + '%';

    // Pass random values to CSS variables for the 'rise' animation
    bubble.style.setProperty('--speed', speed);
    bubble.style.setProperty('--distance', distance);

    fizz.appendChild(bubble);
    // Cleanup: remove bubble after animation is done
    setTimeout(() => bubble.remove(), 2000);
}

/**
 * The main Loading Loop
 */
const loading = setInterval(() => {
    progress += 0.4; // Increment speed (lower = slower)

    // Calculate new Vertical (Y) position for the liquid
    // 300 is the full height of the SVG bottle
    const fillY = 300 - (progress * 3);

    // Move both the rect fill and the wave path up
    liquidFill.setAttribute('y', fillY);
    wave.setAttribute('transform', `translate(0, ${fillY})`);

    // Update UI text
    percentDisplay.innerText = Math.floor(progress);

    // Occasionally spawn a bubble (30% chance per frame)
    if (Math.random() > 0.7) createBubble();

    if (progress >= 100) {
        clearInterval(loading);
        finishLoading();
    }
}, 30);

/**
 * Fades out loader and reveals content
 */
function finishLoading() {
    setTimeout(() => {
        loaderScreen.style.opacity = '0';
        mainContent.style.visibility = 'visible';
        mainContent.style.opacity = '1';
        // Remove from DOM entirely after fade to save performance
        setTimeout(() => {
            loaderScreen.style.display = 'none';
        }, 1000);
    }, 500);
}

const text = "Coca-Cola: Taste the Feeling.";
const typingElement = document.getElementById('typing-text');
let index = 0;
let isTyping = false;

function typeWriter() {
    if (!isTyping) {
        isTyping = true;
        typingElement.textContent = '';
        index = 0;
    }

    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            isTyping = false;
            typeWriter();
        }, 2000);
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !isTyping) {
            typeWriter();
        }
    });
});

observer.observe(document.querySelector('.welcome-content'));
