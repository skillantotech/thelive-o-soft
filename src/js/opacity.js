const testimonials = [
    { text: "This is the first testimonial.", author: "John Doe", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
    { text: "This is the second testimonial.", author: "Jane Smith", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
    { text: "This is the third testimonial.", author: "Michael Johnson", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
    { text: "This is the fourth testimonial.", author: "John Doe", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
    { text: "This is the fifth testimonial.", author: "Jane Smith", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
    { text: "This is the sixth testimonial.", author: "Michael Johnson", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
  ];
  
  const testimonialSlider = document.getElementById("testimonial-slider");
  
  testimonials.forEach((testimonial, index) => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.className = `card-${index} absolute w-full h-fit p-6 duration-1000 ease-in-out ${index==0?'z-100':''}`;
  
    testimonialDiv.innerHTML = `
            <div class="flex flex-col justify-center items-center text-center p-4 ${index%2==1?'bg-red-500':'bg-blue-500'}">
                <p class="text-lg font-medium">${testimonial.text}</p>
                <h4 class="mt-4 text-sm font-semibold">- ${testimonial.author}</h4>
                <img src=${testimonial.imageUrl} class="h-10 w-10"/>
            </div>`;
  
    testimonialSlider.appendChild(testimonialDiv);
  });
  
  const testimonialCards = document.querySelectorAll("#testimonial-slider > div");
  
  let index = 0;

//   testimonialCards[0].classList.remove("opacity-0"); // Show the first testimonial initially
//   testimonialCards[0].classList.add("opacity-100"); // Show the first testimonial initially
  
  setInterval(() => {
    // Fade out the current testimonial
    testimonialCards[index].classList.remove("opacity-100");
    testimonialCards[index].classList.add("opacity-0");
   
    // Ensure the new testimonial is on top before fading it in
    testimonialCards.forEach((card, i) => {
        card.style.opacity = i === index ? "1" : "0";
      });

    // Increment index and wrap around using modulo
    index = (index + 1) % testimonials.length;  
  
    // Fade in the next testimonial
    testimonialCards[index].classList.remove("opacity-0");
    testimonialCards[index].classList.add("opacity-100");
  }, 3000);
  