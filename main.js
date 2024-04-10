const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const Email = document.getElementById("Email");
const Pass = document.getElementById("Pass");
const Submit = document.getElementById("SBMTbutton");
let isValidate = true;

Submit.onclick = function() {
    isValidate = true; 

    if (FirstName.value === "" || FirstName.value === null) {
        document.getElementById("Alert1").style.display = "block";
        FirstName.style.borderColor = "hsl(0, 100%, 74%)";
        isValidate = false;
    } else {
        document.getElementById("Alert1").style.display = "none";
    }

    if (LastName.value === "" || LastName.value === null) {
        document.getElementById("Alert2").style.display = "block";
        LastName.style.borderColor = "hsl(0, 100%, 74%)";
        isValidate = false;
    } else {
        document.getElementById("Alert2").style.display = "none";
    }

    if (Email.value === "" || Email.value.indexOf('@') === -1 || Email.value === null) {
        document.getElementById("Alert3").style.display = "block";
        Email.style.borderColor = "hsl(0, 100%, 74%)";
        isValidate = false;
    } else {
        document.getElementById("Alert3").style.display = "none";
    }

    if (Pass.value === "" || Pass.value === null) {
        document.getElementById("Alert4").style.display = "block";
        Pass.style.borderColor = "hsl(0, 100%, 74%)";
        isValidate = false;
    } else {
        document.getElementById("Alert4").style.display = "none";
    }

    return isValidate; 
};
