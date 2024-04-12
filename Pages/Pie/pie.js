let shopingList = document.getElementById("shoping-list");

let foodList = [];

addDataToHtml = (value) => {
  value.forEach((item) => {
    var newFood = document.createElement("div");
    newFood.classList.add("food");
    newFood.innerHTML = `<img src="/${item.image}" alt="${item.alt}" /><button class="add-to-cart">ADD TO CART</button><div class="sub"><h2 id="food-name">${item.name}</h2><div id="price">${item.price}</div></div>`;
    shopingList.appendChild(newFood);
  });
};

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
