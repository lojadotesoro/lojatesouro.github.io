function redirecionarFinal() {
    // Evita redirecionamento múltiplo caso o usuário clique mais de uma vez
    if (window.redirecionando) return;
    window.redirecionando = true;

    // Aumenta o tempo para garantir que o Google Forms processe os dados
    setTimeout(function () {
        window.location.href = 'final.html';
    }, 1500); // 1,5 segundos para o redirecionamento
}
