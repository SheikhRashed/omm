// $('.news_slider').jCarousel({
//   type: 'slidey-up',
//   circle: {
//       isshow:false,
//   },
//   arrow: {
//       isshow: false,
//   }
// });


// $('.d').jCarousel({
//     type:'slidey-up',
//     // carsize: {carwidth:200,carheight:400},
//  });

$('.news_slider').slick({
    dots:false,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});