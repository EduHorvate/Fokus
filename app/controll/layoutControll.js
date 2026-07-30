import { html, mainImage, mainTitle, contextButtons } from "../dom/element.js";
import { showTimeOnScreen } from "../services/service.js";

export function changeContext(context) {
    showTimeOnScreen();

    contextButtons.forEach(button => {
        button.classList.remove('active');
    });

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