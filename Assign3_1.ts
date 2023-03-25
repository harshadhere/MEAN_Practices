class Arithmetic
{
    Number1 : number = 0;
    Number2 : number = 0;

    constructor(No1 : number,No2 : number)
    {
        this.Number1 = No1;
        this.Number2 = No2;

    }

    Addition() : number
    {
        return this.Number1 + this.Number2
    }

    Substraction() : number 
    {
        return this.Number1 - this.Number2;
    }

    Division() : number
    {
        return this.Number1 / this.Number2;
    }

    Multiplication() : number 
    {
        return this.Number1 * this.Number2;
    }


}

var obj1 = new Arithmetic(20,10);
var obj2 = new Arithmetic(60,20);

var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition of Two values : "+Ret);

Ret = obj1.Substraction();
console.log("Substraction of Two values : "+Ret);

Ret = obj1.Multiplication();
console.log("Multiplication of Two values : "+Ret);

Ret = obj1.Division();
console.log("Multiplication of Two values : "+Ret);


Ret = obj2.Addition();
console.log("\n\nAddition of Two values : "+Ret);

Ret = obj2.Substraction();
console.log("Substraction of Two values : "+Ret);

Ret = obj2.Multiplication();
console.log("Multiplication of Two values : "+Ret);

Ret = obj2.Division();
console.log("Division of two values : "+Ret);






