$(window).scroll(function() {
  $('.titulo').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("animated slow slideInUp");
 }
 });
 $('.contenido').each(function(){
   var imagePos = $(this).offset().top;
   var topOfWindow = $(window).scrollTop();
   if (imagePos < topOfWindow+650) {
     $(this).addClass("animated slow slideInUp");

}
});
$('.links').each(function(){
  var imagePos = $(this).offset().top;
  var topOfWindow = $(window).scrollTop();
  if (imagePos < topOfWindow+610) {
    $(this).addClass("animated slow slideInUp");
}
});
$('#img1').each(function(){
  var imagePos = $(this).offset().top;
  var topOfWindow = $(window).scrollTop();
  if (imagePos < topOfWindow+900) {
    $(this).addClass("animated slow slideInUp");
}
});
$('#img2').each(function(){
  var imagePos = $(this).offset().top;
  var topOfWindow = $(window).scrollTop();
  if (imagePos < topOfWindow+800) {
    $(this).addClass("animated slow slideInUp");
}
});
 });
 $('#img3').each(function(){
   var imagePos = $(this).offset().top;
   var topOfWindow = $(window).scrollTop();
   if (imagePos < topOfWindow+800) {
     $(this).addClass("animated slow slideInUp");
 }
 });
  var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
 var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
     document.getElementById("navbar").style.top = "0";
   } else {
     document.getElementById("navbar").style.top = "-70px";
   }
   prevScrollpos = currentScrollPos;
 }
