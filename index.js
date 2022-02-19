
// var holding the coin img source to be changed
var coinImage = $("#coins");

// function to add the tip amounts
$("button").click(function() {
  // var to hold the inner html
  var tipPercentage = $(this).attr('id');
  console.log("the tipPercentage is "+tipPercentage)
  // selecting the check total
  var checkTotal = $("#checkTotal").val();
  console.log(checkTotal)
  // selecting the tip percentage
  var tipTotal = parseFloat(tipPercentage);
  console.log("The Button click tip total is "+tipTotal)
  //variable to save the Total
   var finalTotal = Number(checkTotal) + Number(tipTotal *checkTotal);
   // console.log("tip amount is " + finalTotal.toFixed(2));

   // js to display the tip cash Amount
   $("#tipAmount").html(Number(tipTotal * checkTotal).toFixed(2));
   //js to display the total check with tip
   $("#finalTotal").html(finalTotal.toFixed(2));
   // function call to change the coin image
   // changeCoin();
   // if statement to change the coin image
 if(tipTotal === .2){
   coinImage.attr("src", "css/coins4.jpg");
 } else if(tipTotal === .15){
   coinImage.attr("src", "css/coins3.jpg");
 } else if(tipTotal === .10){
     coinImage.attr("src", "css/coins2.jpg");
 } else if(tipTotal === .05){
     coinImage.attr("src", "css/coins1.jpg");
   }
})

// function to change the coin image based on tip amount
function changeCoin(){
  // var to hold the inner html
  var tipPercentage = $("button").attr("id");
  console.log("the tipAmount is "+ $("button").attr("id"));
  // console.log("the changeCoin() tipPercentage is "+ Number(tipPercentage))
  // selecting the tip percentage
  var tipTotal = Number(tipPercentage);
  // console.log("changeCoin() tipTotal is "+ tipTotal)
  // if statement to change the coin image
if(tipTotal === .2){
  coinImage.attr("src", "css/coins4.jpg");
} else if(tipTotal === .15){
  coinImage.attr("src", "css/coins3.jpg");
} else if(tipTotal === .10){
    coinImage.attr("src", "css/coins2.jpg");
} else if(tipTotal === .05){
    coinImage.attr("src", "css/coins1.jpg");
  }
}



// Old JS function for function totalTip() {
//   // var to hold the inner html
//   var tipPercentage = $("#fivePercent").html();
//   console.log("the tipPercentage is "+tipPercentage)
//   // selecting the check total
//   var checkTotal = $("#checkTotal").val();
//   console.log(checkTotal)
//   // selecting the tip percentage
//   var tipTotal = parseFloat(tipPercentage)/100;
//   console.log(tipTotal)
//   //variable to save the Total
//    var finalTotal = Number(checkTotal) + Number(tipTotal *checkTotal);
//    // console.log("tip amount is " + finalTotal.toFixed(2));
//
//    // js to display the tip cash Amount
//    $("#tipAmount").html(Number(tipTotal * checkTotal).toFixed(2));
//    //js to display the total check with tip
//    $("#finalTotal").html(finalTotal.toFixed(2));
//    // function call to change the coin image
//    changeCoin();
// }
