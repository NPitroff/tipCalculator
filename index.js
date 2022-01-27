function totalTip() {
  // selecting the check total
  var checkTotal = document.getElementById("checkTotal").value;
  // selecting the tip percentage
  var tipTotal = document.getElementById("tipTotal").value;

  var finalTotal = ((tipTotal/100)*checkTotal) ;

  document.getElementById("finalTotal").innerHTML = finalTotal;

}
