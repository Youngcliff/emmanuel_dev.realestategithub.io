
navlist = document.querySelector('ul')
menu = document.querySelector('#menu')
menu.addEventListener('click', () => {
    navlist.classList.toggle('clipped')
})
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

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active')
        }
    }
}

