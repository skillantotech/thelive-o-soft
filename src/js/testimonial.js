const testimonials = [
  { text: "This is the first testimonial.", author: "John Doe", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
  { text: "This is the second testimonial.", author: "Jane Smith", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
  { text: "This is the third testimonial.", author: "Michael Johnson", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
  { text: "This is the fourth testimonial.", author: "John Doe", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
  { text: "This is the fifth testimonial.", author: "Jane Smith", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
  { text: "This is the sixth testimonial.", author: "Michael Johnson", imageUrl: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
];


const testimonialSlider = document.getElementById("testimonial-slider");

testimonials.map((testimonial, index) => {
  const testimonialDiv = document.createElement("div");
  testimonialDiv.className = `card-${index} absolute  w-full h-fit p-6 duration-1000 flex justify-center ease-in-out transform -translate-x-full`;

  testimonialDiv.innerHTML = `
          <div class="flex flex-col justify-center items-center max-w-2xl text-center p-4 bg-red-500">
              <p class="text-lg font-medium">${testimonial.text}</p>
              <h4 class="mt-4 text-sm font-semibold">- ${testimonial.author}</h4>
              <img src=${testimonial.imageUrl} class=" h-10 w-10"/>
          </div>`;

  testimonialSlider.appendChild(testimonialDiv);
});

const testimonialCards = document.querySelectorAll("#testimonial-slider > div");

let index = 0;
testimonialCards[index].classList.add("translate-x-0"); // Show the first testimonial initially

setInterval(() => {
  // Move the current testimonial out of view
  testimonialCards[index].classList.remove("translate-x-0");
  if (index > 0) testimonialCards[index].classList.add("translate-x-full");
  else testimonialCards[index].classList.add("-translate-x-full");

  // Increment index and wrap around using modulo
  index = (index + 1) % testimonials.length;

  // Move the next testimonial into view
  testimonialCards[index].classList.remove(
    "-translate-x-full",
    "translate-x-full"
  );
  testimonialCards[index].classList.add("translate-x-0");
}, 3000);
