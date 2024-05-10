function clave() {
    var contraseña = document.getElementById("idpass").value;

    // Al menos 8 caracteres
    if (contraseña.length < 8) {
        document.getElementById("mensaje").className = "text-danger"
        document.getElementById("mensaje").innerHTML = "La contraseña debe tener al menos 8 caracteres.";
        return false;
    } else if (contraseña.length >= 8) {
        // Al menos un número
        var tieneNumero = false;
        for (var i = 0; i < contraseña.length; i++) {
            if (!isNaN(parseInt(contraseña[i]))) {
                tieneNumero = true;
                break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (!tieneNumero) {
            document.getElementById("mensaje").className = "text-danger"
            document.getElementById("mensaje").innerHTML = "La contraseña debe contener al menos un número.";
            return false;
        } else {
            // La contraseña es válida
            document.getElementById("mensaje").className = "text-success"
            document.getElementById("mensaje").innerHTML = "Contraseña valida";// Limpiar el mensaje de error si la contraseña es válida
            return true;
        }
    } else {
        // La contraseña es válida
        document.getElementById("mensaje").className = "text-success"
        document.getElementById("mensaje").innerHTML = "Contraseña valida";// Limpiar el mensaje de error si la contraseña es válida
        return true;
    }
}

function misma_clave() {
    var contraseña = document.getElementById("confirm-password").value;
    var contraseña_nueva = document.getElementById("idpass").value;

        if (contraseña_nueva==""){        
            document.getElementById("mensaje2").className = "text-danger"
            document.getElementById("mensaje2").innerHTML = "La contraseña no puede estar vacia";
            return false;
        }else if(contraseña_nueva!=contraseña){
            document.getElementById("mensaje2").className = "text-danger"
            document.getElementById("mensaje2").innerHTML = "La contraseña deben de ser iguales";
            return false;
        }else{
        // La contraseña es válida
            document.getElementById("mensaje2").className = "text-success"
            document.getElementById("mensaje2").innerHTML = "Contraseña valida";// Limpiar el mensaje de error si la contraseña es válida
            return true;  
        }
}

function submitpass() {
    if (clave() === true && misma_clave()===true) {
        window.location.href = "index.html"; 
    }
}


function submitForm() {
    if (clave() === true) {
        window.location.href = "index.html"; 
    }
}

function validar_nom() {
    let texto = document.getElementById("idnombre").value;
    if (texto == "" || texto.length <= 2) {
        document.getElementById("mensaje_nombre").className = "text-danger"
        document.getElementById("mensaje_nombre").innerHTML = "Debe llenar la información";
        return false;
    } else if (texto != "" && texto.length > 2) {
        var buscarnumero = false;
        for (var i = 0; i < texto.length; i++) {
            if (!isNaN(parseInt(texto[i]))) {
                buscarnumero = true;
                break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero) {
            document.getElementById("mensaje_nombre").className = "text-danger"
            document.getElementById("mensaje_nombre").innerHTML = "No puede tener numeros";
            return false;
        }else {
            document.getElementById("mensaje_nombre").className = "text-success"
            document.getElementById("mensaje_nombre").innerHTML = "Correcto";
            return true;
        }

    } else {
        document.getElementById("mensaje_nombre").className = "text-success"
        document.getElementById("mensaje_nombre").innerHTML = "Correcto";
        return true;
    }
}

function validar_apel() {
        let texto = document.getElementById("idapellido").value;
        if (texto == "" || texto.length <= 2) {
            document.getElementById("mensajea").className = "text-danger"
            document.getElementById("mensajea").innerHTML = "Debe llenar la información";
            return false;
        } else if (texto != "" && texto.length > 2) {
            var buscarnumero = false;
            for (var i = 0; i < texto.length; i++) {
                if (!isNaN(parseInt(texto[i]))) {
                    buscarnumero = true;
                    break; // Terminar el bucle una vez que se encuentre un número
                }
            }
            if (buscarnumero) {
                document.getElementById("mensajea").className = "text-danger"
                document.getElementById("mensajea").innerHTML = "No puede tener numeros";
                return false;
            }else {
                document.getElementById("mensajea").className = "text-success"
                document.getElementById("mensajea").innerHTML = "Correcto";
                return true;
            }
    
        }else {
            document.getElementById("mensajea").className = "text-success"
            document.getElementById("mensajea").innerHTML = "Correcto";
            return true;
        }

}

function validar_numero(){
    let celular = document.getElementById("idcelular").value;

        // Verificar si el número de celular tiene exactamente 8 dígitos
        if (celular.length !== 8 || isNaN(celular) || celular <0) {
            document.getElementById("mensaje_numero").className = "text-danger"
            document.getElementById("mensaje_numero").innerHTML = "El número de celular no es valido"
            return false;
        }else{
                        // La validación pasó, limpiar el mensaje de error y devolver true
            document.getElementById("mensaje_numero").className = "text-success"
            document.getElementById("mensaje_numero").innerHTML = "Correcto";
            return true;
        }      
}

function validar_direccion(){
    let direccion = document.getElementById("iddireccion").value;
    if (direccion == "" || direccion.length <= 3) {
        document.getElementById("mensaje_direccion").className = "text-danger"
        document.getElementById("mensaje_direccion").innerHTML = "Debe llenar la información";
        return false;
    }else{
        document.getElementById("mensaje_direccion").className = "text-success"
        document.getElementById("mensaje_direccion").innerHTML = "Correcto";
        return true;
    }
}

function validar_postal(){
    let postal = document.getElementById("idpostal").value;

        // Verificar si el número de celular tiene exactamente 8 dígitos
        if (postal.length !== 7 || isNaN(postal) || postal <0) {
            document.getElementById("mensaje_postal").className = "text-danger"
            document.getElementById("mensaje_postal").innerHTML = "El codigo postal no es valido"
            return false;
        }else{
                        // La validación pasó, limpiar el mensaje de error y devolver true
            document.getElementById("mensaje_postal").className = "text-success"
            document.getElementById("mensaje_postal").innerHTML = "Correcto";
            return true;
        }


        
}

function validar_email() {
    var email = document.getElementById("idemail").value;

    // Expresión regular para validar el formato de la dirección de correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo electrónico tiene un formato válido
    if (!regex.test(email)) {
        document.getElementById("mensaje_email").className = "text-danger"
        document.getElementById("mensaje_email").innerHTML = "El formato del correo electrónico no es válido.";
        return false;
    }else{
        document.getElementById("mensaje_email").className = "text-success"
        document.getElementById("mensaje_email").innerHTML = "Correcto";
        return true;
    }
    
}

function submitmod() {
    if (validar_nom() === true && clave() === true && validar_apel() === true && validar_numero() === true && validar_direccion() === true && validar_postal()=== true && validar_email()=== true) {
        window.location.href = "perfil.html"; 
    }
}

function menos(){
    let numero= parseInt(document.getElementById("aux").value);
    if(numero <=0){
        alert("Ya no es posible restar mas productos")
    } else{
        numero = numero-1;
        document.getElementById("aux").value = numero;
    }
}

function mas(){
    let numero= parseInt(document.getElementById("aux").value);
        numero = numero+1;
        document.getElementById("aux").value = numero;
}

function validarCantidadProductos() {
    var filas = document.querySelectorAll("#shoppingCart tbody tr");

    for (var i = 0; i < filas.length; i++) {
      var cantidad = parseInt(filas[i].querySelector("[data-th='Quantity'] input").value);
      if (cantidad <= 0 || isNaN(cantidad)) {
        alert("La cantidad de productos debe ser mayor que cero.");
        return false;
      }
    }
    
    alert("Actualizado.");
    return true;
}

function validar_rut() {
    var rutInput = document.getElementById('idrut').value;
    var mensajeRut = document.getElementById('mensaje_rut');

    // Expresión regular para validar el formato del RUT
    var rutRegex = /^(\d{1,3}(\.\d{3})*)\-([\dkK])$/;
    
    // Si el RUT no cumple con el formato, muestra un mensaje de error
    if (!rutRegex.test(rutInput)) {
      mensajeRut.textContent = 'Formato de RUT inválido (Debe contener punto y guion)';
      return false;
    }

    // Si el RUT cumple con el formato, verifica el dígito verificador
    var rut = rutInput.replace(/\./g,'').split('-');
    var numRut = rut[0];
    var verificador = rut[1];

    var suma = 0;
    var multiplo = 2;

    // Itera sobre los dígitos del RUT, de derecha a izquierda
    for (var i = numRut.length - 1; i >= 0; i--) {
      suma += parseInt(numRut.charAt(i)) * multiplo;
      if (multiplo < 7) {
        multiplo++;
      } else {
        multiplo = 2;
      }
    }

    // Calcula el dígito verificador esperado
    var resto = suma % 11;
    var dvEsperado = 11 - resto;
    if (dvEsperado == 10) {
      dvEsperado = 'k';
    } else if (dvEsperado == 11) {
      dvEsperado = '0';
    }

    // Compara el dígito verificador esperado con el ingresado
    if (dvEsperado.toString() !== verificador.toLowerCase()) {
      mensajeRut.textContent = 'RUT inválido';
      return false;
    }

    // Si todo está correcto, borra cualquier mensaje de error
    mensajeRut.className = 'text-success'
    mensajeRut.textContent = 'Rut valido';
    return true;
}

function submitcreate() {
    if (validar_nom() === true && clave() === true && validar_apel() === true && validar_numero() === true && validar_direccion() === true && validar_postal()=== true && validar_email()=== true && validar_rut()=== true) {
        window.location.href = "index.html";
    }
}

function validar_nom_tarjeta() {
    let texto = document.getElementById("idnombtarjeta").value;
    if (texto == "" || texto.length <= 2) {
        document.getElementById("mensaje_nombre_tarjeta").className = "text-danger"
        document.getElementById("mensaje_nombre_tarjeta").innerHTML = "Debe llenar la información";
        return false;
    } else if (texto != "" && texto.length > 2) {
        var buscarnumero = false;
        for (var i = 0; i < texto.length; i++) {
            if (!isNaN(parseInt(texto[i]))) {
                buscarnumero = true;
                break; // Terminar el bucle una vez que se encuentre un número
            }
        }
        if (buscarnumero) {
            document.getElementById("mensaje_nombre_tarjeta").className = "text-danger"
            document.getElementById("mensaje_nombre_tarjeta").innerHTML = "No puede tener numeros";
            return false;
        }else {
            document.getElementById("mensaje_nombre_tarjeta").className = "text-success"
            document.getElementById("mensaje_nombre_tarjeta").innerHTML = "Correcto";
            return true;
        }

    } else {
        document.getElementById("mensaje_nombre_tarjeta").className = "text-success"
        document.getElementById("mensaje_nombre_tarjeta").innerHTML = "Correcto";
        return true;
    }
}

function validar_num_tarjeta(){
    let numeroTarjeta = document.getElementById("idtarjeta").value;

        // Verificar si el número de tarjeta tiene exactamente 16 dígitos
        if (numeroTarjeta.length !== 16 || isNaN(numeroTarjeta) || numeroTarjeta <0) {
            document.getElementById("mensaje_numero_tarjeta").className = "text-danger"
            document.getElementById("mensaje_numero_tarjeta").innerHTML = "El número de tarjeta no es valido"
            return false;
        }else{
                        // La validación pasó, limpiar el mensaje de error y devolver true
            document.getElementById("mensaje_numero_tarjeta").className = "text-success"
            document.getElementById("mensaje_numero_tarjeta").innerHTML = "Correcto";
            return true;
        }  
}

function validar_cvv(){
    let cv = document.getElementById("idcvv").value;

        // Verificar si el número de tarjeta tiene exactamente 3 dígitos
        if (cv.length !== 3 || isNaN(cv) || cv <0) {
            document.getElementById("mensaje_cvv").className = "text-danger"
            document.getElementById("mensaje_cvv").innerHTML = "El número no es valido"
            return false;
        }else{
                        // La validación pasó, limpiar el mensaje de error y devolver true
            document.getElementById("mensaje_cvv").className = "text-success"
            document.getElementById("mensaje_cvv").innerHTML = "Correcto";
            return true;
        }      
}

function validar_fecha() {
    var fechaInput = document.getElementById('idfecha').value;
    var mensajeFecha = document.getElementById('mensaje_fecha');

    // Obtener la fecha actual
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11
    var anioActual = fechaActual.getFullYear();

    // Obtener el mes y el año de la fecha ingresada
    var partesFecha = fechaInput.split('-');
    var anioIngresado = parseInt(partesFecha[0]);
    var mesIngresado = parseInt(partesFecha[1]);

    // Verificar si la fecha ingresada es válida
    if (anioIngresado < anioActual || (anioIngresado === anioActual && mesIngresado < mesActual)) {
      mensajeFecha.textContent = 'La fecha de vencimiento debe ser en el futuro';
      return false;
    }

    // Si todo está correcto, borra cualquier mensaje de error
    mensajeFecha.className =  'text-success'
    mensajeFecha.textContent = 'correcto';
    return true;
  }

function submitpago() {
    if (validar_nom_tarjeta()=== true && validar_num_tarjeta()=== true 
    && validar_fecha()=== true && validar_cvv() === true) {
        window.location.href = "compra.html";
    }
}
