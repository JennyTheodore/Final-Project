// Initialize a new ItemsController with currentId set to 0
const itemsController = new ItemsController();

// Add an 'onsubmit' event listener
const newItemForm = document.getElementById("newItemForm");
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newName = document.querySelector('#newItemName');
    const newDescription = document.querySelector('#newItemDescription');
    const newImgUrl = document.querySelector('#newItemImgUrl');
    // Grab input values
    const name = newName.value;
    const description = newDescription.value;
    const imgUrl = newImgUrl.value;

    // Add item to DB
    itemsController.saveDb({name, description, imgUrl});
    // displayCards();
    itemsController.loadItems();

    // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';
    newItemImgUrl.value = '';
});

const list = document.getElementById("list-items")
list.addEventListener('click', (event) => {
    // Grab targets id
    const itemId = event.target.parentNode.parentNode.getAttribute("data-id");
    // // Grab targets inputs by id
    // const itemName = event.target.parentNode.childNodes[0];
    // const itemDescription = event.target.parentNode.innerHTML;
    // const itemImgUrl = event.target.parentNode.innerHTML;

    if (event.target.textContent === "Delete") {
        // Delete the item with selected id from DB
        itemsController.delete(itemId);
        // Alert deleted item
        alert(`Item deleted`);
        //Reload the DB
        itemsController.loadItems();
        // Show current itemlist of DB as cards
        displayCards();
    } else if (event.target.textContent === "View") {
        itemsController.findById(itemId);
    } else if (event.target.textContent === "Edit") {
        itemsController.update(itemId);

        itemsController.update({name, description, imageUrl})
        const name =
        const description =
        const url =
    }
});

let exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    let button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    let title = button.getAttribute('data-bs-title');
    let description = button.getAttribute('data-bs-description');
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    let modalTitle = exampleModal.querySelector('.modal-title');
    let modalBody = exampleModal.querySelector('.modal-body');

    modalTitle.textContent = title;
    modalBody.textContent = description;
})

function displayCards() {
    let list = document.getElementById("list-items");
    list.innerHTML = "";
    itemsController.items.forEach(item => {
            let card = `
            <div class="card" data-id="${item.id}" style="width: 18rem;">
                <img src="${item.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-title="${item.name}" data-bs-description="${item.description}">
                        View
                    </button>
                    <a href="#" class="btn btn-primary delete">Delete</a>
                    <a href="#" class="btn btn-primary edit">Edit</a>
                </div>
            </div>`;
            list.innerHTML += card;
        });
}
