let addToCart = document.querySelectorAll(".buttonI");
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
  document.getElementById("cartA").innerHTML = "";
  let txtTotalI = document.createTextNode(cart.length);
  document.getElementById("cartA").appendChild(txtTotalI);

  cartItems.innerHTML = "";
  for (let i = 0; i < item.length; i++) {
    let cartRow = document.createElement("div");
    let cartItem = document.createElement("div");
    let itemName = document.createElement("span");
    let itemPrice = document.createElement("span");

    cartRow.className = "rowI";
    cartItem.className = "cartI";
    itemName.className = "cartT";
    itemName.textContent = item[i][0];
    itemPrice.className = "cartP";
    itemPrice.textContent = item[i][1];

    let button = document.createElement("button");
    button.className = "btn btn-danger";
    button.onclick = () => remove(i);
    button.textContent = "remove";

    cartItem.appendChild(itemName);
    cartRow.appendChild(cartItem);
    cartRow.appendChild(itemPrice);
    cartRow.appendChild(button);
    cartItems.appendChild(cartRow);
  }
}
function remove(id) {
  console.log(id);
  cart.splice(id, 1);
  addItem(cart);
}

function deleted() {
  let button2 = document.getElementsByClassName("deleteBtn");
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
  txtTotalI = "";
  overAllPrice = 0;
  console.log("your total now is - " + "" + overAllPrice);
  console.log("thats the cars you just Mashed - " + cart);
}

function countALL() {
  let overAllPrice = 0;
  alert("your cars and their price are " + "" + cart);
  let b = prompt("Do you whant to proceed?  yes or no?");
  if (b == "no") {
    alert("you chip luzy...");
    overAllPrice = 0;
    cart.splice(0, cart.length);
    addItem();
    alert("your cars recordes are - " + cart);
    console.log("your cars records becomes - " + cart);
  } else if (b == "yes") {
    for (let i = 0; i < cart.length; i++) {
      document.getElementById("totalI").innerHTML = "";
      overAllPrice = Number(overAllPrice) + Number(cart[i][1]);
      let txtTotalI = document.createTextNode(overAllPrice);
      document.getElementById("totalI").appendChild(txtTotalI);
    }
    alert(
      "you Owe us for the - " +
        " " +
        cart +
        "  " +
        "  " +
        "Total  -" +
        "  " +
        overAllPrice +
        " $ " +
        "  Dont forget to pay we know where you live... 👧🏿"
    );
    console.log("thats the cars you just Mashed - " + cart);
    console.log("Dont forget - " + overAllPrice);
    cart.splice(0, cart.length);
    addItem();
  }
}

//   for (let i = 0; i < cart.length; i++) {
//     document.getElementById("totalI").innerHTML = "";
//     overAllPrice = Number(overAllPrice) + Number(cart[i][1]);
//     let txtTotalI = document.createTextNode(overAllPrice);
//     document.getElementById("totalI").appendChild(txtTotalI);
//   }
// }

countI.addEventListener("click", countALL);
