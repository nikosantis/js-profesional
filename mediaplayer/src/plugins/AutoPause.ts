import MediaPlayer from '../MediaPlayer.js';
class AutoPause {
    private threshold: number;
    player: MediaPlayer;
    constructor() {
        this.threshold = 0.25;
        this.handlerInersection = this.handlerInersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }
    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handlerInersection, {
            threshold: this.threshold
        });

        observer.observe(player.media);

        document.addEventListener("visibilitychange", this.handlerVisibilityChange)
    }

    private handlerInersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
    private handlerVisibilityChange() {
        const isVisible = document.visibilityState === "visible"
        if ( isVisible ) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}


export default AutoPause;