function calcTotal() {
    let quantity = document.getElementById("quantity").value;
        quantity = parseInt(quantity);
    let cost = document.getElementById("cost").value;
        cost = parseInt(cost);
    let total = quantity * cost;
    document.getElementById("total").value = total;
  }
  calcTotal()