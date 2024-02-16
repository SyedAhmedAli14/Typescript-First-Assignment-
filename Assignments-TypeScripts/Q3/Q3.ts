let name11 : string = "syedahmedalishah";
console.log("The name in lower case is " +name11.toLowerCase())
console.log("The name in Upper case is " +name11.toUpperCase())
console.log("The name in Title case is ", toTitleCasee(name11))

function toTitleCasee(str: string): string {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        
    }
    let titleCaseString = words.join(' ');
    return titleCaseString;
}