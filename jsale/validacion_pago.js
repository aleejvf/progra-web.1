
function validarFormulario() {
    var nombre = document.getElementById("nombrep").value.trim();
    var apellido = document.getElementById("lastNamep").value.trim();
    var email = document.getElementById("emailp").value.trim();
    var rut = document.getElementById("rutp").value.trim();
    var direccion = document.getElementById("addressp").value.trim();
    var codigoPostal = document.getElementById("zipp").value.trim();
    var nombreTitular = document.getElementById("cc-name").value.trim();
    var numeroTarjeta = document.getElementById("cc-number").value.trim();
    var fechaVencimiento = document.getElementById("cc-expiration").value.trim();
    var cvv = document.getElementById("cc-cvv").value.trim();

    var formularioValido = true;

    var soloLetras = /^[a-zA-Z\s]*$/;
    var formatoRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
    var soloNumeros = /^[0-9]+$/;

    // Validar nombre
    if (nombre === "") {
        document.getElementById("mensaje_nombre").innerHTML = "Por favor, ingresa tu nombre.";
        formularioValido = false;
    } else if (!soloLetras.test(nombre) || nombre.length < 2) {
        document.getElementById("mensaje_nombre").innerHTML = "Nombre inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_nombre").innerHTML = "";
    }

    // Validar apellido
    if (apellido === "") {
        document.getElementById("mensaje_apellido").innerHTML = "Por favor, ingresa tu apellido.";
        formularioValido = false;
    } else if (!soloLetras.test(apellido) || apellido.length < 2) {
        document.getElementById("mensaje_apellido").innerHTML = "Apellido inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_apellido").innerHTML = "";
    }

    // Validar email
    // Aquí puedes agregar la validación del email si lo necesitas

    // Validar rut
    if (rut === "") {
        document.getElementById("mensaje_rut").innerHTML = "Por favor, ingresa tu RUT.";
        formularioValido = false;
    } else if (!formatoRut.test(rut)) {
        document.getElementById("mensaje_rut").innerHTML = "RUT inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_rut").innerHTML = "";
    }

    // Validar dirección
    if (direccion === "") {
        document.getElementById("mensaje_direccion").innerHTML = "Por favor, ingresa tu dirección.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_direccion").innerHTML = "";
    }

    // Validar código postal
    if (codigoPostal === "" || !soloNumeros.test(codigoPostal) || codigoPostal.length !== 7) {
        document.getElementById("mensaje_codigo_postal").innerHTML = "Código postal inválido.";
        formularioValido = false;
    } else {
        document.getElementById("mensaje_codigo_postal").innerHTML = "";
    }

    // Validar nombre del titular
    // Puedes agregar más validaciones aquí si es necesario

    // Si el formulario es válido, puedes enviarlo
    if (formularioValido) {
        // Redirigir a la página de compra
        window.location.href = "Index_compra.html";
    }

    return false; // Evitar que el formulario se envíe automáticamente
}
