document.getElementById("enterButton").addEventListener("click", function() {
    const passwordInput = document.getElementById("passwordInput");
    const errorMessage = document.getElementById("errorMessage");
    const password = passwordInput.value;

    // Senha: 1801
    if (password === "1801") {
        window.location.href = "main.html"; // Redireciona para a página principal
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente!";
        passwordInput.value = ""; // Limpa o campo da senha
    }
});

document.getElementById("passwordInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("enterButton").click();
    }
});

