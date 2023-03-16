// pegar o elemento HTML dos botões 

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// indentificar o clique do botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // desmacar o botão anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // marcar o botão selecionado 
        botao.classList.add('selecionado')        
        
        // esconder a imagem anterior 
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // fazer aparecer a imagem correspondete ao botão clicado  
        imagens[indice].classList.add('ativa');

        //--------------------------------------Firula minha :3---------------------------------------------//

        const textoAtivo = document.querySelector('');

    })
})


 


