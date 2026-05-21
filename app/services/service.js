import { html, mainImage, mainTitle } from "../dom/element.js";

export function changeContext(context) {

    html.setAttribute('data-contexto', context);
    mainImage.setAttribute('src', `imagens/${context}.png`);
    switch (context) {
        case 'foco':
            mainTitle.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;

            break;
        case 'descanso-curto':
            mainTitle.innerHTML = `Que tal dar uma respirada? 
                    <strong class="app__title-strong">Faça uma pausa curta!</strong>`;

            break;
        case 'descanso-longo':
            mainTitle.innerHTML = `Hora de voltar à superfície.
                    <strong class="app__title-strong"> Faça uma pausa longa.</strong>`;
                    
        default:
            break;
    }
}