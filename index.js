document.addEventListener('DOMContentLoaded', function() {
    // Array of slide objects 
    const slidesData = [
        {
            image: './pictures/slider1.jpg',
            caption: 'Fresh Organic Foods Delivered',
            title: 'Fresh Organic Food',
            description: 'Locally grown, eco-friendly, and healthy foods delivered to your door.'
        },
        {
            image: './pictures/slider2.jpg',
            caption: 'Sustainably Grown Vegetables',
            title: 'Sustainably Grown Vegetables',
            description: 'Eco-friendly, sustainable farming practices ensure fresh and healthy produce.'
        },
        {
            image: './pictures/slider3.jpg',
            caption: 'Eco-Friendly Farming Practices',
            title: 'Eco-Friendly Farming Practices',
            description: 'Our farming methods support the environment and provide nutritious foods.'
        }
        // Add more slide objects here as needed
    ];

    // Generate Slider HTML
    const sliderContainer = document.querySelector('.slider');
    slidesData.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `slide absolute inset-0 transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
        slideDiv.style.backgroundImage = `url(${slide.image})`;
        slideDiv.style.backgroundSize = 'cover';
        slideDiv.style.backgroundPosition = 'center';

        sliderContainer.appendChild(slideDiv);
    });

    // Slider Logic
    const slides = document.querySelectorAll('.slide');
    const titleElement = document.getElementById('sliderTitle');
    const descriptionElement = document.getElementById('sliderDescription');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
        titleElement.textContent = slidesData[index].title;
        descriptionElement.textContent = slidesData[index].description;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);
});