document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Redireciona para WhatsApp depois de 1 segundo
    setTimeout(() => {
        window.location.href = `https://wa.me/${telefone}?text=Olá meu nome ${nome}, estou precisando de ajuda com meu produto`;
    }, 1000);
});
