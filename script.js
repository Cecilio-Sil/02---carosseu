let anterior = document.getElementById('anterior');         //prevButton
let proximo = document.getElementById('proximo');           //nextButton
let recipentePri = document.querySelector('.recipentePri'); //container
let itens = recipentePri.querySelectorAll('.lista .item');  //todos os itens
let numero = document.querySelector('.indicadores .numero')


let ativo = 0;                             //active
let primeiraPosicao = 0;                   //firstPosition
let ultimaPosição = itens.length - 1;      //lastPosition


proximo.onclick = () => {  //nextButton
     let itemAntigo = recipentePri.querySelector('.lista .item.active');
    itemAntigo.classList.remove('active'); //tira classe active

    ativo = ativo + 1 > ultimaPosição ? 0 : ativo + 1;
    itens[ativo].classList.add('active'); //adicionando a classe active  
    
}

anterior.onclick = () => {  //prevButton
    let itemAntigo = recipentePri.querySelector('.lista .item.active');
    itemAntigo.classList.remove('active');

    ativo = ativo - 1 < primeiraPosicao ? ultimaPosição : ativo - 1;
    itens[ativo].classList.add('active');

}