let aboutOffset= $("#about").offset().top;
$(window).scroll(function(){
    let wScroll= $(window).scrollTop();
    if(wScroll> aboutOffset-50){
        $("#btnUp").fadeIn(500);
    }else{
        $("#btnUp").fadeOut(500);
    }
})
$("#btnUp").click(function(){
    $("html, body").animate({scrollTop: 0}, 2000);
});

let items= document.querySelectorAll(".color-item");
for(i=0; i<items.length;  i++){
    $(".color-item").eq(i).css("backgroundColor", `rgb(${i*15}, ${i*10}, ${i*13})`);
}
$(items).click(function(e){
    let bgColor= $(e.target).css("backgroundColor");
    $('h2').css('color', bgColor);
    $('h1').css('color', bgColor);
    $('i').css('color', bgColor);
    $('.learn').css('backgroundColor', bgColor);
})

let divWidth= $("#options").innerWidth();

$('.boxContainer').css('right', -divWidth);
$("#theme-buy").click(function(){
    if($('.boxContainer').css('right') == '0px'){
        $(".boxContainer").animate({right: `-${divWidth}`}, 500);
        $("#close a").html(`<i class="fa fa-cogs p-2 rounded text-primary fa-2x"></i>`);
    }else{
        $(".boxContainer").animate({right: `0px`}, 500);
        $("#close a").html(`<i class="p-2 rounded text-danger fa-2x fa-solid fa-xmark"></i>`);
    }
});
$("html, body").click(function(){
    if($('.boxContainer').css('right') == '0px'){
        $(".boxContainer").animate({right: `-${divWidth}`}, 500);
    }
})
