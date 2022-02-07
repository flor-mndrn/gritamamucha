document.getElementById("btn").addEventListener("touchstart", imgOn);
document.getElementById("btn").addEventListener("touchend", imgOf);    
document.getElementById("btn").addEventListener("mousedown", imgOnDESK);
document.getElementById("btn").addEventListener("mouseup", imgOfDESK);
function imgOnDESK() {
      document.getElementById("img-boca").style.backgroundImage = "url(img/gif1.gif)";
    }
    function imgOfDESK () {
      document.getElementById("img-boca").style.backgroundImage = "url(img/boca1.png)";
    }
    function imgOn() {
      document.getElementById("img-boca").style.backgroundImage = "url(img/gif1.gif)";
    }
    function imgOf() {
      document.getElementById("img-boca").style.backgroundImage = "url(img/boca1.png)";
    }