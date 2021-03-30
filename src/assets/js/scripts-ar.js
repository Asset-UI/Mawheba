$(window).on("load",function(e){
  if ($(window).width() < 768) {
    $('.owl-impEvents').owlCarousel('destroy'); 
    $('.owl-impEvents .datePickerHolder.resHide').remove();
    var owl7 = $('.owl-impEvents');
  owl7.owlCarousel({
  rtl:true,
  dots:false,
  responsive:{
    0:{
      items:1,
      stagePadding: 25,
      margin:25
  },
  768:{
      items:3,
      stagePadding: 85,
      margin:40
  }
  },
  onTranslated:callBack
  });
  
  function callBack(){
    if( $('.owl-carousel .owl-item').last().hasClass('active') && $('.owl-carousel .owl-item').last().prev('.owl-item').prev('.owl-item:not(.active)') ){
          $('.owl-extra-next').addClass('bDisabled');
          $('.owl-extra-prev').removeClass('bDisabled');
       }else if($('.owl-carousel .owl-item').first().hasClass('active')){
          $('.owl-extra-prev').addClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled');
       }
       else{
          $('.owl-extra-prev').removeClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled'); 
       }
  }
  $('#owlCarousel .owl-extra-prev').addClass('bDisabled');


  $('.owl-extra-next.three').click(function() {
    owl7.trigger('next.owl.carousel');
  });
  $('.owl-extra-prev.three').click(function() {
    owl7.trigger('prev.owl.carousel');
  });
  }
});

document.addEventListener("DOMContentLoaded", function() {
    let galleries = document.querySelectorAll(".gallery");
  
    Array.prototype.forEach.call(galleries, function(el, i) {
      const $this = $(el);
      const $owl1 = $this.find(".owl-1");
      const $owl2 = $this.find(".owl-2");
      let flag = false;
      let duration = 300;
  
      $owl1
        .owlCarousel({
          responsive:{
            0:{
              items: 1,
              autoplay:false
            },
            758:{
              items: 1,
              autoplay:true
            }
          },
          autoplay:true,
          lazyLoad: false,
          loop: false,
          margin: 10,
          nav: false,
          dots:false,
          rtl:true,
          responsiveClass: true
        })
        .on("changed.owl.carousel", function(e) {
          if (!flag) {
            flag = true;
            $owl2
              .find(".owl-item")
              .removeClass("current")
              .eq(e.item.index)
              .addClass("current");
            if (
              $owl2
                .find(".owl-item")
                .eq(e.item.index)
                .hasClass("active")
            ) {
            } else {
              $owl2.trigger("to.owl.carousel", [e.item.index, duration, true]);
            }
            flag = false;
          }
        });
  
      $owl2
        .on("initialized.owl.carousel", function() {
          $owl2
            .find(".owl-item")
            .eq(0)
            .addClass("current");
        })
        .owlCarousel({
          responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            }
        },
          autoplay:true,
          lazyLoad: false,
          loop: false,
          margin: 10,
          nav: true,
          dots:false,
          rtl:true,
          responsiveClass: true,
          navText : ["<span class='icon-keyboard_arrow_left-24px'></span>","<span class='icon-keyboard_arrow_left-24px1'></span>"]
        })
        .on("click", ".owl-item", function(e) {
          e.preventDefault();
          var number = $(this).index();
          $owl1.trigger("to.owl.carousel", [number, duration, true]);
        });
    });
  });

  $( document ).ready(function() {
    $('video').trigger('pause');
  });

$(document).on('click', '#video1', function(){
    $('*[id*="vidBox"]').show();
});
$(document).on('click', '.closeVid', function(){
    $('video').trigger('pause');
});
$(document).on('click', '.icon-cancel-circle', function(){
    $('*[id*="vidBox"]').hide();
});

$(document).on('click', '.toggleMega', function(){
  $('.megaMenuHolder').addClass('open');
  $('body').addClass('opacity');
  $('html').addClass('oFH');
  $('header').addClass('megaOpened');
});
$(document).on('click', '.closeMegaMenu', function(){
  $('.megaMenuHolder').removeClass('open');
  $('body').removeClass('opacity');
  $('html').removeClass('oFH');
  $('header').removeClass('megaOpened');
  $('.megaMenuRest').hide();
});
/*
$(document).on('mouseover', '.megaMenuMenu ul li', function(){
  $('.megaMenuRest').hide();
  $('.megaMenuPreview').show();
  $('.subMega').hide();
  $(this).find('.subMega').show();
});
$(document).on('mouseleave', '.megaMenuPreview', function(){
  $('.megaMenuRest').show();
  $('.megaMenuPreview').hide();
  $('.subMega').hide();
});
*/





