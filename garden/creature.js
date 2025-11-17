
//when the button is clicked (event)
$("add-creature-twice").click(function(){
    // grab the value from the input

    //reachfor this input field and grab the text from it
    let crName = $("#crName").val();
    $(creature-list).append(crName + ",");

    //remove the name after it's added
    $("crName").val("done!");
})

$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        let crEyesNum= $("#crEyesNum").val();


        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }
        else {
            $("#creature-list").append("<div>" +crName + ", " +crColor + ", " +crEyesNum + "</div> ");
        }

        // remove the name after it's added
        $("#crName").val("");

    
    });