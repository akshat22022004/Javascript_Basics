document.addEventListener("DOMContentLoaded",()=> {
    const product = [
        {id: 1,name: product,price: 29.99},
        {id: 2,name: product,price: 29.99},
        {id: 3,name: product,price: 29.99},
        {id: 4,name: product,price: 29.99},
        {id: 5,name: product,price: 29.99},
    ]
    const productItems = document.getElementById("product-lists");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const cartTotalmessage = document.getElementById("cart-total");
    const totalPricedisplay =   document.getElementById("total-price");

    product.forEach((product) => {
        const productdiv = document.createElement("div");
        productdiv.classList.add("product-item");
        productdiv.innerHTML = `
        <span>${product.name} </span><span>${product.price}</span><button class="add-to-cart">Add to Cart</button>`;
        productItems.appendChild(productdiv);
    });

    productItems.addEventListener("click", (e) => {
        if(e.target.classList.contains("add-to-cart")) {
            const productid = e.target.closest(".product-item").getAttribute("data-id");
            const product = product.find((product) => product.id == productid);
            const cartItem = document.createElement("div");
        
      }
    });

    function addTocart (product)  {
       cartItems.innerHTML = ""; // it,s inner content we do as empty we can also use hide class also

       let totalprice = 0;
       if(cartItems.length){
        emptyCartMessage.classList.add("hide");
        product.forEach((product) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
            <span>${product.name}</span><span>${product.price}</span>
            <button class="remove-from-cart">Remove</button>
            `;
            cartItems.appendChild(cartItem);
            totalprice += product.price;
        });
        cartTotalmessage.classList.remove("hide");
        totalPricedisplay.textContent = totalprice;
       }
       else{
        emptyCartMessage.classList.remove("hide");
       }
    }
})