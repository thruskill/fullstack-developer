// let snakes = [
//     {name="kingkobra",type='venomous',length='18feet',poision='severe'},
//     {name='rattlesnake',type="reptile",length="10feet",poision="severe"},
//     {name='anakonda',type='python',length='15feet',posion='low'}


// ];

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

// let fullName =[];

// for(let i=0;i<inventors.length;i++){
//     let fn = `${inventors[i].first} ${inventors[i].last}`
//     fullName.push(fn);

// }
// console.log(fullName);

// fat-arrow function

// let fullName = inventors.map(inventors  =>`${inventors.first} ${inventors.last}`);

// console.log(fullName);


// filter  and  list those who born in 1500's.

// let fullName = inventors.filter(inventor => inventor.year >=1500 && inventor.year <= 1600);

// console.log(fullName);

// let fullName = [];

// for(i=0;i<inventors.length;i++){
//     if(inventors[i].year>=1500 && inventors[i].year<=1600){
//         // fullName.push(i);
//         console.log(inventors[i]);
//     }
// }

// sort the list

// let order = inventors.sort((a,b)=>a.year < b.year ? 1 : -1 );

// console.log(order);

let sorting = [];
let a,b ;
for(i=0;i<inventors.length;i++){
    if(a[i].year > b[i].year ? -1 : 1){
        console.log(a,b);
    }
}