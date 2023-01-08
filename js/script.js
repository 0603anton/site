$(document).ready(function(){
    $('.slider').slick(
        {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        }

    );

    $('.multiple-items').slick({
        dots:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

});

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay_modal");
// const openModalBtn = document.querySelector(".btn-open");
// const closeModalBtn = document.querySelector(".btn-close");
//
// function hide(e){
//     e.currentTarget.style.visibility = "hidden";
//     // Когда данная функция используется в качестве обработчика события: this === e.currentTarget
// }

const openModal = function (id) {
    document.querySelector(`.modal`+id).classList.remove("hidden");
    document.querySelector(`.overlay_modal`+id).classList.remove("hidden");
};

const closeModal = function (id) {
    document.querySelector(`.modal`+id).classList.add("hidden");
    document.querySelector(`.overlay_modal`+id).classList.add("hidden");
};

document.querySelectorAll('.btn-open').forEach(item => {
    item.addEventListener('click', event => {
        openModal(event.currentTarget.dataset.num)
    })
})

document.querySelectorAll('.btn-close').forEach(item => {
    item.addEventListener('click', event => {
        closeModal(event.currentTarget.dataset.num)
    })
})
document.querySelectorAll('.overlay_modal').forEach(item => {
    item.addEventListener('click', event => {
        closeModal(event.currentTarget.dataset.num)
    })
})


