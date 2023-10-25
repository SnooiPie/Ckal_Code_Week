document.addEventListener("DOMContentLoaded", function () {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");
    const shuffleButton = document.getElementById("shuffleButton");

    // Kareleri oluştur
    function createSquares(container, count) {
        for (let i = 1; i <= count; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.textContent = i;
            container.appendChild(square);
        }
    }

    createSquares(container1, 12);
    createSquares(container2, 6);
    createSquares(container3, 12);

    // Diziyi karıştıran fonksiyon
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Kareleri karıştır
    shuffleButton.addEventListener("click", function () {
        const squares = Array.from(document.querySelectorAll(".square"));
        shuffleArray(squares);
        squares.forEach((square, index) => {
            square.textContent = index + 1;
        });
    });
});
