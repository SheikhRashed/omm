"use strict"
// Calculator
$("#cal").Calculadora(
    {
      TituloHTML:'',
      ClaseColumnas:'col-3 mbottom',
      ClaseBtns1: 'default',
      ClaseBtns2: 'warning',
      ClaseBtns3: 'default',
      ClaseBotones:'btn3d btn-md btn-block btn btn-',
      // InputBorrar:idInstancia+'Borrar',
      ClaseInputBorrar:'btn3d btn btn-primary btn-lg btn-block',
      EtiquetaBorrar:'CLEAR'
    }
  );


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

var btn = document.querySelector('.calculator');
var calculator = document.querySelector('.calculator_box');
var clsBtn = calculator.children[0].children[0].children[0];

btn.addEventListener('click',(e)=>{
    
    calculator.classList.add('open');
});
clsBtn.addEventListener('click',(e)=>{

   calculator.remove();

});


// Calculator
