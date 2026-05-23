import { btnFocus, btnShort, btnLong, musicFocusInput } from "../dom/element.js";
import { layoutFocus, layoutShortRest, layoutLongRest, musicPlayback } from "../services/service.js";

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
}