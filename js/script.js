// 오늘하루 열지 않음 슬라이드

$(function () {

    var sildeban = $('#today>#today_center>#today_banner>ul>li');
    var button = $('#today_button_b>ul>li');
    var current = 0;
    var setIntervalId;

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, 500)
    }

    timer();

    function timer() {
        setIntervalId = setInterval(function () {
            var prev = sildeban.eq(current);
            var pn = button.eq(current);
            move(prev, 0, '-100%');

            pn.removeClass('on');

            current++;

            if (current == sildeban.size()) {
                current = 0
            }

            var next = sildeban.eq(current);
            var pnn = button.eq(current);

            move(next, '100%', 0);
            pnn.addClass('on');
        }, 3000);
    }

    // 동그라미버튼 활성
    button.click(function () {
        var tg = $(this);
        var i = tg.index();
        button.removeClass('on');
        tg.addClass('on');
        movel(i);
    });

    function movel(i) {
        if (current == i) {
            return
        }
        var currentEl = sildeban.eq(current);
        var nextEl = sildeban.eq(i);
        currentEl.css({
            left: 0
        }).stop().animate({
            left: '-100%'
        }, 500);
        nextEl.css({
            left: '100%'
        }).stop().animate({
            left: 0
        }, 500);
        current = i;
    }
});

//today
$(function () {
    $('#today').find('.close').on('click', function () {
        $('#today').stop().animate({
            top: -100
        });
        $('#wrap').stop().animate({
            top: 0
        });
    });
});

//비디오 슬라이드
$(function () {

    var banner = $('.item');
    var button1 = $('.vprev');
    var button2 = $('.vnext');
    var current = 0;
    var setIntervalId;

    timer();

    function timer() {
        setIntervalId = setInterval(function () {
            var prev = banner.eq(current);

            move(prev, 0, '-100%');

            current++;

            if (current == banner.size()) {
                current = 0
            }

            var next = banner.eq(current);

            move(next, '100%', 0);
        }, 5000);
    }

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, {
            duration: 500,
            ease: 'easeOutCubic'
        });

    }

    $('.item').on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }
    });


    button1.click(function () {
        var prev = banner.eq(current);
        // var pn = p.eq(current);

        move(prev, 0, "100%");

        //조건문 배너 이미지가 끝까지 갔다면 초기화
        current++;

        if (current == banner.size()) {
            current = 0
        }

        //다음 이미지는 현재 보여지도록 이동
        //다음 넘버는 현재에서 보여지도록 addClass
        var next = banner.eq(current);

        move(next, '-100%', 0);

        //원래의 링크속성을 없애기
        return false;

    })

    button2.click(function () {
        var prev = banner.eq(current);
        // var pn = p.eq(current);

        //현재 보여지는 이미지를 왼쪽으로 이동
        move(prev, 0, '-100%');

        //조건문 배너 이미지가 끝까지 갔다면 초기화
        current++;

        if (current == banner.size()) {
            current = 0
        }

        //다음 이미지는 현재 보여지도록 이동
        //다음 넘버는 현재에서 보여지도록 addClass
        var next = banner.eq(current);

        move(next, '100%', 0);

        //원래의 링크속성을 없애기
        return false;
    })
});