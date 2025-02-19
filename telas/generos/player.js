const elementosMusica = document.querySelectorAll('.musica');
const playerAudio = document.getElementById('player-audio');
const botaoPause = document.getElementById('player-pause-btn');
const tituloAtualMusica = document.getElementById('musica-atual-titulo');
const artistaAtualMusica = document.getElementById('musica-atual-artista');
let indiceMusicaAtual = 0;

// Adicionando evento de clique para cada música
elementosMusica.forEach((elemento, indice) => {
    elemento.addEventListener('click', () => {
        const musicaSrc = elemento.getAttribute('data-src');
        const tituloMusica = elemento.getAttribute('data-title');
        const artistaMusica = elemento.getAttribute('data-artist');
        indiceMusicaAtual = indice;

        // Atualizando o player com as informações da música
        playerAudio.src = musicaSrc;
        tituloAtualMusica.textContent = tituloMusica;
        tituloAtualMusica.style.fontWeight = 'bold';
        artistaAtualMusica.textContent = artistaMusica;

        // Tocando a música
        playerAudio.play();
        atualizarBotaoDePause();
    });
});

// Atualizando o botão de play/pause
function atualizarBotaoDePause() {
    if (playerAudio.paused) {
        botaoPause.innerHTML = '<i class="bi bi-play-fill"></i>';
    } else {
        botaoPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }
}

// Controlando o botão de play/pause
botaoPause.addEventListener('click', () => {
    if (playerAudio.paused) {
        playerAudio.play();
    } else {
        playerAudio.pause();
    }
    atualizarBotaoDePause();
});

// Próxima música
document.getElementById('proxima-btn').addEventListener('click', () => {
    indiceMusicaAtual = (indiceMusicaAtual + 1) % elementosMusica.length;
    elementosMusica[indiceMusicaAtual].click();
});

// Música anterior
document.getElementById('anterior-btn').addEventListener('click', () => {
    indiceMusicaAtual = (indiceMusicaAtual - 1 + elementosMusica.length) % elementosMusica.length;
    elementosMusica[indiceMusicaAtual].click();
});

// Atualizando botão quando a música acabar
playerAudio.addEventListener('ended', () => {
    atualizarBotaoDePause();
});