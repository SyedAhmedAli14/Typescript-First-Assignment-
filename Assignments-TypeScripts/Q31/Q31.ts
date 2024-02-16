
let current_users: string[] = ["ahmed", "waheed", "yasir", "mahad", "fahad"];


let new_users: string[] = ["nouman", "fahad", "rehan", "YAsir", "Waheed"];


for (let newUser of new_users) {
    
    let newUserLower: string = newUser.toLowerCase();
    let isTaken: boolean = false;
    for (let currentUser of current_users) {
        if (currentUser.toLowerCase() === newUserLower) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log(`Sorry, the username "${newUser}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, the username "${newUser}" is available to register in Sir Zia Programme`);
    }
}