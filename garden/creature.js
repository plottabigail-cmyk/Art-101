
//when the button is clicked (event)
$("add-creature").click(function(){
    // grab the value from the input

    //reachfor this input field and grab the text from it
    let crName = $("#crName").val();
    $(creature-list).append(crName + ",");

    //remove the name after it's added
    $("crName").val("done!");
})

