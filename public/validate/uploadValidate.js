const validate = (event) =>{
    let error = 0
    //pick input
    let product = document.getElementById("pName");
    let ward = document.getElementById("wd");
    let date = document.getElementById("date");
    let price = document.getElementById("uP");
    let quantity = document.getElementById("qty");
    let address = document.getElementById("adr");
    let cash = document.getElementById("cash");
    let mMoney = document.getElementById("mMoney");
    let deli = document.getElementById("hDeli");
    let pick = document.getElementById("pick");
    let organic = document.getElementById("org");
    let nonOr = document.getElementById("nOrg");

    //pick error
    let productError = document.getElementById("pNameErr");
    let wardError = document.getElementById("wdErr");
    let dateError = document.getElementById("dateErr");
    let priceError = document.getElementById("uPErr");
    let quantityError = document.getElementById("qtyErr");
    let addressError = document.getElementById("adrErr");
    let paymentError = document.getElementById("payErr");
    let deliverErr = document.getElementById("deliErr");
    let typeError = document.getElementById("typeErr");

    if(!product.value) {
        product.style.border = "1px solid red"
        productError.textContent = "Enter the product name"
        productError.style = "color: red"
        error++
    }
    if (!ward.value) {
        ward.style.border = "1px solid red"
        wardError.textContent = "Enter the ward you belong to"
        wardError.style = "color: red"
        error++
    }
    if(!date.value) {
        date.style.border = "1px solid red"
        dateError.textContent = "Enter today's date"
        dateError.style = "color: red"
        error++  
    }
    // const priceregex = /^\UGX\d{}
    if(!price.value) {
        price.style.border = "1px solid red"
        priceError.textContent = "Please enter the unit price of the product"
        priceError.style = "color: red"
        error++  
    }
    // if(!price.value.match(priceregex)) {
    //     price.style.border = "1px solid red"
    //     priceError.textContent = "Please enter the unit price of the product"
    //     priceError.style = "color: red"
    //     error++  
    // }

    if(!quantity.value) {
        quantity.style.border = "1px solid red"
        quantityError.textContent = "Please enter the quantity of the product"
        quantityError.style = "color: red"
        error++   
    }
    if(!address.value) {
        address.style.border = "1px solid red"
        addressError.textContent = "Please indicate where your home is found"
        addressError.style = "color: red"
        error++  
    }
    if(!(cash.checked || mMoney.checked)) {
        cash.style.border = "1px solid red"
        mMoney.style.border = "1px solid red"
        paymentError.textContent = "Select atleast one form of payment"
        paymentError.style = "color: red"
        error++  
    }
    if(!(deli.checked || pick.checked)) {
        deli.style.border = "1px solid red"
        pick.style.border = "1px solid red"
        deliverErr.textContent = "Select atleast one form of delivery"
        deliverErr.style = "color: red"
        error++  
    }
    
    if(!(organic.checked && nonOr.checked)) {
        organic.style.border = "1px solid red"
        nonOr.style.border = "1px solid red"
        typeError.textContent = "Select the type of product"
        typeError.style = "color: red"
        error++  
    }
    else {
        typeError.textContent = ""
    }


    if(error > 0){
        event.preventDefault()
    }
}