function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

let magicians: string[] = ["Syed Ahmed Ali Shah", "Yasir", "Waheed", "Fahad"];

make_great(magicians);


show_magicians(magicians);