export default function AutoPlay() {
}

AutoPlay.prototype.run = function(Player) {
    Player.toggleMute();
    Player.togglePlay();
}