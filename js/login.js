$(document).ready(function(){
  $("#login").hide();
  $("#btnLogin").click(function(){
    $("#info").hide();
    $("#login").show();
  });
  $("#home").click(function(){
    $("#info").show();
    $("#login").hide();
  });

});