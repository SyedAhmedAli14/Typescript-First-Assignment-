var name1 = "syedahmedalishah";
console.log("The name in lower case is " + name1.toLowerCase());
console.log("The name in lower case is " + name1.toUpperCase());
console.log("The name in lower case is ", toTitleCase(name1));
function toTitleCase(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    var titleCaseString = words.join(' ');
    return titleCaseString;
}
