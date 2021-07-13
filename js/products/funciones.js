const checkInput = () => {
    let inputProducts = getLocalStorage ('products'); 
    if(inputProducts){
        makeCards(inputProducts, '.products');
    }
}

const createFilters = (category) =>{
    let space = category.indexOf(' ');
    let title;

    if(space !== -1){
        let separatedNames = category.split(' ');
        category = separatedNames[1];
        let names = separatedNames.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
        title = names.join(' ');
    } else{
        title = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
    }

    createSection(category, title);
    filter(title, `.filter-${category}`);
}

const filter = (categoryName, container) => {
    let productsFiltered = products.filter( ({category}) => category === categoryName);
    makeCards(productsFiltered, container)
}
