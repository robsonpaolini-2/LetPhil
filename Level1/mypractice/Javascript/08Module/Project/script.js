

const buttons = document.querySelectorAll(".color-btn");
const resetButton = document.getElementById("reset");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        document.body.style.backgroundcolor = button.getAttribute("data-color");
    });
});

