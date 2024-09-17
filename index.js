document.addEventListener('DOMContentLoaded', function() {
    const slidesData = [
        {
            image: './assets/images/slider1.jpg',
            caption: 'Fresh Organic Foods Delivered',
            title: 'Fresh Organic Food',
            description: 'Locally grown, eco-friendly, and healthy foods delivered to your door.',
            buttons: [
                { text: 'Shop Now', link: '/src/pages/career.html', style: 'bg-green-700 text-white hover:bg-green-900' },
                { text: 'Learn More', link: '/about-us', style: 'border border-white text-white hover:bg-white hover:text-green-600' }
            ]
        },
        {
            image: './assets/images/slider2.jpg',
            caption: 'Sustainably Grown Vegetables',
            title: 'Sustainably Grown Vegetables',
            description: 'Eco-friendly, sustainable farming practices ensure fresh and healthy produce.',
            buttons: [
                { text: 'Explore Vegetables', link: '/vegetables', style: 'bg-green-700 text-white hover:bg-green-900' },
                { text: 'Our Practices', link: '/practices', style: 'border border-white text-white hover:bg-white hover:text-green-600' }
            ]
        },
        {
            image: './assets/images/slider3.jpg',
            caption: 'Eco-Friendly Farming Practices',
            title: 'Eco-Friendly Farming Practices',
            description: 'Our farming methods support the environment and provide nutritious foods.',
            buttons: [
                { text: 'View Our Farms', link: '/farms', style: 'bg-green-700 text-white hover:bg-green-900' },
                { text: 'Contact Us', link: '/contact', style: 'border border-white text-white hover:bg-white hover:text-green-600' }
            ]
        }
    ];        

    const sliderContainer = document.querySelector('.slider');
    const buttonsContainer = document.querySelector('.buttons-container');
    const titleElement = document.getElementById('sliderTitle');
    const descriptionElement = document.getElementById('sliderDescription');
    let currentSlide = 0;

    function renderSlide() {
        const slide = slidesData[currentSlide];
        sliderContainer.innerHTML = `
            <img src="${slide.image}" class="object-cover w-full h-full" alt="${slide.caption}">
        `;
        titleElement.textContent = slide.title;
        descriptionElement.textContent = slide.description;
        buttonsContainer.innerHTML = slide.buttons.map(button => `
            <a href="${button.link}" class="py-2 px-4 rounded-lg ${button.style}  transition duration-300">${button.text}</a>
        `).join('');
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slidesData.length;
        renderSlide();
    }

    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
        renderSlide();
    }

    document.getElementById('nextBtn').addEventListener('click', showNextSlide);
    document.getElementById('prevBtn').addEventListener('click', showPrevSlide);

    renderSlide();
    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});

