async function gridCreator() {
  const response = await fetch("../assets/json-products/products.json");
  const products = await response.json();
  console.log("esta tomando el script");
  let grid = products.map((item, index) => {
    let divTitle = `<div class="grid-title">${item.title}</div>`;
    let divPrice = `<div class="grid-price">${item.price}</div>`;
    let divImage = `<div class="grid-image"><img alt="grid-${index}" src="${item.image}"/></div>`;
    let div = `<a href="./producto.html"><div class="grid-item">${divImage} ${divTitle} ${divPrice} </div></a>`;
    return div;
  });
  return grid.join("");
}

document.addEventListener("DOMContentLoaded", async function () {
  let gridHTML = await gridCreator();
  document.getElementById("grid-container").innerHTML = gridHTML;
});
