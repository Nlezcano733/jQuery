
$(()=>{
    makeCards(products, '.products');
    $('.card')
        .show()
        .css('display', 'grid');    

    checkInput();
})




createFilters('smartphone');
createFilters('video games');






$('#all-products').click(()=>{ scrollBody('.products') })
$('#smartphones').click(()=>{ scrollBody('.filter-smartphone') })
$('#games').click(()=>{ scrollBody('.filter-games') })