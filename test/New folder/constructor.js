function book(name,author,edition,type){
    this.name = name;
    this.author = author;
    this.edition = edition;
    this.type =  type;
    array =[this.name,this.author,this.edition,this.type];
    // creating method 
    this.read = function(){
        console.log('this  book  convert you  into fantacy')
    }

}
// console.log(this.name);
// creating new object and access the function  and storing values in variable
var  b1 = new book('many thing to laern','vallab','version1','fantacy');
var b2 = new book('what the hell','mandeep','version2','fantacy');
b1.read();
console.log(array)


