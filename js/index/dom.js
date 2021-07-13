const mensajeError = () =>{
    $('#btn-container').append(`<p>Por favor, complete todos los casilleros </p>`)
}

const showButtons = () => {
    $('.handle-card').show();

    //agregar evento que muestre y oculte la carta usando el boton $('#show') para mostrar y $('hide') para ocultar
    // la clase de la carta es '.card'
} 