var a = 1;
var color = document.getElementById("color");
function change() {
        switch(a) 
         {
            case 1:
                color.style.backgroundColor = "green"
                a++;
                break;
                case 2:
                    color.style.backgroundColor = "pink"
                    a++;
                    break;
                    case 3:
                        color.style.backgroundColor = "orange"
                        a++;
                        break;   
                        case 4:
                            color.style.backgroundColor = "brown"
                            a++;
                            break;
            default:
                    color.style.backgroundColor = "blue"
        }
}