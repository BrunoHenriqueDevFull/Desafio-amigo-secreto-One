
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');


let amigos = [];



function adicionarAmigo() {
    console.log('teste de clique');
    let nome = document.querySelector('input').value;
    if (nome) {
        
        amigos.push(nome);

       
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);

        
        inputAmigo.value = '';
        inputAmigo.focus();
    } else {
        alert('Por favor, insira um nome válido!');
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia! Adicione nomes antes de sortear.');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

   
    resultado.textContent = ` O amigo sorteado é: ${amigoSorteado}!`
}

function resetarLista() {
    // Limpa o array
    amigos = [];

    // Remove os itens da lista no DOM
    listaAmigos.innerHTML = '';

    // Limpa o resultado do sorteio
    resultado.textContent = '';

    // Foco no campo de entrada
    inputAmigo.focus();

    alert('A lista foi resetada com sucesso!');
}

