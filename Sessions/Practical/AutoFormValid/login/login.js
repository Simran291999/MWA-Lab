function Validation() {
    var user = document.getElementById("Uname");
    var pass = document.getElementById("Upassword");

    if (user == null || user == ""){  
        alert("Username can't be blank");  
        return false;  
    } else if (pass == null || pass == ""){
        alert("Please enter valid password");  
        return false;  
    }  
}