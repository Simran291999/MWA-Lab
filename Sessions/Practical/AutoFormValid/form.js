function Validation() {
    var name = document.getElementById("1name");
    var phone = document.getElementById("5phone");
    var subject = document.getElementById("6course");
    var password = document.getElementById("3password");
    var confirmpassword = document.getElementById("4confirmpassword");


    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if(!phone.checkValidity()) {
        document.getElementById("phone-demo").innerHTML = inpobj.validationMessage;
    }

    if (phone.value == "" || phone.value < 10) {
        window.alert("Please enter your Phone number.");
        phone.focus();
        return false;
    }

    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }

    if (confirmpassword.value != password.value) {
        window.alert("Password does not match");
        password.focus();
        return false;
    }

    if (subject.selectedIndex < 1) {
        alert("Please select a course");
        subject.focus();
        return false;
    }

    return true;
}