import Ember from 'ember';

const {
  $
} = Ember;

function SmoothlyMenu() {
  if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
    setTimeout(
      function () {
        $('#side-menu').fadeIn(400);
      }, 
    200);
  } else if ($('body').hasClass('fixed-sidebar')) {
      $('#side-menu').hide();
      setTimeout(
        function () {
          $('#side-menu').fadeIn(400);
        }, 
      100);
  } else {
    $('#side-menu').removeAttr('style');
  }
}

function fix_height() {
  var heightWithoutNavbar = $("body > #wrapper").height() - 61;
  $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

  var navbarHeigh = $('nav.navbar-default').height();
  var wrapperHeigh = $('#page-wrapper').height();

  if (navbarHeigh > wrapperHeigh) {
    $('#page-wrapper').css("min-height", navbarHeigh + "px");
  }

  if (navbarHeigh < wrapperHeigh) {
    $('#page-wrapper').css("min-height", $(window).height() + "px");
  }

  if ($('body').hasClass('fixed-nav')) {
    if (navbarHeigh > wrapperHeigh) {
      $('#page-wrapper').css("min-height", navbarHeigh - 60 + "px");
    } else {
      $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
    }
  }

}

export default Ember.Component.extend({
  setup: Ember.on('didInsertElement', function() {

    fix_height();

    // MetisMenu
    $('#side-menu').metisMenu();

    $('.navbar-minimalize').click(function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });
  })
});
