const validate = (event) =>{
    let error = 0
    //pick input
    let image = document.getElementById("pImage");
    let product = document.getElementById("pName");
    let ward = document.getElementById("ward");
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
    let imageErr = document.getElementById("imgErr");
    let productError = document.getElementById("pNameErr");
    let wardError = document.getElementById("wdErr");
    let dateError = document.getElementById("dateErr");
    let priceError = document.getElementById("uPErr");
    let quantityError = document.getElementById("qtyErr");
    let addressError = document.getElementById("adrErr");
    let paymentError = document.getElementById("payErr");
    let deliverErr = document.getElementById("deliErr");
    let typeError = document.getElementById("typeErr");

    if(!image.value) {
        image.style.border = "1px solid red"
        imageErr.textContent = "Please insert the product image"
        imageErr.style = "color: red"
        error++
    }else {
        image.style.border = "1px solid green";
        imageErr.textContent = "";
    }
    if(!product.value) {
        product.style.border = "1px solid red"
        productError.textContent = "Enter the product name"
        productError.style = "color: red"
        error++
    }else {
        product.style.border = "1px solid green";
        productError.textContent = "";
    }
    if (!ward.value) {
        ward.style.border = "1px solid red"
        wardError.textContent = "Select the ward you belong to"
        wardError.style = "color: red"
        error++
    }else {
        ward.style.border = "1px solid green";
        wardError.textContent = "";
    }
    if(!date.value) {
        date.style.border = "1px solid red"
        dateError.textContent = "Enter today's date"
        dateError.style = "color: red"
        error++  
    }else {
        date.style.border = "1px solid green";
        dateError.textContent = "";
    }
    // const priceregex = /^\UGX\d{}
    if(!price.value) {
        price.style.border = "1px solid red"
        priceError.textContent = "Please enter the unit price of the product in UGX"
        priceError.style = "color: red"
        error++  
    }
    // if(!price.value.match(priceregex)) {
    //     price.style.border = "1px solid red"
    //     priceError.textContent = "Please enter the unit price of the product"
    //     priceError.style = "color: red"
    //     error++  
    // }
    else {
        price.style.border = "1px solid green";
        priceError.textContent = "";
    }

    if(!quantity.value) {
        quantity.style.border = "1px solid red"
        quantityError.textContent = "Please enter the quantity of the product"
        quantityError.style = "color: red"
        error++   
    }else {
        quantity.style.border = "1px solid green";
        quantityError.textContent = "";
    }
    if(!address.value) {
        address.style.border = "1px solid red"
        addressError.textContent = "Please indicate where your home is found"
        addressError.style = "color: red"
        error++  
    }else {
        address.style.border = "1px solid green";
        addressError.textContent = "";
    }
    if(!(cash.checked || mMoney.checked)) {
        paymentError.textContent = "Select atleast one form of payment"
        paymentError.style = "color: red"
        error++  
    }else {
        paymentError.textContent = "";
    }
    if(!(deli.checked || pick.checked)) {
        deliverErr.textContent = "Select atleast one form of delivery"
        deliverErr.style = "color: red"
        error++  
    }else {
        deliverErr.textContent = "";
    }
    
    if(!(organic.checked || nonOr.checked)) {
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