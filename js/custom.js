// scroll nav

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("nav-scrolled", window.scrollY > 0);
});
(function ($) {
  "use strict";

  // nav slide
  $("header nav ul li.icon").on("click", function () {
    $("header nav ul li.icon span").toggleClass("show");
    $("header nav ul .items").slideToggle();
  });

  // menu resize problem
  $(window).resize(function () {
    var screenSize = $(window).width();
    if (screenSize > 767) {
      $("header nav ul .items").removeAttr("style");
      $("header nav ul li.icon span").removeClass("show");
    }
  });

  // preloader
  $(window).on("load", function () {
    $(".loader").fadeOut(500);
    $(window).scrollTop(0);
  });

  // scroll button

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 350) {
      $(".go_top").addClass("back_top");
    } else {
      $(".go_top").removeClass("back_top");
    }
  });
  $(".go_top").on("click", function () {
    $(window).scrollTop(0);
  });

  // section clearance
  $(document).on("click", '.section-clear a[href^="#"]', '.footer-widget a[href^="#"]',function (event) {
    event.preventDefault();

    var href = $.attr(this, "href");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 70,
      },
      500,
      function () {
        // window.location.hash = href;
      }
    );
  });
  

// scroll active nav
(function($){
  $(window).on("load",function(){
    
    /* Page Scroll to id fn call */
    $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      layout:"auto",
      offset:0,
      highlightSelector:"#navigation-menu a"
    });
    
    /* demo functions */
    $("a[rel='next']").click(function(e){
      e.preventDefault();
      var to=$(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo",to);
    });
    
  });
  
    function countdown() {
      var i = document.getElementById('count-number');
      if (parseInt(i.innerHTML)<=0) {
          location.href = 'index.html';
      }
  if (parseInt(i.innerHTML)!=0) {
      i.innerHTML = parseInt(i.innerHTML)-1;
  }
  }
  setInterval(function(){ countdown(); },1000);
})(jQuery);


// isotope

$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
})


  
})(jQuery);
