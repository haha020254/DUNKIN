(($)=>{

    class Dunkin {
        init(){
            this.headerTop();
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section5();
            this.section7();
            this.footer();
            this.popup();
        }
        headerTop(){
            $('#headerTop .wrap').stop().slideUp(0);
            $('.ban-btn').on({
                click:function(){
                    $('.header-container').toggleClass('on');
                    $('#headerTop .wrap').stop().slideToggle(200);
                }
            })
        }
        header(){
            //메인메뉴
            $('.main-btn').on({
                mouseenter: function(){
                    $('.sub-bg').stop().slideDown(300);
                    $('.sub').stop().hide();
                    $(this).next().stop().show();
                }
            });
            $('#nav').on({
                mouseleave: function(){
                    $('.sub-bg').stop().slideUp(300);
                    $('.sub').stop().hide();
                }
            });
            
        }
        section1(){
            let cnt = 0;
            let setId=0;
            let setId2=0;

            function mainSlide(){
                $('.slide-wrap').stop().animate({left:-1903*cnt},600,function(){
                    cnt>6?cnt=0:cnt;
                    cnt<0?cnt=6:cnt;
                    $('.slide-wrap').stop().animate({left:-1903*cnt},0)
                });
                pageBtn();
            }
            //2.다음카운트함수
            function nextCount(){
                cnt++;
                mainSlide();
            }
            //2-2.이전(prev)카운트함수
            function prevCount(){
                cnt--;
                mainSlide();
            }
            //3.자동타이머함수
            function autoTimer(){
                setId = setInterval(nextCount,10000);
            }
            autoTimer();
            //4.페이지버튼함수
            function pageBtn(){
                $('.page-btn').removeClass('on');
                $('.page-btn').eq(cnt>6?0:cnt).addClass('on');
            }
            //5.페이지버튼 클릭이벤트
            $('.page-btn').each(function(idx){
                $(this).click(function(){
                    timerfn();
                    cnt=idx;
                    mainSlide();
                });
            });
            //6.다음 클릭 이벤트
            $('.next-btn').click(function(){
                timerfn();
                nextCount();
            });
            $('.prev-btn').click(function(){
                timerfn();
                prevCount();
            });
            //타이머중지함수
            function timerfn(){
                let tCnt=0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                   tCnt++;
                   if(tCnt>=3){
                      clearInterval(setId);  
                      clearInterval(setId2);                     
                      autoTimer();
                   }
                }, 1000);
             }
        }

        section2(){
            let cnt = 0;
            let setId = 0;
            let setId2 = 0;

            function mainSlide(){
                $('.secSlide-wrap').stop().animate({left:-266*cnt},500,function(){
                    cnt>3?cnt=0:cnt;
                    cnt<0?cnt=3:cnt;
                    $('.secSlide-wrap').stop().animate({left:-266*cnt},0)
                });
                pageBtn();
            }
            //2.다음카운트함수
            function nextCount(){
                cnt++;
                mainSlide();
            }
            //3.자동타이머함수
            function autoTimer(){
               setId = setInterval(nextCount,3000);
            }
            autoTimer();
            //4.페이지버튼함수
            function pageBtn(){
                $('.page-btn2').removeClass('on');
                $('.page-btn2').eq(cnt>3?0:cnt).addClass('on');
            }
            //5.페이지버튼 클릭이벤트
            $('.page-btn2').each(function(idx){
                $(this).click(function(e){
                    e.preventDefault();
                    timerfn()
                    cnt=idx;
                    mainSlide();
                });
            });
            //타이머중지함수
            function timerfn(){
                let tCnt=0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                   tCnt++;
                   if(tCnt>=3){
                      clearInterval(setId);  
                      clearInterval(setId2);                     
                      autoTimer();
                   }
                }, 1000);
             }
        }

        section3(){
            let winH = $(window).height();
            let sec3Top= $('#section3').offset().top-winH;

            $(window).scroll(function(){
                if($(window).scrollTop()>sec3Top){
                    $('#section3').addClass('sec3Ani');

                }
                if($(window).scrollTop()===0){
                    $('#section3').removeClass('sec3Ani');
                }
            });
        }

        section5(){
            let winH = $(window).height();
            let sec5Top= $('#section5').offset().top-winH;

            $(window).scroll(function(){
                if($(window).scrollTop()>sec5Top){
                    $('#section5').addClass('sec5Ani');

                }
                if($(window).scrollTop()===0){
                    $('#section5').removeClass('sec5Ani');
                }
            });
        }

        section7(){
            $('.gallery-view').on({
                mousemove: function(e){
                    let viewW = $('.gallery-view').width();
                    let wrapW = $('.gallery-wrap').width();
                    let x = (viewW-wrapW)/viewW;
                    $('.gallery-wrap').css({left: e.clientX*x});
                }
            });
            
        }

        footer(){}

        popup(){

            $('.popup-close-btn').on({
                click: function(e){
                    e.preventDefault();
                    $('.popup-container').hide();
                }
            });

            $('.popup-container').hide();

            function popupOpen(){
                const result = getCookie('popup_event');
                if(result !== 'no'){
                    $('.popup-container').show();
                }
            }
            popupOpen();

            $('.popup-chk-btn').on({
                click:function(){

                    function setCookie(name, value, expires){
                        let newDate = new Date();
                        newDate.setDate(newDate.getDate()+expires);
                        document.cookie = `${name}=${value};path=/;expires=${newDate.toUTCString()};`
                    }
                    setCookie('popup_event', 'no', 1);
                }
            });
            
            function getCookie(name){
                let temp = [];
                let obj = [];
                let found = '';
                if(!document.cookie)return;
                temp = document.cookie.split(';');
                temp.map((item,idx)=>{
                    obj [idx] ={
                        name: item.split('=')[0].trim(),
                        value: item.split('=')[1].trim()
                    }
                });
                obj.map((item)=>{
                    if(item.name===name){
                        found = item.value;
                    }
                });
                return found;
            }
        }
    }

    const newDunkin = new Dunkin();
    newDunkin.init();


})(jQuery);