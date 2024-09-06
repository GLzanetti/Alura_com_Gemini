console.log(dados);

let resultado = document.getElementById('resultados-pesquisa')

function pesquisar(){
    let section = ""
        for(let dado of dados) { 
        section += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`
    }
    resultado.innerHTML = section
}