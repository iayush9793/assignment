var pic = document.getElementsByTagName('span')
span.addEventListener('click' , reaction)
var count = 0;
function reaction(){
count++;
if(count % 2 == 0){
    span.style.display="flex";
}
else{
    span.style.display="flex";
}
}
