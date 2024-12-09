let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
if(song.play()){
    song.ontimeupdate = function(){
        progress.value = song.currentTime;
    }
    progress.onchange =  function() {
        song.play();
        song.currentTime = progress.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
song.onerror = () => alert("Error loading the audio file.");
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") playPause();
});
progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});


