const validate = (event) => {
    let error = 0;
    //pick input
    let firstName = document.getElementById("fName");
    let secondName = document.getElementById("sName");
    let birthDate = document.getElementById("db");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let phoneNumber = document.getElementById("pNum");
    let ninNumber = document.getElementById("nin");
    let address = document.getElementById("adr");
    let timePeriod = document.getElementById("tsa");
    let ward = document.getElementById("wd"); //edit needed
    let poultry = document.getElementById("poultry");
    let horti = document.getElementById("hort");
    let dairy = document.getElementById("dairy");
    let regDate = document.getElementById("dr");
    let uniqueNumber = document.getElementById("uN");
    let password = document.getElementById("pwd");
    let resid = document.getElementById("rT");

    //pick error
    let firstNameError = document.getElementById("fNameErr");
    let secondNameError = document.getElementById("sNameErr");
    let birthDateError = document.getElementById("dbErr");
    let genderError = document.getElementById("gndErr");
    let phoneNumberError = document.getElementById("pNumErr");
    let ninNumberError = document.getElementById("ninErr");
    let addressError = document.getElementById("adrErr");
    let timePeriodError = document.getElementById("tsaErr");
    let wardError = document.getElementById("wdErr");
    let activitiesError = document.getElementById("actErr");
    let regDateError = document.getElementById("drErr");
    let uniqueNumberError = document.getElementById("uNErr");
    let passwordError = document.getElementById("pwdErr");
    let residError = document.getElementById("rTErr");

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
    if (!secondName.value) {
        secondName.style.border = "1px solid red";
        secondNameError.textContent = "Please enter second name";
        secondNameError.style = "color: red";
        error++;
    } else if (secondName.value.length < 5) {
        secondName.style.border = "1px solid red";
        secondNameError.innerHTML = "second name should have atleast five letters";
        secondNameError.style = "color: red";
        error++;
    } else if (secondName.value.length > 50) {
        secondName.style.border = "1px solid red";
        secondNameError.innerHTML = "second name cannot have more than 50 letters";
        secondNameError.style = "color: red";
        error++;
    }else {
        secondName.style.border = "1px solid green";
        secondNameError.textContent = "";
    }
    // DOB
    if (!birthDate.value) {
        birthDate.style.border = "1px solid red";
        birthDateError.textContent = "Please fill in this field";
        birthDateError.style = "color: red";
        error++;
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
    } else {
        phoneNumber.style.border = "1px solid green";
        phoneNumberError.textContent = "";
    }
    //nin
      const ninNumberregex = /^CM\d{9}LM$/;
    if (!ninNumber.value) {
        ninNumber.style.border = "1px solid red";
        ninNumberError.textContent = "Please enter your NIN number";
        ninNumberError.style = "color: red";
        error++;
    } else if (!(ninNumber.value.length == 13)) {
        ninNumber.style.border = "1px solid red";
        ninNumberError.innerHTML = "NIN should have 13 characters";
        ninNumberError.style = "color: red";
        error++;
    }
    // else if(!ninNumber.value.match(ninNumberregex)){
    //     ninNumber.style.border = "1px solid red"
    //     ninNumberError.innerHTML = "Wrong format of NIN"
    //     ninNumberError.style = "color: red"
    //     error++
    // }
    else {
        ninNumber.style.border = "1px solid green";
        ninNumberError.textContent = "";
    }
    //address
    if (!address.value) {
        address.style.border = "1px solid red";
        addressError.innerHTML = "Please indicate where your home is located";
        addressError.style = "color: red";
        error++;
    } else {
        address.style.border = "1px solid green";
        addressError.textContent = "";
    }
    //time
    if (!timePeriod.value) {
        timePeriod.style.border = "1px solid red";
        timePeriodError.textContent = "Please fill in this field";
        timePeriodError.style = "color: red";
        error++;
    } else if (timePeriod.value < 10) {
        timePeriod.style.border = "1px solid red";
        timePeriodError.textContent =
            "You must have lived in this area for more than 10 years";
        timePeriodError.style = "color: red";
        error++;
    } else {
        timePeriod.style.border = "1px solid green";
        timePeriodError.textContent = "";
    }
    //ward
    // if (!ward.value) {
    //     ward.style.border = "1px solid red"
    //     wardError.textContent = "Select the ward you belong to"
    //     wardError.style = "color: red"
    //     error++
    // }else {
    //     ward.style.border = "1px solid green";
    //     wardError.textContent = "";
    // }
    //activities
    if (!(poultry.checked || horti.checked || dairy.checked)) {
        activitiesError.innerHTML = "Please select atleast one activity carried out";
        activitiesError.style = "color: red";
        error++;
    } else {
        activitiesError.textContent = "";
    }

    //un num
    const unregex = /^FO\d{3}$/;
    if (!uniqueNumber.value) {
        uniqueNumber.style.border = "1px solid red";
        uniqueNumberError.textContent = "Please fill in this field";
        uniqueNumberError.style = "color: red";
        error++;
    } else if (!uniqueNumber.value.match(unregex.value)) {
        uniqueNumber.style.border = "1px solid red";
        uniqueNumberError.textContent = "The unique number should be in this format FO-001";
        uniqueNumberError.style = "color: red";
        error++;
    }
    else {
        uniqueNumber.style.border = "1px solid green";
        uniqueNumberError.textContent = "";
    }
    //password
    if (!password.value) {
        password.style.border = "1px solid red";
        passwordError.textContent = "Please fill in your password";
        passwordError.style = "color: red";
        error++;
    } else {
        password.style.border = "1px solid green";
        passwordError.textContent = "";
    }
    //reg
    if (!regDate.value) {
        regDate.style.border = "1px solid red";
        regDateError.textContent = "Please fill in the date";
        regDateError.style = "color: red";
        error++;
    }
    // else if (!regDate.value.match(date)) {
    //     regDate.style.border = "1px solid red"
    //     regDateError.textContent = "This date is incorrect"
    //     regDateError.style = "color: red"
    //     error++
    // }
    else {
        regDate.style.border = "1px solid green";
        regDateError.textContent = "";
    }
    //resid
    if (!resid.value) {
        resid.style.border = "1px solid red";
        residError.textContent = "Please enter your residence type";
        residError.style = "color: red";
        error++;
    } else {
        resid.style.border = "1px solid green";
        residError.textContent = "";
    }

    if (error > 0) {
        event.preventDefault();
    }
}
