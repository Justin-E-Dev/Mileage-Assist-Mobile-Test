console.log("JS is working");

const addButton = document.getElementById("add-contact-btn");
const clientInfoContainer = document.getElementById("add-contact-form");


clientInfoContainer.hidden = true;

addButton.addEventListener("click", () => {
    clientInfoContainer.hidden = !clientInfoContainer.hidden;
});

