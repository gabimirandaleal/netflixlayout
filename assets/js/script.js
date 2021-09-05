let email = document.getElementById("email");
let password = document.getElementById("password")

document.getElementById("entrar").addEventListener("click", function(event) {
    if (email.validity.valid && password.validity.valid) {
        var b = document.querySelector("button");
        b.setAttribute("form", "forms");
        window.location.href = '/./home.html'
    }
});

