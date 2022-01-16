document.write('<h3>Matrix</31>')

var matrix = [[9,7,1,4],
              [5,7,3,4],
              [2,4,6,5],
              [2,5,3,5]];
var n = matrix.length
var sum =0;
for(let i =0;i<n;i++){
    document.write('<br>');

    for(let j =0;j<n;j++){
        document.write(matrix[i][j]);

        document.write(" ");

        if(i == j){
            sum = sum+matrix[i][j];
        }
    }
}

document.write('<br>')

document.write('<h4>Sum of diagonal elements</h4>')

document.write(sum);
