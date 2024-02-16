let ahmedinvitessssssss : string[] = ["Mahad","Yasir","Waheed","Ammar","Hassan"]

for (let index = 0; index < ahmedinvitessssssss.length; index++) {
    console.log("Hey " + ahmedinvitessssssss[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}

console.log("Mahad Could Not attend the Event Due to Some Reasons in nazimabad")

console.log("Let Invite Some One Else Now !!!! in the Next Question")

ahmedinvitessssssss[0]="Ibad Azam"

for (let index = 0; index < ahmedinvitessssssss.length; index++) {
    console.log("Hey " + ahmedinvitessssssss[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}


console.log('Guys its a good new i got 3 new more tables so lets invite some one else also !!!')

console.log("Lets Add the Guest at the top of the list")
ahmedinvitessssssss.unshift("Syed Owais Shah")
console.log("Lets Add the Guest at the End of the list")
ahmedinvitessssssss.push("Moeez")
console.log("Lets Add the Guest at the Middle of the list")
let middleIndex: number = Math.floor(ahmedinvitessssssss.length / 2);
ahmedinvitessssssss.splice(middleIndex, 0, 'Zafeer');

console.log("-----------------Final List of Attendees-------------")
for (let index = 0; index < ahmedinvitessssssss.length; index++) {
    console.log("Hey " + ahmedinvitessssssss[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
