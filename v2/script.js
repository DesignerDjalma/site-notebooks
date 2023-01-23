function trocarTema (){
    // let btn = document.getElementById("btn-troca-tema");
    
    let nav_desktop_btn_troca_tema = document.getElementById("nav-desktop-btn-troca-tema");
    let nav_mobile_btn_troca_tema = document.getElementById("nav-mobile-btn-troca-tema");
    let nav_mobile_btn_menu_drop_down = document.getElementById("nav-mobile-btn-menu-drop-down");

    let temaAtual;
    let novoTema;

    temaAtual = document.documentElement.getAttribute("data-theme");
    novoTema = (temaAtual === "light") ? "dark" : "light";

    if (temaAtual === "light"){
        novoTema = "dark"
        document.documentElement.style.setProperty('--corIcones', '#000000');

        addTemaClaro(nav_desktop_btn_troca_tema,"sun")
        addTemaClaro(nav_mobile_btn_troca_tema,"sun")
        desinverteCor(nav_mobile_btn_menu_drop_down)

    } else {
        novoTema = "light"
        document.documentElement.style.setProperty('--corIcones', '#FFFFFF');
        addTemaEscuro(nav_desktop_btn_troca_tema,"moon")
        addTemaEscuro(nav_mobile_btn_troca_tema,"moon")
        inverteCor(nav_mobile_btn_menu_drop_down)
    }

    document.documentElement.setAttribute("data-theme", novoTema);

}

function addTemaClaro (elemento, icone) {
    mudarGGicone(elemento, icone);
    desinverteCor(elemento)
}

function addTemaEscuro (elemento, icone) {
    mudarGGicone(elemento, icone);
    inverteCor(elemento)
}


function mudarGGicone(elemento, icone){
    elemento.innerHTML = `<i class="gg-${icone}"></i>`
}

function inverteCor (elemento) {
    elemento.classList.add("invert-true");
    elemento.classList.remove("invert-false");
}

function desinverteCor (elemento) {
    elemento.classList.add("invert-false");
    elemento.classList.remove("invert-true");
}

function trocarIconeMenu(btn) {
    console.log(btn)
    let nav_mobile_lista = document.getElementById("nav-mobile-lista");
    nav_mobile_lista.classList.toggle("remover");
}

trocarTema()