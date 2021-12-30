var a= [];
var b = a.push(parseInt(prompt("enter 1st number")));
var c = a.push(parseInt(prompt("enter 2nd number")));
var d = a.push(parseInt(prompt("enter 3rd number")));

if(a[0] > a[1] && a[0] > a[2])
{
alert(a[0] + " is largest");
}
else if (a[1] > a[0] && a[1] > a[2])
{
alert(a[1] + " is largest");
}
else  
{
alert(a[2] + " is largest");
}

