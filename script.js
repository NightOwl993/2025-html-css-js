//Ola mundo 
console.log('olá, mundo!')

// função responsável por carregar o HTML e mostra no Container 
function carregarPagina(pagina){
fetch(pagina)
.then((response)=> response.text())
.then((html)=>{
    document.getElementById('content').innerHTML = html
})
.catch((error)=> console.error("Erro ao carregar a pagina: ", error))

}
