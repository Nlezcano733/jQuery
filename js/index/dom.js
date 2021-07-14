const mensajeError = () =>{
    $('#btn-container').append(`<p>Por favor, complete todos los casilleros </p>`)

    //modo parametro 
    // $('#btn-container p').css('color', '#ff2200');

    //modo objeto
    // $('#btn-container p').css({
    //     'display': 'inline-block',
    //     'width': 'fit-content',
    //     'padding': '0px'
    // })

    // agregar clases
    $('#btn-container p').attr('class', 'messageError');


    $('.form-input_entry').css('border', '1px solid red');

    setTimeout(()=>{
        $('.messageError').remove();
        $('.form-input_entry').removeAttr('style');
    }, 2500);
}




const showButtons = () => {
    $('.handle-card').slideToggle();

    //agregar evento que muestre y oculte la carta usando el boton $('#show') para mostrar y $('#hide') para ocultar
    // la clase de la carta es '.card'

    $('#show').click(()=> { 
        $('.card').fadeIn()
    })

    $('#hide').click(()=> { $('.card').hide()})
} 