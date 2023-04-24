const validate = (event) => {
    let error = 0;
    //pick input
    let firstName = document.getElementById("fN");
    let secondname = document.getElementById("lN");
    let birthDate = new Date(document.getElementById("dob").value);
    let age = calculateAge(birthDate);
    let bDate = document.getElementById("dob");  //need to validate age
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let phoneNumber = document.getElementById("pNum");
    let uName = document.getElementById("username");
    let password = document.getElementById("pwd");
    let role = document.getElementById("role");

    //pick error
    let firstNameError = document.getElementById("fNErr");
    let secondnameError = document.getElementById("lNErr");
    let birthDateError = document.getElementById("dbErr");
    let genderError = document.getElementById("gndErr");
    let phoneNumberError = document.getElementById("pNumErr");
    let uNameErr = document.getElementById("uNErr");
    let passwordError = document.getElementById("pwdErr");
    let roleErr = document.getElementById("roleErr");


    //for empty on name
    if (!firstName.value) {
        firstName.style.border = "1px solid red";
        firstNameError.textContent = "Please enter first name";
        firstNameError.style = "color: red";
        error++;
    } else if (firstName.value.length < 5) {
        firstName.style.border = "1px solid red";
        firstNameError.innerHTML = "first name should have atleast five letters";
        firstNameError.style = "color: red";
        error++;
    } else if (firstName.value.length > 50) {
        firstName.style.border = "1px solid red";
        firstNameError.innerHTML = "first name cannot have more than 50 letters";
        firstNameError.style = "color: red";
        error++;
    }else {
        firstName.style.border = "1px solid green";
        firstNameError.textContent = "";
    }
    //for second name
    if (!secondname.value) {
        secondname.style.border = "1px solid red";
        secondnameError.textContent = "Please enter second name";
        secondnameError.style = "color: red";
        error++;
    } else if (secondname.value.length < 5) {
        secondname.style.border = "1px solid red";
        secondnameError.innerHTML = "second name should have atleast five letters";
        secondnameError.style = "color: red";
        error++;
    } else if (secondname.value.length > 50) {
        secondname.style.border = "1px solid red";
        secondnameError.innerHTML = "second name cannot have more than 50 letters";
        secondnameError.style = "color: red";
        error++;
    }else {
        secondname.style.border = "1px solid green";
        secondnameError.textContent = "";
    }
    // DOB
    if (!bDate.value) {
        bDate.style.border = "1px solid red";
        birthDateError.textContent = "Please fill in this field";
        birthDateError.style = "color: red";
        error++;
    }else {
        bDate.style.border = "1px solid green";
        birthDateError.textContent = "";
    }
    
    if (isNaN(age) || age < 10) {
        bDate.style.border = "1px solid red";
        birthDateError.textContent = "Please enter a valid date of birth (must be at least 10 years old)";
        birthDateError.style.color = "red";
        error++;
    } else {
        bDate.style.border = "1px solid green";
        birthDateError.textContent = "";
    }

    // gender
    if (!(female.checked || male.checked)) {
        genderError.innerHTML = "Pick your gender";
        genderError.style = "color: red";
        error++;
    } else {
        genderError.textContent = "";
    }
    //phone number
    const phoneNumberregex = /^\+256\d{9}$/;
    if (!phoneNumber.value) {
        phoneNumber.style.border = "1px solid red";
        phoneNumberError.innerHTML = "Please enter your phone number";
        phoneNumberError.style = "color: red";
        error++;
    } else if (!phoneNumber.value.match(phoneNumberregex)) {
        phoneNumber.style.border = "1px solid red";
        phoneNumberError.innerHTML =
            "phone number should be in this format +2567********";
        phoneNumberError.style = "color: red";
        error++;
    }else {
        phoneNumber.style.border = "1px solid green";
        phoneNumberError.textContent = "";
    }
    //user
    if (!uName.value) {
        uName.style.border = "1px solid red";
        uNameErr.textContent = "Please enter your user name";
        uNameErr.style = "color: red";
        error++;
    }else {
       uName.style.border = "1px solid green";
       uNameErr.textContent = "";
    }
    //password
    if (!password.value) {
        password.style.border = "1px solid red";
        passwordError.textContent = "Please fill in your password";
        passwordError.style = "color: red";
        error++;
    }else {
        password.style.border = "1px solid green";
       passwordError.textContent = "";
    }
    if (!role.value) {
        role.style.border = "1px solid red";
        roleErr.textContent = "Select youre role";
        roleErr.style = "color: red";
        error++
    } else {
        role.style.border = "1px solid green";
        roleErr.textContent = "";
    }
    

    if (error > 0) {
        event.preventDefault();
    }
};



function calculateAge(birthDate) {
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
calculateAge(birthDate)