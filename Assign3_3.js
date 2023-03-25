var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radius = 0;
        this.PI = 0;
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Data) {
        return _super.call(this, Data) || this;
    }
    CircleX.prototype.CalculateCircumference = function () {
        return 2 * this.PI * this.Radius;
    };
    return CircleX;
}(Circle));
var Obj = new CircleX(23);
var Ret = 0;
Ret = Obj.Area();
console.log("Area of circle is : " + Ret);
Ret = Obj.CalculateCircumference();
console.log("Circumference of circle is : " + Ret);
