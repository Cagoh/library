const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here

}

// Get references to the input fields and the "Add" button
const inputTitle = document.getElementById("input-title");
const inputAuthor = document.getElementById("input-author");
const inputPages = document.getElementById("input-pages");
const addButton = document.getElementById("add-button");

const favDialog = document.getElementById("favDialog");
const cancelButton = document.getElementById("cancel-button");
const crossButton = document.getElementById("cross-button");

// Add a click event listener to the "Cancel" button
cancelButton.addEventListener("click", function () {
    // Close the dialog when the "Cancel" button is clicked
    console.log("X!")
    favDialog.close();
});

// Add a click event listener to the "x" button
crossButton.addEventListener("click", function () {
  // Close the dialog when the "Cancel" button is clicked
  console.log("Cancel!")
  favDialog.close();
});

// Add a click event listener to the "Add" button
addButton.addEventListener("click", function() {
  // Get the values from the input fields
  const title = inputTitle.value;
  const author = inputAuthor.value;
  const pages = inputPages.value;

  // Do something with the values (e.g., display them)
  console.log("Title:", title);
  console.log("Author:", author);
  console.log("Pages:", pages);

  // You can also perform other actions, like adding the values to a list or sending them to a server.
});

const addBookButton = document.getElementById("add-book-button")
//const favDialog = document.getElementById("favDialog");

addBookButton.addEventListener("click", ()=> {
  console.log("Add Book: clicked!")
  favDialog.showModal()
})

// favDialog.addEventListener("close", (e) => {
//   outputBox.value =
//     favDialog.returnValue === "default"
//       ? "No return value."
//       : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
// });