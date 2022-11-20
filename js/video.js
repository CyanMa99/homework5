// Add js here.

var play = document.querySelector('#play'),
    pause = document.querySelector('#pause'),
    slower = document.querySelector('#slower'),
    faster = document.querySelector('#faster'),
    skip = document.querySelector('#skip'),
    video = document.querySelector('video'),
    volume = document.querySelector('volume');

video.defaultPlaybackRate = 1
video.load();

play.addEventListener("click", function() {
    // what is add event listener doing? -- ok
    video.play();
    video.autoplay = true;
    video.loop() = false;
    video.playbackRate = 1;
});

pause.addEventListener("click", function() {
    video.pause();
});

slower.addEventListener("click", function() {
    video.playbackRate = 0.5;
    alert("Video is at slowest speed!")
});

faster.addEventListener("click", function() {
    video.playbackRate = 2;
    alert("Video is at fastest speed!")
});

skip.addEventListener("click", function() {
   video.currentTime +=15;
   if(video.currentTime > 66){
    video.currentTime = 0;
   }
//    how to make it start from the beginning after loop? -- ok
}
);

// why mute is not working -- ok
var muteButton = document.querySelector('#mute')
muteButton.addEventListener('click', function(){
    if(video.muted === true){
        video.muted = false;
        muteButton.innerHTML = "Mute";
    }else{
        video.muted = true;
        muteButton.innerHTML = "Unmute";
    }
})

var sliderButton = document.querySelector('#slider')
sliderButton.addEventListener("change", function() {
    video.volume = slider.value / 100;
    document.querySelector("#volume").innerHTML = slider.value;
    console.log(video.volume);
});

// what this line means: <label for="slider">Volume</label>: 0
