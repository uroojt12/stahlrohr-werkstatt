$(document).ready(function() {
    
    /*========== Toggle ==========*/
    $(document).on('click', '.toggle', function() {
        $(".toggle").toggleClass("active");
		$("html").toggleClass("flow");
		$("[nav]").toggleClass("active");
    });
    
$(".toggle_btn").on("click", function () {
      const tab = $(this).data("tab");

      // Button active state
      $(".toggle_btn").removeClass("active");
      $(this).addClass("active");

      // Content toggle
      $(".tab_item").removeClass("active");
      $("#" + tab).addClass("active");
    });



    



    /*========== File Upload ==========*/
    var imgFile;
    $(document).on('click', '#uploadDp', function() {
        imgFile = $(this).attr('data-file');
        $(this).parents('form').children('.uploadFile').trigger('click');
    });
    $(document).on('change', '.uploadFile', function() {
        // alert(imgFile);
        var file = $(this).val();
        $('.uploadImg').html(file);
    });

    
    /*========== Dropdown ==========*/
    $(document).on('click', '.drop_btn', function(e) {
        e.stopPropagation();
        var $this = $(this).parent().children('.drop_cnt');
        $('.drop_cnt').not($this).removeClass('active');
        var $parent = $(this).parent('.drop');
        $parent.children('.drop_cnt').toggleClass('active');
    });
    $(document).on('click', '.drop_cnt', function(e) {
        e.stopPropagation();
    });
    $(document).on('click', function() {
        $('.drop_cnt').removeClass('active');
    });
    /*----- video button -----*/


    var vid = $('video');
    var vid = document.getElementById("bannerVid");
    $(document).on('click', '.fi-play', function() {
      
        $(this).parents().children(vid).trigger('play');

        $(this).removeClass('fi-play').addClass('fi-pause');
    });
    $(document).on('click', '.fi-pause', function() {
        $(this).parents().children(vid).trigger('pause');

        $(this).removeClass('fi-pause').addClass('fi-play');
    });


    /*========== Popup ==========*/
    $(document).on('click', '.popBtn', function() {
        var popUp = $(this).data('popup');
        $('body').addClass('flow');
        $('.popup[data-popup= ' + popUp + ']').fadeIn();
    });
    $(document).on('click', '.cros_btn', function() {
        var popUp = $(this).parents('.popup').data('popup');
        $('body').removeClass('flow');
        $('.popup[data-popup= ' + popUp + ']').fadeOut();
    });

$('.datepicker').datepicker({
            dateFormat: 'MM dd, yy',
            changeMonth: true,
            changeYear: true,
            yearRange: '1900:2060'
        });

        // Timepicker Js
        $('.timepicker').timepicki({
            reset: true
        });

        // Select Js
        $(document).ready(function () {
            $('.selectpicker').selectpicker();
        });
        
        // Data Table Js
        var sortOrder = ($('th.sortBy').index()>-1)?$('th.sortBy').index():0;
        $('.dataTable').DataTable({
            'order': [[
                sortOrder, 'asc'
            ]],
            'pageLength': 25,
            columnDefs: [{
                orderable: false,
                targets: 'no-sort'
            }],
            responsive: true
        });

        $('.owl-testi').owlCarousel({
            autoplay: true,
            nav: true,
            navText: ['<i class="fi-chevron-left"></i>', '<i class="fi-chevron-right"></i>'],
            dots: false,
            loop:true,
            margin:15,
            autoWidth: false,
            autoHeight: false,
            smartSpeed: 1000,
            animateOut: 'fadeOut',
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    autoplay: false,
                    autoHeight: true,
                    dots: true,
                    nav:false
                },
                600:{
                    items:2
                },
                1000:{
                    items: 3
                },
                1600:{
                    items: 3
                }
            }
        });


        var offSet = $('body').offset().top;
        var offSet = offSet + 50;
        $(window).scroll(function() {
            var scrollPos = $(window).scrollTop();
            if (scrollPos >= offSet) {
               $('header').addClass('fix'); 
            } else {
                $('header').removeClass('fix'); 
            }
        });

        
function floatUpDown() {
    $('.cost_saving')
      .animate({ top: '-40px' }, 1200)
      .animate({ top: '-30px' }, 1200, floatUpDown);
  }
  floatUpDown();

  function floatUpDownBottom() {
    $('.ready_blk')
      .animate({ bottom: '-50px' }, 1200)
      .animate({ bottom: '-40px' }, 1200, floatUpDownBottom);
  }
  floatUpDownBottom();
       
        

});


function textAreaAdjust(o) {
    o.style.height = '1px';
    o.style.height = (25 + o.scrollHeight) + 'px';
}

// smooth scroling effect================
// $("html").easeScroll({
//     stepSize: 40,
//     arrowScroll: 40
// });

/*========== Page Loader ==========*/
$(window).on('load', function() {
    $('.loader').delay(700).fadeOut();
    $('#pageloader').delay(1200).fadeOut('slow');
});


