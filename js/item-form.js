// Initialize a new ItemsController with currentId set to 0
const itemsController = new ItemsController();

function displayCards() {
    itemsController.loadItems();
    itemsController.items.forEach(item => {
            let product = `<div class="card" data-id="${item.id}" style="width: 18rem;">
            <img src="${item.imgUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a href="#" class="btn btn-primary go">Go somewhere</a>
                <a href="#" class="btn btn-primary delete">Delete</a>
                <a href="#" class="btn btn-primary edit">Edit</a>
            </div>
        </div>`;
            let list = document.getElementById("list-items");
            list.innerHTML += product;
        });
}
// Add an 'onsubmit' event listener
const newItemForm = document.getElementById("newItemForm");
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newName = document.querySelector('#newItemName');
    const newDescription = document.querySelector('#newItemDescription');
    const newImgUrl = document.querySelector('#newItemImgUrl');
    // Grap input values
    const name = newName.value;
    const description = newDescription.value;
    const imgUrl = newImgUrl.value;

    // Add the item to the Local Storage
    itemsController.addItem(name, description, imgUrl);
    itemsController.saveLocal(name, description, imgUrl);
    // Add item to DB
    itemsController.saveDb({name, description, imgUrl});
    displayCards();

    // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';
    newItemImgUrl.value = '';
});

// const remove = document.getElementsByClassName("delete");
// remove.addEventListener('click', (event) => {
//     // Grab targets id to delete
//     const itemId = event.target.getAtrribute('id');
//     // Delete the item with selected id from DB
//     itemsController.delete(itemId);
//     // Show current itemlist of DB as cards
//     displayCards();
// });
