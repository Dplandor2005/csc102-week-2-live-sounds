function sound(src)
{// add play function
    this.sound = document.createElement("audio") ;// create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//playsound
    }
}

function play()
{
    guitarsound = new sound("Relaxing guitar sound.mp3"); //different audio
    guitarsound.play();
}
function stop()
{
    window.location.reload(); //reloads the page
}