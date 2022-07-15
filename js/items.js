// const itemsController = new ItemsController(0);

let controller = new ItemsController();
controller.addItem("Else-formula", "liquid nutrition for baby's health", "https://images-na.ssl-images-amazon.com/images/I/41lVE92SsuL.jpg");
controller.addItem("Chicken", "liquid nutrition for baby's health", "https://images-na.ssl-images-amazon.com/images/I/41lVE92SsuL.jpg");
controller.addItem("Clock", "liquid nutrition for baby's health", "https://images-na.ssl-images-amazon.com/images/I/41lVE92SsuL.jpg");
console.log(controller.items);
controller.saveItems();

function displayCards() {
    controller.loadItems();
    controller.items.forEach(item => {
        let product =
        `<div class="card" data-id="${item.id}" style="width: 18rem;">
            <img src="${item.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
        let list = document.getElementById("list-items")
        list.innerHTML += product;
    });
}
displayCards();
