let shopingList = document.getElementById("shoping-list");

let foodList = [];

addDataToHtml = (value) => {
  value.forEach((item) => {
    var newFood = document.createElement("div");
    newFood.classList.add("food");
    newFood.innerHTML = `<img src="/${item.image}" alt="${item.alt}" />
    <button class="add-to-cart">ADD TO CART</button>
    <div class="sub">
    <h2 id="food-name" onclick="openDetailsInNewTab(${item.id})">${item.name}</h2>
    <div id="price">${item.price}</div></div>`;
    shopingList.appendChild(newFood);
  });
};

function openDetailsInNewTab(itemId) {
  const newWindow = window.open("/Pages/Description/description.html");
  newWindow.onload = function () {
    const item = foodList.find((i) => i.id === itemId);
    if (item) {
      var content = document.createElement("div");
      content.innerHTML = `<img src="/${item.image}" alt="${item.alt}"><p>${item.description}</p><button></button>`;
      this.document.getElementById("description").appendChild(content);
    }
  };
}

initApp = () => {
  fetch("/assets/json/data.json")
    .then((response) => response.json())
    .then((data) => {
      foodList = data;
      console.log(foodList.length);
      addDataToHtml(foodList);
    });
};

initApp();
