// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the constructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description, imgUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imgUrl: imgUrl
        };

        // Push the item to the items property
        this.items.push(item);
        // this.loadItems();
    }

    loadItems() {
        const list = localStorage.getItem("items")
        this.items = JSON.parse(list);
        const id = localStorage.getItem("id")
        this.currentId = JSON.parse(id);
    }

    saveLocal() {
        localStorage.setItem("items", JSON.stringify(this.items));
        localStorage.setItem("id", JSON.stringify(this.currentId));
    }
    saveDb({name, description, imgUrl}){
        const data = { name,  description, imgUrl };

        fetch('http://localhost:8080/api/item/add', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    // update({name, description, imageUrl}){
    //     const data = { name,  description, imageUrl };

    //     fetch('http://localhost:8080/api/item', {
    //     method: 'PUT', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //     console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //     console.error('Error:', error);
    //     });
    // }

    delete(itemId){

        fetch(`http://localhost:8080/api/item/${itemId}`, {
        method: 'DELETE', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    // findById(itemId){

    //     fetch(`http://localhost:8080/item/${itemId}`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //     console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //     console.error('Error:', error);
    //     });
    // }
}
