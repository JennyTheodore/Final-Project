// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the constructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }
    // Create the addItem method
    addItem(name, price, quantity, imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            price: price,
            quantity: quantity,
            imageUrl: imageUrl
        };
        // Push the item to the items property
        this.items.push(item);
    }
    saveItems() {
        localStorage.setItem("items", JSON.stringify(this.items));
        localStorage.setItem("id", JSON.stringify(this.currentId));
    }
    loadItems() {
        const list = localStorage.getItem("items")
        this.items = JSON.parse(list);
        const id = localStorage.getItem("id")
        this.currentId = JSON.parse(id);
    }
}


