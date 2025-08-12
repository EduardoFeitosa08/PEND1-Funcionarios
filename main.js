'use strict'

import funcionarios from "./funcionarios.json" with {type:'json'}

function criarConteudo(funcionario){
    const opcao = document.getElementById('opcao')
    const container = document.createElement('div')
    const img = document.createElement('img')
    const nome = document.createElement('h2')
    const funcao = document.createElement('p')

    img.src = ('./img/' + funcionario.imagem)
    nome.textContent = funcionario.nome
    funcao.textContent = funcionario.cargo

    opcao.appendChild(container)

    container.appendChild(img)
    container.classList.add('container')
    img.classList.add('funcionario')

    document.documentElement.style.setProperty('--nome', container.appendChild(nome))
    document.documentElement.style.setProperty('--funcao', container.appendChild(funcao))
}

function carregarConteudos(){
    const conteudos = funcionarios

    conteudos.forEach(criarConteudo)
}

carregarConteudos()