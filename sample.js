function onLoad(){
    
    image = document.getElementById("gazou");
    console.log(image);
}
    
    
    
    
    image.onmouseover = function () {
        var bd = document.getElementsByTagName("body");
        bd[0].style.backgroundColor = "blue";
    }
    
    var btn = document.getElementById("btn");
    var i = 1;
    console.log(image.src);
    btn.onclick = function () {
        if (i > 3) {
            i = 1;
            image.src = "img" + i + ".jpg";
            console.log(image.src);
            i++;
        }
        
    }
    
    
    
    