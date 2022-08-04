$(function() {

    var header = $("#header"),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= -10 ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });


});

const burger = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".row__navigation");
const service = document.querySelector("#service");
const team = document.querySelector("#team");
const work = document.querySelector("#contact");
const blog = document.querySelector("#blog");
const intro = document.getElementById("intro");


burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	navMenu.classList.toggle("active");

})


service.addEventListener("click", () => {
	navMenu.classList.remove("active");
})

team.addEventListener("click", () => {
	navMenu.classList.remove("active");
})

contact.addEventListener("click", () => {
	navMenu.classList.remove("active");
})

blog.addEventListener("click", () => {
	navMenu.classList.remove("active");
})
