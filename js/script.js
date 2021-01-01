//preloader
$(window).on("load", function() {
    $("#preloader").fadeOut();
});

//popup
$(document).ready(function() {
    setTimeout(function() {
        $("#popUpmain").css('display', 'block');
    }, 2000);
});

$("#subscribeId").click(function() {
    $("#popUpmain").css('display', 'none');
});


// sticky navbar on scroll down
window.addEventListener("scroll", function() {
    var header = document.querySelector(".navbar-dark");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// smooth scroll
$("#nav").onePageNav();

// keep reading
function showhide() {

    $(".keepbuttonone").click(function() {
        $(".showone").toggle();
    });
    $(".keepbuttontwo").click(function() {
        $(".showtwo").toggle();
    });
    $(".keepbuttonthree").click(function() {
        $(".showthree").toggle();
    });

    $(".keepbuttonfour").click(function() {
        $(".showfour").toggle();
    });

    $(".keepbuttonfive").click(function() {
        $(".showfive").toggle();
    });

    $(".keepbuttonsix").click(function() {
        $(".showsix").toggle();
    });

    $(".keepbuttonseven").click(function() {
        $(".showseven").toggle();
    });

    $(".keepbuttoneight").click(function() {
        $(".showeight").toggle();
    });

}
showhide();


//Aos
AOS.init({
    delay: 400,
    disable: function() {
        var maxWidth = 1050;
        return window.innerWidth < maxWidth;
    }
});