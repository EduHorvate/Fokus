import { html, mainImage, btnFocus, btnShort, btnLong } from '../dom/element.js';
import { changeContext } from '../controll/layoutControll.js';

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