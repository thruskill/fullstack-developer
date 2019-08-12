const mylib= {};

mylib.map = function(arr,cb){
    //creating array storage
    let storage = [];
for(let i=0;i<arr.length;i++){
    storage.push(cb(arr[i],i),arr)
}
 return storage;
}


mylib.filter =function(arr,cb){
    
    let storage = [];
    for(i=0;i<arr.length;i++){

        if(cb(arr[i],i,arr) === true){

            storage.push(arr[i]);
        }
    }
    return storage;
}




var ownMap = mylib.map([11,12,13],function(ele,i,arr){
    return ele*2;
});



let arr = [2,3,4,6];

let newArr = arr.map(function(ele,i,arr){
    return ele*2;
})

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

let filtered = mylib.filter(inventors, function(ele){
    if(ele.year>=1500 && ele.year<=1600){
        return true;
    }else{
        return false;
    }
})

console.log(newArr);

console.log(ownMap);

console.log(filtered);