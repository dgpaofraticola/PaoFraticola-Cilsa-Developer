//Comienzo a declarar y crear estilo 1 y modo original.
document.addEventListener("DOMContentLoaded", function () {
    const estilo1Btn = document.getElementById("estilo1");
    const estiloAltoContrasteBtn = document.getElementById("estiloAltoContraste");
    const contenedor = document.getElementById("contenedor"); // Div contenedor
    let estilo1Activado = false; // Para alternar entre estilos
    let altoContrasteActivado = false; // Para alternar entre modo claro y oscuro

    estilo1Btn.addEventListener("click", function () {
        if (estilo1Activado) {
            // Restaurar al estado previo (modo claro u oscuro)
            if (altoContrasteActivado) {
                document.body.style.backgroundColor = "#000000"; // Fondo negro
                document.body.style.color = "#ffffff"; // Texto blanco
                document.body.style.fontFamily = "'Courier New', monospace"; // Tipografía Courier New
                contenedor.classList.remove("borde-punteado-blanco");//saco el borde al volver al modo original.
            } else {
                document.body.style.backgroundColor = ""; // Fondo original
                document.body.style.color = ""; // Texto original
                document.body.style.fontFamily = ""; // Tipografía original
                contenedor.classList.remove("borde-punteado"); //saco el borde al volver al modo original.
            }
            estilo1Btn.value = "Estilo 1"; // Cambia el texto del botón de nuevo a "Estilo 1"
        } else {
            // Aplicar estilo 1 manteniendo el modo claro u oscuro
            if (altoContrasteActivado) {
                document.body.style.backgroundColor = "#000000"; // Fondo negro
                document.body.style.color = "#ffffff"; // Texto blanco
                document.body.style.fontFamily = "'Arial', sans-serif"; // Cambia la tipografía a Arial
                contenedor.classList.add("borde-punteado-blanco"); // Borde blanco, lo agrego.
            } else {
                document.body.style.backgroundColor = "#add8e6"; // Fondo azul claro
                document.body.style.fontFamily = "'Arial', sans-serif"; // Cambia la tipografía a Arial
                document.body.style.color = ""; // Resetea color del texto (por si acaso)
                contenedor.classList.add("borde-punteado"); // Borde negro, lo agrego
            }
            estilo1Btn.value = "Modo Original"; // Cambia el texto del botón a "Modo Original"
        }
        estilo1Activado = !estilo1Activado; // Alterna el estado de estilo 1
    });

    estiloAltoContrasteBtn.addEventListener("click", function () {
        if (altoContrasteActivado) {
            if (estilo1Activado) {
                // Estilo 1 activado, volver al estilo 1 pero modo claro
                document.body.style.backgroundColor = "#add8e6"; // Fondo azul claro
                document.body.style.fontFamily = "'Arial', sans-serif"; // Cambia la tipografía a Arial
                document.body.style.color = ""; // Resetea color del texto
                contenedor.classList.remove("borde-punteado-blanco");
                contenedor.classList.add("borde-punteado");
            } else {
                // Restaurar al estado original (modo claro)
                document.body.style.backgroundColor = ""; // Resetea el color de fondo
                document.body.style.color = ""; // Resetea el color de texto
                document.body.style.fontFamily = ""; // Resetea la tipografía
                contenedor.classList.remove("borde-punteado-blanco");
                contenedor.classList.remove("borde-punteado");
            }
            estiloAltoContrasteBtn.value = "Estilo de Alto Contraste"; // Cambia el texto del botón
        } else {
            if (estilo1Activado) {
                // Estilo 1 activado, aplicar estilo 1 pero en modo oscuro
                document.body.style.backgroundColor = "#000000"; // Fondo negro
                document.body.style.color = "#ffffff"; // Texto blanco
                document.body.style.fontFamily = "'Arial', sans-serif"; // Cambia la tipografía a Arial
                contenedor.classList.remove("borde-punteado");
                contenedor.classList.add("borde-punteado-blanco"); // Borde blanco
            } else {
                // Aplicar modo oscuro sin estilo 1
                document.body.style.backgroundColor = "#000000"; // Fondo negro
                document.body.style.color = "#ffffff"; // Texto blanco
                document.body.style.fontFamily = "'Courier New', monospace"; // Cambia la tipografía a Courier New
                contenedor.classList.remove("borde-punteado");
                contenedor.classList.remove("borde-punteado-blanco");
            }
            estiloAltoContrasteBtn.value = "Modo Claro"; // Cambia el texto del botón
        }
        altoContrasteActivado = !altoContrasteActivado; // Alterna el estado de alto contraste
    });
});

//Validemos input del email para el @ y el punto.

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const emailHelpText = document.getElementById("emailHelp");

    emailInput.addEventListener("input", function () {
        const email = emailInput.value;
        if (!isValidEmail(email)) {
            emailHelpText.style.display = "block";
            if (!email.includes("@")) {
                emailHelpText.textContent = "Por favor, incluya el símbolo '@' en su email.";
            } else if (email.lastIndexOf(".") <= email.indexOf("@")) {
                emailHelpText.textContent = "Por favor, incluya al menos un punto '.' después del símbolo '@'.";
            } else {
                emailHelpText.textContent = "Por favor, ingrese un email válido.";
            }
        } else {
            emailHelpText.style.display = "none";
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// llamo a una api que encontré de países para el select del formulario.
document.addEventListener('DOMContentLoaded', function() {
    const paisSelect = document.getElementById('pais'); // Obtén el elemento <select> donde se mostrarán los países
  
    // Realiza una solicitud a la API para obtener los datos de los países
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json()) // Convierte la respuesta en JSON
      .then(data => {
        // Extrae los nombres de los países y ordénalos alfabéticamente
        const countries = data.map(country => country.name.common).sort();
  
        // Recorre la lista de países ordenada y crea un <option> para cada uno
        countries.forEach(country => {
          const option = document.createElement('option'); // Crea un nuevo elemento <option>
          option.value = country; // Establece el valor del <option>
          option.textContent = country; // Establece el texto del <option>
          paisSelect.appendChild(option); // Agrega el <option> al <select>
        });
      })
      .catch(error => {
        console.error('Error fetching the countries:', error); // Manejo de errores en caso de que falle la solicitud
      });
  });
  
  
