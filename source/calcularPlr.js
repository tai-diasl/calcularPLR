// Crie um programa para calcular a plr de uma empresa. 
// Se um usuário é senior ele recebe 2 vezes o salário como bonus, os outros funcionários recebem 1 vez.

export function calcularBonusPlr(senioridade, salario) {
  if (senioridade === "senior") {
    return salario * 2
  }
  else {
    return salario
  }
}

//console.log(`O seu bônus de Plr será de ${calcularBonusPlr("senior", 9000)}`)
//console.log(`O seu bônus de Plr será de ${calcularBonusPlr("pleno", 6000)}`)
//console.log(`O seu bônus de Plr será de ${calcularBonusPlr("junior", 3000)}`)



