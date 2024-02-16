var current_users = ["ahmed", "waheed", "yasir", "mahad", "fahad"];
var new_users = ["nouman", "fahad", "rehan", "YAsir", "Waheed"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    var newUserLower = newUser.toLowerCase();
    var isTaken = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var currentUser = current_users_1[_a];
        if (currentUser.toLowerCase() === newUserLower) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log("Sorry, the username \"".concat(newUser, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, the username \"".concat(newUser, "\" is available to register in Sir Zia Programme"));
    }
}
