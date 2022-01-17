
//get our user input
function getValue(){

    //make sure the alert is invisible.
    document.getElementById("alertID").classList.add("invisible");
    
    //get user string from the page
    let userString = document.getElementById("userInput").value;

    //check for a palindrome
    let returnObj = checkForPalindrome(userString);
  
    //display our message to the screen.
    displayMessage(returnObj);
}

// check if palindrome
function checkForPalindrome(userString){
    
    //convert to lower case 
    userString = userString.toLowerCase();
    
    //Remove special charactors.
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    //reverse userString

    let revString = [];
    let returnObj = {};

    for (let index = userString.length -1; index >= 0; index--) {
        revString += userString[index];        
    }

    //now check to see if its a palindrome
    if(revString == userString){
        returnObj.msg = "Well done! You've entered apalindrome!"
    }
    else{
        returnObj.msg = "Sorry! You did not enter a Palindrome!"
    }

    returnObj.reversed = revString;
    return returnObj;
}

//displayt string to a string
function displayMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML= ` Your pharse reversed is: ${returnObj.reversed}`;
   
    document.getElementById("alertID").classList.remove("invisible");
}