(function($){

var klocka;

function bildspel(currentPhoto) {

$('.p3 img').fadeOut();

var numberOfPhotos = $('.p3 img').length;
currentPhoto=currentPhoto % numberOfPhotos;

$('.p3 img').eq(currentPhoto).fadeOut(function() { $('.p3 img').each(function(i){$(this).css('z-index' ,
((numberOfPhotos-i) +currentPhoto) % numberOfPhotos );});
$(this).show(); klocka = setTimeout(function() {bildspel(++currentPhoto);}, 2000);});
}

$.fn.foto = function(){

$('<div></div>').addClass('p2').prependTo('.plug'); 

$('<div></div>').addClass('p3').prependTo('.plug');

$('<div></div>').addClass('p4').prependTo('.plug');

$('<div></div>').addClass('p1').prependTo('.plug');

var g1=150;

$(".p1").height(g1);

$(".p4").height(g1).animate({marginTop:-g1});;

$(".p3").height(g1-16).animate({marginTop:-g1+8});;


$('<img></img>').addClass('p2').appendTo('.p3').attr('src','../../../kmom03/img/2.png');
$('<img></img>').addClass('p2').appendTo('.p3').attr('src','../../../kmom03/img/3.png');
$('<img></img>').addClass('p2').appendTo('.p3').attr('src','../../../kmom03/img/4.png');
$('<img></img>').addClass('p2').appendTo('.p3').attr('src','../../../kmom03/img/1.png');

$(".p2").animate({marginTop:0});;
$(".p3 img").height(g1-16);
bildspel(1);

};

})(jQuery);


