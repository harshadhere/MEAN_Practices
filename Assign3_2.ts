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




var Obj = new Circle(23);
var Ret : number = 0;

Ret = Obj.Area();
console.log("Area of circle is : "+Ret);


