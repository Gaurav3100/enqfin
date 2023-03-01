
var temperature = document.querySelector(".one");
var flow = document.querySelector(".two");
var submit = document.querySelector(".result");
var showw = document.querySelector(".show");




submit.addEventListener("click", function() {

  var output = (temperature.value)*(flow.value)*(1.25);

  localStorage.setItem("output",output);
  window.location.href = "output.html";

});
