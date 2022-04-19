var loadMore=document.querySelector('#loadMore');
var loadMoreDiv=document.querySelector('.loadMore');
var currentItem=8;

loadMore.onclick=()=>{
   var boxes=[...document.querySelectorAll('.work_part .container_box .box')];
   for(var i=currentItem; i<currentItem+8;i++){
    boxes[i].style.display="inline-block";
   }
//    currentItem += 8;

   if(currentItem >= boxes.length){
    loadMoreDiv.style.display = 'none';
 }
}

$(function(){
			
    $('.thumbnail').viewbox();
    $('.thumbnail-2').viewbox({fullscreenButton: true});

    (function(){
        var vb = $('.popup-link').viewbox();
        $('.popup-open-button').click(function(){
            vb.trigger('viewbox.open');
        });
        $('.close-button').click(function(){
            vb.trigger('viewbox.close');
        });
    })();
    
});

$('.testimonial_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    dots: true,
   infinite: true,
   speed: 500,
   fade: true,
   cssEase: 'linear'
  });

  $('.shamim').owlCarousel({
    loop:true,
    autoplay:true,
    speed:2000,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



let menuSticky = document.querySelector('#menuSticky');

window.addEventListener('scroll',function (params) {
    if(window.pageYOffset > 300){
        menuSticky.classList.add("sticky");
    }else{
        menuSticky.classList.remove("sticky");
    }
})

$(function() {
    $('#vidBox').VideoPopUp({
        backgroundColor: "#17212a",
        opener: "video1",
        idvideo: "v1",
        pausevideo: false
    });
});