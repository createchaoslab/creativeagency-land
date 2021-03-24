$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu-ul').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.header__content-inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1
    });
    $('.quotes__items').slick({
        slidesToShow: 1,
        //slidesToScroll: 1,
        arrows: false,
        //fade: true,
        //asNavFor: '.quotes__images'
      });
     // $('.quotes__images').slick({
        //slidesToShow: 6,
        //slidesToScroll: 1,
        //asNavFor: '.quotes__items',
        //centerMode: true,
        //dots: true,
        //focusOnSelect: true,

      //});
  });