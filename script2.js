let addToCart = document.querySelectorAll(".shop-item-button");
let cart = [];
let overAllPrice = 0;

addToCart.forEach((item) =>
  item.addEventListener("click", function (event) {
    let items = document.querySelectorAll("#" + event.target.id);
    cart.push([items[0].textContent, items[1].textContent]);
    console.log(cart + overAllPrice);
    addItem(cart);
  })
);

let cartItems = document.querySelector(".cart-items");

function addItem(item) {
  cartItems.innerHTML = "";
  for (let i = 0; i < item.length; i++) {
    let cartRow = document.createElement("div");
    let cartItem = document.createElement("div");
    cartRow.className = "cart-row";
    cartItem.className = "cart-item cart-column";
    let itemName = document.createElement("span");
    itemName.className = "cart-item-title";
    itemName.textContent = item[i][0];
    cartItem.appendChild(itemName);
    let itemPrice = document.createElement("span");
    itemPrice.textContent = item[i][1];
    itemPrice.className = "cart-price cart-column";
    item[i][1] + overAllPrice;
    let button = document.createElement("button");
    button.className = "btn btn-danger";
    button.onclick = () => remove(i);
    button.textContent = "remove";
    cartRow.appendChild(button);
    cartRow.appendChild(cartItem);
    cartRow.appendChild(itemPrice);
    cartItems.appendChild(cartRow);
  }
}
function remove(id) {
  console.log(id);
  cart.splice(id, 1);
  addItem(cart);
}
function neutralize() {
  let button2 = document.getElementsByClassName("btn btn-primary active");
  button2.onclick = () => remove(item[i]);
  alert(
    "you just fucked up the all deal now the cars that We need to BringBack are - " +
      "" +
      cart +
      "" +
      " - Thank You very Muce !"
  );
  cart.splice(0, cart.length);
  addItem();
  overAllPrice = 0;
  console.log("your total now is - " + "" + overAllPrice);
  console.log("thats the cars you just Mashed - " + cart);
}

function addTotal() {
  alert("your cars and their price are " + "" + cart);
  let b = prompt("Do you whant to proceed?  yes or no?");
  if (b == "no") {
    alert("you chip luzy...");
    overAllPrice = 0;
    cart.splice(0, cart.length);
    alert("your cars recordes are - " + cart);
    console.log("your cars records becomes - " + cart);
  } else if (b == "yes") {
    alert(
      "you Owe us for the - " +
        " " +
        cart +
        "" +
        "" +
        " Dont forget to pay we know where you live... 👧🏿"
    );
    console.log("thats the cars you just Mashed - " + cart);
  }
}
