const dados_template = {
    "notebooks_ate_4k":{
        "titulo":"💻 Notes até 4k 💸",
        "titulo_safe":"notes4k",
        "notebooks":[]
    },
    "notebooks_gamer":{
        "titulo":"💻Notes Gamer👾",
        "titulo_safe":"notesGamer",
        "notebooks":[]
    }
}

const dados = {
    "notebooks_ate_4k":{
        "titulo":"💻 Notes até 4k 💸",
        "titulo_safe":"notes4k",
        "notebooks":[
             // objetos aqui
             {"nome_completo":"ASUSE510","nome":"ASUSE510","preco":"1484.10","site":"Asus","comprar_link":"https://www.asus.com/br/laptops/for-home/all-series/asus-e510/techspec/","capa_img_link":"https://dlcdnwebimgs.asus.com/gain/90a81782-5c2a-4e9d-82c6-270da9a311a3/","descricao":{"tela":["TELA:15,6''HD","TELA:15,6''HD"],"cpu":["CPU:Intel®Celeron®N4020","CPU:Intel®Celeron®N4020"],"ram":["RAM:4GB","RAM:4GB"],"rom":["SSD:128GBeMMC","SSD:128GBeMMC"],"gpu":["GPU:Intel®UHD","GPU:Intel®UHD"],"cam":["CAM:VGA","CAM:VGA"],"so":["SO:Windows11","SO:Windows11"]}},
             {"nome_completo":"NotebookVostro3510","nome":"NotebookVostro3510","preco":"2799","site":"Dell","comprar_link":"https://www.dell.com/pt-br/shop/laptops/3510-intel/spd/vostro-15-3510-laptop/v3510w8080w","capa_img_link":"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/15-3510/media-gallery/archive/dv3510nt_cnb_00055lf110_gy-usb-a.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full","descricao":{"tela":["TELA: Full HD de 15.6\"","TELA: Full HD de 15.6\""],"cpu":["CPU: Intel® Pentium® Gold 7505","CPU: Intel® Pentium® Gold 7505"],"ram":["RAM: 4GB DDR4 2666MHz","RAM: 4GB DDR4 2666MHz"],"rom":["SSD: 128GB PCIe NVMe M.2","SSD: 128GB PCIe NVMe M.2"],"gpu":["GPU: Intel® UHD","GPU: Intel® UHD"],"cam":["CAM: 720p HD ","CAM: 720p HD "],"so":["SO: Windows 11","SO: Windows 11"]}},
             {"nome_completo":"NotebookVAIO®FE15AMD®","nome":"NotebookVAIO®FE15AMD®","preco":"2991.12","site":"LojasAmericanas","comprar_link":"https://www.br.vaio.com/notebook-vaio-fe15-amd-ryzen3-ssd-256gb-8gb-linux-full-hd-tela-15-prata-titanio/p","capa_img_link":"https://vaiobr.vteximg.com.br/arquivos/ids/160655-1000-1000/VAIO-Alder-Lake-15-Cinza_ang-12_Alta.jpg?v=638048253217370000","descricao":{"tela":["TELA: 15.6\", LED FHD","TELA: 15.6\", LED FHD"],"cpu":["CPU: AMD® Ryzen 5","CPU: AMD® Ryzen 5"],"ram":["RAM: 8GB DDR4","RAM: 8GB DDR4"],"rom":["SSD: 256GB SSD M.2 PCIe Gen 3","SSD: 256GB SSD M.2 PCIe Gen 3"],"gpu":["GPU: AMD Radeon™ Graphics","GPU: AMD Radeon™ Graphics"],"cam":["CAM: HD 720p","CAM: HD 720p"],"so":["SO: Linux","SO: Linux"]}},
             {"nome_completo":"NotebookPositivoMotionGrayC8240gi-15","nome":"MotionGrayC8240gi-15","preco":"1614.15","site":"LojasAmericanas","comprar_link":"https://loja.meupositivo.com.br/notebook-positivo-motion-gray-c8240gi-15-intel-celeron-dual-core-ssd-240gb-8gb-linux-tela-15-cinza/p","capa_img_link":"https://lojapositivo.vteximg.com.br/arquivos/ids/163284-588-588/Positivo-Motion_15_linux_lateral_direita.jpg?v=638054193199700000","descricao":{"tela":["TELA: 15.6\" LED HD","TELA: 15.6\" LED HD"],"cpu":["CPU: Intel®Celeron® Dual Core","CPU: Intel®Celeron® Dual Core"],"ram":["RAM: 8GB","RAM: 8GB"],"rom":["SSD: 240GB SSD 2,5''","SSD: 240GB SSD 2,5''"],"gpu":["GPU: Intel® UHD","GPU: Intel® UHD"],"cam":["CAM: HD 720p","CAM: HD 720p"],"so":["SO: Linux","SO: Linux"]}}
        ]
    },
    "notebooks_gamer":{
        "titulo":"💻 Notes Gamer👾",
        "titulo_safe":"notesGamer",
        "notebooks":[
            // objetos aqui
        ]
    }
}



function addNote(obj_notebook, titulo_safe){
    const expo = document.getElementById(titulo_safe);
    let preco_formatadado =parseFloat(obj_notebook.preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    let descricao_completa = "";
    for (let [desc_cat, desc_val] of Object.entries(obj_notebook.descricao)) {
        descricao_completa += `<p>${desc_val[1]}</p>`
    }   
    expo.innerHTML +=`<article class="item-notebook">
    
        <!-- Nome do Notebook de Forma Abreveada -->
        <h2 class="produto-notebook-nome centralizar">${obj_notebook.nome}</h2>
    
    
        <div class="notebook-capa-e-textos">
            <div class="notebook-capa">
                <div class="centralizar">
    
    
                    <!-- Aqui vem aquela imagem bonita transparente -->
                    <img class="produto-notebook-imagem-url centralizar rm-bg" src="${obj_notebook.capa_img_link}">
                
    
                </div>
            </div>
            <div class="preco-e-descrica centralizar">
                <div class="wrapper">
                    <div class="produto-notebook-descricao pdesc">
                    <!-- Paragrafos <p> da Lista de Item: Descrição -->
                    ${descricao_completa}
     
                    </div>
                    <div class="preco">
                        <h6>A partir de</h6>
    
    
                        <!-- Aqui vai ficar o preco -->
                        <h3 class="produto-notebook-preco">
                            ${preco_formatadado}
                        </h3>
                        
    
                        <div class="botao-comprar">
                            <button class="button-85" onclick="window.open('${obj_notebook.comprar_link}','_blank')">COMPRAR</button>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </article>
    `
}

function addRecursivo(){
    for (let [nome_categoria, categoria] of Object.entries(dados)){
        console.log(`Comprimento Master: ${Object.entries(dados).length}`)
        const exibicao = document.getElementById("exibir-notebooks-por-categoria");
        let titulo_safe = `categoria-notebook-${categoria.titulo_safe}`
        exibicao.innerHTML += `
        <hr>
        <h1 class="centralizar categoria-notebook">
            ${categoria.titulo}
        </h1>
        <div id="${titulo_safe}"></div>
        `
        console.log(categoria.notebooks)
        for (let obj_note of categoria.notebooks){
            console.log(obj_note)
            addNote(obj_note, titulo_safe)
        }
    }
}

addRecursivo()
