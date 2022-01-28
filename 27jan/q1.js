var Num = prompt("Enter the length of the array");
var arr1 = [];
for(var i=0; i<Num; i++){
arr1.push(prompt("Enter the value at index:"+" "+ i));
}

var max = arr1[0];

for(var i = 1; i<Num; i++){
if(arr1[i]>arr1[i-1]){

max = arr1[i];

}


}
console.log("The max Element in the array is"+" "+ max);
