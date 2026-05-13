
# 🧪 SauceDemo Cypress Tests

![Cypress](https://img.shields.io/badge/Cypress-15.14.1-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-24.x-green)
![Mochawesome](https://img.shields.io/badge/Reporter-Mochawesome-blue)
![Status](https://img.shields.io/badge/Tests-Passing-success)

Projeto de automação de testes E2E utilizando Cypress no site [SauceDemo](https://www.saucedemo.com/).

O objetivo deste projeto é praticar conceitos modernos de automação de testes, organização de framework e boas práticas utilizadas no mercado de QA Automation.

---

# 🚀 Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Mochawesome
- Git & GitHub

---

# ✅ Funcionalidades automatizadas

## 🔐 Login

### Cenários positivos

- Login com credenciais válidas

### Cenários negativos

- Login com senha inválida
- Login com usuário vazio
- Login com senha vazia

---

## 🛍️ Inventory

- Validação da listagem de produtos
- Validação de nome e preço dos produtos
- Adição de produto ao carrinho
- Remoção de produto do carrinho

---

## 🛒 Cart

- Acesso à página do carrinho
- Validação de produto adicionado
- Validação de nome e preço do produto no carrinho

---

## 💳 Checkout

### Cenários positivos

- Início do checkout
- Preenchimento dos dados
- Finalização da compra
- Validação da mensagem de sucesso

### Cenários negativos

- Checkout sem nome
- Checkout sem sobrenome
- Checkout sem CEP

---

# 📁 Estrutura do projeto

```text
cypress/
 ├── e2e/
 │    ├── cart.cy.js
 │    ├── checkout.cy.js
 │    ├── inventory.cy.js
 │    └── login.cy.js
 │
 ├── fixtures/
 │    ├── checkout.json
 │    └── login.json
 │
 ├── reports/
 │
 └── support/
      ├── commands/
      │    ├── cart.js
      │    ├── checkout.js
      │    ├── inventory.js
      │    ├── login.js
      │    └── common.js
      │
      ├── commands.js
      └── e2e.js
````

---

# ⚙️ Instalação do projeto

Clone o repositório:

```bash
git clone https://github.com/AndyTex2003/saucedemo-cypress-tests.git
```

Acesse a pasta do projeto:

```bash
cd saucedemo-cypress-tests
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Como executar os testes

## Abrir o Cypress

```bash
npm run cy:open
```

---

## Executar testes em modo headed

```bash
npm run cy:headed
```

---

## Executar testes e gerar relatório HTML consolidado

```bash
npm run cy:report
```

---

# 📊 Relatórios HTML

O projeto utiliza Mochawesome para geração de relatórios automatizados.

Após a execução do comando:

```bash
npm run cy:report
```

O relatório consolidado será gerado em:

```text
cypress/reports/mochawesome/report.html
```

---

# 🧠 Boas práticas aplicadas

* Organização dos testes por feature
* Uso de custom commands
* Modularização dos commands
* Reutilização de código
* Uso de fixtures para massa de teste
* Uso de seletores estáveis (`data-test`)
* Separação entre cenários positivos e negativos
* Estrutura escalável para evolução do framework
* Geração de relatórios automatizados

---

# 🚀 Melhorias futuras

* Integração com GitHub Actions (CI/CD)
* Pipeline automatizada
* Upload de artifacts dos reports
* Execução em múltiplos navegadores
* Implementação de Page Objects
* Integração com Docker

---

# 👨‍💻 Autor

Anderson Batista dos Santos

* LinkedIn: https://www.linkedin.com/in/anderson-santos-qa/
* GitHub: https://github.com/AndyTex2003


