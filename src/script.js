"use strict";
var _a, _b, _c;
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
(_a = document.getElementById('generate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const length = document.getElementById('length').valueAsNumber;
    const password = generatePassword(length);
    const passwordElement = document.getElementById('password');
    passwordElement.innerText = password;
    passwordElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        passwordElement.style.transform = 'scale(1)';
    }, 200);
});
(_b = document.getElementById('copy')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    const password = document.getElementById('password').innerText;
    navigator.clipboard.writeText(password).then(() => {
        alert('Senha copiada para a área de transferência!');
    }, () => {
        alert('Falha ao copiar a senha.');
    });
});
(_c = document.getElementById('theme-toggle')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    document.documentElement.setAttribute('data-theme', isChecked ? 'dark' : 'light');
});
