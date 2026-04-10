let filmes = [];

// cadastro
// document: Representa a página HTML (o DOM). É a porta de entrada para acessar qualquer elemento do site.
// getElementById: Método que busca um elemento específico no HTML através do seu ID único.
document.getElementById("btnCadastrar").addEventListener("click", cadastrarFilme);

// filtros 
document.getElementById("btnFiltrarClassificacao").addEventListener("click", filtrarClassificacao);
document.getElementById("btnFiltrarAno").addEventListener("click", FiltrarAno);

function cadastrarFilme() {
    // value: É a propriedade que pega o conteúdo digitado pelo usuário dentro de um campo de entrada (input).
    let titulo = document.getElementById("Titulo").value;
    let ano = document.getElementById("ano").value;
    let classificacao = document.getElementById("Classificacao").value;

    // == (Igualdade Ampla): Compara apenas o valor. Ignora o tipo, tentando converter um no outro antes de comparar.
    // === (Igualdade Estrita): Compara o valor E o tipo. Não faz conversão; se os tipos forem diferentes, já retorna falso.
    if (titulo === "" || ano === "" || classificacao === "") {
        alert("Preencha todos os campos!!");
        return;
    }

    let filme = {
        titulo: titulo,
        ano: Number(ano),
        classificacao: classificacao
    };

    filmes.push(filme);
    limparCampos();
    exibirFilmes(filmes);
}

function exibirFilmes(lista) {
    // join: Pega todos os itens de um array e os transforma em uma única string, separando-os pelo texto escolhido (neste caso, <br>).
    let texto = lista.map(f => `${f.titulo} (${f.ano}) - classificação: ${f.classificacao}`).join("<br>");
    document.getElementById("listarFilmes").innerHTML = texto;
}

function filtrarClassificacao() {
    let filtro = document.getElementById("FiltroClassificacao").value;
    // filter: Cria uma nova lista contendo apenas os itens que atendem a uma condição (ex: apenas filmes com certa classificação).
    let resultado = filmes.filter(f => f.classificacao === filtro);
    exibirFilmes(resultado);
}

function FiltrarAno() {
    let filtro = Number(document.getElementById("filtroAno").value);
    let resultado = filmes.filter(f => f.ano === filtro);
    exibirFilmes(resultado);
}

function limparCampos() {
    document.getElementById("Titulo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("Classificacao").value = "";
}