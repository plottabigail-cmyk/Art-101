let totalNumber = 0;

//add a button titled Populate the garden with creatures!

$("#needy-button").click( function(){

    totalNumber = totalNumber +1;

    let sentence = "You added ";
let sentencetwo = " creature(s)!";
    let totalNumbers = sentence + totalNumber 
    + sentencetwo;

$("#needy-button").html(totalNumbers);


})
//when it is clicked
//add one to the total number

//show the total number
//on our button
//show "clicked total number times"

$(document).ready(function(){
    $("button").click(function(){
        $("#statue").fadeOut();
    });
});


alert("Uh Oh, Where'd She Go?")




