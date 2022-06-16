// const itemsController = new ItemsController(0);

let controller = new ItemsController();
controller.addItem("Else-formula", "liquid nutrition for baby's health", "https://images-na.ssl-images-amazon.com/images/I/41lVE92SsuL.jpg");
controller.addItem("Chicken", "liquid nutrition for baby's health", "https://images-na.ssl-images-amazon.com/images/I/41lVE92SsuL.jpg");
controller.addItem("Clock", "liquid nutrition for baby's health", "https://images-na.ssl-images-amazon.com/images/I/41lVE92SsuL.jpg");
console.log(controller.items);
controller.saveItems();

function displayCart() {
    controller.loadItems();
    controller.items.forEach(item => {
        let product = 
        `
        <tr>
            <td><a href="#"><box-icon name='x-circle'></box-icon></a></td>
            <td><img src="${item.imageUrl}" alt=""></td>
            <td>${item.name}</td>
            <td>$ ${item.price}</td>
            <td><input type="number" value="${item.quantity}"></td>
            <td>${item.price * item.quantity} </td>
        </tr>
        `;
        let list = document.getElementsByTagName("tbody");
        list.innerHTML += product;
    });
}

displayCart();
