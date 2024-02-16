var ahmedinvites = ["Mahad", "Yasir", "Waheed", "Ammar", "Hassan"];
for (var index = 0; index < ahmedinvites.length; index++) {
    console.log("Hey " + ahmedinvites[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
console.log("Mahad Could Not attend the Event Due to Some Reasons in nazimabad");
console.log("Let Invite Some One Else Now !!!! in the Next Question");
ahmedinvites[0] = "Ibad Azam";
for (var index = 0; index < ahmedinvites.length; index++) {
    console.log("Hey " + ahmedinvites[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
console.log('Guys its a good new i got 3 new more tables so lets invite some one else also !!!');
console.log("Lets Add the Guest at the top of the list");
ahmedinvites.unshift("Syed Owais Shah");
console.log("Lets Add the Guest at the End of the list");
ahmedinvites.push("Moeez");
console.log("Lets Add the Guest at the Middle of the list");
var middleIndex = Math.floor(ahmedinvites.length / 2);
ahmedinvites.splice(middleIndex, 0, 'Zafeer');
console.log("-----------------Final List of Attendees-------------");
for (var index = 0; index < ahmedinvites.length; index++) {
    console.log("Hey " + ahmedinvites[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
