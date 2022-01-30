var x = prompt("Enter any of number");
x = parseInt(x);
var y = 2;

if(isNaN(x)){

alert("enter a valid number");}
else{


console.log("The Prime Numbers between 1 and" + " "+ x);
for(var i = 2; i < x; i++)
{
var k = 0;
for(var j = 2; j <= i/2; ++j)
{
if(i % j == 0){
k=1;}}

if (k==0){
console.log(i);
}
}
}