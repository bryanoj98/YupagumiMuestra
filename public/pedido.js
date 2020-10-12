function Pedido(){
  var name = $("input#name").val();
  var email = $("input#email").val();
  var phone = $("input#phone").val();
  var message = $("textarea#message").val();

  (name=="") ? $("#nom").attr("hidden",false):$("#nom").attr("hidden",true);
  (phone=="")? $("#celu").attr("hidden",false):$("#celu").attr("hidden",true);
  (message=="")? $("#descrip").attr("hidden",false):$("#descrip").attr("hidden",true);
  (email=="")? $("#mail").attr("hidden",false):$("#mail").attr("hidden",true);
if(name!="" & phone!="" & message!="" & email!=""){
// console.log(a);
  // $.post("Formulario",
  // {
  //   Nombre: name,
  //   Correo: email,
  //   Celular: phone,
  //   Descripcion: message
  // },
  // function(data, status){
  //   alert("Data: " + data );
  //   // $("#success-alert").attr("hidden",false);
  //   // $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
  //   //   $("#success-alert").slideUp(500);
  //   // });
  // });
  }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

