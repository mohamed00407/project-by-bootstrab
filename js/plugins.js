$(document).ready(function() 
{




    //show color option div when click on the gear
    $(".gear-box").click(function() 
    {

        $(".box-color").toggle();
    });

    //show thme color on click
    var clorLi=$(".box-color ul li");
    clorLi
        .eq(0).css("backgroundColor","#f84a4a").end()
        .eq(1).css("backgroundColor","yellowgreen").end()
        .eq(2).css("backgroundColor","blue").end()
        .eq(3).css("backgroundColor","purple");

    clorLi.click(function()
    {
        $("link[href*='themes']").attr("href",$(this).attr("data-value"));


    });

    var scrollbutton=$("#scroll-top");
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if($(this).scrollTop()>=700){
            scrollbutton.show();
        }
        else{
            scrollbutton.hide();
        }
    });
            //click on buttom to scroll top 
            scrollbutton.click(function(){
                $("html,body").animate({scrollTop: 0},600);
            });


});

//spinner load

$(window).load(function()
{
    $(".overlay-loading .spinner").fadeOut(2000,
        function()
        {
            $(this).parent().fadeOut(2000,
                function()
                {   
                    $("body").css("overflow","auto");
                    $(this).remove();
                });
        });
});

