 
 //==Tabs scroll slider==//

 var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
 //== End Tabs scroll slider==//




    // === Tesimonals ==== //
   const testimonials = [
            { img: 'https://i.pravatar.cc/150?img=44', title: 'Transformed My Daily Routine!', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', rating: '5.0', name: 'Sarah Jenkins', role: 'Verified Buyer' },
            { img: 'https://i.pravatar.cc/150?img=32', title: 'Incredible Quality and Service', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Highly recommended to everyone. I have never seen such amazing results before.', rating: '4.9', name: 'Emily Chen', role: 'Skincare Enthusiast' },
            { img: 'https://i.pravatar.cc/150?img=47', title: 'The Best Thing I’ve Used for My Skin!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.', rating: '5.0', name: 'Bessie Cooper', role: 'Happy Customer' },
            { img: 'https://i.pravatar.cc/150?img=12', title: 'Results Within the First Week', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.', rating: '5.0', name: 'Jessica Alba', role: 'Loyal Customer' },
            { img: 'https://i.pravatar.cc/150?img=20', title: 'I Will Never Go Back!', text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem. Truly a lifesaver product.', rating: '4.8', name: 'Amanda Brooks', role: 'New Customer' }
        ];

        let currentIndex = 2; // Center default
        let autoSlideInterval;

        const avatarTrack = document.getElementById('avatar-track');
        const reviewsContainer = document.getElementById('reviews-container');
        
        // Exact dimensions for math
        const itemWidth = 80; // 60px avatar + 20px gap

        function initSlider() {
            testimonials.forEach((test, index) => {
                // 1. Build Avatars
                const avatarDiv = document.createElement('div');
                avatarDiv.className = `avatar-item ${index === currentIndex ? 'active' : ''}`;
                avatarDiv.innerHTML = `<img src="${test.img}" alt="${test.name}">`;
                
                avatarDiv.addEventListener('click', () => goToSlide(index));
                avatarTrack.appendChild(avatarDiv);

                // 2. Build Slides (All slides exist in DOM, stacked via Grid)
                const slideDiv = document.createElement('div');
                slideDiv.className = `review-slide ${index === currentIndex ? 'active' : ''}`;
                slideDiv.innerHTML = `
                    <h3 class="review-title">${test.title}</h3>
                    <p class="review-text">${test.text}</p>
                    <div class="review-rating">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        <span>${test.rating}</span>
                    </div>
                    <h5 class="review-author">${test.name}</h5>
                    <p class="review-role">${test.role}</p>
                `;
                reviewsContainer.appendChild(slideDiv);
            });

            updateVisuals();
        }

        function goToSlide(index) {
            if (currentIndex === index) return;
            currentIndex = index;
            updateVisuals();
            resetTimer();
        }

        function updateVisuals() {
            // Update Active Classes for Avatars
            const avatars = document.querySelectorAll('.avatar-item');
            avatars.forEach((av, idx) => av.classList.toggle('active', idx === currentIndex));

            // Update Active Classes for Slides (Fades them in/out flawlessly)
            const slides = document.querySelectorAll('.review-slide');
            slides.forEach((slide, idx) => slide.classList.toggle('active', idx === currentIndex));

            // Move Track
            const activeCenterPosition = (currentIndex * itemWidth) + (itemWidth / 2);
            avatarTrack.style.transform = `translateX(-${activeCenterPosition}px)`;
        }

        function nextSlide() { goToSlide((currentIndex + 1) % testimonials.length); }
        function prevSlide() { goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length); }

        function resetTimer() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 3000);
        }

        // Button Listeners
        document.getElementById('next-btn').addEventListener('click', nextSlide);
        document.getElementById('prev-btn').addEventListener('click', prevSlide);
        document.getElementById('next-btn-mobile').addEventListener('click', nextSlide);
        document.getElementById('prev-btn-mobile').addEventListener('click', prevSlide);

        // Run
        initSlider();
        resetTimer();




        






        
        // Window load hote hi popup dikhayega
document.addEventListener("DOMContentLoaded", function() {
    // Check if device is mobile for faster execution
    const delay = window.innerWidth < 768 ? 500 : 1500; 

    setTimeout(function() {
        const modal = document.getElementById('newsletterModal');
        if(modal) {
            modal.style.display = 'flex';
            // Mobile par scroll lock karne ke liye (Optional)
            document.body.style.overflow = 'hidden'; 
        }
    }, delay);
});

function closeModal() {
    const modal = document.getElementById('newsletterModal');
    modal.style.display = 'none';
    // Scroll wapas enable karne ke liye
    document.body.style.overflow = 'auto'; 
}

  AOS.init({
    duration: 1000, /* Animation ki speed (1000ms = 1 second) - Smooth feel ke liye */
    once: false, /* Har baar scroll karne par animation hogi, ya sirf ek baar (true/false) */
    offset: 100, /* Thoda scroll karne ke baad animation trigger ho */
  });