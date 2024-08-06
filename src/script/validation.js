"use strict";
var form = document.getElementById("myform");
form.addEventListener('submit', function validform(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let passwd = document.getElementById("password").value;
    const email__eror = document.getElementById("email__eror");
    const eror__pass = document.getElementById("eror__pass");

    if (!emailIsValid(email)) {
        // alert("email is not valid")
        // alert(email.value)
        email__eror.innerHTML = "ایمیل را وارد کنید";
        email__eror.style.color = "red";


    }
    if (emailIsValid(email)) {
        email__eror.style.display = "none";
        email__eror.style.transition = "3s ease-out all"
    }
    if (passwd.length > 6) {
        eror__pass.style.display = "none"
    }
    if (passwd.length < 6) {
        eror__pass.innerHTML = "رمز خالی است";
        eror__pass.style.color = "red";



        form.onsubmit();
    }


    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
})
