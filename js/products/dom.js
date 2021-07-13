const createSection = (className, title) => {
    $('main').append(`
      <section class="container-grid filter filter-${className}">
        <h2 class="col-full products-title">${title}</h2>
      </section>`
    );
}

const scrollBody = (ubication) => {
    const NAVBAR_HEIGHT = 60;

    $('html, body').animate({
        scrollTop: $(ubication).offset().top - NAVBAR_HEIGHT
    }, 1000);
    
}