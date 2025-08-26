let $ = document;

let allProDucts = [{
        id: 1,
        title: "Album 1",
        price: 12,
        img: "Images-ja225/Album 1.png" ,
        count: 1
    },
    {
        id: 2,
        title: "Album 2",
        price: 21,
        img: "Images-ja225/Album 2.png" ,
        count: 1
    },
    {
        id: 3,
        title: "Album 3",
        price: 33,
        img: "Images-ja225/Album 3.png" ,
        count: 1
    },
    {
        id: 4,
        title: "Album 4",
        price: 41,
        img: "Images-ja225/Album 4.png" ,
        count: 1
    },
    {
        id: 5,
        title: "Cofee",
        price: 98,
        img: "Images-ja225/Album 2.png" ,
        count: 1
    },
    {
        id: 6,
        title: "Shirt",
        price: 65,
        img: "Images-ja225/Shirt.png" ,
        count: 1
    },
]

let userBasket = [];


const shopItemsContainer = $.querySelector(".shop-items")
const basketProductsContainer = $.querySelector(".cart-items")
const removeAllProductsBtn = $.querySelector("#removeAllProducts")
const cartTotalPriceElem = $.querySelector(".cart-total-price")


allProDucts.forEach(function (product) {
    let productContainer = $.createElement("div")
    productContainer.classList.add("shop-item")

    let productTitleSpan = $.createElement("span")
    productTitleSpan.classList.add("shop-item-title")
    productTitleSpan.innerHTML = product.title

    let productImageElem = $.createElement("img")
    productImageElem.setAttribute("src", product.img)
    productImageElem.classList.add("shop-item-image")

    let productdetailsContainer = $.createElement("div")
    productdetailsContainer.classList.add("shop-item-details")

    let productPriceSpan = $.createElement("span")
    productPriceSpan.classList.add("shop-item-price")
    productPriceSpan.innerHTML = "$" + product.price

    let productAddBtn = $.createElement("button")
    productAddBtn.className = "btn btn-primary shop-item-button"
    productAddBtn.innerHTML = "ADD TO CART"
    productAddBtn.addEventListener("click", function () {
        addProductToBasketArray(product.id)
    })

    productdetailsContainer.append(productPriceSpan, productAddBtn)
    productContainer.append(productTitleSpan, productImageElem, productdetailsContainer)
    shopItemsContainer.append(productContainer)
})


function addProductToBasketArray(productId) {

    let mainProduct = allProDucts.find(function (product) {
        return product.id === productId
    })

    userBasket.push(mainProduct)

    basketProductsGenerator(userBasket)
    calcTotalPrice(userBasket)

    // console.log(userBasket);

}

function basketProductsGenerator(userBasketArray) {
    basketProductsContainer.innerHTML = ""
    userBasketArray.forEach(function (product) {

        let basketProductContainer = $.createElement("div")
        basketProductContainer.classList.add("cart-row")

        let basketProductDetalseContainer = $.createElement("div")
        basketProductDetalseContainer.className = "cart-item cart-column"

        let basketProductImg = $.createElement("img")
        basketProductImg.setAttribute("src", product.img)
        basketProductImg.setAttribute("width", "100")
        basketProductImg.setAttribute("height", "100")
        basketProductImg.classList.add("cart-item-image")

        let basketProductTitleSpan = $.createElement("span")
        basketProductTitleSpan.classList.add("cart-item-title")
        basketProductTitleSpan.innerHTML = product.title

        basketProductDetalseContainer.append(basketProductImg, basketProductTitleSpan)

        let basketProductPriceSpan = $.createElement("span")
        basketProductPriceSpan.className = "cart-price cart-column"
        basketProductPriceSpan.innerHTML = "$" + product.price

        let basketProductIputContainer = $.createElement("div")
        basketProductIputContainer.className = "cart-quantity cart-column"

        let basketProductInput = $.createElement("input")
        basketProductInput.className = "cart-quantity-input"
        basketProductInput.value = product.count
        basketProductInput.setAttribute("type", "number")
        basketProductInput.addEventListener("change" , function () {
            updateProductCount(product.id , basketProductInput.value)
        })

        let basketProductRemoveBtn = $.createElement("button")
        basketProductRemoveBtn.className = "btn btn-danger"
        basketProductRemoveBtn.innerHTML = "REMOVE"
        basketProductRemoveBtn.addEventListener("click" , function () {
            removeProductFromBasket(product.id)
        })

        basketProductIputContainer.append(basketProductInput, basketProductRemoveBtn)
        basketProductContainer.append(basketProductDetalseContainer, basketProductPriceSpan, basketProductIputContainer)

        basketProductsContainer.append(basketProductContainer)

        // console.log(basketProductContainer);
        

    })
}

function removeProductFromBasket(productId) {

    userBasket = userBasket.filter(function (product) {
        return product.id !== productId
    })

    basketProductsGenerator(userBasket)
    
}

removeAllProductsBtn.addEventListener("click" , function () {
    userBasket = []
    basketProductsGenerator(userBasket)
    cartTotalPriceElem.innerHTML = "$0"
})

function calcTotalPrice(userBasketArray) {
    let totalpriceValue = 0

    userBasketArray.forEach(function (product) {
        totalpriceValue += product.count * product.price
    })

    cartTotalPriceElem.innerHTML = "$" + totalpriceValue
}

function updateProductCount(productId , newCount) {
    
    // console.log(productId + "  " + newCount);

    userBasket.forEach(function (product) {
        if (product.id === productId) {
            product.count = newCount
        }
    })

    calcTotalPrice(userBasket)
    
}


let slid = document .querySelector("#slider")
window.addEventListener("load" , function () {
    window.scrollTo(0,0)
    
    setTimeout(function () {
        slid.style.top = "-50rem"      
    } , 2000)
    setTimeout(function () {
        slid.style.opacity = "0"      
    } , 2030)
    
})
