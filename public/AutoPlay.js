export default class AutoPlay {
    constructor() {
    }
    run(Player) {
        if (!Player.muted) {
            Player.muted = true;
        }
        Player.media.play();
    }
}

