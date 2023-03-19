function Armstrong(No : number ) : boolean
{
    var Digit : number = 0;
    var Sum :  number = 0;
    var temp : number = No;

    while(temp!=0)
    {
        Digit =temp % 10;
        Sum = Sum + Digit * Digit * Digit;
        temp = temp/10;
        temp=Math.floor(temp);

    }

    if(Sum == No)
    {
        return true
    }
    else
    {
        return false
    }

}


var Num : number = 153;

var Ret : boolean  = false;
Ret = Armstrong(Num);

if(Ret == true)
{
    console.log("It is an Armstrong Number ")
}
else
{
    console.log("It is Not an Armstrong Number ")

}