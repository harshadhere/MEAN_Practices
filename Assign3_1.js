var Arithmetic = /** @class */ (function () {
    function Arithmetic(No1, No2) {
        this.Number1 = 0;
        this.Number2 = 0;
        this.Number1 = No1;
        this.Number2 = No2;
    }
    Arithmetic.prototype.Addition = function () {
        return this.Number1 + this.Number2;
    };
    Arithmetic.prototype.Substraction = function () {
        return this.Number1 - this.Number2;
    };
    Arithmetic.prototype.Division = function () {
        return this.Number1 / this.Number2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.Number1 * this.Number2;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(20, 10);
var obj2 = new Arithmetic(60, 20);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition of Two values : " + Ret);
Ret = obj1.Substraction();
console.log("Substraction of Two values : " + Ret);
Ret = obj1.Multiplication();
console.log("Multiplication of Two values : " + Ret);
Ret = obj1.Division();
console.log("Multiplication of Two values : " + Ret);
Ret = obj2.Addition();
console.log("\n\nAddition of Two values : " + Ret);
Ret = obj2.Substraction();
console.log("Substraction of Two values : " + Ret);
Ret = obj2.Multiplication();
console.log("Multiplication of Two values : " + Ret);
Ret = obj2.Division();
console.log("Division of two values : " + Ret);
