// lista para armazenar os nomes
const nomes = []

// elementos do DOM
const inputNome = document.getElementById('amigo')
const btnAdicionar = document.querySelector('.button-add')
const listaNomes = document.getElementById('listaAmigos')
const btnSortear = document.querySelector('.button-draw')
const listaResultados = document.getElementById('resultado')


btnAdicionar.addEventListener('click', ()=>{
    const receberNome = inputNome.value
    nomes.push(receberNome)
    console.log(nomes)
    const li = document.createElement('li')
    li.textContent = receberNome
    listaNomes.appendChild(li)
    inputNome.value = ''
})

function aleatorio(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Corrigido aqui
    }
}

btnSortear.addEventListener('click', ()=>{
    const sorteio = [...nomes]
    aleatorio(sorteio)

    let valido = false
    do {
        valido = true
        for (let i = 0; i < sorteio.length; i++){
            if (sorteio [i] === nomes[i]){
                valido = false
                aleatorio(sorteio)
                break
            }
        }
    }while(!valido)
    listaResultados.innerHTML = ''
    for (let i = 0; i < nomes.length; i++){
        const li = document.createElement('li')
        li.textContent = `${nomes[i]} tirou ${sorteio[i]}`
        listaResultados.appendChild(li)
    }
})
