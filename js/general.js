// ==================== STORAGE ===================== //
const toLocalStorage = (info, key) => {
    let infoString = JSON.stringify(info);
    localStorage.setItem(key, infoString);
}

const toSessionStorage = (info, key) => {
    let infoString = JSON.stringify(info);
    sessionStorage.setItem(key, infoString);
}

const getLocalStorage = (key) => {
    let infoString = localStorage.getItem(key)
    return JSON.parse(infoString);
}
// ==================== DOM  ===================== //

const makeCards = (prods, container) =>{
    prods.forEach(item => showCard(item,container))
}

const showCard = (object, container) =>{
    $(container).append(`
        <div class="col-four card">
            <div class="card-img">
                <img src=${object.img} alt=${object.name}">
            </div>
            <h3 class="card-name">${object.name}</h3>
            <h3 class="card-price">$${object.price}</h3>
            <p class="card-id">Id: ${object.id}</p>
            <p class="card-category">${object.category}</p>
        </div>
    `)
}

const modifyCard = (prod) => {
    $('.card-img img').attr('src', prod.img);
    $('.card-name').text(prod.name);
    $('.card-price').text(prod.price);
    $('.card-id').text(prod.id);
    $('.card-category').text(prod.category);
}

