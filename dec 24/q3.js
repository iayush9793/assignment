var num =prompt("Enter a number to check");
var flag=0;
for(var i=1; i<num;i=i+1)
{
   if(num%i==0 && num/i==i)
{
     flag=1;
     break;
   }
}
if(flag==1)
{
   alert("perfect square");
}
else
{
    alert("not a perfect square");
}