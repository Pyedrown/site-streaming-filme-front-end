var mensagem = window.document.getElementById('mensagem');

var logo = window.document.getElementById('logo');

logo.addEventListener('mouseenter', () => {
    mensagem.style.visibility = 'visible';
});

logo.addEventListener('mouseout', () => {
    mensagem.style.visibility = 'hidden';
})