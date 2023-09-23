document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-details");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    });
});
