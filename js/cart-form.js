// Initialize a new ItemsController with currentId set to 0
const cartController = new CartController();

function displayCart() {
  let list = document.getElementById("cartList");
  list.innerHTML = "";
  cartController.items.forEach((item) => {
    let row = `
            <tr>
              <td>
                <box-icon name='x-circle' data-bs-id="${item.id}"></box-icon>
              </td>
              <td>
                <img src="${item.imgUrl}" alt="">
              </td>
              <td>${item.name}</td>
              <td>${item.price}</td>
              <td>
                <input id="quantity" type="number" value="1" min="0" data-bs-price="${item.price}">
              </td>
              <td class="subTotal">${item.price}</td>
            </tr>`;
    list.innerHTML += row;
  });
}

window.onload = function () {
  cartController.loadItems();
};

let cartList = document.getElementById("cartList");
cartList.addEventListener("click", function (event) {
  let x = event.target;
  let itemQuantity = x.value;
  let itemId = x.getAttribute("data-bs-id");
  let itemPrice = x.getAttribute("data-bs-price");
  if (x.tagName === "BOX-ICON") {
    cartController.delete(itemId);
    cartController.loadItems();
  }
  if (x.tagName === "INPUT") {
    let itemSubTotal = event.target.parentElement.nextElementSibling;
    let arr = itemPrice.split("");
    arr.shift();
    itemPrice = arr.join("");
    itemSubTotal.textContent = "$" + itemPrice * itemQuantity;
    let addSubTotal = document.getElementsByClassName("subTotal");
    let sum = 0;
    for (let i = 0; i < addSubTotal.length; i++) {
      let arr = addSubTotal[i].textContent.split("");
      arr.shift();
      sub = arr.join("");
      sum += parseFloat(sub);
    }
    let subTotal = document.getElementById("subTotal");
    subTotal.textContent = "$" + sum.toString();

    let total = document.getElementById("total");
    total.textContent = "$" + sum.toString();
  }
});
