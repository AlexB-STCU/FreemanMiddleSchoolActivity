
// Make the tiger image flip when the user clicks on it
const image = document.getElementById("tigerImage");
image.style.transition = "transform 1s";
image.onclick = function () {
    if (image.style.transform == "rotate(360deg)") {
        image.style.transform = "rotate(0deg)";
    } else {
        image.style.transform = "rotate(360deg)";
    }
};


// Advanced!
// Add messages to the page for our friends!
var form = document.getElementById("send-message");
form.onsubmit = function (e) {
    // keeps the page from reloading when the form is submitted
    e.preventDefault();

    // get the message from the input field
    var message = document.getElementById("message").value;

    // display the message on the page by adding it to the message list
    document
        .getElementById("message-list")
        .appendChild(document.createElement("p"))
        .appendChild(document.createTextNode(message));

    // clear the input field
    document.getElementById("message").value = "";
};