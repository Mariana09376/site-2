const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.passo.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoId);

        // Verifica se os elementos "atual" e "proximoPasso" existem
        if (atual && proximoPasso) {
            atual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
        }
    });
});
