let audioAtual = null;

function tocaSom(seletorAudio) { 
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        if (audioAtual != null) { 
            audioAtual.pause();
        }
        elemento.play();
        audioAtual = elemento; 
     } else {
         console.log('Elemento não encontrado ou seletor inválido');
     }
 
}
let contadorDeEnter = 0;

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i=0; i <listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    // template string
    const idAudio = `#som_${instrumento}`

    // console.log(instrumento);
    listaDeTeclas[i].onclick = function () {
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (event) {
        console.log(event)
        if (event.code === "Space" || event.code === "Enter") {
            if(event.code === 'Enter') {
                contadorDeEnter++;
                if (contadorDeEnter >= 2) { 
                    event.preventDefault(); 
               }
             }
             tecla.classList.add('ativa');
        }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
        contadorDeEnter = 0;
        
    }

    }
}
    //     if(event.code === 'Enter' || event.code === 'NumpadEnter') {
    //         if(event.code === 'Enter') {
    //             contadorDeEnter++;
    //             if (contadorDeEnter >= 2) { 
    //                event.preventDefault(); 
    //             }
    //         }
    //         tecla.classList.add('ativa');
    //     }

    // }

    // tecla.onkeyup = function () {
	// 	tecla.classList.remove('ativa');
    //     contadorDeEnter = 0;
    // }


//}