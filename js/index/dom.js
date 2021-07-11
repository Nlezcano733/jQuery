const submitForm = () =>{
    let btn = document.getElementById('submit');
    btn.addEventListener('click', fillForm);
}

const mensajeError = () =>{
    $('#btn-container').append(`<p class="mensajeError">Por favor, complete todos los casilleros </p>`);

    setTimeout(()=>{
        $('.mensajeError').remove();
    }, 2500);
}