$(document).ready(function(){
  var owl3 = $('.owl-programsContests');
  owl3.owlCarousel({
  rtl:true,
  dots:false,
  responsive:{
      0:{
          items:1,
          stagePadding: 10,
          margin:25
      },
      768:{
          items:2,
          stagePadding: 100,
          margin:20
      }
  },
  onTranslated:callBack
  });
  
  function callBack(){
    if( $('.owl-carousel .owl-item').last().hasClass('active') && $('.owl-carousel .owl-item').last().prev('.owl-item').prev('.owl-item:not(.active)') ){
          $('.owl-extra-next').addClass('bDisabled');
          $('.owl-extra-prev').removeClass('bDisabled');
       }else if($('.owl-carousel .owl-item').first().hasClass('active')){
          $('.owl-extra-prev').addClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled');
       }
       else{
          $('.owl-extra-prev').removeClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled'); 
       }
  }
  $('#owlCarousel .owl-extra-prev').addClass('bDisabled');


  $('.owl-extra-next').click(function() {
    owl3.trigger('next.owl.carousel');
  });
  $('.owl-extra-prev').click(function() {
    owl3.trigger('prev.owl.carousel');
  });
});





$(document).ready(function(){
  var owl5 = $('.owl-mediaLibrary');
  owl5.owlCarousel({
  rtl:true,
  dots:false,
  responsive:{
    0:{
      items:1,
      stagePadding: 10,
      margin:25
  },
  768:{
      items:2,
      stagePadding: 85,
      margin:50
  }
  },
  onTranslated:callBack
  });
  function callBack(){
    if( $('.owl-carousel .owl-item').last().hasClass('active') && $('.owl-carousel .owl-item').last().prev('.owl-item').prev('.owl-item:not(.active)') ){
          $('.owl-extra-next').addClass('bDisabled');
          $('.owl-extra-prev').removeClass('bDisabled');
       }else if($('.owl-carousel .owl-item').first().hasClass('active')){
          $('.owl-extra-prev').addClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled');
       }
       else{
          $('.owl-extra-prev').removeClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled'); 
       } 
  }
  $('#owlCarousel .owl-extra-prev').addClass('bDisabled');
  $('.owl-extra-next.two').click(function() {
    owl5.trigger('next.owl.carousel');
  });
  $('.owl-extra-prev.two').click(function() {
    owl5.trigger('prev.owl.carousel');
  });
  $(".owl-mediaLibrary .owl-item.active").first().addClass("current");
}).on('changed.owl.carousel', function () {
  setTimeout(function() {
  $(".owl-mediaLibrary .owl-item").removeClass("current");
  $(".owl-mediaLibrary .owl-item.active").first().addClass("current");
}, 100);
})


$(document).ready(function(){
  var owl6 = $('.owl-successStories');
  owl6.owlCarousel({
  rtl:true,
  dots:false,
  responsive:{
    0:{
      items:1,
      stagePadding: 25,
      margin:25
  },
  768:{
      items:2,
      margin:40,
      stagePadding: 85,
  }
  },
  onTranslated:callBack
  });
  
  function callBack(){
    if( $('.owl-carousel .owl-item').last().hasClass('active') && $('.owl-carousel .owl-item').last().prev('.owl-item').prev('.owl-item:not(.active)') ){
          $('.owl-extra-next').addClass('bDisabled');
          $('.owl-extra-prev').removeClass('bDisabled');
       }else if($('.owl-carousel .owl-item').first().hasClass('active')){
          $('.owl-extra-prev').addClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled');
       }
       else{
          $('.owl-extra-prev').removeClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled'); 
       }
  }
  $('#owlCarousel .owl-extra-prev').addClass('bDisabled');


  $('.owl-extra-next.three').click(function() {
    owl6.trigger('next.owl.carousel');
  });
  $('.owl-extra-prev.three').click(function() {
    owl6.trigger('prev.owl.carousel');
  });
  
});




$(document).ready(function(){
  var owl7 = $('.owl-impEvents');
  owl7.owlCarousel({
  rtl:true,
  dots:false,
  responsive:{
    0:{
      items:1,
      stagePadding: 25,
      margin:25
  },
  768:{
      items:3,
      stagePadding: 85,
      margin:40
  }
  },
  onTranslated:callBack
  });
  
  function callBack(){
    if( $('.owl-carousel .owl-item').last().hasClass('active') && $('.owl-carousel .owl-item').last().prev('.owl-item').prev('.owl-item:not(.active)') ){
          $('.owl-extra-next').addClass('bDisabled');
          $('.owl-extra-prev').removeClass('bDisabled');
       }else if($('.owl-carousel .owl-item').first().hasClass('active')){
          $('.owl-extra-prev').addClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled');
       }
       else{
          $('.owl-extra-prev').removeClass('bDisabled');
          $('.owl-extra-next').removeClass('bDisabled'); 
       }
  }
  $('#owlCarousel .owl-extra-prev').addClass('bDisabled');


  $('.owl-extra-next.three').click(function() {
    owl7.trigger('next.owl.carousel');
  });
  $('.owl-extra-prev.three').click(function() {
    owl7.trigger('prev.owl.carousel');
  });
  
});




