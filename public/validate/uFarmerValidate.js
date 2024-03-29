const validate = (event) => {
    let error = 0
    //pick input
    let firstName = document.getElementById("fName");
    let secondName = document.getElementById("sName");
    let birthDate = new Date(document.getElementById("db").value);
    let age = calculateAge(birthDate);
    let bDate = document.getElementById("db"); 
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let phoneNumber = document.getElementById("pNum");
    let ninNumber = document.getElementById("nin");
    let ward = document.getElementById("wd");
    let poultry = document.getElementById("poultry");
    let horti = document.getElementById("hort");
    let dairy = document.getElementById("dairy");
    let regDate = document.getElementById("dr");
    let uniqueid = document.getElementById("uI");
    let password = document.getElementById("pwd");
    let role = document.getElementById("role");

    //pick error
    let firstNameError = document.getElementById("fNameErr");
    let secondNameError = document.getElementById("sNameErr");
    let birthDateError = document.getElementById("dbErr");
    let genderError = document.getElementById("gndErr");
    let phoneNumberError = document.getElementById("pNumErr");
    let ninNumberError = document.getElementById("ninErr");
    let wardError = document.getElementById("wdErr");
    let activitiesError = document.getElementById("actErr");
    let regDateError = document.getElementById("drErr");
    let uniqueIdError = document.getElementById("uIErr");
    let passwordError = document.getElementById("pwdErr");
    let roleErr = document.getElementById("roleErr");



    //for empty on name
    if (!firstName.value) {
        firstName.style.border = "1px solid red"
        firstNameError.textContent = "Please enter first name"
        firstNameError.style = "color: red"
        error++
    }
    else if (firstName.value.length < 5) {
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "first name should have atleast four letters"
        firstNameError.style = "color: red"
        error++
    }
    else if (firstName.value.length > 50) {
        firstName.style.border = "1px solid red";
        firstNameError.innerHTML = "first name cannot have more than 50 letters";
        firstNameError.style = "color: red";
        error++;
    } else {
        firstName.style.border = "1px solid green";
        firstNameError.textContent = "";
    }
    //for second name
    if (!secondName.value) {
        secondName.style.border = "1px solid red"
        secondNameError.textContent = "Please enter second name"
        secondNameError.style = "color: red"
        error++
    }
    else if (secondName.value.length < 5) {
        secondName.style.border = "1px solid red"
        secondNameError.innerHTML = "first name should have atleast four letters"
        secondNameError.style = "color: red"
        error++
    }
    else if (secondName.value.length > 50) {
        secondName.style.border = "1px solid red";
        secondNameError.innerHTML = "second name cannot have more than 50 letters";
        secondNameError.style = "color: red";
        error++;
    } else {
        secondName.style.border = "1px solid green";
        secondNameError.textContent = "";
    }
    // DOB
    // if (!bDate.value) {
    //     bDate.style.border = "1px solid red";
    //     birthDateError.textContent = "Please fill in this field";
    //     birthDateError.style = "color: red";
    //     error++;
    // }else {
    //     bDate.style.border = "1px solid green";
    //     birthDateError.textContent = "";
    // }
    
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
        genderError.innerHTML = "Pick your gender"
        genderError.style = "color: red"
        error++
    }
    else {
        genderError.textContent = "";
    }
    //phone number
    const phoneNumberregex = /^\+256\d{9}$/;
    if (!phoneNumber.value) {
        phoneNumber.style.border = "1px solid red"
        phoneNumberError.innerHTML = "Please enter your phone number"
        phoneNumberError.style = "color: red"
        error++
    }
    else if (!phoneNumber.value.match(phoneNumberregex)) {
        phoneNumber.style.border = "1px solid red"
        phoneNumberError.innerHTML = "phone number should be in thi format +256 7********"
        phoneNumberError.style = "color: red"
        error++
    } else {
        phoneNumber.style.border = "1px solid green";
        phoneNumberError.textContent = "";
    }
    if (!ninNumber.value) {
        ninNumber.style.border = "1px solid red"
        ninNumberError.textContent = "Please enter your NIN number"
        ninNumberError.style = "color: red"
        error++
    }else if (!(ninNumber.value.length == 13)) {
        ninNumber.style.border = "1px solid red";
        ninNumberError.innerHTML = "NIN should have 13 characters";
        ninNumberError.style = "color: red";
        error++;
    }
    else {
        ninNumber.style.border = "1px solid green";
        ninNumberError.textContent = "";
    }
    //ward
    if (!ward.value) {
        ward.style.border = "1px solid red";
        wardError.textContent = "Select the ward you belong to";
        wardError.style = "color: red";
        error++
    } else {
        ward.style.border = "1px solid green";
        wardError.textContent = "";
    }
    //activities
    if (!(poultry.checked || horti.checked || dairy.checked)) {
        activitiesError.innerHTML = "Please select atleast one activity carried out";
        activitiesError.style = "color: red";
        error++;
    } else {
        activities.style.border = "1px solid green";
        activitiesError.textContent = "";
    }
    //reg
    if (!regDate.value) {
        regDate.style.border = "1px solid red"
        regDateError.textContent = "Please fill in the date"
        regDateError.style = "color: red"
        error++
    }
    else {
        regDate.style.border = "1px solid green";
        regDateError.textContent = "";
    }
    //un id
    const idregex = /^UF-([0-9]{3})+$/;
    if (!uniqueid.value) {
        uniqueid.style.border = "1px solid red"
        uniqueIdError.textContent = "Please fill in this field"
        uniqueIdError.style = "color: red"
        error++
    } else if (!uniqueid.value.match(idregex)) {
        uniqueid.style.border = "1px solid red"
        uniqueIdError.innerHTML = "Wrong format of id"
        uniqueIdError.style = "color: red"
        error++
    }
    else {
        uniqueid.style.border = "1px solid green";
        uniqueIdError.textContent = "";
    }
    //password
    if (!password.value) {
        password.style.border = "1px solid red"
        passwordError.textContent = "Please fill in your password"
        passwordError.style = "color: red"
        error++
    } else {
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
        event.preventDefault()
    }
}

function calculateAge(birthDate) {
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}