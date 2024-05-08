    function validateForm() {
        var image = document.getElementById("image").files[0]; // Obtener el archivo de imagen
        var type = document.getElementById("type").value;
        var size = document.getElementById("Tamaño").value;
        var centimeters = document.getElementById("centimeters").value;
        var money = document.getElementById("money").value;
        var description = document.getElementById("description").value;

        // Validar que se adjunte una imagen
        if (!image) {
            alert("Por favor, adjunte una imagen.");
            return false;
        }

        // Validar que se seleccione una opción en tipo
        if (type === "") {
            alert("Por favor, seleccione un tipo.");
            return false;
        }

        // Validar que se seleccione una opción en tamaño
        if (size === "") {
            alert("Por favor, seleccione un tamaño.");
            return false;
        }

        // Validar que el campo de centímetros no esté vacío y solo contenga números positivos
        if (centimeters === "" || isNaN(centimeters) || centimeters <= 0) {
            alert("Por favor, ingrese un valor válido para los centímetros.");
            return false;
        }

        // Validar que el campo de dinero no esté vacío y sea un número positivo
        if (money === "" || isNaN(money) || money <= 0) {
            alert("Por favor, ingrese un valor válido para el dinero.");
            return false;
        }

        // Validar que la descripción no esté vacía
        if (description === "") {
            alert("Por favor, ingrese una descripción.");
            return false;
        }

        // Si pasa todas las validaciones, retornar true para enviar el formulario
        return true;
    }

