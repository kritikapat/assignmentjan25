var n1=prompt("enter 1st number");
var n2=prompt("enter 2nd number");
var n3=prompt("enter 3rd number");

var num1=parseInt(n1);
var num2=parseInt(n2);
var num3=parseInt(n3);

if(n1<n2 &&n1<n3){
alert("n1 is minimum");
}
else if(n2<n3 && n2<n1){
alert("n2 is minimum");
}
else {
alert("n3 is minimum");
}