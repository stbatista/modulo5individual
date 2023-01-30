const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let rules = [];

const addRule = (rule) => {
  if (!rules.includes(rule)) {
    rules.push(rule);
    console.log(`Regra "${rule}" adicionada com sucesso.`);
  } else {
    console.log(`A regra "${rule}" já existe.`);
  }
};

const removeRule = (rule) => {
  const index = rules.indexOf(rule);
  if (index !== -1) {
    rules.splice(index, 1);
    console.log(`Regra "${rule}" removida com sucesso.`);
  } else {
    console.log(`A regra "${rule}" não existe.`);
  }
};

const displayRules = () => {
  console.log('Lista de regras:');
  if (rules.length === 0) {
    console.log('Nenhuma regra encontrada.');
  } else {
    rules.sort().forEach((rule) => console.log(rule));
  }
};

const menu = () => {
  console.log('\nEscolha uma opção:');
  console.log('1. Exibir lista');
  console.log('2. Adicionar regra');
  console.log('3. Remover regra');
  console.log('4. Sair');
  rl.question('Opção: ', (answer) => {
    switch (answer) {
      case '1':
        displayRules();
        menu();
        break;
      case '2':
        rl.question('Nova regra: ', (rule) => {
          addRule(rule);
          menu();
        });
        break;
      case '3':
        rl.question('Regra a ser removida: ', (rule) => {
          removeRule(rule);
          menu();
        });
        break;
      case '4':
        console.log('Até mais!');
        rl.close();
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
        menu();
        break;
    }
  });
};

console.log('Bem-vindo à aplicação com menu!');
menu();