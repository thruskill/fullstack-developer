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

// 1.Give an array of inventors 'first and last name'

// let fullName = [];
//     for(let i=0;i<=inventors.join.length;i++){
//         let fN = `${inventors[i].first} ${inventors[i].last}`
//         fullName.push(fN);
//     }
//     console.log(fullName);

// map();

// let fullName = inventors.map(function(ele,index,array){
//     console.log(ele);
//     console.log(index);
//     console.log(array);

//     return `${ele.first} ${ele.last}`;
// })


// fat-arrow function if we want to access one element


//  let fullName = inventors.map(ele => `${ele.first} ${ele.last}`)

// console.log(fullName);

// Q. Filter the list of inventors for those who were born in the 1500's

// let fifteen = [];

// for(let i=0;i<inventors.length;i++){
// if(inventors[i].year>=1500 && inventors[i].year<1600){
//     fifteen.push(inventors[i]);
// }
// }
// console.log(fifteen);

// filter
// let fifteen = inventors.filter(function(ele,index,array){
//     if(ele.year >=1500 && ele.year < 1600){
//         return true;
//     }   
// })
// console.log(fifteen);

// fat-arrow

// let value = inventors.filter((ele=>ele.year>=1500 && ele.year<1600))
// console.log(value);

// 3. Sort the inventors by birthdate, oldest to youngest

// let birth = inventors.sort(function(a,b){
//     if(a.year>b.year){
//         return 1; //returning accending order
//     }
//     else{
//         return -1; //returning decending order and if 0 '=='.
//     }
// })
// console.log(birth);

// fat-arrow function

// let birthdate = inventors.sort((a,b) =>a.year>b.year ? -1:1)

// console.log(birthdate);

//  Q. How many years did all the inventors live?


// var sum = 0;

// var arr =[10,2,5,7];
//  for(let i=0;i<arr.length;i++){
//      sum=arr[i]+sum;
//  }
//  console.log(sum);

// method1
// var sum = 0;
// for(let i=0;i<inventors.length;i++){
//     sum = (inventors[i].passed - inventors[i].year)+sum;
// }
// console.log(sum);

// method 2
// let total = inventors.reduce((initial,ele)=>{
//     return initial+(ele.passes-ele.year);
// },0);
// console.log(total);


// fat-arrow

let totalYear =inventors.reduce((initial,ele) =>initial+(ele.passed-ele.year),0);

console.log(totalYear);

// or

function cb(init,ele){
    return init +(ele.passed - ele.year);
}
let year = inventors.reduce(cb,0);

console.log(year);