const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
const productCount = document.getElementById("productCount");
const emptyMessage = document.getElementById("emptyMessage");

const products = [
    {
        name:"Laptop",
        category:"Electronics",
        price:"₹50000"
    },
    {
        name:"Headphones",
        category:"Electronics",
        price:"₹3500"
    },
    {
        name:"Shoes",
        category:"Fashion",
        price:"₹2500"
    },
    {
        name:"Watch",
        category:"Accessories",
        price:"₹8000"
    },
    {
        name:"Keyboard",
        category:"Electronics",
        price:"₹1800"
    },
    {
        name:"T-Shirt",
        category:"Fashion",
        price:"₹1200"
    },
    {
        name:"Bag",
        category:"Accessories",
        price:"₹1500"
    },
    {
        name:"Phone",
        category:"Electronics",
        price:"₹25000"
    }
];

displayProducts(products);

searchInput.addEventListener("input",function(){

    let search = searchInput.value.toLowerCase();

    let filteredProducts = products.filter(function(product){

        return product.name.toLowerCase().includes(search) ||
               product.category.toLowerCase().includes(search);

    });

    displayProducts(filteredProducts);

});

function displayProducts(items){

    productList.innerHTML = "";

    productCount.innerHTML = items.length + " Products";

    if(items.length === 0){

        emptyMessage.style.display = "block";

        return;

    }

    emptyMessage.style.display = "block";

    emptyMessage.style.display = "none";

    items.forEach(function(product){

        productList.innerHTML += `

        <div class="product-card">

            <h3>${product.name}</h3>

            <p class="price">${product.price}</p>

            <span class="category">
                ${product.category}
            </span>

        </div>

        `;

    });

}