import Vimeo from '@vimeo/player';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

startPlayer();

function stopTime() {
  return localStorage.getItem(LOCALSTORAGE_KEY) || '';
}

function startPlayer() {
  player
    .setCurrentTime(parseInt(stopTime()))
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

const throttle = require('lodash.throttle');

const throttled = throttle(tracking, 1000, { trailing: false });
player.on('timeupdate', throttled);

function tracking({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
}
