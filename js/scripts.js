$(document).ready (function(){

  $("form#shout").submit (function(event){
    var userFirstName = $("input#firstName").val();
    var userLastName = $("input#lastName").val();
    var userIceCream = $("input#iceCream").val();
    var userPizza = $("input#pizza").val();
    var userDrink = $("input#drink").val();

    $(".firstName").text(userFirstName.toUpperCase());
    $(".lastName").text(userLastName.toUpperCase());
    $(".iceCream").text(userIceCream.toUpperCase());
    $(".pizza").text(userPizza.toUpperCase());
    $(".drink").text(userDrink.toUpperCase());

    $("#scream").show();
    $("#initial").hide();

    event.preventDefault();
  });
});
