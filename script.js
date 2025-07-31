document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");

    const whatsappLink = document.getElementById("whatsappLink");
    if (whatsappLink && nome) {
        const mensagem = `Olá, meu nome é ${nome}. Acabei de me cadastrar no site e estou precisando de uma ajudinha com o meu produto. Poderiam me auxiliar?`;
        whatsappLink.href = `https://wa.me/5516997986457?text=${encodeURIComponent(mensagem)}`;
    }
});
