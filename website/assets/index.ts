import MediaPlayer from '@nikosantis/mediaplayer';
import AutoPlay from '@nikosantis/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@nikosantis/mediaplayer/lib/plugins/AutoPause';
import Ads from '@nikosantis/mediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
});

const buttonPlay: HTMLElement = document.querySelector('#playButton');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.querySelector('#muteButton');
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.log(error.message);
    });
}