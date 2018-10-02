import $ from 'jquery';
import Inputmask from 'inputmask'
import 'slick-carousel'
import 'selectric'
import 'lightbox2'
import 'jquery.scrollto'



$(document).ready(function(){
    Inputmask().mask($(':input'));
    Inputmask({regex: '[а-яА-Я]{30}|[a-zA-Z]{30}', placeholder: '',}).mask($('input.names'));


    $('nav li a').on('click', function(event){
        event.preventDefault();
        $('body').scrollTo($(this).attr('href'), 800);
    });

    $('.slider').each(function(){
        var nextArrow = $(this).find('.arr-right');
        var prevArrow = $(this).find('.arr-left');

        $(this).slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            nextArrow: nextArrow,
            prevArrow: prevArrow,
            centerMode: true,
            variableWidth: true
        });

    });


    $('.slide .slide__content').find('a.expand').on('click', function(event){
        event.preventDefault();
        $(this).siblings('p').find('span:not(:first-child)').toggle();
    });



    $('.tariff_plan__table select').selectric();



    $('.header .i_burger').on('click', function () {
        $('body').toggleClass('nav-show');
    });




    $(".first_col").mouseover(function () {
        $(".first_col").css({"background-color":"#e0f5f0"})
    })
    $(".first_col").mouseleave(function () {
        $(".first_col").css({"background-color":"#fff"})
        $(".t_head").css({"background-color":"#f0fafc"})
    })
    $(".second_col").mouseover(function () {
        $(".second_col").css({"background-color":"#e0f5f0"})
    })
    $(".second_col").mouseleave(function () {
        $(".second_col").css({"background-color":"#fff"})
        $(".t_head").css({"background-color":"#f0fafc"})
    })
    $(".third_col").mouseover(function () {
        $(".third_col").css({"background-color":"#e0f5f0"})
    })
    $(".third_col").mouseleave(function () {
        $(".third_col").css({"background-color":"#fff"})
        $(".t_head").css({"background-color":"#f0fafc"})
    })
    $(".fourth_col").mouseover(function () {
        $(".fourth_col").css({"background-color":"#e0f5f0"})
    })
    $(".fourth_col").mouseleave(function () {
        $(".fourth_col").css({"background-color":"#fff"})
        $(".t_head").css({"background-color":"#f0fafc"})
    })
    $(".reg_desc").on("click", function() {
        if ($(window).width() > 414) {
            $('.net_popup_message').hide()
            $(this).find('.net_popup_message').show();
        } else {
            $(".info_wrapper").slideUp(300)

            if ($(this).next().attr("class") == "info_wrapper") {
                $(this).next().slideUp(300);
                setTimeout(function() {
                    $(".info_wrapper").remove()
                }, 300);

            } else {
                var text = $(this).find('.net_popup_message .popup_desc').text();
                var time_block = $(this).find('.net_popup_message .open_time_weekdays').html();
                $(this).after('<div class="info_wrapper"><p class="info_text">'+text+'</p>'+time_block+'</div>')
                $(this).next().slideDown(300);
            }
        }
        $(".net_popup_message").css({
            "top": top
        })
    });
    $(document).on("click", ".close_popup", function() {
        $(".net_popup_message").css({
            "display": "none"
        });
    })

});