var str = new String();

var car = {
    car_brand :"BMW",
    car_model : "c20d",
    car_price : 50000000,
    // creating function  inside the objects known as methods
    testAutoPilot : function()
    {
        document.write("car details  are mentioned");   
            

    }
   
    

}
//  car.testAutoPilot();

document.write("<h2>"+typeof(car.car_price)+"</h2>");
 // adding new property
 car.fuelType="disel";
//  deleting car property
delete car.car_price;

 document.write("<h2>"+car.fuelType+"</h2>");