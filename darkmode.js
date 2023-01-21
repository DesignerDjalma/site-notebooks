
let botaoTrocaTema;

function trocarTema (){
    
    let meuHtml;
    let temaAtual;
    let novoTema;
    let precoTxt;

    precoTxt = document.getElementById("produto-notebook-preco")

    meuHtml = document.documentElement
    temaAtual = meuHtml.getAttribute("data-theme");
    novoTema = (temaAtual === "light") ? "dark" : "light"
    novaCor = (temaAtual === "light") ? "#FFFFFF" : "#FFFFFF"


    precoTxt.style.color = novaCor
    meuHtml.setAttribute("data-theme", novoTema)
}


botaoTrocaTema = document.getElementById("btn-troca-tema");
botaoTrocaTema.onclick = trocarTema;


