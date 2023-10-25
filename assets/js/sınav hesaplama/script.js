document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate-button");
    const totalSpan = document.getElementById("total");

    function inputCheck(input) {
        if (input.value > 100) {
            alert("Değer 100'den büyük olamaz.");
            input.value = 100; // Değeri otomatik olarak 100'e sınırla
        }
    }

    calculateButton.addEventListener("click", function() {
        const exam = parseFloat(document.getElementById("exam").value);
        const Speaking = parseFloat(document.getElementById("speaking").value);
        const listening = parseFloat(document.getElementById("listening").value);

        if (exam > 100 || Speaking > 100 || listening > 100) {
            alert("Value cannot be greater than 100.");
        } else {
            const totalGrade = (exam * 0.5) + (Speaking * 0.25) + (listening * 0.25);
            totalSpan.textContent = totalGrade.toFixed(2);
        }
    });
});
