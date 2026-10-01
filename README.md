# Calculadora de PLR

Programa em JavaScript que calcula o bônus de PLR (Participação nos Lucros e Resultados) de um funcionário de acordo com a sua senioridade, acompanhado de uma suíte de testes automatizados.

## Sobre

Projeto desenvolvido na aula de lógica de programação, com o professor Matheus Leão, da Mentoria 2.0 do professor Júlio de Lima. 
Enunciado do exercício:

> Criar um programa para calcular a PLR de uma empresa. Se o funcionário é sênior, ele recebe 2 vezes o salário como bônus; os outros funcionários recebem 1 vez.

O exercício pratica:

- Estruturas condicionais (`if / else`)
- Criação e exportação de funções com módulos ECMAScript (`import` / `export`)
- Testes automatizados com Mocha e o módulo `assert` do Node.js

## Regra de negócio

| Senioridade       | Bônus de PLR       |
| ----------------- | ------------------ |
| `senior`          | 2 × o salário      |
| qualquer outra    | 1 × o salário      |

Exemplos:

| Senioridade | Salário  | Bônus    |
| ----------- | -------- | -------- |
| `senior`    | R$ 9.000 | R$ 18.000 |
| `pleno`     | R$ 6.000 | R$ 6.000  |
| `junior`    | R$ 3.000 | R$ 3.000  |

## Funcionalidades

A função `calcularBonusPlr(senioridade, salario)` recebe a senioridade (string) e o salário (number) e retorna o valor do bônus.

```js
import { calcularBonusPlr } from './source/calcularPlr.js'

calcularBonusPlr('senior', 10000) // 20000
calcularBonusPlr('pleno', 6000)   // 6000
calcularBonusPlr('junior', 3000)   // 3000
```

Ao executar o arquivo `source/calcularPlr.js`, o programa também imprime no console três exemplos de cálculo (sênior, pleno e júnior).

## Tecnologias

- JavaScript (ES Modules)
- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/) para a suíte de testes
- `node:assert` para as verificações

## Como executar

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/tai-diasl/calcularPLR.git
cd calcularPLR

# 2. Instale as dependências
npm install

# 3. Execute o programa
node source/calcularPlr.js
```

Saída esperada:

```
O seu bônus de Plr será de 18000
O seu bônus de Plr será de 6000
O seu bônus de Plr será de 3000
```

## Como rodar os testes

```bash
npm test
```

### Cenários cobertos

| Cenário | Entrada             | Resultado esperado |
| ------- | ------------------- | ------------------ |
| 1       | `'senior'`, 10000   | 20000              |
| 2       | `'pleno'`, 6000     | 6000               |
| 3       | `'junior'`, 3000    | 3000               |

Resultado esperado da execução:

```
  Suíte de Testes: Testes de Calcular PLR
    ✔ Cenário 1: Calcular se senior
    ✔ Cenário 2: Calcular se pleno
    ✔ Cenário 3: Calcular se junior

  3 passing
```

## Estrutura do projeto

```
calcularPLR/
├── source/
│   └── calcularPlr.js        # função calcularBonusPlr e exemplos
├── test/
│   └── calcularPlr.test.js   # suíte de testes com Mocha
├── .gitignore
├── package.json              # configuração do projeto e dependências
└── README.md
```

## Possíveis melhorias

- Validar as entradas (salário negativo, texto vazio, tipo inválido)
- Aceitar variações de escrita, como `"Senior"` ou `"SENIOR"`, ou apresentar as opções pré-definidas para o utilizador selecionar

## Autor

**Taís Dias**
- GitHub: [@tai-diasl](https://github.com/tai-diasl)
- LinkedIn: [@Taís Dias](https://www.linkedin.com/in/taisadiasl/)
