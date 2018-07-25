$(document).ready(function(){
    /* open push menu */
    $(document).trigger("enhance");
    
    /* user dropdown*/
    $(".user-dropdown").on("hide.bs.dropdown", function(){
        $('.user-dropdown>a').removeClass('udhover');
        $(".user-dropdown").removeClass('udbtn');
    });
  
    $(".user-dropdown").on("show.bs.dropdown", function(){
        $('.user-dropdown>a').addClass('udhover');
        $(".user-dropdown").addClass('udbtn');
    });
  
    /*Cart Dropdown*/
    $(".cart-dropdown").on("hide.bs.dropdown", function(){
        $('.cart-dropdown>a').removeClass('udhover');
        $(".cart-dropdown").removeClass('udbtn');
    });
  
    $(".cart-dropdown").on("show.bs.dropdown", function(){
        $('.cart-dropdown>a').addClass('udhover');
        $(".cart-dropdown").addClass('udbtn');
    });

    /*Search dropdown for small screen */
    $('[data-toggle=search-form]').click(function() {
        $('.search-form-wrapper').toggleClass('open');
        $('.search-form-wrapper .search').focus();
        $('body').toggleClass('search-form-open');
    });


    var $nav = $('.menamall-megamenu> ul > li');
    $nav.hover(
        function() {
            $('.mega-dropdown-menu', this).show();
            $('a',this).first().addClass('menamall-megamenu-hover');
        },
        function() {
            $('.mega-dropdown-menu', this).hide();
            $('a',this).first().removeClass('menamall-megamenu-hover');
        }
    );

    /****************** Product Detail View ***********************/

    // var pd ={
    //     "product_id": "725129",
    //     "sku": "MS-MOW-AB0528",
    //     "product_name": "French Kick Sweatshirt for men - Black","special_price":"200",
    //     "discount":"20%",
    //     "brand":"Alpha Design",
    //     "availability":"In Stock",
    //     "pcode":"725130",
    //     "description":"100% poly,Machine wash cold,Marled knit fabric,Manufacturer Style No. P1703075",
    //     "default_color": "olive",
    //     "product_thumbimages": ["img/thumb1.jpg", "img/thumb2.jpg"],
    //     "product_images":["img/md1.jpg", "img/md2.jpg"],
    //     "price": 149.00,
    //     "availbility":"isInStock",
    //     "size": [
    //         {"name": "30 US", "id": "30US", "price":"150.00", "special_price":"150", "discount":"20%", "availability":"In Stock", "product_code":"725130", "sku":"MS-MHS-AB0602"}
    //     ], 
    //     "colors":[
    //         {
    //             "name":"grey",
    //             "id":"grey",
    //             "price":"160.00",
    //             "special_price":"160",
    //             "discount":"20%",
    //             "availbility":"In Stock",
    //             "product_code":"725130",
    //             "sku":"MS-MHS-AB0603",
    //             "sizes":[
    //                 {
    //                     "name":"32 US", "id":"32US"
    //                 }
    //             ],
    //             "product_thumbimages": ["img/th-1.png", "img/th-2.png"],
    //             "product_images":["img/md-1.png", "img/md-2.png"]
    //         },
    //         {
    //             "name":"olive", "id":"olive", "price":"170.00", "special_price":"170", "discount":"30%", "availbility":"In Stock", "product_code":"725130", "sku":"MS-MHS-AB0604",
    //             "product_thumbimages": ["img/th-1.png", "img/th-2.png"],
    //             "product_images":["img/md-1.png", "img/md-2.png"],
    //             "sizes":[{"name":"30 US", "id":"30US"},{"name":"32 US", "id":"32US"}  ]
    //         }
    //     ]
    // }

    
    var pd = {
        "product_id": "839045", "sku": "MS-WHS-AB2740", "product_name": "Armani Exchange Solid Hooded Jacket", "price": 470, "special_price": 500,
        "discount": "10", "brand": "Alpha", "availability": "In Stock", "pcode": "725130", "description": "",
        "default_color": {"label":"Grey", "value":"12"},
        "product_thumbimages": ["https://ids-static.menamall.com/MS-WHS-AB2740/MS-WHS-AB2740-thumb.jpg"],
        "product_images": [
            "https://ids-static.menamall.com/MS-WHS-AB2740/MS-WHS-AB2740-0.jpg",
            "https://ids-static.menamall.com/MS-WHS-AB2740/MS-WHS-AB2740-1.jpg",
            "https://ids-static.menamall.com/MS-WHS-AB2740/MS-WHS-AB2740-2.jpg",
            "https://ids-static.menamall.com/MS-WHS-AB2740/MS-WHS-AB2740-3.jpg"
        ],
        "size":[
            {
                "name":"XS","id":"287","value":"483","price":400,"special_price":500,
                "discount":"10","availability":"1","product_code":"839039","sku":"MS-WHS-AB2740-B01"
            },
            {
                "name":"S","id":"287","value":"481","price":400,"special_price":500,"discount":"11","availability":"1",
                "product_code":"839040","sku":"MS-WHS-AB2740-B02"
            },
            {
                "name":"M","id":"287","value":"480","price":400,"special_price":500,"discount":"12","availability":"1",
                "product_code":"839041","sku":"MS-WHS-AB2740-B03"
            },
            {
                "name":"L","id":"287","value":"479","price":400,"special_price":500,"discount":"13","availability":"0",
                "product_code":"839042","sku":"MS-WHS-AB2740-B04"
            },
            {
                "name":"XL","id":"287","value":"478","price":400,"special_price":500,"discount":"14","availability":"1",
                "product_code":"839043","sku":"MS-WHS-AB2740-B05"
            }
        ],
        "colors":[
            {
                "name":"Grey", "id":"282", "value":"12",
                "sizes":[
                    {
                        "name":"XS","id":"287","value":"483","price":400,"special_price":false,
                        "discount":"","availability":"1","product_code":"839034","sku":"MS-WHS-AB2740-A01",
                        "product_thumbimages":["https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A01\/MS-WHS-AB2740-A01-thumb.jpg"],
                        "product_images":[
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A01\/MS-WHS-AB2740-A01-0.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A01\/MS-WHS-AB2740-A01-1.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A01\/MS-WHS-AB2740-A01-2.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A01\/MS-WHS-AB2740-A01-3.jpg"
                        ]
                    },
                    {
                        "name":"S","id":"287","value":"481","price":410,"special_price":false,"discount":"",
                        "availability":"1","product_code":"839035","sku":"MS-WHS-AB2740-A02",
                        "product_thumbimages":["https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A02\/MS-WHS-AB2740-A02-thumb.jpg"],
                        "product_images":[
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A02\/MS-WHS-AB2740-A02-0.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A02\/MS-WHS-AB2740-A02-1.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A02\/MS-WHS-AB2740-A02-2.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A02\/MS-WHS-AB2740-A02-3.jpg"
                        ]
                    },
                    {
                        "name":"M","id":"287","value":"480","price":420,"special_price":false,"discount":"",
                        "availability":"1","product_code":"839036","sku":"MS-WHS-AB2740-A03",
                        "product_thumbimages":["https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A03\/MS-WHS-AB2740-A03-thumb.jpg"],
                        "product_images":[
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A03\/MS-WHS-AB2740-A03-0.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A03\/MS-WHS-AB2740-A03-1.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A03\/MS-WHS-AB2740-A03-2.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A03\/MS-WHS-AB2740-A03-3.jpg"
                        ]
                    },
                    {
                        "name":"L","id":"287","value":"479","price":430,"special_price":false,"discount":"",
                        "availability":"1","product_code":"839037","sku":"MS-WHS-AB2740-A04",
                        "product_thumbimages":["https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A04\/MS-WHS-AB2740-A04-thumb.jpg"],
                        "product_images":[
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A04\/MS-WHS-AB2740-A04-0.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A04\/MS-WHS-AB2740-A04-1.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A04\/MS-WHS-AB2740-A04-2.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A04\/MS-WHS-AB2740-A04-3.jpg"
                        ]
                    },
                    {
                        "name":"XL","id":"287","value":"478","price":440,"special_price":false,"discount":"",
                        "availability":"0","product_code":"839038","sku":"MS-WHS-AB2740-A05",
                        "product_thumbimages":["https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A05\/MS-WHS-AB2740-A05-thumb.jpg"],
                        "product_images":[
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A05\/MS-WHS-AB2740-A05-0.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A05\/MS-WHS-AB2740-A05-1.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A05\/MS-WHS-AB2740-A05-2.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-A05\/MS-WHS-AB2740-A05-3.jpg"
                        ]
                    }
                ]
            },{
                "name":"Black","id":"282","value":"5",
                "sizes":[
                    {
                        "name":"XS","id":"287","value":"484","price":470,"special_price":false,"discount":"","availability":"1",
                        "product_code":"839039","sku":"MS-WHS-AB2740-B01",
                        "product_thumbimages":["https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B01\/MS-WHS-AB2740-B01-thumb.jpg"],
                        "product_images":[
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B01\/MS-WHS-AB2740-B01-0.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B01\/MS-WHS-AB2740-B01-1.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B01\/MS-WHS-AB2740-B01-2.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B01\/MS-WHS-AB2740-B01-3.jpg"
                        ]
                    },
                    {
                        "name":"S","id":"287","value":"485","price":460,"special_price":false,"discount":"","availability":"1",
                        "product_code":"839040","sku":"MS-WHS-AB2740-B02",
                        "product_thumbimages":["https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B02\/MS-WHS-AB2740-B02-thumb.jpg"],
                        "product_images":[
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B02\/MS-WHS-AB2740-B02-0.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B02\/MS-WHS-AB2740-B02-1.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B02\/MS-WHS-AB2740-B02-2.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B02\/MS-WHS-AB2740-B02-3.jpg"
                        ]
                    },
                    {
                        "name":"M","id":"287","value":"486","price":450,"special_price":false,"discount":"","availability":"1","product_code":"839041","sku":"MS-WHS-AB2740-B03",
                        "product_thumbimages":["https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B03\/MS-WHS-AB2740-B03-thumb.jpg"],
                        "product_images":[
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B03\/MS-WHS-AB2740-B03-0.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B03\/MS-WHS-AB2740-B03-1.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B03\/MS-WHS-AB2740-B03-2.jpg",
                            "https:\/\/ids-static.menamall.com\/MS-WHS-AB2740-B03\/MS-WHS-AB2740-B03-3.jpg"
                        ]
                    }
                ]
            }
        ]
    }


    if(pd != undefined){
        // Product Title
        $('.pd .pd-title').html(pd.product_name);
        // Product Price
        $('.pd .price span').html(pd.price);
        // Product Old price
        $('.pd .pd-price .was').html(pd.special_price);
        // Product Discount
        $('.pd .pd-price .off').html(pd.discount);
        // Product Brand Name
        $('.pd-desc .ba .brand .brandname').html(pd.brand);
        // Product Availability
        $('.pd-desc .ba .avl .val').html(pd.availability);
        // Product Color
        $('.pd-desc .cp .color span').html(pd.default_color.label);
        // Product Product Code
        $('.pd-desc .cp .code .val').html(pd.pcode);

        // Select default images of default color
        if(pd.colors){
            $.each(pd.colors, function(k,v){
                if(v.value == pd.default_color.value){
                    $.each(v.sizes, function(key,value){
                        var pdthumbimg= "";
                        $.each(value.product_thumbimages, function (key,value) {
                            pdthumbimg += '<div class="thumb-container"><img class="img-responsive center-block" src= "' + value + '"></div>';
                        });
                        $('.slider-pd-nav').append(pdthumbimg);

                        // Product Images
                        var pdimages = "";
                        $.each(value.product_images, function(key,value){
                            pdimages += '<div><img class="img-responsive center-block" src="'+value+'"/></div>'
                        });
                        $('.slider-pd').append(pdimages);
                    })
                }
            });
        }
        else{

            // Select default images of product parent when there is no colors object
                

            // Product thumbnails
            var pdthumbimg= "";
            $.each(pd.product_thumbimages, function (key,value) {
                pdthumbimg += '<div class="thumb-container"><img class="img-responsive center-block" src= "' + value + '"></div>';
            });
            $('.slider-pd-nav').append(pdthumbimg);

            // Product Images
            var pdimages = "";
            $.each(pd.product_images, function(key,value){
                pdimages += '<div><img class="img-responsive center-block" src="'+value+'"/></div>'
            });
            $('.slider-pd').append(pdimages);
        }

        // Remove Component if SIZE is undefined or NULL
        if(pd.size === undefined || pd.size === null){
            $('.pd-body .pd-controls .pdsizeblock').remove();
        }
        if(!pd.colors){
            $.each(pd.size, (k,v) =>{
                $('.pd-body .pd-controls .pdsizeblock .pdselectsize').append('<option value="'+v.value+'">'+v.name+'</option>');
            })
        } 

        // Remove Component if Color is undefined or NULL
        if(pd.colors === undefined || pd.colors === null){
            $('.pd-body .pd-controls .pdcolorblock').remove();
        }
        else{
            $.each(pd.colors, function(index,value){
                $('.pd-body .pd-controls .pdcolorblock .pdselectcolor').append('<option value="'+value.value+'">'+value.name+'</option>');
                $('.pd-body .pd-controls .pdcolorblock .pdselectcolor > option').each(function(){
                    if($(this).val() == pd.default_color.value){
                        $(this).prop('selected', true);
                        if(value.value == pd.default_color.value){
                            if(value.sizes){
                                $.each(value.sizes , (k,v) =>{
                                    $('.pd-body .pd-controls .pdsizeblock .pdselectsize').append('<option value="'+v.value+'">'+v.name+'</option>');
                                })
                            }
                        }
                    }return;
                })
            });
        }
  
        /* Change Color Select */
        $('.pd-body .pd-controls .pdcolorblock .pdselectcolor').change(function(){
            var humbimg= "", images = "", _array = [];
            $.each(pd.colors, (key,value) => {
                if($(this).val() == value.value){
                    $('.pd-body .pd-controls .pdsizeblock .pdselectsize').html('<option value="0">-Select Size-</option>');
                    $.each(value.sizes, (k,v) => {
                        $(".pd-body .pd-controls .pdsizeblock .pdselectsize").append('<option value="'+v.value+'">'+v.name+'</option>');
                        $('.pd .price span').html(value.price);
                        /* Product old price*/
                        $('.pd .pd-price .was').html(value.originalprice);
                        /* Product discount*/
                        $('.pd .pd-price .off').html(value.discount);
                        /* Change Color */
                        $('.pd-desc .cp .color span').html(value.name);
                    });

                    $('.slider-pd').slick('unslick');
                    $('.slider-pd-nav').remove();
                    $('.slider-pd').remove();
                    $.each(value.sizes, function(k,v){
                        for(let i in v.product_thumbimages) {
                            humbimg += '<div class="thumb-container"><img class="img-responsive center-block" src= "' +v.product_thumbimages[i]+ '"></div>';
                        }

                        for(let k in v.product_images){
                            images += '<div><img class="img-responsive center-block" src="'+v.product_images[k]+'"/></div>'
                        } 
                    })
                    $('.slick-navpanel').append('<div class="slider slider-pd-nav "></div>');
                    $('.slick-navbody').append('<div class="slider slider-pd"></div>');
                    $('.slider-pd-nav').append(humbimg);
                    $('.slider-pd').append(images);
                    slicknavinit();      
                }
            })
        })

        /* Change Size Select */
        if(pd.colors){
            $('.pd-body .pd-controls .pdsizeblock .pdselectsize').change(function(){
                $.each(pd.colors, (key,value) => {
                    $.each(value.sizes, (k,v) => {
                        if($(this).val() == v.value){
                            $('.pd .price span').html(v.price);
                            /* Product old price*/
                            $('.pd .pd-price .was').html(v.originalprice);
                            /* Product discount*/
                            $('.pd .pd-price .off').html(v.discount);
                        }
                    })
                })
            });
        }
        // else{
        //     $('.pd-body .pd-controls .pdsizeblock .pdselectsize').change(function(){
        //       $.each(pd.size,(k,v) => {
        //         if($(this).val() == v.value){
        //             $('.pd .price span').html(v.price);
        //             /* Product old price*/
        //             $('.pd .pd-price .was').html(v.originalprice);
        //             /* Product discount*/
        //             $('.pd .pd-price .off').html(v.discount);
        //         }
        //       })  
        //     })
        // }
    } 


    /* Footer columns equal height*/
    $('.col-footer').css({
        'height': $('.col-footer').height()
    });



        $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical:false,
        prevArrow:"<span class='slickk-prev slick-carousel'></span>",
        nextArrow:"<span class='slickk-next slick-carousel'></span>",
    });

    $('.single-item').find('.slick-dots').addClass('custom-slick-dots');

    /*
    *   Trending Block
    */

    $('.multiple-items').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 3, slidesToScroll: 3, infinite: false, arrows:false, dots:true }
            },
            {
                breakpoint: 600,
                settings: {slidesToShow: 2, slidesToScroll: 2, infinite: false, arrows:false,dots:true }
            },
            {
                breakpoint: 480,
                settings: {slidesToShow: 1, slidesToScroll: 1, infinite: false, arrows:false,dots:true }
            }
        ]
    });



    /* Left panel price range slider */ 
    if(document.getElementById('rangeslider')){
        var rangepressslider = document.getElementById('rangeslider');
        var input0 = document.getElementById('input-with-keypress-0');
        var input1 = document.getElementById('input-with-keypress-1');
        var inputs = [input0, input1];
        noUiSlider.create(rangepressslider, {
          start: [20, 400],
          connect: true,
          direction: 'ltr',
          tooltips: [false, wNumb({ decimals: 1 })],
          range: {
            'min': 0,
            'max': 500
        }
    });

        rangepressslider.noUiSlider.on('update', function( values, handle ) {
          inputs[handle].value = values[handle];
      });
    }


    /* Top naviagation price range slider */
    if(document.getElementById('priceslider')){
        var pressslider = document.getElementById('priceslider');
        var fromaed = document.getElementById('fromaed');
        var toaed = document.getElementById('toaed');
        var priceinputs = [fromaed, toaed];
        noUiSlider.create(pressslider, {
          start: [20, 200],
          connect: true,
          direction: 'ltr',
          tooltips: [false, wNumb({ decimals: 1 })],
          range: {
            'min': 0,
            'max': 500
        }
    });

        pressslider.noUiSlider.on('update', function( values, handle ) {
          priceinputs[handle].value = values[handle];
      });
    } 


    /* Product Quick View */
    $('.productquickview').click(function(){
        setTimeout(function(){ 
          $('.sliderr-single').slick({slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: false, adaptiveHeight: true, infinite: false, useTransform: true, speed: 400, cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)', });
          $('.slider-nav').on('init', function(event, slick) {$('.slider-nav .slick-slide.slick-current').addClass('is-active'); })
          .slick({
            slidesToShow: 3, slidesToScroll: 3, dots: false, focusOnSelect: false, infinite: false, vertical:true,
            responsive: [{
              breakpoint: 1024,
              settings: {slidesToShow: 3, slidesToScroll: 3, }
          }, {  
              breakpoint: 640,
              settings: {slidesToShow: 3, slidesToScroll: 3, }
          }, {
              breakpoint: 420,
              settings: {slidesToShow: 3, slidesToScroll: 3, }
          }]
      });
          $('.sliderr-single').on('afterChange', function(event, slick, currentSlide) {
            $('.slider-nav').slick('slickGoTo', currentSlide);
            var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
            $('.slider-nav .slick-slide.is-active').removeClass('is-active');
            $(currrentNavSlideElem).addClass('is-active');
        });

          $('.slider-nav').on('click', '.slick-slide', function(event) {
            event.preventDefault();
            var goToSingleSlide = $(this).data('slick-index');
            $('.sliderr-single').slick('slickGoTo', goToSingleSlide);
        });
      }, 200);
    });


    function slicknavinit(){
        $('.slider-single').slick({
            slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: false, adaptiveHeight: false, infinite: false, useTransform: true, speed: 400, cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
            responsive: [
                {breakpoint: 1024, settings: {slidesToShow: 1, slidesToScroll: 1, dots:true} },
                {breakpoint: 640, settings: {slidesToShow: 1, slidesToScroll: 1,  dots:true} },
                {breakpoint: 420, settings: {slidesToShow: 1, slidesToScroll: 1, dots:true } }
            ]
        });

        $('.pd-slider-nav').on('init', function(event, slick) {
            $('.pd-slider-nav .slick-slide.slick-current').addClass('is-active');
        }).slick({
            slidesToShow: 4, slidesToScroll: 4, dots: false, focusOnSelect: false, infinite: false,fade:false,vertical:true,adaptiveHeight: true,
            prevArrow: '<span class="prevbtn"><i class="fa fa-angle-up fa-2x" aria-hidden="true"></i></span>',
            nextArrow: '<span class="nextbtn"><i class="fa fa-angle-down fa-2x" aria-hidden="true"></i></span>',
            responsive: [
                {breakpoint: 1024, settings: {slidesToShow: 5, slidesToScroll: 5, } },
                {breakpoint: 640, settings: {slidesToShow: 4, slidesToScroll: 4, } },
                {breakpoint: 420, settings: {slidesToShow: 3, slidesToScroll: 3, } }
            ]
        });

        $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
            $('.pd-slider-nav').slick('slickGoTo', currentSlide);
            var currrentNavSlideElem = '.pd-slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
            $('.pd-slider-nav .slick-slide.is-active').removeClass('is-active');
            $(currrentNavSlideElem).addClass('is-active');
        });

        $('.pd-slider-nav').on('click', '.slick-slide', function(event) {
            event.preventDefault();
            var goToSingleSlide = $(this).data('slick-index');
            $('.slider-single').slick('slickGoTo', goToSingleSlide);
        });
    }

    slicknavinit();




    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;
            // an array that will be populated with substring matches
            matches = [];
            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');
            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });
            cb(matches);
        };
    };

    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California','Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii','Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana','Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota','Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire','New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota','Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island','South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont','Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    $('.typeahead').typeahead({
        hint: false,
        highlight: true,
        minLength: 3
    },
    {
        name: 'states',
        source: substringMatcher(states)
    });

  
    $(".cart_payments .panel").on("show.bs.collapse hide.bs.collapse", function(e) {
        if (e.type=='show'){
            $(this).addClass('active');
        }else{
          $(this).removeClass('active');
        }
    });  

});

