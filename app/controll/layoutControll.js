import { html } from '../dom/element.js';

export function layoutFocus() {
    html.setAttribute('data-contexto', 'foco');
}

export function layoutShortRest() { 
html.setAttribute('data-contexto', 'descanso-curto');
}

export function layoutLongRest()  {
html.setAttribute('data-contexto', 'descanso-longo');    
}