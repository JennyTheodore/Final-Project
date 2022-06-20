// Initialize a new ItemsController with currentId set to 0
const itemsController = new ItemsController();

// Select the New Item Form
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemName = document.querySelector('#newItemName');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemImageUrl = document.querySelector('#newItemImageUrl');    
    const newEmail = document.querySelector('#newEmail');    

    // Get the values of the inputs
    const name = newItemName.value;
    const description = newItemDescription.value;
    const imageUrl = newItemImageUrl.value;
    const email = newEmail.value;

    /*
        Validation code here
    */

    // Add the item to the ItemsController
    itemsController.addItem(name, description, imageUrl, email);
    itemsController.saveItems();

    // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';    
    newItemImageUrl.value = '';    
    newEmail.value = '';    
});
