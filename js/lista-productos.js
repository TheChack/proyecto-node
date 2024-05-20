async function gridCreator() {
  const response = await fetch("../assets/json-products/products.json");
  const products = await response.json();
  console.log("esta tomando el script");
  let grid = products.map((item) => {
    let divTitle = `<div class="grid-title">${item.title}</div>`;
    let divPrice = `<div class="grid-price">${item.price}</div>`;
    let divImage = `<div class="grid-image"><img src="${item.image}"/></div>`;
    let div = `<div class="grid-item">${divImage} ${divTitle} ${divPrice} </div>`;
    return div;
  });
  return grid.join("");
}

document.addEventListener("DOMContentLoaded", function () {
  let gridHTML = gridCreator();
  document.getElementById("grid-container").innerHTML = gridHTML;
});
