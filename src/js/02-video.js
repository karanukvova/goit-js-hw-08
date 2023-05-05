import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
player.on('timeupdate', _.throttle(onPlay, 1000));
function onPlay({seconds}) {
    localStorage.setItem(STORAGE_KEY, seconds);
};
function setTime() {
    let saveTime = localStorage.getItem(STORAGE_KEY)
    if (saveTime === null) {
        saveTime = 0
    } 
    player.setCurrentTime(saveTime)
}
window.addEventListener("DOMContentLoaded", setTime)