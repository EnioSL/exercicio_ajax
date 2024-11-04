// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('login')
//         const xhttp = new XM

//         const nome = document.querySelector('#name');
//         const usuario = document.querySelector('#login');
//         const imagem = document.querySelector('#avatar');
//         const repositorio = document.querySelector('#rdata');
//         const seguidores = document.querySelector('#followers');
//         const seguidos = document.querySelector('#following');
//         const trackLink = document.querySelector('#link');

//     fetch('https://api.github.com/users/EnioSL')
//         .then(function(resposta) {
//             return resposta.json();
//         })
//         .then(function(json) {
//             nome.innerText = json.name;
//             usuario.innerText = json.login;
//             imagem.src = json.avatar;
//             seguidores.innerText = json.followers;
//             seguidos.innerText = json.following;
//             repositorio.innerText = json.rdata;
//             trackLink.href = json.link;
//         })
//         .catch(function(erro) {
//             alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.");
//         })

// })

$(document).ready(function() {
    $('#numbers-item').select(function() {
        const repositorio = $('#rdata').val();
        const endpoint = `https://api.github.com.br/users/${rdata}/json/`;
        // const botao = $(this);
    
        // $(botao).find('i').addClass('d-none');
        // $(botao).find('span').removeClass('d-none');
    // 
        $.ajax(endpoint).done(function(resposta) {
            const nome = resposta.name;
            const usuario = resposta.login;
            const imagem = resposta.avatar;
            const repositorio = resposta.rdata;
            const seguidores = resposta.followers;
            const seguidos = resposta.following;
            const trackLink = resposta.link;
            
            
            
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        // $('#endereco').val(endereco);
        })
    })
})            
            //     setTimeout(function() {
            //         $(botao).find('i').removeClass('d-none');
            //         $(botao).find('span').addClass('d-none');
            //     }, 4000);
    
        //     fetch(endpoint)
        //     .then(function(resposta) {
        //         return resposta.json();
        //     })
        //     .then(function(json) {
        //         const logradouro = json.logradouro;
        //         const bairro = json.bairro;
        //         const cidade = json.localidade;
        //         const estado = json.uf;
        //         const endereco = `${logradouro} - ${bairro} - ${cidade} - ${estado}`;
        //         $('#endereco').val(endereco);
        //     })
        //     .catch(function(erro) {
        //     alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
        //     })
        //     .finally(function() {
        //         setTimeout(function() {
        //             $(botao).find('i').removeClass('d-none');
        //             $(botao).find('span').addClass('d-none');
        //         }, 1000);
        //     })
        // })
        
    //     $('#formulario-pedido').submit(function(evento) {
    //         evento.preventDefault();
    
    //         if ($('#nome').val().length == 0) {
    //             throw new Error('Digite o nome');
    //         }
    //     })
    // });
    
    