function Maximum(No1 : number,No2 : number,No3 : number) : number
{ 
    var Max : number = No1
    if(Max < No2)
    {
        Max = No2

    }
    if(Max < No3)
    {
        Max = No3
    }

    return Max

}

var Num1 : number = 23
var Num2 : number = 89
var Num3 : number = 6

var Ret : number = 0
Ret = Maximum(Num1,Num2,Num3)

console.log("The Largest Number Among three is : "+ Ret)