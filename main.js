var parts;
var $ = jQuery;
$(window).bind("scroll", function() {
    $(window).scrollTop() > 100 ? $("header").addClass("do-sticky") : $("header").removeClass("do-sticky");
});
$(document).ready(function() {
    "use strict";
    "use offset().top";
    if (window.location.hash) {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 1);
    }
    if (window.location.hash) {
        if ($(window.location.hash).length) {
            scroll_to(window.location.hash, 2000);
        }
    }
    if ($('#paymentTriggerForm').length > 0) {
        $('#trigger_me').trigger('click');
    }
    var hashurl = '';
    var anchorurl = '';
    var pagename = '';
    $('.do-main-menu a').each(function() {
        if (this.href.indexOf('#') >= 0) {
            parts = this.href.split('#');
            hashurl = parts[0].match(/[^\/]+$/);
            hashurl ? hashurl = hashurl[0] : hashurl = false;
            pagename = document.location.pathname.match(/[^\/]+$/);
            pagename ? pagename = pagename[0] : pagename = false;
            if (pagename) {
                if (pagename == hashurl) {
                    $(this).click(function(e) {
                        e.preventDefault();
                        scroll_to($(this).attr('href').substr($(this).attr('href').indexOf('#'), $(this).attr('href').length), 0);
                    });
                }
            }
        }
    });
    $('.do-top-right a.nav-link').each(function() {
        if ($(this).attr('href').indexOf('#') >= 0) {
            hashurl = $(this).attr('href').substr(0, $(this).attr('href').indexOf('#'));
            $(this).click(function(e) {
                e.preventDefault();
                scroll_to($(this).attr('href').substr($(this).attr('href').indexOf('#'), $(this).attr('href').length));
            });
        }
    });
    $(".view-more").click(function() {
        $('#view-more-content').slideToggle("slow");
        $(this).text($(this).text() == 'View More' ? "View Less" : "View More");
        return false;
    });
    calc_banner();
    sidebar_height();
    $('.do-secondary-menu>ul>li>ul').each(function() {
        if ($(this).children('li').length > 8) {
            $(this).addClass('two-cols');
        }
    });
    $('#menu_toggle').on('click', function() {
        $('html').toggleClass('toggled');
        $('.do-main-menu .navbar-nav, .do-main-menu .navbar-nav li.next').removeClass('next');
    });
    $('.do-main-menu .navbar-nav .nav-item .do-menu-next').on('click', function() {
        $(this).parent().toggleClass('next');
        $('.do-main-menu .navbar-nav').toggleClass('next');
    });
    $('.do-main-menu .navbar-nav .nav-item .do-menu-prev').on('click', function() {
        $(this).parent().parent().toggleClass('next');
        $('.do-main-menu .navbar-nav').toggleClass('next');
    });
    $('.do-secondary-menu a').on('click', function() {
        $('html').toggleClass('toggled');
    });
    if ($('#banner_slider').length) {
        $('#banner_slider').waitForImages(function() {
            setTimeout(function() {
                var brands = $('#banner_slider').lightSlider({
                    item: 1,
                    slideMargin: 0,
                    pager: false,
                    controls: true,
                    auto: true,
                    loop: true,
                    pause: 6000,
                    speed: 1000,
                    pauseOnHover: false,
                    onSliderLoad: function() {
                        $('#banner_slider').animate({
                            opacity: 1
                        }, 1400, function() {
                            setTimeout(function() {
                                $('.do-banner-slider-wrap .do-loader').fadeOut('slow');
                            }, 2000);
                        });
                    }
                });
            }, 1000);
        });
    }
    $("#banner_slider_mbl").length && $("#banner_slider_mbl").waitForImages(function() {
        setTimeout(function() {
            $("#banner_slider_mbl").lightSlider({
                item: 1,
                slideMargin: 0,
                pager: !1,
                controls: !0,
                auto: !0,
                loop: !0,
                pause: 6e3,
                speed: 1e3,
                pauseOnHover: !1,
                onSliderLoad: function() {
                    $("#banner_slider_mbl").animate({
                        opacity: 1
                    }, 1400, function() {
                        setTimeout(function() {
                            $(".do-banner-slider-wrap-mbl .do-loader").fadeOut("slow")
                        }, 2e3)
                    })
                }
            })
        }, 1e3)
    });
    $('.do-banner-img').waitForImages(function() {
        setTimeout(function() {
            $('.do-banner-img').addClass('loaded');
            $('.do-banner-img img').animate({
                opacity: 1
            }, 1000);
        }, 1000);
    });
    if ($('#brand_slider').length) {
        var brands = $('#brand_slider').lightSlider({
            item: 5,
            slideMargin: 0,
            pager: false,
            controls: false,
            loop: true,
            auto: true,
            speed: 3000,
            pause: 5000,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 1380,
                settings: {
                    item: 4
                }
            }, {
                breakpoint: 1200,
                settings: {
                    item: 3
                }
            }, {
                breakpoint: 900,
                settings: {
                    item: 2
                }
            }, {
                breakpoint: 560,
                settings: {
                    item: 1
                }
            }]
        });
        $('.do-brands-slider .slideControls .slidePrev').click(function() {
            brands.goToPrevSlide();
        });
        $('.do-brands-slider .slideControls .slideNext').click(function() {
            brands.goToNextSlide();
        });
    }
    if ($('#showcase_slider').length) {
        var showcase = $('#showcase_slider').lightSlider({
            item: 4,
            slideMargin: 30,
            pager: false,
            controls: false,
            loop: true,
            auto: true,
            speed: 3000,
            pause: 5000,
            pauseOnHover: true,
            onSliderLoad: function() {
                showcase.removeClass('cS-hidden');
            },
            responsive: [{
                breakpoint: 1380,
                settings: {
                    item: 4
                }
            }, {
                breakpoint: 990,
                settings: {
                    item: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    item: 2
                }
            }, {
                breakpoint: 560,
                settings: {
                    item: 1
                }
            }]
        });
        $('.do-round-showcase .slideControls .slidePrev').click(function() {
            showcase.goToPrevSlide();
        });
        $('.do-round-showcase .slideControls .slideNext').click(function() {
            showcase.goToNextSlide();
        });
    }
    if ($('#media_slider ul').length) {
        var media_slider = $('#media_slider ul').lightSlider({
            item: 4,
            slideMargin: 0,
            slideMove: 4,
            pager: false,
            controls: false,
            loop: false,
            auto: true,
            speed: 3000,
            pause: 5000,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    item: 3,
                    slideMove: 3,
                }
            }, {
                breakpoint: 900,
                settings: {
                    item: 2,
                    slideMove: 2,
                }
            }, {
                breakpoint: 560,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }]
        });
        $('#media_slider .slideControls .slidePrev').click(function() {
            media_slider.goToPrevSlide();
        });
        $('#media_slider .slideControls .slideNext').click(function() {
            media_slider.goToNextSlide();
        });
        $('#media_slider_gallery li:not(.clone) a[rel^="prettyPhoto"]').prettyPhoto({
            hideflash: true,
            social_tools: false,
            deeplinking: false,
            autoplay: true,
            iframe_markup: "<iframe src='{path}' width='{width}' height='{height}' frameborder='no' allowfullscreen='true'></iframe>",
        });
    }
    if ($('.do-preview-video').length) {
        $('.do-preview-video a[rel^="prettyPhoto"]').prettyPhoto({
            hideflash: true,
            social_tools: false,
            deeplinking: false,
            autoplay: true,
            iframe_markup: "<iframe src='{path}' width='{width}' height='{height}' frameborder='no' allowfullscreen='true'></iframe>",
        });
    }
    if ($('#recommended_slider').length) {
        var awards = $('#recommended_slider').lightSlider({
            item: 4,
            slideMargin: 0,
            pager: false,
            controls: false,
            loop: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    item: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    item: 2
                }
            }, {
                breakpoint: 560,
                settings: {
                    item: 1
                }
            }]
        });
        $('.do-recommended-slider .slideControls .slidePrev').click(function() {
            awards.goToPrevSlide();
        });
        $('.do-recommended-slider .slideControls .slideNext').click(function() {
            awards.goToNextSlide();
        });
    }
    if ($('#box_slider').length) {
        $('#box_slider').lightSlider({
            item: 1,
            slideMargin: 0,
            pager: true,
            controls: false,
            loop: true,
            auto: true,
            speed: 3000,
            pause: 5000,
            pauseOnHover: true
        });
    }
    $('.do-main-search').on('submit', function(e) {
        e.preventDefault();
        window.open('https://www.candere.com/tsearch/?q=' + $('.do-main-search input').val(), '_blank');
    });
    if ($('#kalyan_gallery').length) {
        var filtergallery = $('#kalyan_gallery').isotope({
            itemSelector: '.do-gallery-box',
            layoutMode: 'fitRows',
            filter: '.trust'
        });
        if ($('.do-gallery-filter').length) {
            $('.do-gallery-filter a').on('click', function(e) {
                $('.do-gallery-filter a.active').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
                filtergallery.isotope({
                    filter: $(this).data('filter')
                });
            });
        }
        $('.do-gallery-boxes a[rel^="prettyPhoto"]').prettyPhoto({
            hideflash: true,
            autoplay: true,
            social_tools: false,
            deeplinking: false,
            iframe_markup: "<iframe src='{path}' width='{width}' height='{height}' frameborder='no' allowfullscreen='true'></iframe>",
        });
        $('#accordion .card-header a.do-isotop-acco').on('click', function() {
            setTimeout(function() {
                filtergallery.isotope('layout');
            });
        });
    }
    if ($('#contact_form').length) {
        $('#contact_form').on('submit', function(e) {
            e.preventDefault();
            var cnt_name = $('#contact_form input[name=cnt_name]').val();
            var cnt_email = $('#contact_form input[name=cnt_email]').val();
            var cnt_mobile = $('#contact_form input[name=cnt_mobile]').val();
            var cnt_country = $('#contact_form select[name=cnt_country]').val();
            var cnt_message = $('#contact_form textarea[name=cnt_message]').val();
            if (!cnt_name || !cnt_email || !cnt_mobile || !cnt_country || !cnt_message) {
                do_notification('Please fill all the fields', 1);
            } else if (!isValidName(cnt_name)) {
                do_notification('Please enter valid name', 1);
            } else if (!isValidEmailAddress(cnt_email)) {
                do_notification('Please enter valid email address', 1);
            } else if (!isValidPhone(cnt_mobile)) {
                do_notification('Please enter valid phone', 1);
            } else {
                var formdata = {
                    'cnt_name': cnt_name,
                    'cnt_email': cnt_email,
                    'cnt_mobile': cnt_mobile,
                    'cnt_country': cnt_country,
                    'cnt_message': cnt_message
                }
                $.ajax({
                    type: "POST",
                    url: '/form_controller.php?action=contact',
                    data: formdata,
                    success: function() {
                        do_notification('Thank you for contacting us. We will contact you shortly', 0);
                        $("#contact_form")[0].reset();
                    }
                });
                return true;
            }
        });
    }
    if ($('#atform').length) {
        $('#atform').on('submit', function(e) {
            e.preventDefault();
            var at_name = $('#atform input[name=at_name]').val();
            var at_email = $('#atform input[name=at_email]').val();
            var at_mobile = $('#atform input[name=at_mobile]').val();
            if (!at_name || !at_email || !at_mobile) {
                do_notification('Please fill all the fields', 1);
            } else if (!isValidName(at_name)) {
                do_notification('Please enter valid name', 1);
            } else if (!isValidEmailAddress(at_email)) {
                do_notification('Please enter valid email address', 1);
            } else if (!isValidPhone(at_mobile)) {
                do_notification('Please enter valid phone', 1);
            } else {
                var formdata = {
                    'at_name': at_name,
                    'at_email': at_email,
                    'at_mobile': at_mobile,
                };
                $.ajax({
                    type: "POST",
                    url: '/form_controller.php?action=at_request',
                    data: formdata,
                    success: function() {
                        do_notification('Thank you for contacting us. You will be contacted after the request is processed', 0);
                        $("#atform")[0].reset();
                    }
                });
                return true;
            }
        });
    }
    if ($('#purchase_gift_form').length) {
        $('#purchase_gift_form').on('submit', function(e) {
            e.preventDefault();
            var gv_name = $('#purchase_gift_form input[name=gv_name]').val();
            var gv_email = $('#purchase_gift_form input[name=gv_email]').val();
            var gv_mobile = $('#purchase_gift_form input[name=gv_mobile]').val();
            var gv_address = $('#purchase_gift_form input[name=gv_address]').val();
            var gv_country = $('#purchase_gift_form select[name=gv_country]').val();
            var gv_for_name = $('#purchase_gift_form input[name=gv_for_name]').val();
            var gv_for_email = $('#purchase_gift_form input[name=gv_for_email]').val();
            var gv_for_mobile = $('#purchase_gift_form input[name=gv_for_mobile]').val();
            var gv_for_address = $('#purchase_gift_form input[name=gv_for_address]').val();
            var gv_for_country = $('#purchase_gift_form select[name=gv_for_country]').val();
            var gv_amount = $('#purchase_gift_form select[name=gv_amount]').val();
            var gv_mode = $('#purchase_gift_form select[name=gv_mode]').val();
            if (!gv_name || !gv_email || !gv_mobile || !gv_address || !gv_country || !gv_for_name || !gv_for_email || !gv_for_mobile || !gv_for_address || !gv_for_country || !gv_amount || !gv_mode) {
                do_notification('Please fill all the fields', 1);
            } else if (!isValidName(gv_name) || !isValidName(gv_for_name)) {
                do_notification('Please enter a valid name', 1);
            } else if (!isValidEmailAddress(gv_email) || !isValidEmailAddress(gv_for_email)) {
                do_notification('Please enter a valid email address', 1);
            } else if (!isValidPhone(gv_mobile) || !isValidPhone(gv_for_mobile)) {
                do_notification('Please enter a valid phone or mobile number', 1);
            } else {
                var formdata = {
                    'gv_name': gv_name,
                    'gv_email': gv_email,
                    'gv_mobile': gv_mobile,
                    'gv_address': gv_address,
                    'gv_country': gv_country,
                    'gv_for_name': gv_for_name,
                    'gv_for_email': gv_for_email,
                    'gv_for_mobile': gv_for_mobile,
                    'gv_for_address': gv_for_address,
                    'gv_for_country': gv_for_country,
                    'gv_amount': gv_amount,
                    'gv_mode': gv_mode
                }
                $.ajax({
                    type: "POST",
                    url: '/form_controller.php?action=voucher',
                    dataType: 'json',
                    data: formdata,
                    success: function(data) {
                        if (data.result == 1) {
                            window.location.href = "payment.php?cus_id=" + data.customer_id + "&additional=" + data.additional + "&amount=" + data.amount + "&mode=" + data.mode;
                        } else if (data.result == 5) {
                            do_notification("Unable to generate voucher code. Please try again later", 1);
                        } else if (data.result == 0) {
                            do_notification("Don't try to be too smart. Select values from dropdown", 1);
                        } else {}
                    },
                    error: function(e) {
                        do_notification('Sorry the Printed mode version is not available right now.', 1);
                    }
                });
                return true;
            }
        });
    }
    $('.do-subscribe-form').on('submit', function(e) {
        e.preventDefault();
        var nws_email = $('.do-subscribe-form input[name=nws_email]').val();
        if (!nws_email) {
            do_notification('Please enter email address', 1);
        } else if (!isValidEmailAddress(nws_email)) {
            do_notification('Please enter valid email address', 1);
        } else {
            var formdata = {
                'nws_email': nws_email
            }
            $.ajax({
                type: "POST",
                url: '/form_controller.php?action=subscribe',
                data: formdata,
                success: function() {
                    do_notification('Thank you for subscribing to our newsletter', 0);
                    $(".do-subscribe-form")[0].reset();
                }
            });
            return true;
        }
    });
    $('#callback_form select[name=cback_country]').on('change', function() {
        var stateList = $('#storeMenu a[data-toggle=collapse]:contains("' + $(this).val() + '")').next().children();
        var stateOptions = '<option value="" selected>State</option>';
        $(stateList).each(function(index) {
            stateOptions += '<option value="' + $(this).children('a').text() + '">' + $(this).children('a').text() + '</option>'
        });
        $('#callback_form select[name=cback_state]').html(stateOptions);
    });
    if ($('#callback_form').length) {
        $('#callback_form').on('submit', function(e) {
            e.preventDefault();
            var cback_name = $('#callback_form input[name=cback_name]').val();
            var cback_email = $('#callback_form input[name=cback_email]').val();
            var cback_mobile = $('#callback_form input[name=cback_mobile]').val();
            var cback_country = $('#callback_form select[name=cback_country]').val();
            var cback_state = $('#callback_form select[name=cback_state]').val();
            if (!cback_name || !cback_email || !cback_mobile || !cback_country || !cback_state) {
                do_notification('Please fill all the fields', 1);
            } else if (!isValidName(cback_name)) {
                do_notification('Please enter valid name', 1);
            } else if (!isValidEmailAddress(cback_email)) {
                do_notification('Please enter valid email address', 1);
            } else if (!isValidPhone(cback_mobile)) {
                do_notification('Please enter valid phone', 1);
            } else {
                var formdata = {
                    'cback_name': cback_name,
                    'cback_email': cback_email,
                    'cback_mobile': cback_mobile,
                    'cback_country': cback_country,
                    'cback_state': cback_state
                }
                $.ajax({
                    type: "POST",
                    url: '/form_controller.php?action=callback',
                    data: formdata,
                    success: function() {
                        do_notification('Thank you for contacting us. You will get a callback shortly', 0);
                        $("#callback_form")[0].reset();
                    }
                });
                return true;
            }
        });
    }
    $('.do-request-toggle').on('click', function(e) {
        e.preventDefault();
        $('#request_modal .modal-title').text($(this).data('title'));
        $('#request_modal input[name=grf_type]').val($(this).data('title'));
        $('#request_modal').modal('toggle');
    });
    if ($('#gift_request_form').length) {
        $('#gift_request_form').on('submit', function(e) {
            e.preventDefault();
            var grf_type = $('#gift_request_form input[name=grf_type]').val();
            var grf_name = $('#gift_request_form input[name=grf_name]').val();
            var grf_email = $('#gift_request_form input[name=grf_email]').val();
            var grf_mobile = $('#gift_request_form input[name=grf_mobile]').val();
            var grf_country = $('#gift_request_form select[name=grf_country]').val();
            var grf_desc = $('#gift_request_form textarea[name=grf_desc]').val();
            if (!grf_name || !grf_email || !grf_mobile || !grf_country || !grf_desc) {
                do_notification('Please fill all the fields', 1);
            } else if (!isValidName(grf_name)) {
                do_notification('Please enter valid name', 1);
            } else if (!isValidEmailAddress(grf_email)) {
                do_notification('Please enter valid email address', 1);
            } else if (!isValidPhone(grf_mobile)) {
                do_notification('Please enter valid phone', 1);
            } else {
                var formdata = {
                    'grf_type': grf_type,
                    'grf_name': grf_name,
                    'grf_email': grf_email,
                    'grf_mobile': grf_mobile,
                    'grf_country': grf_country,
                    'grf_desc': grf_desc
                }
                $.ajax({
                    type: "POST",
                    url: '/form_controller.php?action=gift_request',
                    data: formdata,
                    success: function() {
                        do_notification('Thank you for contacting us. You will be contacted after the request is processed', 0);
                        $("#gift_request_form")[0].reset();
                    }
                });
                return true;
            }
        });
    }
    $('#fdb-form-btn').on('click', function(e) {
        e.preventDefault();
        $('#fdb_modal #fdb_name').val($('#fdb_form').find('input[name=fdb_name]').val());
        $('#fdb_modal #fdb_mobile').val($('#fdb_form').find('input[name=fdb_mobile]').val());
        $('#fdb_modal #fdb_email').val($('#fdb_form').find('input[name=fdb_email]').val());
        $('#fdb_modal #fdb_type').prop('selectedIndex', 0);
        $('#fdb_modal #fdb_type option[value="' + $('#fdb_form select[name=fdb_type]').find(':selected').val() + '"]').attr('selected', 'selected');
        $('#fdb_modal').modal('toggle');
    });
});

