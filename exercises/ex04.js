let totalNumber = 0;

//add a button titled I am a button lol

$("#needy-button").click( function(){

    totalNumber = totalNumber +3;

    let sentence = "You clicked me ";
let sentencetwo = " times!";
    let totalNumbers = sentence + totalNumber 
    + sentencetwo;

$("#needy-button").html(totalNumbers);


})
//when it is clicked
//add one to the total number

//show the total number
//on our button
//show "clicked total number times"

//a top limit