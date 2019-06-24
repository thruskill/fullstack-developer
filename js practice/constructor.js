//object  constructor
function Car(car_brand,car_model,car_price)
{
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.car_price = car_price;
    this.telsaAutoPilot = function()
    {
        document.write("This car  has auto pilot.");
    }
}

var c1 = new car("Telsa","model 3",500000);
c1.telsaAutoPilot();
document.write("<h2>"+c1.car_brand+"</h2>")