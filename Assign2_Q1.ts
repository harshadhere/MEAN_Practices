
function Maximum(Arr :  number[]) : number
{
    var i : number = 0
    var Max : number = Arr[0]
    for(i = 1;i< Arr.length;i++)
    {
        if(Max < Arr[i])
        {
            Max = Arr[i]
        }
    }
    return Max
}


var Arr: number[] = [23,89,6,29,56,45,77,32]

var iRet = 0

iRet  = Maximum(Arr)

console.log("Maximum Element from array is : "+ iRet)

