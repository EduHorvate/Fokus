import { btnFocus, btnShort, btnLong } from "../dom/element.js";
import { layoutFocus, layoutShortRest, layoutLongRest } from "../services/service.js";

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

}