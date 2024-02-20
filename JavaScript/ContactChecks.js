let contactForm = document.getElementById("Contact-Form");
let firstEmail = contactForm.email;
let confirmEmail2 = contactForm.confirmEmail;
let submit = document.getElementById("submit");

//setting both dates ready for comparison
let appDate = document.getElementById("apptDate");
var apptDate = new Date(appDate); 
var date = new Date();
date.setDate(date.getDate() + 1);

const errorText = document.getElementById("error");

//bool variables to make sure the validation goes through



let validEmail = false; 
firstEmail.onchange = checkEmails;
confirmEmail2.onchange = checkEmails;
appDate.onchange = checkDate;

function checkEmails() {
    let firstEmail = contactForm.email;
    let confirmEmail2 = document.getElementById("confirmEmail");
    console.log("CHanged");
    //have to make sure that the first email is of the right format first
    if (firstEmail.value.match(".@.")) {
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
    }
    else {
        errorText.innerText = "Not a valid email"
        validEmail = false;
    }
    return validEmail;
}

function checkDate() {
    var apptDate = new Date(appDate);
    date.value = date.toISOString().slice(0, 16);
    console.log(date.value);
    console.log(apptDate);
    if (apptDate.value > date.value) {
        errorText.innerText = "valid date";
        console.log(apptDate + "aha" +  date);
    }
    else {
        errorText.innerText = "invalid date";
        console.log(apptDate.value + "and" + date);
    }
    return true;
}

//run through the validation methods and return to show if they succeeded or not
function validateForm() {
    if (checkDate() && checkEmails()) {
        return true;
    }
}

//to create the popup when the form has been filled out correctly + submit
submit.onclick = function () {
    if (validateForm()) {
        alert("Thank you for submitting the form");
    }
    else {
        alert("You need to make changes to the form");
    }
}
