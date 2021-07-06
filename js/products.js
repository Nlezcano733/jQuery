const showData = () =>{
    products.forEach(item => console.log(item.name))
}
showData();

// ========================================================== //

const checkInput = () => {
    let inputProducts = getLocalStorage ('products'); 
    makeCards(inputProducts, '.products');
}

const getLocalStorage = (key) => {
    let infoString = localStorage.getItem(key)
    return JSON.parse(infoString);
}

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


makeCards(products, '.products');
checkInput();