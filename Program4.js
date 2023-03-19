var No = 153;
// taking a number as an input, we will check whether this number is Armstrong or not?
var n = 3; // The number of digits in the 'number' will be stored in the variable 'n'
var sum = 0; // we will store sum of nth power of all the digits in the 'sum' variable
for (var i = 0; i < n; i++) {
    var digit = No % 10; // extracting the i’th digit of 'number'
    sum = (sum + Math.pow(digit, n)); // adding the nth power of the digit to the variable 'sum'
}
if (sum == No) // if sum is same as number, then it is an armstrong number
 {
    console.log(No, "is an Armstrong Number");
}
else {
    console.log(No, "is not an Armstrong Number");
}
