function totalTip() {
  // selecting the check total
  var checkTotal = document.getElementById("checkTotal").value;
  // selecting the tip percentage
  var tipTotal = document.getElementById("tipTotal").value;

  var finalTotal = (tipTotal*checkTotal) + checktotal;

}

document.getElementById("finalTotal").innerHTML = finalTotal;
