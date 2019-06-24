/*using objects in functions and we create object and -
    -inside the object attributes are written and divide by using comma's.For displaying  the object we use method. 
*/

var car = {
    car_brand :"BMW",
    car_model : "c20d",
    car_price : 50000000,
    // creating function  inside the objects known as methods
    testAutoPilot : function()
    {
        for(i=0;i<=car.length;)
        {
            document.write("car details should be written:");
        }
            

    }
    
    

}
 document.write("<h2>"+car.car_model+"</h2>");