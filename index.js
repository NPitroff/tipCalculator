function totalTip() {
  // selecting the check total
  var checkTotal = document.getElementById("checkTotal").value;
  // selecting the tip percentage
  var tipTotal = document.getElementById("tipTotal").value/100;
  //console.log("tip total is " + tipTotal)
  
  //variable to save the Total
   var finalTotal = Number(checkTotal) + Number(tipTotal *checkTotal);
   // console.log("tip amount is " + finalTotal.toFixed(2));

   // js to display the tip cash Amount
   document.getElementById("tipAmount").innerHTML = Number(tipTotal * checkTotal).toFixed(2);
   //js to display the total check with tip
   document.getElementById("finalTotal").innerHTML = finalTotal.toFixed(2);

}
