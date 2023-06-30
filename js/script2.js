// 타이어 찾기 탭메뉴
$(function(){
    var tab = $('.pop_button>button');
    var content = $('.searchform');
    
    content.hide().eq(0).show();
    
    tab.click(function(event){
        event.preventDefault(); 
        var tg = $(this);
        var i = tg.index();
        tab.removeClass('active');
        tg.addClass('active');
        content.css('display','none');
        content.eq(i).css('display','block');
    });

    $('.num').click(function(){
        $('#pop').css('display','block');
        tab.removeClass('active');
        tab.eq(0).addClass('active');
        $('.con_num').addClass('active');
        content.css('display','none');
        content.eq(0).show();
    });

    $('.car').click(function(){
        $('#pop').css('display','block');
        tab.removeClass('active');
        tab.eq(1).addClass('active');
        $('.con_car').addClass('active');
        content.css('display','none');
        content.eq(1).show();
    });

    $('.size').click(function(){
        $('#pop').css('display','block');
        tab.removeClass('active');
        tab.eq(2).addClass('active');
        $('.con_size').addClass('active');
        content.css('display','none');
        content.eq(2).show();
    });

    $('#pop_close').click(function(){
        $('#pop').css('display','none');
    });

    // 모바일 햄버거 버튼
    $(".ham").click(function(){
        $(".mo_menu, .bg-shadow").addClass("active");
    });

    // 모바일 쉐도우 클릭 메뉴 닫기
    $(".bg-shadow").click(function(){
        $(".mo_menu, .bg-shadow").removeClass("active");
    });

    // 모바일 메뉴 X 닫기
    $(".mo_close").click(function(){
        $(".mo_menu, .bg-shadow").removeClass("active");
    });

    // 모바일 메뉴
    $('.mo_menu>ul>li').click(function(){
        $(this).find('.mo_sub').toggle();
    });
});