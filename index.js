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

const libraryContainer = document.getElementById("library-container");

// Get the checkbox element by its ID
var checkbox = document.getElementById("checkbox-read");


// Add a click event listener to the "Cancel" button
cancelButton.addEventListener("click", function () {
    // Close the dialog when the "Cancel" button is clicked
    favDialog.close();
});

crossButton.addEventListener("click", function () {
  // Close the dialog when the "Cancel" button is clicked
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

  if (title === "" || author === "" || pages === "") {
    // alert("Please fill out all the fields: Title, Author, and Pages.");
  } else {
      // Proceed with form submission or any other action
      // For example, you can submit the form data to the server here

    // Create a new div element for bookContainer
    const bookContainer = document.createElement("div");
    // Set the id attribute for the created div element
    bookContainer.id = "book-container";
    
    // create a div element to view library 
    // Create a new paragraph element
    const titleParagraph = document.createElement("p");
    const authorParagraph = document.createElement("p");
    const pagesParagraph = document.createElement("p");

    // Create div element with id "checkbox-container"
    const checkboxContainer = document.createElement("div");
    checkboxContainer.id = "checkbox-container";

    // Create Remove book button
    const removeBookButton = document.createElement("button")
    removeBookButton.textContent = "Remove book"

    // Create input element
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.id = "checkbox-read";
    checkboxInput.name = "book-status";
    checkboxInput.value = "read";

    // Create label element
    const checkboxLabel = document.createElement("label");
    checkboxLabel.htmlFor = "checkbox-read";
    checkboxLabel.textContent = "Book Read";

    // Check if the checkbox is checked
    if (checkbox.checked) {
      // Checkbox is checked
      console.log("Checkbox is checked. Value: " + checkbox.value);
      checkboxInput.checked = true;
    } else {
      // Checkbox is not checked
      console.log("Checkbox is not checked.");
      checkboxInput.checked = false;
    }

    // Append input and label elements to the checkboxContainer
    checkboxContainer.appendChild(checkboxInput);
    checkboxContainer.appendChild(checkboxLabel);

    // Set the content of the paragraph element
    titleParagraph.textContent = "Title: " + title;
    authorParagraph.textContent = "Author:" + author;
    pagesParagraph.textContent = "Total Pages: " + pages;

    // Append the paragraph element to the bookContainer
    bookContainer.appendChild(titleParagraph);
    bookContainer.appendChild(authorParagraph);
    bookContainer.appendChild(pagesParagraph);
    bookContainer.appendChild(checkboxContainer);
    bookContainer.appendChild(removeBookButton);

    libraryContainer.appendChild(bookContainer);

    removeBookButton.addEventListener("click", ()=>{
      bookContainer.remove();
    })
  }



});

const addBookButton = document.getElementById("add-book-button")
//const favDialog = document.getElementById("favDialog");

addBookButton.addEventListener("click", ()=> {
  console.log("Add Book: clicked!")
  favDialog.showModal()
});