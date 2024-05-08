function validateLoginForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var isValid = true;

    // Limpiar mensajes de error anteriores
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (element) {
        element.textContent = '';
    });

    // Validar el correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Por favor, ingrese un correo electrónico válido.";
        isValid = false;
    }

    // Validar la contraseña
    if (password.length < 8 || !/\d/.test(password)) {
        document.getElementById("password-error").textContent = "La contraseña no es valida.";
        isValid = false;
    }

    return isValid;
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    if (!validateLoginForm()) {
        event.preventDefault(); // Evitar que se envíe el formulario si la validación falla
    }
});