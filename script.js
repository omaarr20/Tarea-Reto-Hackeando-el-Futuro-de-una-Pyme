// Pantalla de error inicial
document.getElementById("recover-btn").addEventListener("click", () => {
    document.getElementById("error-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  });
  
  // Modo oscuro
  document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Chatbot
  const chatBody = document.getElementById("chat-body");
  const input = document.getElementById("user-input");
  
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userText = input.value;
      chatBody.innerHTML += `<div><strong>Tú:</strong> ${userText}</div>`;
      input.value = "";
      setTimeout(() => {
        chatBody.innerHTML += `<div><strong>OnixTech:</strong> Estamos reconstruyendo. ¡Gracias por tu paciencia!</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 500);
      if (userText.toLowerCase().includes("secreto")) {
        document.getElementById("easter-egg").style.display = "block";
      }
    }
  });
  
  