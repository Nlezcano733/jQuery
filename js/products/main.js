const checkInput = () => {
    let inputProducts = getLocalStorage ('products'); 
    makeCards(inputProducts, '.products');
}

makeCards(products, '.products');
checkInput();
showData();