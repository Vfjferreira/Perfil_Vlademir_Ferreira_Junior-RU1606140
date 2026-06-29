
// ==========================
// MENU RESPONSIVO
// ==========================

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('menu-links');

        menuIcon.addEventListener('click', () => {
            // Alterna a classe 'active' no menu e no ícone
            menuIcon.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link (opcional)
        document.querySelectorAll('.menu-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
// ==========================
// TEMA CLARO / ESCURO
// ==========================

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        temaBtn.innerHTML = "🌓";
    }
    else{
        temaBtn.innerHTML = "🌓";
    }

});


// ==========================
// VALIDAÇÃO FORMULÁRIO
// ==========================

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event){

    // Impede envio real
    event.preventDefault();

    const nome =
    document.getElementById("nome").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const mensagem =
    document.getElementById("mensagem").value.trim();

    const status =
    document.getElementById("mensagemStatus");

    // Expressão para validar email
    const regexEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica campos vazios
    if(nome === "" ||
       email === "" ||
       mensagem === ""){

        status.innerHTML =
        "❌ Preencha todos os campos.";

        alert("Preencha todos os campos.");

        return;
    }

    // Verifica email
    if(!regexEmail.test(email)){

        status.innerHTML =
        "❌ E-mail inválido.";

        alert("Digite um e-mail válido.");

        return;
    }

    // Simulação de envio
    status.innerHTML =
    "✅ Mensagem enviada com sucesso!";

    alert("Mensagem enviada com sucesso!");

    // Limpa formulário
    formulario.reset();
});