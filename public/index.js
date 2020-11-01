import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./AutoPlay.js";
import AutoPause from "./AutoPause.js";

const video = document.querySelector('video');
const _playControl = document.querySelector('.playControl');
const _muteControl = document.querySelector('.muteControl');


const Player = new MediaPlayer({ el: video, plugins : [new AutoPlay(), new AutoPause()]});

_playControl.onclick = () => Player.togglePlay();
_muteControl.onclick = () => Player.toggleMute();



