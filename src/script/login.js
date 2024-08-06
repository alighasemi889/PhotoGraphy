"use strict";
let parent__docuemnt = document.getElementById("parent__docuemnt");
parent__docuemnt.style.direction = "rtl"
let myForm = document.getElementById("form");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();



    const email = document.getElementById("email").value;
    const passwd = document.getElementById("password").value;
    const pass__Eror = document.getElementById("password__Eror");
    const email__Eror = document.getElementById("email__Eror");
    const password = document.getElementById("password");
    const email_input = document.getElementById("email");

    
    function validation() {
        if (passwd === "" || passwd === null ) {
            pass__Eror.textContent = "رمز خالی است";
            pass__Eror.style.color = "red";
            // pass__Eror.textContent = "* حداقل طول را رعایت کنید ";

        }
        
        if (passwd.length < 8) {
            pass__Eror.style.display = "block";
            pass__Eror.textContent = "رمز خالی است";
            pass__Eror.textContent = "* حداقل طول رمز 8 کاراکتر باشد"
            pass__Eror.sty
            password.style.borderColor = "black"
        }
        if (passwd.length >= 8) {
           pass__Eror.textContent = "طول رمز درست است";
           pass__Eror.style.color = "green";
        }
    

        if (email === "" || email === null) {
            email__Eror.textContent = " * ایمیل را پر کنید  ";
            email__Eror.style.color = "red";
            email_input.style.borderColor = "black";
            // alert("email is not valid")
            // return;
        }
    }
    validation()


    myForm.onsubmit();
   
})
