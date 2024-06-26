//inserir,alterar,excluir,listar,marcar como vendido,ver se esta disponivel
//vai perguntar a MARCA,MODELO,ANO,PLACA,DISPONIBILIDADE(vendido ou nao)
//DRIVElux
//1/6 as 15:40
//2/6 as 16:12(teve 5 minutos de intervalo)
//3/6 as 16:40
//4/6 as 16:46

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let carros = [];
const carrosVendidos = [];

exibirMenu();

function exibirMenu() {
  console.log(`
    1. Inserir novo carro
    2. Editar carro
    3. Excluir carro da lista
    4. Listar todos os carros cadastrados
    5. Marcar como vendido
    6. Ver disponibilidade
    7. Ver carros vendidos
    8. Sair`);

  rl.question("Selecione a função desejada: ", (função) => {
    switch (função) {
      case "1":
        Inserir();
        break;
      case "2":
        Editar();
        break;
      case "3":
        Excluir();
        break;
      case "4":
        ListarCadastrados();
        break;
      case "5":
        MarcarComoVendido();
        break;
      case "6":
        VerDisponibilidade();
        break;
      case "7":
        VerVendidos()
        break;
      case "8":
        rl.close()
        break;
      default:
        console.log("Numero não identificado");
        exibirMenu();
        break;
    }
  });


function Inserir() {
  rl.question("Digite a marca do carro: ", (marca) => {
    rl.question("digite o modelo do carro: ", (modelo) => {
      rl.question("Digite o ano do carro: ", (ano) => {
        rl.question("Digite a placa do carro: ", (placa) => {
          carros.push({
            marca: marca,
            modelo: modelo,
            ano: ano,
            placa: placa,
            vendido: false,
          });
          console.log("Carro cadastrado com sucesso");
          exibirMenu();
        });
      });
    });
  });
}

function Editar() {
  if (carros.length == 0) {
    console.log("nenhum carro foi cadastrado ainda");
    exibirMenu();
  } else {
    console.log("Lista dos carros já cadastrados:");
    carros.forEach((carro, index) => {
      console.log(
        `${index + 1}. marca: ${carro.marca}, modelo: ${carro.modelo}, ano: ${
          carro.ano
        }`
      );
    });
    rl.question("Digite o numero do carro que voce quer editar: ", (numero) => {
      if (numero > 0 && numero <= carros.length) {
        rl.question("Digite a nova marca: ", (marca) => {
          rl.question("Digite o novo modelo: ", (modelo) => {
            rl.question("Digite o novo ano do carro: ", (ano) => {
              rl.question("Digite a nova placa: ", (placa) => {
                carros[numero - 1] = {
                  marca,
                  modelo,
                  ano,
                  placa,
                };
                console.log("Editado com sucesso!");
                exibirMenu();
              });
            });
          });
        });
      } else {
        console.log("Numero ou função indefinida");
        exibirMenu();
      }
    });
  }
}

function Excluir() {
  if (carros.length == 0) {
    console.log("Nenhum carro foi cadastrado ainda");
    exibirMenu();
  } else {
    console.log("Lista dos carros já cadastrados: ");
    carros.forEach((carro, index) => {
      console.log(
        `${index + 1}. marca: ${carro.marca}, modelo: ${carro.modelo}, ano: ${
          carro.ano
        }`
      );
    });
    rl.question(
      "Digite o numero do carro que voce quer excluir do sistema: ",
      (ExclusãoCarro) => {
        if (ExclusãoCarro > 0 && ExclusãoCarro <= carros.length) {
          carros.splice[(ExclusãoCarro - 1, 1)];
          console.log("Carro removido com sucesso!");
          exibirMenu();
        } else {
          console.log("numero invalido,tente novamente");
          exibirMenu();
        }
      }
    );
  }
}

function ListarCadastrados() {
  if (carros.length == 0) {
    console.log("Não há nenhum carro cadastrado ainda");
    exibirMenu();
  } else {
    console.log("Lista dos carros já cadastrados:");
    carros.forEach((carro, index) => {
      console.log(
        `${index + 1}. marca: ${carro.marca}, modelo: ${carro.modelo}, ano: ${
          carro.ano
        }`
      );
      exibirMenu();
    });
  }
}
function MarcarComoVendido() {
  if (carros.length == 0) {
    console.log("Não há nenhum carro cadastrado ainda");
    exibirMenu();
  } else {
    console.log("Listando os carros: ");
    carros.forEach((carro, index) => {
      console.log(
        `${index + 1}. marca: ${carro.marca}, modelo: ${carro.modelo}, ano: ${
          carro.ano
        }`
      );
    });
    rl.question(
      "digite o numero do carro que você quer dar como vendido: ",
      (numero) => {
        if (
          numero > 0 &&
          numero <= carros.length &&
          !carros[numero - 1].vendido
        ) {
          carros[numero - 1].vendido = true;
          console.log("Carro marcado como vendido com sucesso!");
          exibirMenu();
        } else {
          console.log(
            "O carro com este numero pode ja ter sido vendido ou é apenas numero invalido"
          );
          exibirMenu();
        }
      }
    );
  }
}

function VerDisponibilidade() {
  let carrosDisponiveis = []
  for(let i = 0;i < carros.length;i++){
    if(carros[i].vendido == true){
        carrosVendidos.push(carros[i])
    }else{
        carrosDisponiveis.push(carros[i])
    }
}
    if(carros.length == 0){
        console.log('nao há nenhum carro cadastrado ainda')
        exibirMenu()
    }else if(carrosDisponiveis.length > 0){
        console.log('listando os carros disponiveis')
        carrosDisponiveis.forEach((carros,index) => {
            console.log(`${index +1}. marca: ${carros.marca}, modelo: ${carros.modelo}, ano: ${carros.ano}`)
              })
              exibirMenu()
    }else{
        console.log('Não há nenhum carro disponivel')
        exibirMenu()
    }
} 
}

function VerVendidos() {
  let carrosDisponiveis = [] 
  for(let i = 0;i < carros.length;i++){
    if(carros[i].vendido == true){
        carrosVendidos.push(carros[i])
    }else{
        carrosDisponiveis.push(carros[i])
    }
}
    if(carros.length == 0){
        console.log('nao há nenhum carro cadastrado ainda')
        exibirMenu()
    }else if(carrosVendidos.length > 0){
        console.log('listando os carros vendidos')
        carrosVendidos.forEach((carros,index) => {
            console.log(`${index +1}. marca: ${carros.marca}, modelo: ${carros.modelo}, ano: ${carros.ano}`)
              })
              exibirMenu()
    }else{
        console.log('Não há nenhum carro vendido')
        exibirMenu()
    }
} 