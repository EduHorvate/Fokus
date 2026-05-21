import { html, mainImage } from '../dom/element.js';
import { changeContext } from '../services/service.js';

export function layoutFocus() {
    changeContext('foco');
}

export function layoutShortRest() {
    changeContext('descanso-curto');
}

export function layoutLongRest() {
    changeContext('descanso-longo');
}