var a = [1,2,3,4,5]
for(x of a){
    console.log(x);
}


// array using for loop
var arr = [1,2,3,4,5,6]
for(var i=0;i<arr.length;i++)
{
    if(arr[i]==4){
        console.log("found 4 at  index",i)
        break;
    }
}