function Maximum(Arr) {
    var i = 0;
    var Sum = 0;
    for (i = 0; i < Arr.length; i++) {
        Sum = Sum + Arr[i];
    }
    return Sum;
}
var Arr = [23, 6, 7, 4, 5, 7];
var iRet = 0;
iRet = Maximum(Arr);
console.log("Sum of Element of array is : " + iRet);
