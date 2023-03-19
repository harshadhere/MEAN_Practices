function Armstrong(No) {
    var Digit = 0;
    var Sum = 0;
    var temp = No;
    while (temp != 0) {
        Digit = temp % 10;
        Sum = Sum + Digit * Digit * Digit;
        temp = temp / 10;
        temp = Math.floor(temp);
    }
    if (Sum == No) {
        return true;
    }
    else {
        return false;
    }
}
var Num = 153;
var Ret = false;
Ret = Armstrong(Num);
if (Ret == true) {
    console.log("It is an Armstrong Number ");
}
else {
    console.log("It is Not an Armstrong Number ");
}
