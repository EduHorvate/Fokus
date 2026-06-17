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
    startButtonName
} from '../dom/element.js';
import { changeContext } from '../controll/layoutControll.js';

let tempoDecorridoEmSegundos = 10;
let intervalId = null;

export function layoutFocus() {
    changeContext('foco');
    btnFocus.classList.add('active');
}

export function layoutShortRest() {
    changeContext('descanso-curto');
    btnShort.classList.add('active');
}

export function layoutLongRest() {
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

export const testeTimer = () => {
    tempoDecorridoEmSegundos -= 1;
    if (tempoDecorridoEmSegundos <= 0) {
        startButtonName.textContent = 'Começar';
        resetTimer();
        alert('Tempo esgotado!');
        return
    }
    if (tempoDecorridoEmSegundos === 6) {
        alarmSound.play();
    }
    console.log(tempoDecorridoEmSegundos);
}

export function startTimer() {
    intervalId = setInterval(testeTimer, 1000);
}

export function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

export function soundControlTimer() {
    if (btnStartPause.classList.contains('play')) {
        startSound.play();
        btnStartPause.classList.remove('play');
        btnStartPause.classList.add('pause');
        imgStartPause.src = '/imagens/pause.png';
        startButtonName.textContent = 'Pausar';
    } else if (btnStartPause.classList.contains('pause')) {
        pauseSound.play();
        btnStartPause.classList.remove('pause');
        btnStartPause.classList.add('play');
        imgStartPause.src = '/imagens/play_arrow.png';
        startButtonName.textContent = 'Começar';
    }
}