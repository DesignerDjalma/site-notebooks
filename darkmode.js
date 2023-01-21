function trocarTema (){

    let temaAtual;
    let novoTema;

    temaAtual = document.documentElement.getAttribute("data-theme");
    novoTema = (temaAtual === "light") ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", novoTema);

}

