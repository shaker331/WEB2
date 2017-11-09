
//$(document).ready(function()
//{
//$('.gear').click(function()
//{
//$('.color-option').fadeToggle("fast");
//});
//var colorLi =$('.color-option ul li');
//colorLi .eq(0).css('backgroundColor','#51C7E2').end()
//.eq(1).css('backgroundColor','#EF5252').end()
//.eq(2).css('backgroundColor','#35B130').end()
//.eq(3).css('bassckgroundColor','#C7C740');
//colorLi.click(function()
//{
//$("link[href*='theme']"). attr("href", $(this).attr("data-value"));
//});});
//  


$(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
  

    

$(window).on('load', function () {
    $('body').css("overflow","auto");
    
    $('.loading .spinner').fadeOut(1000,function(){
                             
                             $(this).parent().fadeOut(2000,function(){
                               $(this).remove();  
                             });
                             });
    
    
    
});
