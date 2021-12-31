var range = parseInt(prompt("enter the range number"));
for (var i = 0; i <= range; i++) 
{
    var flag = 0;

    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}