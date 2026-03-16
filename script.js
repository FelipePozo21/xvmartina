document.addEventListener("DOMContentLoaded", () => {
    const btnMusica = document.getElementById("btn-musica");
    const audioFondo = document.getElementById("musica-fondo");
    const iconoMusica = document.getElementById("icono-musica");
    let estaReproduciendo = false;
    const urlPlay = "https://img.icons8.com/ios-filled/50/ffffff/play--v1.png";
    const urlPausa = "https://img.icons8.com/ios-filled/50/ffffff/pause--v1.png";

    btnMusica.addEventListener("click", () => {
        if (estaReproduciendo) {
            audioFondo.pause();
            iconoMusica.src = urlPlay;
        } else {
            audioFondo.play();
            iconoMusica.src = urlPausa;
        }
        estaReproduciendo = !estaReproduciendo;
    });

    const fechaObjetivo = new Date("May 16, 2026 21:30:00").getTime();

    const actualizarContador = setInterval(() => {
        const ahora = new Date().getTime();
        const distancia = fechaObjetivo - ahora;

        if (distancia < 0) {
            clearInterval(actualizarContador);
            document.getElementById("dias").innerText = "00";
            document.getElementById("horas").innerText = "00";
            document.getElementById("minutos").innerText = "00";
            document.getElementById("segundos").innerText = "00";
            return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
        document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
        document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
        document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');

    }, 1000);
});