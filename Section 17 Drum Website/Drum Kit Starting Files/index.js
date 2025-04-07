var numberofDrums = document.querySelectorAll(".drum").length;

for (i = 0; i<numberofDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert(i + " drum got clicked");
    });
    }