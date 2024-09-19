const texts = [
    {
        title: "Welcome to Liveosoft",
        description: "A cutting-edge livestock firm established in 2024 by visionaries Mr. X, Mr. Y, and Mr. Z. With our corporate office strategically located in Bhubaneswar, India, we are committed to revolutionizing the livestock industry through innovation, technology, and sustainable practices."
    },
    {
        title: "Innovation in Livestock Management",
        description: "We are pioneers in integrating technology with traditional farming practices, ensuring sustainable and profitable livestock management."
    },
    {
        title: "Sustainable Practices",
        description: "Our commitment to sustainability ensures that our livestock practices are environmentally friendly and beneficial to local communities."
    },
    {
        title: "Leading the Future",
        description: "At Liveosoft, we are leading the future of livestock management with cutting-edge technologies and practices."
    }
];

let currentIndex = 0;

function updateText() {
    const titleElement = document.querySelector("#carousel-text .text-content h1");
    const descriptionElement = document.querySelector("#carousel-text .text-content p");

    titleElement.textContent = texts[currentIndex].title;
    descriptionElement.textContent = texts[currentIndex].description;

    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, 4000);



// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector('.testimonial-slider');
//     const testimonials = document.querySelectorAll('.testimonial');
//     let index = 0;

//     function slideTestimonials() {
//         index++;
//         if (index >= testimonials.length) {
//             index = 0;
//         }
//         slider.style.transform = `translateX(-${index * (testimonials[0].clientWidth + 32)}px)`;
//     }

//     setInterval(slideTestimonials, 5000); // Slide every 5 seconds
// });

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    let index = 0;
    const testimonialCount = testimonials.length;

    function slideTestimonials() {
        index++;
        if (index >= testimonialCount) {
            slider.style.transition = 'none'; // Disable transition for instant reset
            slider.style.transform = 'translateX(0)'; // Move to the start
            index = 0; // Reset index
            setTimeout(() => {
                slider.style.transition = 'transform 0.7s ease-in-out'; // Re-enable transition
                slideTestimonials(); // Call again to slide to the next
            }, 50); // Short delay before moving to the next testimonial
        } else {
            slider.style.transform = `translateX(-${index * (testimonials[0].clientWidth + 32)}px)`;
        }
    }

    setInterval(slideTestimonials, 2000); // Slide every 5 seconds
});
