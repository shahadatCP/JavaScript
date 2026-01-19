const loadAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      displayProduct(data);
    });
};

const displayProduct = (products) => {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <img class="card-img" src=${product.image} alt="" />
        <h5>${product.title.slice(0, 50)}</h5>
        <h3>Price: ${product.price}</h3>
        <p>${product.description.slice(0, 50)}</p>
        <button onclick="singleProduct('${product.id}')">Detailes</button>
        <button onclick="handleAddToCart('${product.title.slice(0, 12)}',${
      product?.price
    })">Add to cart</button>
        `;
    productContainer.appendChild(div);
  });
};

const handleAddToCart = (name, price) => {
  const cartCount = document.getElementById("count").innerText;
  let convertCount = parseInt(cartCount);

  convertCount += 1;
  document.getElementById("count").innerText = convertCount;
  const container = document.getElementById("cart-main-container");

  const div = document.createElement("div");
  div.classList.add("cart-info");
  div.innerHTML = `
    <p>${name.slice(0, 10)}</p>
    <h3 class="price">${price}</h3>
    `;

  container.appendChild(div);
  UpdateTotal();
  // console.log(convertCount);
};

const UpdateTotal = () => {
  const allPrice = document.getElementsByClassName("price");
  let count = 0;
  for (const element of allPrice) {
    count = count + parseFloat(element.innerText);
  }
  console.log(count);
  document.getElementById("total").innerText = count.toFixed(2); // dosomik er pore 2 ghor nibe
};

const singleProduct = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

loadAllProduct();
