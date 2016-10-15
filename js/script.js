// javascript syntax
var statement = "I write JavaScript";

//writing a function
function writeStatement() {
  console.log(statement);
}

//caling a function
writeStatement();


// function example
//groupOrder = parameter

function makePizza(groupOrder) {
  groupOrder.forEach(function(order) {
    var toppings = "";
    order.toppings.forEach(function(topping, index, arr) {
      if (index === arr.length-1) {
        toppings += topping;
      } else if (index === arr.length-2) {
        toppings += topping + ", and ";
      } else {
        toppings += topping + ", ";
      }
    });
  console.log(order.name + " ordered a " + toppings + " pizza with a " + order.crust + " crust!");
  });
}

var orders = [
  {
    name: "Aisha",
    crust: "cheesy pretzel",
    toppings: ["goat cheese", "figs", "diced tomatoes"]
  },
  {
    name: "Dana",
    crust: "garlic",
    toppings: ["pineapple", "feta"]
  },
  {
    name: "Travis",
    crust: "parmesan",
    toppings: ["pepperoni", "bacon"]
  },
  {
    name: "Gao",
    crust: "cajun",
    toppings: ["italian sausage", "jalapenos"]
  }
];

//orders variable is the argument that gets passed into the function.
makePizza(orders);


// DOM - adding a new element to the page.
var newReason = document.createElement("li");
newReason.innerHTML = "She knows math.";
document.getElementById("reasons").appendChild(newReason);
