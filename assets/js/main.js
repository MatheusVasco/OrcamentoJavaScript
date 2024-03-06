function mainFunction() {
    for (let i = 0; i<10; i++){
        const nLinhaAtual = i+1; 
        const cItem = ("000" + nLinhaAtual).slice(-3)
        criaLinhaGrid('linha'+nLinhaAtual); //cria a linha da grid
        criaColunasGrid('.linha'+nLinhaAtual); // cria as colunas grid
        criaValores('.linha'+nLinhaAtual, cItem);
    }

    function criaLinhaGrid(classe) {
        const tr = document.createElement('tr');
        tr.classList.add(classe);
        apendarElemento(document.querySelector("#gridOrcamento tbody"), tr);
    }

    function criaColunasGrid(classeLinha) {
        let td;
        td = document.createElement("td");
        td.classList.add("column-imagem-estoque");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha), td);
        td = document.createElement("td");
        td.classList.add("column-input-item");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha), td);
        td = document.createElement("td");
        td.classList.add("column-input-produto");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha), td);
        td = document.createElement("td");
        td.classList.add("column-input-descricao");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha), td);
        td = document.createElement("td");
        td.classList.add("column-input-quantidade");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha), td);
        td = document.createElement("td");
        td.classList.add("column-input-unidade");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha), td);
        td = document.createElement("td");
        td.classList.add("column-input-estoque");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha), td);
        td = document.createElement("td");
        td.classList.add("column-input-valor-liquido");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha), td);
    }
    function criaValores(classeLinha, item){
        let valor; 
        valor = document.createElement("img");
        valor.setAttribute("src", "./assets/img/bola-verde.svg");
        valor.classList.add("imagem-estoque");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha+ " .column-imagem-estoque"), valor);
        valor = document.createElement("input");
        valor.setAttribute("type", "text");
        valor.disabled = true;
        valor.value = item;
        valor.classList.add("input-item");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha+ " .column-input-item"), valor);
        valor = document.createElement("input");
        valor.setAttribute("type", "text");
        valor.classList.add("input-produto");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha+ " .column-input-produto"), valor);
        valor = document.createElement("input");
        valor.setAttribute("type", "text");
        valor.disabled = true;
        valor.classList.add("input-descricao");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha+ " .column-input-descricao"), valor);
        valor = document.createElement("input");
        valor.setAttribute("type", "number");
        valor.classList.add("input-quantidade");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha+ " .column-input-quantidade"), valor);
        valor = document.createElement("input");
        valor.setAttribute("type", "text");
        valor.disabled = true;
        valor.classList.add("input-unidade");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha+ " .column-input-unidade"), valor);
        valor = document.createElement("input");
        valor.setAttribute("type", "number");
        valor.disabled = true;
        valor.value = 0
        valor.classList.add("input-estoque");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha+ " .column-input-estoque"), valor);
        valor = document.createElement("input");
        valor.setAttribute("type", "number");
        valor.value = 0
        valor.classList.add("input-valor-liquido");
        apendarElemento(document.querySelector("#gridOrcamento tbody "+classeLinha+ " .column-input-valor-liquido"), valor);
    }
    function apendarElemento(pai, filho){
        pai.appendChild(filho);
    }
}

mainFunction()