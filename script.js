console.log(dados);

let resultado = document.getElementById('resultados-pesquisa')


function pesquisar(){
    let campoPesquisa = document.getElementById('busca').value
    let section = ""
    let titulo = ""
    let descricao = ""
        for(let dado of dados) {
            campoPesquisa = campoPesquisa.toLowerCase()
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            if(campoPesquisa == ""){
                resultado.innerHTML = "Nada foi encontrado. Tente outra linguagem."
                return
            } else if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
                section +=`
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
                `
            }
        }
        resultado.innerHTML = section
}