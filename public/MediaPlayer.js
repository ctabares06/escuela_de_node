export default class MediaPlayer {
    constructor(element) {
        this.media = element.el;
        this.plugins = element.plugins || [];

        this.__initPlugs();
    }
    __initPlugs() {

        const Player = {
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };

        this.plugins.forEach(plugin => plugin.run(Player));
    }
    togglePlay() {
        if (this.media.paused)
            this.media.play();
        else
            this.media.pause();
    }
    toggleMute() {
        if (this.media.muted)
            this.media.muted = false;
        else
            this.media.muted = true;
    }
};



