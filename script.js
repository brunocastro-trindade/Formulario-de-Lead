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
    const valor = input.ariaValueMax.trim();

    return validarCampo(
        input,
        valor.length > 3
    );
}

function validarEmail() {
    const input = document.getElementById('email');
    const valor = input.value.trim();

    return validarCampo(
        input,
        REGEX_EMAIL.test(valor),
    );
}

function validarTel () {
    const input = document.getElementById('tel');
    const valor = input.value.replace(/\D/g, '');

    return validarCampo(
        input,
        valor.length >= 10,
        'Telefone precsia ter pelo menos 10 digitos'
    );
}
