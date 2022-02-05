var img_arr = [
    'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?cs=srgb&dl=pexels-pixabay-302804.jpg&fm=jpg',
    'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?cs=srgb&dl=pexels-pixabay-302804.jpg&fm=jpg',
    'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?cs=srgb&dl=pexels-pixabay-302804.jpg&fm=jpg',
    'https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?cs=srgb&dl=pexels-pixabay-302804.jpg&fm=jpg',
];

function showImage(){
var container_ref = document.getElementById("post_img");
container_ref.innerText = "";


var img_ref = document.createElement("img");
img_ref.src = img_arr[0];
container_ref.appendChild(img_ref);
}

showImage()

function showImage1(){
    var container_ref = document.getElementById("post_img1");
    container_ref.innerText = "";
    
    
    var img_ref = document.createElement("img");
    img_ref.src = img_arr[1];
    container_ref.appendChild(img_ref);  
}

showImage1()

function showImage2(){
    var container_ref = document.getElementById("post_img2");
    container_ref.innerText = "";
    
    
    var img_ref = document.createElement("img");
    img_ref.src = img_arr[2];
    container_ref.appendChild(img_ref);  
}

showImage2()


function showImage3(){
    var container_ref = document.getElementById("post_img3");
    container_ref.innerText = "";
    
    
    var img_ref = document.createElement("img");
    img_ref.src = img_arr[3];
    container_ref.appendChild(img_ref);  
}

showImage3()