import { btnFocus, btnShort, btnLong, musicFocusInput, btnStartPause, startSound } from "../dom/element.js";
import { layoutFocus, layoutShortRest, layoutLongRest, musicPlayback, soundControlTimer, StartOrPauseTimer } from "../services/service.js";

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
        StartOrPauseTimer();
    });
}