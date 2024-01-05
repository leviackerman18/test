document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const dotsContainer = document.querySelector(".dot-container");

    let index = 0;

    // Create dots dynamically based on the number of images
    for (let i = 0; i < carousel.children.length; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("data-index", i);
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    // Initialize the carousel
    updateCarousel();

    // Add click event listeners to dots
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            index = parseInt(dot.getAttribute("data-index"));
            updateCarousel();
        });
    });

    // Function to update the carousel based on the current index
    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;

        // Update the active state of dots
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Automatic carousel sliding (every 4 seconds)
    setInterval(() => {
        index = (index + 1) % carousel.children.length;
        updateCarousel();
    }, 4000);
});