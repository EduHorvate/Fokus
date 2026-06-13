import { btnFocus, btnShort, btnLong, musicFocusInput, btnStartPause, startSound } from "../dom/element.js";
import { layoutFocus, layoutShortRest, layoutLongRest, musicPlayback, startTimer, soundControlTimer } from "../services/service.js";

export function registerEvents() {

    btnFocus.addEventListener('click', () => {
        layoutFocus();
    });


    btnShort.addEventListener('click', () => {
        layoutShortRest();
    });

    btnLong.addEventListener('click', () => {
        layoutLongRest()
    });

    musicFocusInput.addEventListener('change', () => {
        musicPlayback();
    });

    btnStartPause.addEventListener('click', () => {
       // startTimer();
        soundControlTimer();
    });
}