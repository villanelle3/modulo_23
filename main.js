// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     document.getElementById("btn-buscar-cep").addEventListener("click", function(){
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById("cep").value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        
//         xhttp.open("GET", endpoint);
//         xhttp.send();
//         // https://viacep.com.br/ws/01001000/json/
//     })
// });


$(document).ready(function() {
    $("#btn-buscar-cep").click(function(e){
        e.preventDefault();
        const cep = $("#cep").val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        $.ajax(endpoint).done(function(response){
            const logradouro = response.logradouro;
            const bairro = response.bairro;
            const cidade = response.localidade;
            const estado = response.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $(`#endereco`).val(endereco);
        })
    })
});