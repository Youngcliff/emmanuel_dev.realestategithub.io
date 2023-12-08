function validateForm() {
    var password = 
    document.getElementById("password").value;
    var confirm_password = 
    document.getElementById("confirm_password").value;
    var errorBox = 
    document.getElementById("errorBox");
   
    if (password !== confirm_password) {
        errorBox.style.display = "block";
        return false;
    }
    if (password !== confirm_password) {
        confirm_password.style.color = "red"
        return false;
    }
    else {
        errorBox.style.display = "none";
        return true;
    }
}
