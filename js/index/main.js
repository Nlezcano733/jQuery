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


// ======================================================= //


$(()=>{
    $('#submit').click(fillForm);

    $('#delete').click(()=>{
        $('.handle-card').hide();
        $('.card').hide();
    })
})

