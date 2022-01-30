var  a = prompt("Enter any number");
a = parseInt(a);

if(isNaN(a)){

alert("enter a valid number");}
else{
console.log("the fibonacci series as follow");
var s=0, b=1, c;

console.log(s);
console.log(b);
for(var i = 2; i < a; i++){
c = s +b;
console.log(c);
s = b;
b =c;
}}
