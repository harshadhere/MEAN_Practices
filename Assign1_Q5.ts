function Fibonaci(no : number) : void
{
    var i = 1
    var No1= 0
     No1 = no +2
    var Array : number[];

    Array  = [23]

    Array[0] = 0
    Array[1] = 1
    console.log(Array[1])

    for(i = 2;i<= no;i++)
    {
         Array[i] = Array[i-1] + Array[i -2]
         if(Array[i]<=no)
         {
         console.log(Array[i])
         }
    }

    

}

var no : number = 21

var iRet = 0

  Fibonaci(no)
