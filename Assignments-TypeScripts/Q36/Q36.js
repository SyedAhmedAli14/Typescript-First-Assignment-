function ahmed_make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size.toUpperCase(), " and the message printed on it is: \"").concat(message, "\""));
}
ahmed_make_shirt();
ahmed_make_shirt("medium");
ahmed_make_shirt("small", "Cristianoooo Ronaldoooo");
