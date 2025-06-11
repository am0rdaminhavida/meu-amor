// main_script.js

// Love Counter Logic
const startDate = new Date("2024-01-18T20:30:00"); // 18 de janeiro de 2024 às 20:30

function updateLoveCounter() {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44); // Média de dias por mês
    const years = Math.floor(days / 365.25); // Média de dias por ano

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months % 12; // Meses restantes após anos
    document.getElementById("weeks").textContent = weeks % 4; // Semanas restantes após meses
    document.getElementById("days").textContent = days % 7; // Dias restantes após semanas
    document.getElementById("hours").textContent = hours % 24; // Horas restantes após dias
    document.getElementById("minutes").textContent = minutes % 60; // Minutos restantes após horas
    document.getElementById("seconds").textContent = seconds % 60; // Segundos restantes após minutos
}

setInterval(updateLoveCounter, 1000);
updateLoveCounter(); // Call immediately to avoid delay

// First Kiss Logic
document.querySelectorAll(".kiss-option").forEach(button => {
    button.addEventListener("click", function() {
        const selectedDate = this.dataset.date;
        const correctDate = "2023-11-08"; // 8 de novembro
        const kissMessage = document.getElementById("kissMessage");

        // Remove previous classes
        document.querySelectorAll(".kiss-option").forEach(btn => {
            btn.classList.remove("correct", "incorrect");
        });

        if (selectedDate === correctDate) {
            this.classList.add("correct");
            kissMessage.textContent = "Parabéns! Você acertou! Nosso primeiro beijo foi em 8 de Novembro!";
            kissMessage.classList.remove("incorrect-answer");
            kissMessage.classList.add("correct-answer");
        } else {
            this.classList.add("incorrect");
            kissMessage.textContent = "Ops! Essa não é a data. Tente novamente!";
            kissMessage.classList.remove("correct-answer");
            kissMessage.classList.add("incorrect-answer");
        }
    });
});

// Music Autoplay (with browser limitations)
window.addEventListener("load", () => {
    const backgroundMusic = document.getElementById("backgroundMusic");
    if (backgroundMusic) {
        backgroundMusic.play().catch(error => {
            console.log("Autoplay de música bloqueado pelo navegador.", error);
            // Opcional: Adicionar um botão para o usuário iniciar a música
        });
    }
});

