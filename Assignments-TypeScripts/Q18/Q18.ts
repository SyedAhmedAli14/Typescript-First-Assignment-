
let placesofahmed: string[] = ["Japan", "USA", "Australia", "Dubai", "Canada"];


console.log("Original order of the array i created:", placesofahmed);


console.log("Alphabetical order without modifying the actual list :", placesofahmed.sort());


console.log("Original order of the array i created:", placesofahmed);


console.log("Reverse alphabetical order of the array without modifying it :", placesofahmed.sort().reverse());


console.log("Original order of the array i created: ", placesofahmed);


placesofahmed.reverse();
console.log("Reversed order to show change in order :", placesofahmed);


placesofahmed.reverse();
console.log("Original order to show old order back :", placesofahmed);


placesofahmed.sort();
console.log("Sorted in alphabetical order:", placesofahmed);

