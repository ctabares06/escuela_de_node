import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./AutoPlay.js";

const video = document.querySelector('video');
const _playControl = document.querySelector('.playControl');
const _muteControl = document.querySelector('.muteControl');

const AutoPlayer = new AutoPlay();
const Player = new MediaPlayer({ el: video, plugins : [AutoPlayer]});

_playControl.onclick = () => Player.togglePlay();
_muteControl.onclick = () => Player.toggleMute();



