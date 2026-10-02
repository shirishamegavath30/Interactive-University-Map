// ==========================================
// SNIST Interactive University Navigation
// Dark Mode
// ==========================================

const darkBtn = document.getElementById("darkBtn");

let darkMode = false;

darkBtn.addEventListener("click", function () {

    darkMode = !darkMode;

    document.body.classList.toggle("dark");

    if (darkMode) {

        darkBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        darkBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});