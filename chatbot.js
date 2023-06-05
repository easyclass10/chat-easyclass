const questions = {
    "Hola": "Hola",
    "Bien y tu?": "Que bueno me alegra. Yo igualmente estoy bien. En que puedo ayudarte?",
    "": "Lol ;)",
    "what's your name?": "I'm a Leon",
    "you speak spanish?": "Yeah, I can speak it, but I'd rather speak English to help you get better.",
};
  
const chatArea = document.getElementById('chat-area');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
  
function askQuestion(question) {
  chatArea.innerHTML += `<p><strong>Diana:</strong> ${question}</p>`;
}
  
function answerQuestion(answer) {
  // generamos un número aleatorio entre 5000 y 15000 (milisegundos)
  const delay = Math.floor(Math.random() * 1000) + 1000;
  
  // Agregar "escribiendo..." mientras se espera la respuesta
  chatArea.innerHTML += `<p><strong>Diana is writing...</strong></p>`;
  
  // esperamos el tiempo aleatorio antes de responder
  setTimeout(() => {
    // Reemplazar "escribiendo..." con la respuesta real del bot
    chatArea.innerHTML = chatArea.innerHTML.replace("<p><strong>Diana is writing...</strong></p>", "");
    
    // Creamos un objeto para guardar la respuesta y la imagen (opcional)
    const response = {
      text: '',
      image: ''
    };

    const words = answer.toLowerCase().split(' ');
    if (words.includes('trabajo') || words.includes('colaborar') || words.includes('podrias')) {
      response.text = "Si podre, enviar fecha, hora y temas";
    } else if (words.includes('materias') || words.includes('maneja') || words.includes('manejan')) {
      response.text = `
<pre>Manejo también:

💯🤚 Algebra
💯🤚 Cálculo 1,2 y 3
💯🤚 Ecuaciones diferenciales
💯🤚 Matematicas Discretas
💯🤚 Física 1,2 y 3
💯🤚 Métodos Numéricos
💯🤚 Estadística
💯🤚 Mecánica de Fluidos
💯🤚 Análisis Estructural
💯🤚 Química
💯🤚 Resistencia de materiales
💯🤚 Estática
💯🤚 Dinámica
💯🤚 Mecánica Analítica
💯🤚 Geometría Descriptiva y Analítica
💯🤚 Termodinámica
💯🤚 Transferencia de calor
💯🤚 Diseño en SolidWorks y manejo de: Matlab, Python, C++, C, 
          Java, HTML, CSS, JavaScript, PHP y Arduino
💯🤚 Desarrollo de aplicaciones web y móvil, y Software
💯🤚 Electricidad y Electrónica
💯🤚 Análisis Estructural
💯🤚 Materiales
💯🤚 Ingles
💯🤚 Materias relacionadas con economía y financiera
💯🤚 Desarrollo de tesis, realización de ensayos y trabajos escritos. 
💯🤚  Normas APA, ICONTEC.</pre>`;
    } else if (words.includes('cuentas') || words.includes('cuenta') || words.includes('como hago')) {
      response.text = `<pre>Cuenta ahorros Bancolombia:
✅ 07800038841
      
Cuenta Nequi:
✅ 3162457988
      
Daviplata:
✅ 3163748711
      
⭐ Solo transferencia o consignacion por CORRESPONSAL Bancolombia. 
Enviar comprobante al WhatsApp por favor. 
Gracias y que tengas un Buen Día.</pre>`;
    } else if (words.includes('your') && words.includes('name') || words.includes('name?')) {
      response.text = "Enviar hora, temas y fecha.";
    } else if (words.includes("gracias") || words.includes("gracias!") || words.includes("gracias.")  || words.includes("gracias ")) {
      response.text = "¡Muchas gracias por preferirnos! Esperamos poder servirte nuevamente.";
    } else if (words.includes("garantia")) {
      response.text = "Garantía: En caso de perder el examen se hace devolución del 40%";
    } else if (words.includes("clase") && words.includes("para")) {
      response.text = "Clase presencial o virtual?";
    } else if (words.includes("pago") && words.includes("como") && words.includes("hago")) {
      response.text = "Puedes realizar pago completo o abono de la mitad para agendar o empezar sea el caso";
    } else if (words.includes("precio") && words.includes("parcial")) {
      response.text = "Valor examen o parcial: $60";
    } else if (words.includes("soporte")) {
      response.text = "Si efectivamente, todo lo que se hace se envia su respectivo proceso y desarrollo.";
    } else if (words.includes("disponible") && words.includes("si")) {
      response.text = "Hola envia fecha y hora para mirar si hay disponibilidad, probablemente necesites esperarme para cuadrarte.";
    } else if (words.includes("examen") && words.includes("ayuda") || words.includes("parcial") && words.includes("ayuda") ) {
      response.text = "Si claro. Enviar fecha, hora y temas para revisar";
    }
    else {
      response.text = questions[answer];
      if (response.text && answer === '¿Cómo te llamas?') {
        askQuestion('¿De dónde eres?');
      } else if (!response.text) {
        response.text = "Disculpa, no te entiendo.";
      }
    }

    // Si hay una imagen en la respuesta, la agregamos al chat
    if (response.image) {
      chatArea.innerHTML += `<p><strong>Diana:</strong> ${response.text}</p><img src="${response.image}" alt="image"/>`;
    } else {
      chatArea.innerHTML += `<p><strong>Diana:</strong> ${response.text}</p>`;
    }
    chatArea.scrollTop = chatArea.scrollHeight;
  }, delay);
  //chatArea.scrollTop = chatArea.scrollHeight;
}
  
sendButton.addEventListener('click', () => {
  const answer = userInput.value;
  chatArea.innerHTML += `<p><strong>Andres:</strong> ${answer}</p>`;
  answerQuestion(answer);
  userInput.value = '';
  //chatArea.scrollTop = chatArea.scrollHeight;
  chatArea.scrollTop = chatArea.scrollHeight;
});
  
askQuestion('¡Hola! ¿Cómo estás? ¿En qué puedo ayudarte hoy?');

const entrar=document.getElementById("user-input")
entrar.addEventListener('keydown',function(event){
  if(event.key==='Enter'){
    event.preventDefault();
    const answer = userInput.value;
    chatArea.innerHTML += `<p><strong>Andres:</strong> ${answer}</p>`;
    answerQuestion(answer);
    userInput.value = '';

    chatArea.scrollTop = chatArea.scrollHeight;
  }
 // chatArea.scrollTop = chatArea.scrollHeight;
});