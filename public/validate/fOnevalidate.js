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
    let ward = document.getElementById("wd");
    let activities = document.getElementById("act");
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
    } else if (firstName.value.length > 50) {
        secondName.style.border = "1px solid red";
        secondNameError.innerHTML = "second name cannot have more than 50 letters";
        secondNameError.style = "color: red";
        error++;
    }
    // DOB
    if (!birthDate.value) {
        birthDate.style.border = "1px solid red";
        birthDateError.textContent = "Please fill in this field";
        birthDateError.style = "color: red";
        error++;
    }
    // gender
    if (!(female.checked && male.checked)) {
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
            "phone number should be in this format +256 700000000";
        phoneNumberError.style = "color: red";
        error++;
    }
    //nin
    //   const ninNumberregex = /^\CM\d{10}\LM$/
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
    //     ninNumberError.innerHTML = "NIN has to be in thi format  "
    //     ninNumberError.style = "color: red"
    //     error++
    // }
    //address
    if (!address.value) {
        address.style.border = "1px solid red";
        addressError.innerHTML = "Please indicate where your home is located";
        addressError.style = "color: red";
        error++;
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
    }
    //ard
    if (!ward.value) {
        ward.style.border = "1px solid red";
        wardError.innerHTML = "Please enter the ward you belong to";
        wardError.style = "color: red";
        error++;
    }
    //activities
    if (!activities.value) {
        activities.style.border = "1px solid red";
        activitiesError.innerHTML = "Please fill in the activities you carry out";
        activitiesError.style = "color: red";
        error++;
    }

    //un num
    if (!uniqueNumber.value) {
        uniqueNumber.style.border = "1px solid red";
        uniqueNumberError.textContent = "Please fill in this field";
        uniqueNumberError.style = "color: red";
        error++;
    }
    //password
    if (!password.value) {
        password.style.border = "1px solid red";
        passwordError.textContent = "Please fill in your password";
        passwordError.style = "color: red";
        error++;
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
    //resid
    if (!resid.value) {
        resid.style.border = "1px solid red";
        residError.textContent = "Please enter your residence type";
        residError.style = "color: red";
        error++;
    }

    if (error > 0) {
        event.preventDefault();
    }
};
