function totalTip() {
  // selecting the check total
  var checkTotal = document.getElementById("checkTotal").value;
  // selecting the tip percentage
  var tipTotal = document.getElementById("tipTotal").value/100;
  console.log("tip total is " + tipTotal)
   var finalTotal = Number(checkTotal) + Number(tipTotal *checkTotal);
   console.log("tip amount is " + finalTotal.toFixed(2));
  //document.getElementById("finalTotal").innerHTML = finalTotal;

}
