function trocarTema (btn){

    let temaAtual;
    let novoTema;

    temaAtual = document.documentElement.getAttribute("data-theme");
    
    novoTema = (temaAtual === "light") ? "dark" : "light";

    console.log("Ah")


    if (btn.classList.value === "invert-false"){
        console.log("True")
        btn.classList.remove("invert-false")
        btn.classList.add( "invert-true")
    } else {
        console.log("False")

        btn.classList.add("invert-false")
        btn.classList.remove( "invert-true")
    }

    document.documentElement.setAttribute("data-theme", novoTema);

}

function trocarTemaFancy (thisBtn){

    // let btn = thisBtn;
    let btn = document.getElementById("btn-troca-tema");
    let temaAtual;
    let novoTema;

    temaAtual = document.documentElement.getAttribute("data-theme");
    
    novoTema = (temaAtual === "light") ? "dark" : "light";

    console.log("Ah")


    if (btn.classList.value === "invert-false"){
        console.log("True")
        btn.classList.remove("invert-false")
        btn.classList.add( "invert-true")
        btn.innerHTML = `<i class="gg-moon"></i>`
    } else {
        console.log("False")

        btn.classList.add("invert-false")
        btn.classList.remove( "invert-true")
        btn.innerHTML = `<i class="gg-sun"></i>`
    }

    document.documentElement.setAttribute("data-theme", novoTema);

}

