let ahmedinvitesssss : string[] = ["Mahad","Yasir","Waheed","Ammar","Hassan"]

for (let index = 0; index < ahmedinvitesssss.length; index++) {
    console.log("Hey " + ahmedinvitesssss[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}

console.log("Mahad Could Not attend the Event Due to Some Reasons in nazimabad")

console.log("Let Invite Some One Else Now !!!! in the Next Question")

ahmedinvitesssss[0]="Ibad Azam"

for (let index = 0; index < ahmedinvitesssss.length; index++) {
    console.log("Hey " + ahmedinvitesssss[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}


console.log('Guys its a good new i got 3 new more tables so lets invite some one else also !!!')

console.log("Lets Add the Guest at the top of the list")
ahmedinvitesssss.unshift("Syed Owais Shah")
console.log("Lets Add the Guest at the End of the list")
ahmedinvitesssss.push("Moeez")
console.log("Lets Add the Guest at the Middle of the list")
let middleIndex: number = Math.floor(ahmedinvitesssss.length / 2);
ahmedinvitesssss.splice(middleIndex, 0, 'Zafeer');

console.log("-----------------Final List of Attendees-------------")
for (let index = 0; index < ahmedinvitesssss.length; index++) {
    console.log("Hey " + ahmedinvitesssss[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
console.log("==========Sorry I have came to knwo that my table is late so i can only invite two persons")

for (let index = 0;  ahmedinvitesssss.length > 2 ; index++) {

    let customer = ahmedinvitesssss.pop()
    
    console.log("Hey " + customer + " You are not invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
console.log("For Last Two Persons")
for (let index = 0; index < ahmedinvitesssss.length ; index++) {

    console.log("Hey " + ahmedinvitesssss[index] + " You are still invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}


ahmedinvitesssss.pop()
ahmedinvitesssss.pop()
console.log("Empty List as i have informed everyone",ahmedinvitesssss)
