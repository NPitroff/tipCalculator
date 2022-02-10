
// var holding the coin img source to be changed
var coinImage = document.getElementById("coins");

// console.log("Tip value is " + tipTotal);
function totalTip() {
  // selecting the check total
  var checkTotal = $("#checkTotal").val();
  console.log(checkTotal)
  // selecting the tip percentage
  var tipTotal = $("#tipTotal").val()/100;
  console.log(tipTotal)
  //variable to save the Total
   var finalTotal = Number(checkTotal) + Number(tipTotal *checkTotal);
   // console.log("tip amount is " + finalTotal.toFixed(2));

   // js to display the tip cash Amount
   $("#tipAmount").html(Number(tipTotal * checkTotal).toFixed(2));
   //js to display the total check with tip
   $("#finalTotal").html(finalTotal.toFixed(2));
   // function call to change the coin image
   changeCoin();
}


function changeCoin(){
  // selecting the tip percentage
  var tipTotal = $("#tipTotal").val()/100;
if(tipTotal <= .05){
  coinImage.setAttribute("src", "css/coins1.jpg");
} else if(tipTotal >= .051){
  coinImage.setAttribute("src", "css/coins2.jpg");
  }
}
