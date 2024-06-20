document.addEventListener('DOMContentLoaded', function() {
    // Espera a que se cargue completamente el DOM antes de ejecutar el código
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    checkboxes.forEach(function(checkbox) {
        // Para cada checkbox encontrado en el documento
        checkbox.addEventListener('change', function() {
            // Añade un event listener para el evento 'change' (cambio)
            const price = parseInt(this.value); // Obtiene el valor numérico del checkbox
            if (this.checked) {
                // Si el checkbox está marcado
                totalPrice += price; // Añade el precio al precio total
            } else {
                // Si el checkbox está desmarcado
                totalPrice -= price; // Resta el precio del precio total
            }
            totalPriceElement.textContent = totalPrice; // Actualiza el elemento HTML con el precio total
        });
    });
});
