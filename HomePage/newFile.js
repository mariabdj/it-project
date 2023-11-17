document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from page.html and populate the detail page
  const collectionItem = document.querySelector(".collection-item");

  const imgSrc = collectionItem.dataset.img;
  const productName = collectionItem.dataset.name;
  const productPrice = collectionItem.dataset.price;

  // Update the detail page with fetched data
  document.getElementById("productImg").src = imgSrc;
  document.getElementById("productName").innerText = productName;
  document.getElementById("productPrice").innerText = productPrice;
});
