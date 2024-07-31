"use strict";
function validateform() {
    let passwd = document.myform.password.value;
    let email = document.myform.email.value;
    let confirm = document.myform.confirm.value;
    const span = document.getElementById("eror");
    const pass = document.getElementById("pass");
    const confirm__Txt = document.getElementById("confirm");
    const eror__pass = document.getElementById("eror__pass");
    if (passwd === "" || confirm === null || email === null) {
     alert("هر دو فیلد اجباری است");
    span.textContent = "ایمیل خالی است";
    eror__pass.textContent = "رمز خالی است";
    confirm__Txt.textContent = "خالی است ";
    span.style.color = "red";
    confirm__Txt.style.color = "red";
    eror__pass.style.color = "red";
    passwd.style.border = "2px solid red"
    span.style.color = "red"
    // eror__pass.textContent = "رمز خالی است"
    return false;
} else if(pass.length < 7){
    alert("رمز خالی است")
}
}
// اهنگ
// یادت میاد تو میدون