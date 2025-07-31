document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Após enviar o cadastro, esconde o formulário e mostra o botão do WhatsApp
    document.getElementById('cadastroForm').style.display = 'none';
    document.getElementById('whatsappLink').classList.remove('hidden');
});
