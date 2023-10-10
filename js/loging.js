// Step-1: add click event handler whit the submit button
document.getElementById("button-submit").addEventListener("click", function(){
    // Step-2: get the email address inside the email input dield
    // always remember to use. value to get text from an input filed
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    // Step-3: get password
    //3.a-- set id on the html element
    //3.b ---- get the element
    // 3.c----get the value form the element

    const passwordField = document.getElementById("user-password");
    const UserPassword = passwordField.value;
    console.log(userEmail, UserPassword);


    // DO NOT VERLFY EMAIL PASSWORD ON THE CLIEND SIDE ###################
    // Step-4: verify email add password and check whether valid user or not 
    if(userEmail === "sontan@baap.com" && UserPassword === "secret"){
       window.location.href = "bank.html"
    }
    else{
        alert(" Tui Password vule gesos ! Tome ami teijjo Sontan gosona korlam !!!")
    }

})
