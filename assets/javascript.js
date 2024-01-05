/**
 * blogs isotope and filter
 */
window.addEventListener('load', () => {
    let blogsContainer = select('.blogs-container');
    if (blogsContainer) {
        let blogsIsotope = new Isotope(blogsContainer, {
            itemSelector: '.portfolio-item'
        });

        let blogsFilters = select('#blogs-flters li', true);

        on('click', '#blogs-flters li', function(e) {
            e.preventDefault();
            blogsFilters.forEach(function(el) {
                el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');

            blogsIsotope.arrange({
                filter: this.getAttribute('data-filter')
            });
            blogsIsotope.on('arrangeComplete', function() {
                AOS.refresh()
            });
        }, true);
    }

});

/**
 * Initiate blogs lightbox 
 */
const blogsLightbox = GLightbox({
    selector: '.blogs-lightbox'
});

/**
 * blogs details slider
 */
new Swiper('.blogs-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});