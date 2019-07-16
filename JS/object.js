/*var person ={
    Name :"vallab",
    Age :24,
    Gender : "male",
    // creating method
    displaying : function()
    {
        console.log('Accessing  person details'+age);

    }

}
    displaying.person();*/

    // 

    var obj = {
        color:'blue',
        description:function(){
            console.log(this)
            function foo(){
                console.log('inner fn',this)
            }
            foo();
        }
    }
    obj.description();