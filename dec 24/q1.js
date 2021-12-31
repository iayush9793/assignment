var num = (parseInt(prompt("Enter a number ")));
if (num < 0) 
{
    alert("Number is negative");
}
else if (num === 0) 
{
  alert("The factorial is 1");
}

// if number is positive
else 
{
    var fact = 1;
    for (i = 1; i <= num; i++) 
{
        fact *= i;
    }
  alert(fact+ " is the factorial ");
}