$('.datepicker').datepicker({
  multidate: true,
  todayHighlight: true,
  minDate: 0,
  language: "ar",
  beforeShowDay: function(date) {
     var hilightedDays = [12,21];
     if (~hilightedDays.indexOf(date.getDate())) {
        return {classes: 'events', tooltip: 'Title'};
     }
  }
});

/*
$('.datepicker').datepicker({ language: "ar"}).datepicker('setDates', [new Date(2021, 02, 22), new Date(2021, 02, 25)]);
*/




$(document).on('click', '.events.day, .eventMobBtn', function(e){ //Relative ( to its parent) mouse position 
  var posX = $(this).position().left,
      posY = $(this).position().top;
      $('.eventBox').css({
        'top': e.pageY - posY,
        'left': e.pageX - posX,
        'position':'absolute',
        'z-index':'9',
        'display': 'none'
    });
    $('.eventBox').show();
    setTimeout(function() {
    $('.eventBox').addClass('openE');
  },500); 
});
$('.impEvents *, .successStories *').click(function() {
  if($('.eventBox').hasClass('openE')) {
    $('.eventBox').hide();
    $('.eventBox').removeClass('openE');
  }       
});




$(document).ready(function(){
  var owl8 = $('.owl-eventsPopup');
  owl8.owlCarousel({
  rtl:true,
  dots:true,
  responsive:{
    0:{
      items:1,
      margin:20
  },
768:{
  margin:40
}
  }
  });
  });




  $(document).ready(function(){
    var owl9 = $('.owl-lastNews');
    owl9.owlCarousel({
    rtl:true,
    dots:false,
    responsive:{
      0:{
        items:1,
        stagePadding: 25,
        margin:25
    },
    768:{
        items:3,
        stagePadding: 85,
        margin:40
    }
    },
    onTranslated:callBack
    });
    
    function callBack(){
      if( $('.owl-carousel .owl-item').last().hasClass('active') && $('.owl-carousel .owl-item').last().prev('.owl-item').prev('.owl-item:not(.active)') ){
            $('.owl-extra-next').addClass('bDisabled');
            $('.owl-extra-prev').removeClass('bDisabled');
         }else if($('.owl-carousel .owl-item').first().hasClass('active')){
            $('.owl-extra-prev').addClass('bDisabled');
            $('.owl-extra-next').removeClass('bDisabled');
         }
         else{
            $('.owl-extra-prev').removeClass('bDisabled');
            $('.owl-extra-next').removeClass('bDisabled'); 
         }
    }
    $('#owlCarousel .owl-extra-prev').addClass('bDisabled');
  
  
    $('.owl-extra-next.three').click(function() {
      owl9.trigger('next.owl.carousel');
    });
    $('.owl-extra-prev.three').click(function() {
      owl9.trigger('prev.owl.carousel');
    });
    $(".owl-lastNews .owl-item.active").first().addClass("current");
  }).on('changed.owl.carousel', function () {
    setTimeout(function() {
    $(".owl-lastNews .owl-item").removeClass("current");
    $(".owl-lastNews .owl-item.active").first().addClass("current");
  }, 100);
  })


  $(document).on('click', '.chatRobotBtn', function(){ //Relative ( to its parent) mouse position 
      $('.chatRobotHolder').show();
      $('html').addClass('oFH');
      setTimeout(function() {
        $('.chatRobotHolder').addClass('openE');
      },500); 
  });
  $('.closeChat').click(function() {
    if($('.chatRobotHolder').hasClass('openE')) {
      $('.chatRobotHolder').hide();
      $('.chatRobotHolder').removeClass('openE');
      $('html').removeClass('oFH');
    }       
  });


  $(document).on('click', '.chatRobotBtnHolder .mBtn', function(){
    $('.chatPageOne').hide();
    $('.chatPageTwo').show();
  })

  $('a.goUp').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});

$(window).on("load resize",function(e){
  if ($(window).width() < 768) {
$(document).on('click', '.Mwheba .megaMenuHolder .megaMenu .megaMenuMenu ul li a', function(){
  $(this).next('ul.subMega').toggle();
  $(this).toggleClass('open');
})
}
});

$(document).on('click', '.howAreUMob', function(){
  $('.megaMenuRest').toggle();
  $(this).toggleClass('arrow');
})

$(document).on('click', '.footerLists h5', function(){
  $(this).next('ul').toggle();
  $(this).toggleClass('opened');
})