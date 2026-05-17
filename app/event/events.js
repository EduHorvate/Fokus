import { btnFocus, btnShort, btnLong } from "../dom/element.js";
import { layoutFocus, layoutShortRest, layoutLongRest } from "../controll/layoutControll.js";

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