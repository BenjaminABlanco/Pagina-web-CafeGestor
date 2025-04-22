document.getElementById('mi-formulario').onsubmit = function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Aquí puedes agregar la lógica para enviar el formulario usando AJAX si es necesario

    // Muestra el mensaje de éxito
    const mensajeExito = document.getElementById('mensaje-exito');
    mensajeExito.style.display = 'block';

    // Limpia el formulario
    this.reset();

    // Hace que el mensaje desaparezca después de 3 segundos
    setTimeout(function() {
        mensajeExito.style.display = 'none';
    }, 3000);
};