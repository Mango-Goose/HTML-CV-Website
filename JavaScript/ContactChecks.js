// JavaScript source code
window.onload = function () {
    let contactForm = document.getElementByID("Contact-Form");
    //let firstEmail = document.getElementById("email");
    //let confirmEmail = document.getElementById("confirmEmail");
}
let validEmail = false;
firstEmail.onchange = checkEmails;

validateForm = function () {

}

function checkEmails() {
    let firstEmail = contactForm.email;
    let confirmEmail2 = contactForm.confirmEmail;
    //have to make sure that the first email is of the right format first

    if (firstEmail == confirmEmail) {
        validEmail = true;
        text = "yes";
    }
    else {
        text="no"
        validEmail = false;
    }
    document.getElementById("test") = text;
}

function checkDate () {

}