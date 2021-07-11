const fillForm = () =>{
    let name = $('#name').val()
    let category = $('#category').val()
    let price = $('#price').val()
    let img = $('#img').val()
    
    let data = [name, category, price, img];
    let dataOk = [];

    for(value of data){
        validatedInfo = validationInfo(value);
        if (validatedInfo) {
            dataOk.push(validatedInfo)
        } else {
            break
        }
    }

    if( dataOk.length === data.length ){
        let [name, category, price, img] = dataOk
        price = parseInt(price);
        let newProduct = new Article (name, category, price, img);

        addToStorage(newProduct, 'products');
        makeCards([newProduct], '.form');
    }
}

const validationInfo = (data) => {
    if(data){
        return data.trim();
    } else {
        mensajeError();
        return false
    }
}

const addToStorage = (info, key) => {
    let actualData = getLocalStorage(key);

    if(actualData && actualData.length > 0){
        actualData.push(info);
    } else {
        actualData = [info];
    }

    toLocalStorage(actualData, key)
}