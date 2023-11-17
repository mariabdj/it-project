document.addEventListener("DOMContentLoaded", function () {
  // Get elements from detail.html
  var productImg = document.getElementById("productImg");
  var productName = document.getElementById("productName");
  var productPrice = document.getElementById("productPrice");
  var calculatedPrice = document.getElementById("calculatedPrice");

  // Retrieve product details from localStorage
  var imgSrc = localStorage.getItem("productImg");
  var name = localStorage.getItem("productName");
  var price = localStorage.getItem("productPrice");

  // Set the product details in detail.html
  productImg.src = imgSrc;
  productName.textContent = name;
  productPrice.textContent = price;
  calculatedPrice.innerText = price;

  // Add event listeners for quantity buttons
  const quantitySpan = document.getElementById("quantity");
  const decreaseQtyButton = document.getElementById("decreaseQty");
  const increaseQtyButton = document.getElementById("increaseQty");

  let quantity = 1;

  decreaseQtyButton.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      quantitySpan.innerText = quantity;
      updateTotalPrice();
    }
  });

  increaseQtyButton.addEventListener("click", function () {
    quantity++;
    quantitySpan.innerText = quantity;
    updateTotalPrice();
  });

  // Function to update the total price based on the quantity
  function updateTotalPrice() {
    var Unitprice = parseFloat(price);
    calculatedPrice.innerText = Unitprice * quantity;
  }
});
