function makeSandwich(...toppings: string[]): void {
    console.log("To make the Sandwitch Customer has ordered me follwoing :");
    for (let topping of toppings) {
        console.log("- " + topping);
    }
    console.log("Enjoy The Sandwich!\n");
}


makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Beef", "cheese","Onions");
makeSandwich("Peanut Butter", "Jelly","Falooda");