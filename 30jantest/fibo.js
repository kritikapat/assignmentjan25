var  a = prompt("Enter any number");
a = parseInt(a);

if(isNaN(a)){

alert("enter a valid number");}
else{
var s=0, b=1, c;
for(var i = 2; i < a; i++){
c = s +b;
s = b;
b =c;
}}
console.log("Nth fibonacci number is" + " " +c);