var numberofDrums = document.querySelectorAll(".drum").length;


for (i = 0; i<numberofDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var selectedButton = this.innerHTML
        switch (selectedButton) {
                case "w" : 
                        var tom1 = new Audio("sounds/tom-1.mp3");
                        tom1.play();
                break;
                
                case "a" : 
                        var tom2 = new Audio("sounds/tom-2.mp3");
                        tom2.play();
                break;
                
                case "s" : 
                        var tom3 = new Audio("sounds/tom-3.mp3");
                        tom3.play();
                break;

                case "d" : 
                        var tom4 = new Audio("sounds/tom-4.mp3");
                        tom4.play();
                break;

                case "j" : 
                        var kickbass = new Audio("sounds/kick-bass.mp3");
                        kickbass.play();
                break;

                case "k" : 
                        var snare = new Audio("sounds/snare.mp3");
                        snare.play();
                break;

                case "l" : 
                        var crash = new Audio("sounds/crash.mp3");
                        crash.play();
                break;

                default: console.log(selectedButton)
        }

        // My method using if else statements
        // if (selectedButton === "w") {
        //     var audio = new Audio("sounds/tom-1.mp3");
        //     audio.play();
        // } 
        // else if (selectedButton === "a") {
        //     var audio = new Audio("sounds/tom-2.mp3");
        //     audio.play();
        // } 

        // else if (selectedButton === "s") {
        //     var audio = new Audio("sounds/tom-3.mp3");
        //     audio.play();
        // }

        // else if (selectedButton === "d") {
        //     var audio = new Audio("sounds/tom-4.mp3");
        //     audio.play();
        // }

        // else if (selectedButton === "j") {
        //     var audio = new Audio("sounds/kick-bass.mp3");
        //     audio.play();
        // }

        // else if (selectedButton === "j") {
        //     var audio = new Audio("sounds/kick-bass.mp3");
        //     audio.play();
        // }

        // else if (selectedButton === "k") {
        //     var audio = new Audio("sounds/snare.mp3");
        //     audio.play();
        // }

        // else {
        //     var audio = new Audio("sounds/crash.mp3");
        //     audio.play();
        // }
    });
    }



