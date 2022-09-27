for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var keyValue=this.innerHTML;
        
        makeSound(keyValue);

        buttonAnimation(keyValue);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
})

function makeSound(keyValue)
{
    switch (keyValue) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(keyValue);
    }
}

function buttonAnimation(keyValue) {
    var activeKey= document.querySelector("."+keyValue);

    activeKey.classList.add("pressed");

    setTimeout(function() {
        activeKey.classList.remove("pressed");
    },100);
}