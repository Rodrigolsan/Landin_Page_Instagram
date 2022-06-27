let nome_usuario = String(window.prompt('Digite Seu Nome de Usuário: '));
let not_account = document.querySelector('.not-account');
let login_continue = document.querySelector('.instagram-login')

not_account.innerHTML = `Não é ${nome_usuario}?`;
login_continue.innerHTML = `Continuar como ${nome_usuario}`