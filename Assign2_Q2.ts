
function Summation(Arr :  number[]) : number
{
    var i : number = 0
    var Sum : number = 0
    for(i = 0;i< Arr.length;i++)
    {
        Sum = Sum + Arr[i]
    }
    return Sum
}


var Arr: number[] = [23,6,7,4,5,7]

var iRet = 0

iRet  = Maximum(Arr)

console.log("Sum of Element of array is : "+ iRet)

