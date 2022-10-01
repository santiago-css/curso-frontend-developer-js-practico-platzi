const dropmenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHumIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const prodtuctDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const buttonProductClose = document.querySelector('.product-detail-close');


dropmenu.addEventListener('click', toggDesktopMenu);
menuHumIcon.addEventListener('click', toggMobileMenu )   
menuCartIcon.addEventListener('click', toggCartIcon )
buttonProductClose.addEventListener('click', closeProductDetail);

function toggDesktopMenu(){
    const isProducDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isProducDetailClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggMobileMenu(){
    const isProducDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isProducDetailClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetail();
}
function toggCartIcon(){
    const isMobileClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMuneClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = prodtuctDetailContainer.classList.contains('inactive');

    if (!isDesktopMuneClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isMobileClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        prodtuctDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetail (){
    shoppingCartContainer.classList.add('inactive')
    prodtuctDetailContainer.classList.remove('inactive');
}
function closeProductDetail(){
    prodtuctDetailContainer.classList.add('inactive');
}
const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Mouse',
    price: 80,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Keyboard',
    price: 220,
    image: 'https://images.pexels.com/photos/211492/pexels-photo-211492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computer',
    price: 1020,
    image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Nunca Pares De Aprender',
    price: '💚',
    image: 'data:image/png;base64,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',
});
productList.push({
    name: 'Phone',
    price: 550,
    image: 'https://images.pexels.com/photos/3756879/pexels-photo-3756879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
function renderProducts(arr){
    for (product of arr){
        const prodtuctCard = document.createElement('div');
        prodtuctCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productFigure = document.createElement('figure');
        const iconCartAdd = document.createElement('img');
        iconCartAdd.setAttribute('src', '../icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(iconCartAdd);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        prodtuctCard.appendChild(productImage);
        prodtuctCard.appendChild(productInfo);
    
        cardsContainer.appendChild(prodtuctCard);
    }
};
renderProducts(productList);
