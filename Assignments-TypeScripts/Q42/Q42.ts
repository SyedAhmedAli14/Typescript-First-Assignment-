
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    var newMagicians = magicians.slice(); 
    for (var i = 0; i < newMagicians.length; i++) {
        newMagicians[i] = "the Great " + newMagicians[i];
    }
    return newMagicians; 
}

var magicians = ["Syed Ahmed Ali Shah", "Yasir", "Waheed", "Fahad"];



let greatMagicianss: string[] = make_great(magicians);


console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicianss);