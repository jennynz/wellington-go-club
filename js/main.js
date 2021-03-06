$(document).ready(function() {

  // Variables
  var $nav = $('nav'),
      $body = $('body'),
      $window = $(window),
      navOffsetTop = $nav.offset().top,
      $document = $(document),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      }

  function init() {
    $window.on('scroll', onScroll);
    $window.on('resize', resize);
    $('a[href^="#"]').on('click', smoothScroll);
    $(".nav-container ul li a").on('click', toggleResponsiveMenu);
  }

  function smoothScroll(e) {
    e.preventDefault();
    $document.off("scroll");

    var target = this.hash,
        menu = target,
        width = window.innerWidth,
        offset = $(target).offset().top;
    
    if (width < 576) {
      offset -= 15;
    } else if (width < 768) {
      offset -= 40;
    } else if (width < 992) {
      offset -= 60;
    } else {
      offset -= 125;
    }

    $target = $(target);
    $('html, body').animate({ 'scrollTop': offset }, 1000, 'swing', function () {
        $document.on("scroll", onScroll);
    });
  }

  function resize() {
    $body.removeClass('has-docked-nav');
    navOffsetTop = $nav.offset().top;
    onScroll();
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    };
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    };
  }

  function toggleResponsiveMenu() {
    var nav = document.getElementById("nav");
    if (nav.checked == true) {
      nav.checked = false
    }; 
  }

  init();

});