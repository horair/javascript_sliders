var a = 1;
var image = document.getElementById("image");
function change() {
        switch(a) 
         {
            case 1:
                image.src = "./images/images.jpg"
                a++;
                break;
                case 2:
                    image.src = "./images/images.png"
                    a++;
                    break;
                    case 3:
                        image.src = "./images/123.jpg"
                        a++;
                        break;   
            default:
                image.src = "./images/download.jpg"
        }
}