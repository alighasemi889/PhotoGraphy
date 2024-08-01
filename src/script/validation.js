var form = document.getElementById("myform");
form.addEventListener('submit', function aa(event) {
    event.preventDefault();
}) 

let email = document.getElementById("email").value;
let passwd = document.getElementById("password").value;
const eror__pass = document.getElementById("eror__pass");

    if (!emailIsValid(email)) {
        alert("email is not valid")
        // alert(email.value)

        
    }

    if (passwd.length < 6) {
        // eror__pass.textContent = "رمز خالی است";
        // eror__pass.style.color = "red";
        // passwd.style.borderBlockColor = "red";
        alert("pass is not valid")
        // alert("رمز خالی است");   
       
        form.submit();
    }

   
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}