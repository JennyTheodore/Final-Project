// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the constructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description,imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };

        // Push the item to the items property
        this.items.push(item);
    }
}

let newItem = new ItemsController();
newItem.addItem("Else-formula", "liquid nutrition for baby's health", "https://images-na.ssl-images-amazon.com/images/I/41lVE92SsuL.jpg");
newItem.addItem("Else", "liquid nutrition for baby's health", "https://images-na.ssl-images-amazon.com/images/I/41lVE92SsuL.jpg");
console.log(newItem.items);