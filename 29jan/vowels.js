

var a=prompt("enter string");
a= a.toLowerCase();
var s=a.split("");
var count =0;
for( var i=0;i<s.length;i++){
switch (s[i]){
case "a":
       count++;
       break;
case "e":
       count++;
       break;
case "i":
       count++;
       break;
case "o":
        count++;
        break;
case "u":
        count++;
        break;
}
}
console.log("the total vowels is"+ " " +count);



