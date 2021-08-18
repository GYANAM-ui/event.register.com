function register() {
    user_name = document.getElementById("name").value;
    email = document.getElementById("email").value;

    if (user_name, email == "") {
        document.getElementById("error_div").style.display = "block";
        console.error("Please fill all blanks")
    } else {
        localStorage.setItem("username", user_name);
        localStorage.setItem("email", email);
        window.location = "views/registered.html";
    }
}

function ins() {
    window.open("https://instagram.com/programmer_gyanam/");
}