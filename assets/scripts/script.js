console.log("hello world!");


var swiper = new Swiper(".slider-banner", {
    navigation: {
        nextEl: ".banner .arrow_right",
        prevEl: ".banner .arrow_left",
    },
});

const toggleProductsTabs = () => {
    let tabs = document.querySelectorAll('.products__tabs .tab');
    let grids = document.querySelectorAll('.products__grid');

    tabs.forEach((tab, index) => {

        tab.addEventListener('click', () => {

            tab.forEach((tab_2) => {    
                tab_2.classList.remove( "active" );
            })


            tab.classList.add('active');

        })

    })
}

toggleProductsTabs();