// JavaScript para el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Aquí podrías agregar la lógica para enviar el formulario por AJAX
    // Por ahora, solo mostraremos un mensaje de confirmación en la consola
    console.log('Formulario enviado');
});

