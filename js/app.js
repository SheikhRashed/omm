
$('.collapse').collapse();


$('.news_slider').slick({
    dots:false,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});


// const cal = document.querySelector('.calculator');
// const calculator = cal.children[1];
// const clsBtn = document.querySelector('.close');
var btn = document.querySelector('.calculator');
var calculator = document.querySelector('.calculator_box');
var clsBtn = calculator.children[0].children[0].children[0];
console.log(btn);
console.log(calculator);
console.log(clsBtn);

btn.addEventListener('click',(e)=>{
    
    calculator.classList.add('open');
});
clsBtn.addEventListener('click',(e)=>{
    // calculator.remove();
    // calculator.classList.remove('open');
   calculator.remove();
});

// $(window).load(function () {
// 	$(".calculator").click(function(){
// 	   $('.calculator_box').show();
// 	});
// 	$('.hover_bkgr_fricc').click(function(){
// 		$('.hover_bkgr_fricc').hide();
// 	});
// 	$('.popupCloseButton').click(function(){
// 		$('.hover_bkgr_fricc').hide();
// 	});
// });

