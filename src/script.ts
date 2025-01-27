const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
const passwordElement = document.getElementById('password');

function generatePassword(length: number): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

document.getElementById('generate')?.addEventListener('click', () => {
  const length = (document.getElementById('length') as HTMLInputElement).valueAsNumber;

  // Validação do comprimento antes de gerar a senha
  if (isNaN(length) || length < 6 || length > 128) {
      alert('Insira um comprimento válido entre 6 e 128.');
      return; // Bloqueia a execução do restante do código
  }

  const password = generatePassword(length);
  const passwordElement = document.getElementById('password') as HTMLParagraphElement;
  passwordElement.innerText = password;
  passwordElement.style.transform = 'scale(1.1)';
  setTimeout(() => {
      passwordElement.style.transform = 'scale(1)';
  }, 200);
});

document.getElementById('copy')?.addEventListener('click', () => {
    const password = (document.getElementById('password') as HTMLParagraphElement).innerText;

    if (!navigator.clipboard) {
        const textarea = document.createElement('textarea');
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    } else {
        navigator.clipboard.writeText(password).then(() => {
            const copyButton = document.getElementById('copy') as HTMLButtonElement;
            copyButton.classList.add('copied');
            setTimeout(() => {
                copyButton.classList.remove('copied');
            }, 1000);
        });
    }
});

document.getElementById('theme-toggle')?.addEventListener('change', (event) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    document.documentElement.setAttribute('data-theme', isChecked ? 'dark' : 'light');
});
