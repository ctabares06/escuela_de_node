export default class AutoPause {
    constructor() {
        this.threshold = 0.25;
    }
    run(Player){
        this.Player = Player;


        const Observer = new IntersectionObserver(this.intersectionHandler.bind(this), {
            threshold : 0.25
        });

        Observer.observe(this.Player.media);
    }

    intersectionHandler(entries) {
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.Player.media.play();
        } else {
            this.Player.media.pause();
        }

    }
}