
function make_album(artist: string, title: string, tracks?: number): object {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}


let album1 = make_album("Talha Anjum", "Karachi Chal");
let album2 = make_album("yo yo honey singh ", "love dose", 12);
let album3 = make_album("Eminem", "death", 11);


console.log(album1);
console.log(album2);
console.log(album3);
