function makeSandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    console.log("To make the Sandwitch Customer has ordered me follwoing :");
    for (var _a = 0, toppings_1 = toppings; _a < toppings_1.length; _a++) {
        var topping = toppings_1[_a];
        console.log("- " + topping);
    }
    console.log("Enjoy The Sandwich!\n");
}
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Beef", "cheese", "Onions");
makeSandwich("Peanut Butter", "Jelly", "Falooda");
