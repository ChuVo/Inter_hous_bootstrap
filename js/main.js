$(function() {
  // Owl Carousel
  const owl = $(".owl-carousel");

  owl.owlCarousel({
    items: 5,
    margin: 10,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0:{
          items:2
      },
      600:{
          items:4
      },
      1000:{
          items:5
      }
    }
  });

});

$(".next_button").click(function(){
  owl.trigger("next.owl.carousel");
});
 
$(".prev_button").click(function(){
  owl.trigger("prev.owl.carousel");
});

function subscribe() {
  alert('Good! You do it!');
}
