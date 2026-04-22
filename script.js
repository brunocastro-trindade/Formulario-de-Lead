const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarCampo(input, condicao, mensagemErro) {
    const wrap = input.closest('.field-wrap');
    const errDiv = wrap.querySelector('.error-msg');

    if(condicao) {
        wrap.classList.add('erro');
        wrap.classList.remove('valido');
        errDiv.textContent = mensagemErro;
        return false;
    }

    wrap.classList.remove('erro');
    wrap.classList.add('valido');
    errDiv.textContent = '';
    return true;
}

function validarNome() {
    const input = document.getElementById('nome');
    const valor = input.value.trim();

    return validarCampo(
        input,
        valor.length < 3,
    );
}

function validarEmail() {
    const input = document.getElementById('email');
    const valor = input.value.trim();

    return validarCampo(
        input,
        !REGEX_EMAIL.test(valor),
        'E-mail inválido'
    );
}

function validarTel () {
    const input = document.getElementById('tel');
    const valor = input.value.replace(/\D/g, '');

    return validarCampo(
        input,
        valor.length < 10,
        'Telefone precisa ter pelo menos 10 digitos'
    );
}

document.getElementById('nome').addEventListener('blur', validarNome);
document.getElementById('email').addEventListener('blur', validarEmail);
document.getElementById('tel').addEventListener('blur', validarTel);

document.getElementById('leadForm').addEventListener
('submit', function(e){
    e.preventDefault();

    const nomeOk = validarNome();
    const emailOk = validarEmail();
    const telOk = validarTel();

    if (nomeOk && emailOk && telOk) {
        alert('Lead capturado com sucesso!');
        this.reset();
    }
});