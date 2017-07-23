$(document).ready(function() {

  // Variables
  var $codeSnippets = $('.code-example-body'),
      $nav = $('.navbar'),
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
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $('a[href^="#"]').on('click', smoothScroll)
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  $("#top-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
	});

  $("#events-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#events").offset().top-100
    }, 1000);
	});

  $("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top-100
    }, 1000);
	});

	$("#resources-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#resources").offset().top-100
    }, 1000);
	});

  $("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top-100
    }, 1000);
	});

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  init();

});