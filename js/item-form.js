// Initialize a new ItemsController with currentId set to 0
const itemsController = new ItemsController();

function displayCards() {
    itemsController.loadItems();
    itemsController.items.forEach(item => {
        let product =
        `<div class="card" data-id="${item.id}" style="width: 18rem;">
            <img src="${item.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <a href="#" class="btn btn-primary">Delete</a>
                <a href="#" class="btn btn-primary">Edit</a>
            </div>
        </div>`;
        let list = document.getElementById("list-items")
        list.innerHTML += product;
    });
}
displayCards();

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemName = document.querySelector('#newItemName');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemImageUrl = document.querySelector('#newItemImageUrl');

    // Get the values of the inputs
    const name = newItemName.value;
    const description = newItemDescription.value;
    const imageUrl = newItemImageUrl.value;

    /*
        Validation code here
    */

    // Add the item to the ItemsController
    itemsController.addItem(name, description, imageUrl);
    itemsController.saveItems();
    itemsController.save(name, description, imageUrl);

    // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';
    newItemImageUrl.value = '';
});
