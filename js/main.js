
document.getElementById("bnt").addEventListener("click", function(event){
    event.preventDefault()
    getAdress()
});

function getAdress(){
    let busca = document.getElementById("cep").value
    this.adress(busca)
}

function adress(cep){
    let getCep = new XMLHttpRequest();
    getCep.open("GET", "https://viacep.com.br/ws/"+(cep)+"/json/");
    getCep.addEventListener("load", res =>{
        if(getCep.status == 200){
            let ok = getCep.responseText
            res = JSON.parse(ok)
            // console.log(res)
            let content = document.querySelector(".cep")
            let logradouro = res.logradouro
            let localidade = res.localidade
            let bairro = res.bairro
            let uf = res.uf
            let cep = res.cep
            .replace("", "CEP: ")
            content.innerHTML = `
                <h2 display-4>${logradouro}, ${bairro}</h2>
                <p class="lead">${localidade}  - ${uf}</p>
                <p class="lead">${cep}</p>
                <p></p>
            `
        };
    }) 
    getCep.send()
}

// let cep = adress(23032180);
