class Circle
{
    Radius : number = 0;
    PI : number = 0;

    constructor(Data : number)
    {
       this.Radius = Data;
       this.PI = 3.14;
    }

    Area()
    {
        return this.PI * this.Radius * this.Radius;
    }

    
}
class CircleX extends Circle
{
    constructor(Data : number)
    {
        super(Data);
    }

    CalculateCircumference() : number
    {
        return 2 * this.PI * this.Radius;
    }
}




var Obj = new CircleX(23);
var Ret : number = 0;

Ret = Obj.Area();
console.log("Area of circle is : "+Ret);



Ret = Obj.CalculateCircumference();
console.log("Circumference of circle is : "+Ret);


