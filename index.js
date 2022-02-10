
// var holding the coin img source to be changed
var coinImage = $("#coins");


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
  // if statement to change the coin image
if(tipTotal >= .25){
  coinImage.attr("src", "css/coins4.jpg");
} else if(tipTotal >= .15){
  coinImage.attr("src", "css/coins3.jpg");
} else if(tipTotal >= .10){
    coinImage.attr("src", "css/coins2.jpg");
} else if(tipTotal <= .05){
    coinImage.attr("src", "css/coins1.jpg");
  }
}
