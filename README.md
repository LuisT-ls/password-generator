# Gerador de Senhas Seguras - Projeto em TypeScript

Este é um gerador de senhas seguras desenvolvido como meu primeiro projeto utilizando **TypeScript**. A aplicação permite gerar senhas fortes e seguras, além de copiar facilmente o resultado para a área de transferência. Também há suporte para alternar entre os temas claro e escuro.

## 🚀 Funcionalidades

- **Geração de senhas seguras**: O usuário pode definir o comprimento da senha desejada.
- **Cópia rápida**: Um botão permite copiar a senha gerada para a área de transferência, com feedback visual indicando sucesso.
- **Validação do comprimento da senha**: Restrições para comprimento mínimo de 6 caracteres e máximo de 128 caracteres.
- **Modo escuro**: Alternância fácil entre os temas claro e escuro.

## 🛠️ Tecnologias Utilizadas

- **TypeScript**: Tipagem estática para maior robustez e segurança no desenvolvimento.
- **HTML5**: Estrutura do aplicativo.
- **CSS3**: Estilização, incluindo suporte a temas.
- **JavaScript/TypeScript**: Lógica do gerador e manipulação DOM.

## 📂 Estrutura do Projeto

```plaintext
/
├── index.html       # Estrutura principal do app
├── style.css        # Estilo para o app
├── script.ts        # Lógica em TypeScript
├── README.md        # Documentação do projeto
```

## 🎯 Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/LuisT-ls/password-generator.git
   ```

2. Instale as dependências necessárias para compilar TypeScript, se aplicável:
   ```bash
   npm install typescript -g
   ```

3. Compile o arquivo `script.ts` para `script.js` (se necessário):
   ```bash
   tsc script.ts
   ```

4. Abra o arquivo `index.html` no navegador para acessar a aplicação.

## 🔒 Observação sobre Segurança

O gerador utiliza um conjunto de caracteres padrão, que inclui letras maiúsculas, minúsculas, números e símbolos especiais, garantindo alta aleatoriedade e segurança para as senhas.

## 💡 Motivação

Este projeto foi criado para aprender e praticar o uso de **TypeScript** no desenvolvimento web. Ele serviu como introdução à tipagem estática e à organização de código mais robusta, aspectos fundamentais para projetos escaláveis.

## 📝 Melhorias Futuras

- Adicionar opções avançadas para personalizar os tipos de caracteres usados na senha.
- Incluir testes automatizados para garantir a funcionalidade.
- Criar um design responsivo para melhorar a usabilidade em dispositivos móveis.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

Feito com 💙 durante a exploração do TypeScript! 😊
