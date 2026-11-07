//Script para el formulario de entradaFormularios.html la parte del formulario Get/Post
const formularioDemo = document.getElementById("formulario-demo");
const resultadoDemo = document.getElementById("resultado-demo");

if (formularioDemo && resultadoDemo) {

    formularioDemo.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const usuario = document.getElementById("usuario-demo").value.trim();
        const metodo = new FormData(formularioDemo).get("metodo");

        if (!usuario) {
            resultadoDemo.textContent = "Introduce un nombre de usuario.";
            return;
        }

        const usuarioCodificado = encodeURIComponent(usuario);

        resultadoDemo.innerHTML = "";

        const titulo = document.createElement("h4");
        const detalle = document.createElement("p");

        if (metodo === "GET") {

            titulo.textContent = "Ejemplo de petición GET";

            detalle.textContent =
                "GET /login?usuario=" + usuarioCodificado;

        } else {

            titulo.textContent = "Ejemplo de petición POST";

            const cabecera = document.createElement("p");
            cabecera.textContent = "POST /login HTTP/1.1";

            const cuerpo = document.createElement("p");
            cuerpo.textContent =
                "Cuerpo de ejemplo: usuario=" + usuarioCodificado;

            resultadoDemo.append(titulo, cabecera, cuerpo);
        }

        if (metodo === "GET") {
            resultadoDemo.append(titulo, detalle);
        }

        const aviso = document.createElement("p");
        aviso.textContent =
            "Demostración local: no se ha enviado ningún dato a un servidor.";

        resultadoDemo.appendChild(aviso);
    });
}

//Script para la serie de preguntas alfinal del archivo index.html
const formularioTest = document.getElementById("formulario-test");
const resultadoTest = document.getElementById("resultado");

if (formularioTest && resultadoTest) {

    formularioTest.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const respuestasCorrectas = {
            pregunta1: "b",
            pregunta2: "b",
            pregunta3: "c",
            pregunta4: "a"
        };

        let puntuacion = 0;

        const datos = new FormData(formularioTest);

        for (let pregunta in respuestasCorrectas) {

            if (datos.get(pregunta) === respuestasCorrectas[pregunta]) {
                puntuacion++;
            }
        }

        resultadoTest.textContent =
            "Has acertado " + puntuacion + " de 4 preguntas.";

        if (puntuacion === 4) {
            resultadoTest.textContent += " ¡Excelente trabajo!";
        } else if (puntuacion >= 2) {
            resultadoTest.textContent += " ¡Buen intento!";
        } else {
            resultadoTest.textContent += " Sigue practicando.";
        }
    });
}