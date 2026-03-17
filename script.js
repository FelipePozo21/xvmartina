document.addEventListener("DOMContentLoaded", () => {
const btnMusica = document.getElementById("btn-musica");
    const audioFondo = document.getElementById("musica-fondo");
    const iconoMusica = document.getElementById("icono-musica");
    
    const urlPlay = "https://img.icons8.com/ios-filled/50/6b7a67/play--v1.png";
    const urlPausa = "https://img.icons8.com/ios-filled/50/6b7a67/pause--v1.png";

    if (btnMusica && audioFondo && iconoMusica) {
        
        // 1. AJUSTE DE VOLUMEN (0.0 es silencio total, 1.0 es el máximo)
        audioFondo.volume = 0.08; // 40% de volumen para que no aturda

        btnMusica.addEventListener("click", () => {
            if (audioFondo.paused) {
                
                // 2. SALTAR LA INTRO (Solo si es la primera vez que arranca o está en 0)
                if (audioFondo.currentTime === 0) {
                    audioFondo.currentTime = 8; // Salta a los 10 segundos
                }

                audioFondo.play()
                    .then(() => {
                        iconoMusica.src = urlPausa;
                    })
                    .catch(error => {
                        console.error("Error al reproducir:", error);
                    });
            } else {
                audioFondo.pause();
                iconoMusica.src = urlPlay;
            }
        });
    }

    const fechaObjetivo = new Date("May 16, 2026 20:45:00").getTime();

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