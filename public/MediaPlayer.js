export default function MediaPlayer(element) {
    this.media = element.el;
    this.plugins = element.plugins || [];

    this.__initPlugs();
};

MediaPlayer.prototype.__initPlugs = function() {
    this.plugins.forEach(plugin => plugin.run(this));
}

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) 
        this.media.play();
    else this.media.pause();
}

MediaPlayer.prototype.toggleMute = function() {
    if (this.media.muted)
        this.media.muted = false;
    else this.media.muted = true;
}