import {
    html,
    mainImage,
    btnFocus,
    btnShort,
    btnLong,
    music,
    startSound,
    pauseSound,
    alarmSound,
    btnStartPause,
    imgStartPause,
    startButtonName,
    timer
} from '../dom/element.js';
import { changeContext } from '../controll/layoutControll.js';

let elapsedTimeInSeconds = 1500;
let intervalId = null;

export function layoutFocus() {
    elapsedTimeInSeconds = 1500;
    changeContext('foco');
    btnFocus.classList.add('active');
}

export function layoutShortRest() {
    elapsedTimeInSeconds = 300;
    changeContext('descanso-curto');
    btnShort.classList.add('active');
}

export function layoutLongRest() {
    elapsedTimeInSeconds = 900;
    changeContext('descanso-longo');
    btnLong.classList.add('active');
}

export function musicPlayback() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
    music.loop = true;
}

export const countdown = () => {
    elapsedTimeInSeconds -= 1;
    if (elapsedTimeInSeconds <= 0) {
         resetTimer();
         alarmSound.play();
        startButtonName.textContent = 'Começar';
        imgStartPause.src = '/imagens/play_arrow.png';
        btnStartPause.classList.remove('pause');
        btnStartPause.classList.add('play');
        alert('Tempo esgotado!');
        return;
    }
    showTimeOnScreen();
}

export function StartOrPauseTimer() {
    soundControlTimer();
    if (intervalId !== null) {
        resetTimer();
        return;
    } 
    intervalId = setInterval(countdown, 1000);
}

export function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

export function soundControlTimer() {
    if (btnStartPause.classList.contains('play')) {
      playState();
    } else {
       pauseState();
    }
}

function playState() {
    startSound.play();

    btnStartPause.classList.remove('play');
    btnStartPause.classList.add('pause');

    imgStartPause.src = '/imagens/pause.png';
    startButtonName.textContent = 'Pausar';
}

function pauseState() {
    pauseSound.play();

    btnStartPause.classList.remove('pause');
    btnStartPause.classList.add('play');

    imgStartPause.src = '/imagens/play_arrow.png';
    startButtonName.textContent = 'Começar';
}

export function showTimeOnScreen() {
    const showTimer = new Date(elapsedTimeInSeconds * 1000).toISOString().substr(14, 5);
    timer.innerHTML = `${showTimer}`;
}

showTimeOnScreen();