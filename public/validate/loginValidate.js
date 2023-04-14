const validate = (event) => {
    let error = 0;
    //input
   // let password = document.getElementById("pwd");
    let name = document.getElementById("uN");

    //error
    //let passwordError = document.getElementById("pwdErr");
    let nameErr = document.getElementById("uNErr");


    //pwd
    // if (!password.value) {
    //     password.style.border = "1px solid red";
    //     passwordError.textContent = "Please enter your password";
    //     passwordError.style = "color: red";
    //     error++
    // }
    // else {
    //     password.style.border = "1px solid green"
    //     passwordError.textContent = ""
    // }
    //username
    if (!name.value) {
        name.style.border = "1px solid red";
        nameErr.textContent = "Please enter first name";
        nameErr.style = "color: red";
        error++;
    }
    if (error > 0) {
        event.preventDefault();
    }
}