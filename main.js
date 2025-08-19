'use strict'

import funcionarios from "./funcionarios.json" with {type:'json'}

function criarConteudo(funcionario){
    const opcao = document.getElementById('opcao')
    const card = document.createElement('div')
    const img = document.createElement('img')
    const nome = document.createElement('h2')
    const funcao = document.createElement('p')

    img.src = ('./img/' + funcionario.imagem)
    nome.textContent = funcionario.nome
    funcao.textContent = funcionario.cargo

    opcao.appendChild(card)

    card.appendChild(img)
    card.classList.add('card')
    img.classList.add('funcionario')

    document.documentElement.style.setProperty('--nome', card.appendChild(nome))
    document.documentElement.style.setProperty('--funcao', card.appendChild(funcao))
}

function carregarConteudos(){
    const conteudos = funcionarios

    conteudos.forEach(criarConteudo)
}

carregarConteudos()