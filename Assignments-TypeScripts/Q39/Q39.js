function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Talha Anjum", "Karachi Chal");
var album2 = make_album("yo yo honey singh ", "love dose", 12);
var album3 = make_album("Eminem", "death", 11);
console.log(album1);
console.log(album2);
console.log(album3);
