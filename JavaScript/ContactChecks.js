// JavaScript source code
let contactForm = document.getElementById("Contact-Form");
let firstEmail = contactForm.email;
let confirmEmail2 = contactForm.confirmEmail;
const errorText = document.getElementById("error");

let validEmail = false; 
firstEmail.onchange = checkEmails;
confirmEmail2.onchange = checkEmails;

/*let signup_button = document.getElementById("submit");
signup_button.onclick = checkAll;

function checkAll() {
    checkEmails();
    //checkDate();
    //validateForm();
}

validateForm = function () {

}
*/
function checkEmails() {
    let firstEmail = contactForm.email;
    let confirmEmail2 = document.getElementById("confirmEmail");

    //have to make sure that the first email is of the right format first
    if (firstEmail .@.) {

    }
    if (firstEmail === confirmEmail2) {
        validEmail = true;
        console.log("YES");
        errorText.innerText = "yes";
    }
    else {
        errorText.innerText = "Emails do not match";
        console.log("EMAILS DONT MATCH");
        validEmail = false;
    }
    //document.getElementById("test") = text;
}

function checkDate () {

}