var ahmedinvitessssssss = ["Mahad", "Yasir", "Waheed", "Ammar", "Hassan"];
for (var index = 0; index < ahmedinvitessssssss.length; index++) {
    console.log("Hey " + ahmedinvitessssssss[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
console.log("Mahad Could Not attend the Event Due to Some Reasons in nazimabad");
console.log("Let Invite Some One Else Now !!!! in the Next Question");
ahmedinvitessssssss[0] = "Ibad Azam";
for (var index = 0; index < ahmedinvitessssssss.length; index++) {
    console.log("Hey " + ahmedinvitessssssss[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
console.log('Guys its a good new i got 3 new more tables so lets invite some one else also !!!');
console.log("Lets Add the Guest at the top of the list");
ahmedinvitessssssss.unshift("Syed Owais Shah");
console.log("Lets Add the Guest at the End of the list");
ahmedinvitessssssss.push("Moeez");
console.log("Lets Add the Guest at the Middle of the list");
var middleIndex = Math.floor(ahmedinvitessssssss.length / 2);
ahmedinvitessssssss.splice(middleIndex, 0, 'Zafeer');
console.log("-----------------Final List of Attendees-------------");
for (var index = 0; index < ahmedinvitessssssss.length; index++) {
    console.log("Hey " + ahmedinvitessssssss[index] + " You are invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
console.log("==========Sorry I have came to knwo that my table is late so i can only invite two persons");
for (var index = 0; ahmedinvitessssssss.length > 2; index++) {
    var customer = ahmedinvitessssssss.pop();
    console.log("Hey " + customer + " You are not invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
console.log("For Last Two Persons");
for (var index = 0; index < ahmedinvitessssssss.length; index++) {
    console.log("Hey " + ahmedinvitessssssss[index] + " You are still invited to the party Hosted By Sir Zia and Co Hosted by Syed Ahmed Ali .");
}
ahmedinvitessssssss.pop();
ahmedinvitessssssss.pop();
console.log("Empty List as i have informed everyone", ahmedinvitessssssss);
