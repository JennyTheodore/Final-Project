// Initialize a new CartController with currentId set to 0
const cartController = new CartController();

// Event Listener for Card View button showing modal
let add = document.getElementById("page-container");
add.addEventListener("click", function (event) {
  if (event.target.textContent === "Add to Cart") {
    // Extract info from data-bs-* attributes
    let button = event.target.parentElement.childNodes;
    console.log(button);
    // let name = button.getAttribute("data-bs-name");
    // let description = button.getAttribute("data-bs-description");
    // let imgUrl = button.getAttribute("data-bs-imgUrl");

    // Add to item to cart by LocalStorage
    // cartController.addItem(name, description, imgUrl);
  }

  // cartCounter();


  // Update the modal's content.
  // let modalTitle = exampleModal.querySelector(".modal-title");
  // let modalName = exampleModal.querySelector("#name");
  // let modalDescription = exampleModal.querySelector("#description");
  // let modalImgUrl = exampleModal.querySelector("#imgUrl");

  // modalTitle.textContent = id;
  // modalName.value = name;
  // modalDescription.value = description;
  // modalImgUrl.value = imgUrl;
});

// Increment Cart Counter by each item added to cart
function cartCounter() {
  let cartLogo = document.getElementById("cartLogo");
  cartLogo++;
}
