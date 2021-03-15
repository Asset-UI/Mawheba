document.addEventListener("DOMContentLoaded", function() {
    console.log("start");
    let galleries = document.querySelectorAll(".gallery");
  
    Array.prototype.forEach.call(galleries, function(el, i) {
      const $this = $(el);
      const $owl1 = $this.find(".owl-1");
      const $owl2 = $this.find(".owl-2");
      let flag = false;
      let duration = 300;
  
      $owl1
        .owlCarousel({
          items: 1,
          //autoplay:true,
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
            1000:{
                items:3
            }
        },
          //autoplay:true,
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
$(document).on('click', '.icon-cancel-circle', function(){
    $('*[id*="vidBox"]').hide();
});
