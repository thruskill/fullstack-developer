// function confirmEnding(string, target){
//     if(string.substr(-target.length) === target){

//         return true;

//     }else{
//         return false;
//     } 


// }

function confirmEnding(string, target){
    return (string.substr(-target.length) === target) ? true : false ;



}
confirmEnding('journey','y');