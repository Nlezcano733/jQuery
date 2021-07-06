class Article {
    constructor(name, category, price, img){
        this.name = this.getName(name);
        this.id = this.getId(this.name);
        this.category = this.getName(category);
        this.price = price;
        this.img = img;
    }

    configWord (text) {
        let words = text.split(' ');
        return words.map(w => this.capitalizer(w))
    }

    getName(name) {
        let completeName = this.configWord(name);
        return completeName.join(' ')
    }

    getId (name) {
        let separator = name.indexOf(' ');
        if(separator === -1){
            return this.capitalizer(this.name)
        } else {
            let completeName = this.configWord(this.name);
            return completeName.join('');
        }
    }

    capitalizer (text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
}

// =============================================================================== //

const submitForm = () =>{
    let btn = document.getElementById('submit');
    btn.addEventListener('click', fillForm);
}


// FORMA FACIL

const fillForm = () =>{
    let name = $('#name').val()
    let category = $('#category').val()
    let price = $('#price').val()
    let img = $('#img').val()
    
    let newProduct = new Article (name, category, price, img);
    makeCards([newProduct], '.form');
}

// =============================================================================== //


// =============================================================================== //

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

// =============================================================================== //


submitForm();