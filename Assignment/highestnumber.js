//First method
//  function array(){
//      var test=[];
//     var temp=0;
//     let x=0;
//      let arr = [[5,4,7],[8,7,9],[10,23,20],[7,9,8]];
     
//     //outer array
//      for(let i=0;i<=arr.length-1;i++)
//  {
//      //inner array
//     for(let j=0;j<=arr[i].length-1;j++){
//         if(arr[i][j]>temp)
//         {
// temp=arr[i][j];
//         }       
//     }
//     test[x]=temp;
//     x++;
//     temp=0;
// }
// console.log(test);
//  }


//second menthod

function array(){
    var test=[0,0,0,0];
    let arr = [[5,4,7,8],[8,7,9,10],[10,23,34,20],[7,9,8]];
    
   //outer array
    for(let i=0;i<=arr.length-1;i++)
{
    //inner array
   for(let j=0;j<=arr[i].length-1;j++){
       if(arr[i][j]>test[i])
       {
test[i]=arr[i][j];
       }       
   }
 
}
console.log(test);
}
array();

/*function example(){
    let arr=[3,5,8];
    console.log(arr[1]);
    }
    example();*/