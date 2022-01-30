
// var holding the coin img source to be changed
var coinImage = document.getElementById("coins");

// console.log("Tip value is " + tipTotal);
function totalTip() {
  // selecting the check total
  var checkTotal = document.getElementById("checkTotal").value;
  // selecting the tip percentage
  var tipTotal = document.getElementById("tipTotal").value/100;
  //variable to save the Total
   var finalTotal = Number(checkTotal) + Number(tipTotal *checkTotal);
   // console.log("tip amount is " + finalTotal.toFixed(2));

   // js to display the tip cash Amount
   document.getElementById("tipAmount").innerHTML = Number(tipTotal * checkTotal).toFixed(2);
   //js to display the total check with tip
   document.getElementById("finalTotal").innerHTML = finalTotal.toFixed(2);
   // function call to change the coin image
   changeCoin();
}


function changeCoin(){
if(tipTotal <= .05){
  coinImage.setAttribute("src", "css/coins1.jpg");
} else if(tipTotal >= .051){
  coinImage.setAttribute("src", "css/coins2.jpg");
  }
}
