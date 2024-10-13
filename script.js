function registrarOracao() {
    const nome = document.getElementById('nome').value;
    const horario = document.getElementById('horario').value;
    if (nome && horario) {
        const mensagem = `Nome: ${encodeURIComponent(nome)}%0AHorário: ${encodeURIComponent(horario)}`;
        const link = `https://wa.me/21964126015?text=${mensagem}`;
        document.getElementById('link').innerHTML = `<a href="${link}" target="_blank">Enviar pelo WhatsApp</a>`;
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}