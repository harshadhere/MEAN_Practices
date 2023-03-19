function ChkPrime(no : number) : Boolean
{

    var i : number = 0;
    var Count : number = 0;
    for(i = 1;i<=no;i++)
    {
        if(no % i==0)
        {
           Count++;
        }
    }

    if(Count ==2)
    {
        return true
    }
    else
    {
        return false
    }
}

var  bRet : Boolean = false;
var No : number = 11

bRet = ChkPrime(No)
if(bRet == true)
{
    console.log("It is a Prime Number")
}
else
{
    console.log("It is not a Prime Number")
}