function calc_banner() {
    $('.do-banner-slider-wrap').height(window.innerHeight - $('header').height() + 40);
}

function sidebar_height() {
    if (window.innerWidth < 991) {
        $('.do-main-menu').height(window.innerHeight);
    } else {
        $('.do-main-menu').css('height', 'auto');
    }
}

function scroll_to(hash, delay) {
    var head_height = $('header').height();
    if ($(hash).length) {
        $(hash).waitForImages(function() {
            setTimeout(function() {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - head_height
                }, 800);
            }, delay);
        });
    }
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return pattern.test(emailAddress);
};

function isValidName(name) {
    var pattern = /^[A-Z\sa-z]+$/ig;
    return pattern.test(name);
}

function isValidPhone(phone) {
    var pattern = /^[0-9-+]+$/;
    return pattern.test(phone);
}

function do_notification(msg, type) {
    if (typeof(msg) === 'undefined' || msg == '') return false;
    if (typeof(type) === 'undefined') {
        type = 0;
    }
    switch (type) {
        case 0:
            jQuery.amaran({
                'position': 'top right',
                'inEffect': 'slideRight',
                'delay': 6000,
                'theme': 'colorful',
                'content': {
                    bgcolor: '#28a745',
                    color: '#fff',
                    'message': msg
                }
            });
            break;
        case 1:
            jQuery.amaran({
                'position': 'top right',
                'inEffect': 'slideRight',
                'delay': 8000,
                'theme': 'colorful',
                'content': {
                    bgcolor: '#e30613',
                    color: '#fff',
                    'message': msg
                }
            });
            break;
    }
}
$(window).on('resize', function() {
    calc_banner();
    sidebar_height();
});
$(document).ready(function() {
    $('.muhurat-vdo a.do-video-item').prettyPhoto({
        hideflash: true,
        social_tools: false,
        deeplinking: false,
        autoplay: true,
        iframe_markup: "<iframe src='{path}' width='{width}' height='{height}' frameborder='no' allowfullscreen='true'></iframe>",
    });
});
$(function() {
    $(document).on('change', ':file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $(document).ready(function() {
        $(':file').on('fileselect', function(event, numFiles, label) {});
        $('#feedbackForm').submit(function(e) {
            e.preventDefault();
            var full_name = $('#fdb_name').val();
            var mobile = $('#fdb_mobile').val();
            var email = $('#fdb_email').val();
            var feedback = $('#fdb_full').val();
            var type = $('#fdb_type').val();
            var proceed = true;
            var feedbackFile = $('#fileSelect').val();
            if (full_name == '' || mobile == '' || email == '' || feedback == '' || type == '') {
                do_notification('Please enter all the fields', 1);
                return false;
            }
            var formData = new FormData();
            formData.append('full_name', full_name);
            formData.append('mobile', mobile);
            formData.append('email', email);
            formData.append('feedback', feedback);
            formData.append('type', type);
            var allowed_file_size = "2098576";
            var allowed_file_types = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
            if (window.File && window.FileReader && window.FileList && window.Blob && feedbackFile != '') {
                var total_files_size = 0;
                $(this.elements['fileSelect[]'].files).each(function(i, ifile) {
                    if (ifile.value !== "") {
                        if (allowed_file_types.indexOf(ifile.type) === -1) {
                            do_notification(ifile.name + " is unsupported file type!", 1);
                            proceed = false;
                        }
                        total_files_size = total_files_size + ifile.size;
                    }
                });
                if (total_files_size > allowed_file_size) {
                    do_notification("Make sure total file size is less than 2 MB!", 1);
                    proceed = false;
                }
                formData.append('fileSelect[]', $('#fileSelect')[0].files[0]);
            }
            if (proceed) {
                $.ajax({
                    type: "POST",
                    url: '/form_controller.php?action=feedback',
                    data: formData,
                    dataType: "json",
                    contentType: false,
                    cache: false,
                    processData: false
                }).done(function(res) {
                    if (res.type == "error") {
                        $('#fdb_modal').modal('hide');
                        do_notification(res.text, 1);
                        $(".do-fdb-mdl")[0].reset();
                    } else if (res.type == "done") {
                        $('#fdb_modal').modal('hide');
                        do_notification(res.text, 0);
                        $(".do-fdb-mdl")[0].reset();
                    }
                });
            }
        });
    });
});
$('.right .do-tl-yr').html(function(_, txt) {
    return txt.replace(/(.$)/, "<span>$1</span>");
});
$('.left .do-tl-yr').html(function(index, html) {
    return '<span>' + html.slice(0, 1) + '</span>' + html.slice(1);
});
$('.do-icon-menu a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('.do-timeline[data-anchor="' + scrollAnchor + '"]').offset().top + 2;
    $('body,html').animate({
        scrollTop: scrollPoint
    }, 1000);
    return false;
})
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 0) {
        $('body .do-timeline').each(function(i) {
            if ($(this).position().top <= windscroll + 2) {
                $('.do-icon-menu ul a.active').removeClass('active');
                $('.do-icon-menu ul a').eq(i).addClass('active');
            }
        });
    } else {
        $('.do-icon-menu ul a.active').removeClass('active');
    }
}).scroll();
$(window).scroll(function() {
    var headerHeight = $('header').innerHeight();
    var contentHeight = $('.do-timline-wrap').innerHeight() - 110;
    var sidebarHeight = $('.do-icon-mn-wrap ul').height();
    var sidebarBottomPos = contentHeight - sidebarHeight;
    var trigger = $(window).scrollTop() - headerHeight;
    if ($(window).scrollTop() >= headerHeight) {
        $('.do-icon-mn-wrap ul').parent().parent().addClass('fixed');
    } else {
        $('.do-icon-mn-wrap ul').parent().parent().removeClass('fixed');
    }
    if (trigger >= sidebarBottomPos) {
        $('.do-icon-mn-wrap ul').parent().parent().addClass('bottom');
        $('.do-timline-wrap').css('position', 'relative');
    } else {
        $('.do-icon-mn-wrap ul').parent().parent().removeClass('bottom');
        $('.do-timline-wrap').css('position', 'inherit');
    }
});
$(document).ready(function() {
    $(".do-video-item").each(function() {
        var url = $(this).attr("href");
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            var id = match[2];
            var path = 'https://img.youtube.com/vi/' + id + '/0.jpg';
            $(this).find('.do-preview-box').css('background-image', 'url(' + path + ')');
        }
    });
});
$('.do-secondary-menu a').mouseover(function() {
    var $this = $(this);
    var id = $this.attr('rel');
    var $currentWidget = $('#' + id);
    $currentWidget.show().siblings('.do-menu-img span').removeClass('active').hide();
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    var b = "waitForImages",
        c = function(a) {
            return a.srcset && a.sizes
        }(new Image);
    a.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
        hasImageAttributes: ["srcset"]
    }, a.expr[":"]["has-src"] = function(b) {
        return a(b).is('img[src][src!=""]')
    }, a.expr[":"].uncached = function(b) {
        return !!a(b).is(":has-src") && !b.complete
    }, a.fn.waitForImages = function() {
        var d, e, f, g = 0,
            h = 0,
            i = a.Deferred(),
            j = this,
            k = [],
            l = a.waitForImages.hasImageProperties || [],
            m = a.waitForImages.hasImageAttributes || [],
            n = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
        if (a.isPlainObject(arguments[0]) ? (f = arguments[0].waitForAll, e = arguments[0].each, d = arguments[0].finished) : 1 === arguments.length && "boolean" === a.type(arguments[0]) ? f = arguments[0] : (d = arguments[0], e = arguments[1], f = arguments[2]), d = d || a.noop, e = e || a.noop, f = !!f, !a.isFunction(d) || !a.isFunction(e)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var b = a(this);
            f ? b.find("*").addBack().each(function() {
                var b = a(this);
                b.is("img:has-src") && !b.is("[srcset]") && k.push({
                    src: b.attr("src"),
                    element: b[0]
                }), a.each(l, function(a, c) {
                    var d, e = b.css(c);
                    if (!e) return !0;
                    for (; d = n.exec(e);) k.push({
                        src: d[2],
                        element: b[0]
                    })
                }), a.each(m, function(a, c) {
                    var d = b.attr(c);
                    return !d || void k.push({
                        src: b.attr("src"),
                        srcset: b.attr("srcset"),
                        element: b[0]
                    })
                })
            }) : b.find("img:has-src").each(function() {
                k.push({
                    src: this.src,
                    element: this
                })
            })
        }), g = k.length, h = 0, 0 === g && (d.call(j), i.resolveWith(j)), a.each(k, function(f, k) {
            var l = new Image,
                m = "load." + b + " error." + b;
            a(l).one(m, function b(c) {
                var f = [h, g, "load" == c.type];
                if (h++, e.apply(k.element, f), i.notifyWith(k.element, f), a(this).off(m, b), h == g) return d.call(j[0]), i.resolveWith(j[0]), !1
            }), c && k.srcset && (l.srcset = k.srcset, l.sizes = k.sizes), l.src = k.src
        }), i.promise()
    }
});
$('.date').datepicker({
    format: 'mm/dd/yyyy',
    todayHighlight: true
});
$('.time input').timepicker({
    icons: {
        up: 'ion-chevron-up',
        down: 'ion-chevron-down'
    }
});
$(document).ready(function() {
    $(window).scroll(function(e) {
        setTimeout(function() {
            var scroller_anchor = $(".scroller_anchor").offset().top - $('header').innerHeight();
            if ($(this).scrollTop() >= scroller_anchor && $('.scroller').css('position') != 'fixed') {
                $('.scroller').css({
                    'position': 'fixed',
                    'top': $('header').innerHeight(),
                    'left': '0px',
                    'right': '0px',
                    'z-index': '998'
                });
                $('.scroller_anchor').css('height', '80px');
            } else if ($(this).scrollTop() < scroller_anchor && $('.scroller').css('position') != 'absolute') {
                $('.scroller_anchor').css('height', '80px');
                $('.scroller').css({
                    'position': 'absolute',
                    'top': '0',
                    'z-index': '998',
                    'width': '100%'
                });
            }
        }, 300);
    });
});
$(function() {
    $('.oi-submenu a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $(".oi-submenu li").removeClass('active');
                $(this).parents('li').addClass('active');
                $('html,body').animate({
                    scrollTop: target.offset().top - $('header').innerHeight() - 80
                }, 1000);
                $('.cs-style-4 figure.active').removeClass('active');
                target.find('figure').addClass('active');
                return false;
            }
        }
    });
});
$('.oi-submenu a').click(function() {
    $('.navbar-collapse').collapse('hide');
});
$('.oi-flipbook').css({
    'height': $('.flipbook').innerHeight()
});
