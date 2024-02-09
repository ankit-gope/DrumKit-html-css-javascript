// Button click
var lengthOfButton = document.querySelectorAll(".sound").length;
for(var i=0;i<lengthOfButton;i++){
    document.querySelectorAll(".sound")[i].addEventListener("click",function(){
        var buttonClick = this.innerHTML;
        makeSound(buttonClick);
        
        
    });
}

// var audio =  new Audio("sounds/rock.mp3");
// audio.play();


//KeyBoard click
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    
});

function makeSound(key){
    switch (key) {
        case "a":
            var rock =  new Audio("sounds/rock.mp3");
            rock.play();
            
            break;
            case "b":
            var slow =  new Audio("sounds/slow.mp3");
            slow.play();
            
            break;
            case "c":
            var small =  new Audio("sounds/small.mp3");
            small.play();
            
            break;
            case "d":
            var splash =  new Audio("sounds/splash.mp3");
            splash.play();
            
            break;
            case "e":
            var stone =  new Audio("sounds/stone.mp3");
            stone.play();
            
            break;
            case "f":
            var sunflower=  new Audio("sounds/sunflower.mp3");
            sunflower.play();
            
            break;
            case "g":
            var war =  new Audio("sounds/war.mp3");
            war.play();
            
            break;
    
        default:
            break;
    }
}

