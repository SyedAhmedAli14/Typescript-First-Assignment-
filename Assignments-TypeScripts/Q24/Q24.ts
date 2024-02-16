let programmingLanguage11: string = "Typescript";
let programmingLanguage22: string = "Python";
let ahmedfavouritenumber11: number = 14;
let ahmedfavouritnumber22: number = 12;
let ahmedarray1: number[] = [1, 2, 3, 4, 5];


console.log("Is programmingLanguage1 == 'Typescript'? I predict True.");
console.log(programmingLanguage11 == 'Typescript');

console.log("Is programmingLanguage1 == 'Python'? I predict False.");
console.log(programmingLanguage11 == 'Python');

console.log("Is programmingLanguage1 != programmingLanguage2? I predict True.");
console.log(programmingLanguage11 != programmingLanguage22);


console.log("Is ahmedfavouritenumber1 < ahmedfavouritnumber2? I predict False.");
console.log(ahmedfavouritenumber11 < ahmedfavouritnumber22);

console.log("Is ahmedfavouritenumber1 > ahmedfavouritnumber2? I predict True.");
console.log(ahmedfavouritenumber11 > ahmedfavouritnumber22);

console.log("Is ahmedfavouritenumber1 >= ahmedfavouritnumber2? I predict True.");
console.log(ahmedfavouritenumber11 >= ahmedfavouritnumber22);

console.log("Is ahmedfavouritenumber1 <= ahmedfavouritnumber2? I predict False.");
console.log(ahmedfavouritenumber11 <= ahmedfavouritnumber22);


console.log("Is ahmedfavouritenumber1 > 10 and ahmedfavouritnumber2 < 15? I predict True.");
console.log(ahmedfavouritenumber11 > 10 && ahmedfavouritnumber22 < 15);

console.log("Is ahmedfavouritenumber1 < 10 or ahmedfavouritnumber2 > 15? I predict False.");
console.log(ahmedfavouritenumber11 < 10 || ahmedfavouritnumber22 > 15);


console.log("Is 3 in the ahmedarray? I predict True.");
console.log(ahmedarray1.indexOf(6) !== -1);


console.log("Is 6 not in the ahmedarray? I predict True.");
console.log(ahmedarray1.indexOf(6) === -1);