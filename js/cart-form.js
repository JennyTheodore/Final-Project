// Initialize a new ItemsController with currentId set to 0
const cartController = new CartController();

function displayCards() {
  let list = document.getElementsByTagName("tbody");
  list.innerHTML = "";
  cartController.items.forEach((item) => {
    let row = `
            <tr>
              <td><a href="#"><box-icon name='x-circle'></box-icon></a></td>
              <td><img src="${item.imgUrl}" alt=""></td>
              <td>${item.name}</td>
              <td>$ ${item.price}</td>
              <td><input type="number" value="1"></td>
              <td>$ ${item.price}</td>
            </tr>`;
    list.innerHTML += row;
  });
}
