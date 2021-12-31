var num = parseInt(prompt("Enter a number"));
var isPrime = true;
//for number 1
if (num===1)
{
alert("1 is not a prime");
}
// for number more than 1
else if (num>1)
{
for(var i = 2; i<num; i++)
{
if (num%i==0)
{
isPrime = false;
break;
}
}
if(isPrime)
{
alert(num+ " is a prime number");
}
else
{
alert(num+ " is not a prime number");
}
}