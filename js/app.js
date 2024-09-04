let nomeAmigos = []


function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let nomeAmigosTrimmed = amigo.value.trim().toLowerCase();
    
    if (nomeAmigosTrimmed === '') {
        alert('Insira o nome do amigo!');
        return;
    } 

    if (nomeAmigos.includes(nomeAmigosTrimmed)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    nomeAmigos.push(nomeAmigosTrimmed);

    if (lista.textContent === '') {
        lista.textContent = amigo.value.trim();        
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value.trim();
    }
    amigo.value = '';
}

function sortear() {
    embaralha(nomeAmigos);        
    let sorteio = document.getElementById('lista-sorteio');

    if (nomeAmigos.length < 4) {
        alert('Insira 4 nomes!');
        return;
    }

    for (let i = 0; i < nomeAmigos.length; i++) {
        if (i == nomeAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + nomeAmigos[i] + ' --> ' + nomeAmigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + nomeAmigos[i] + ' --> ' + nomeAmigos[i + 1] + '<br/>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    nomeAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}





























