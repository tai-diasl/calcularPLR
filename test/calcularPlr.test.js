import { calcularBonusPlr } from '../source/calcularPlr.js'
import assert from 'node:assert' 

describe('Suíte de Testes: Testes de Calcular PLR', function() {
  it('Cenário 1: Calcular se senior', function() {
    let resultado = calcularBonusPlr('senior', 10000)
    assert.equal(resultado, 20000) 
  })
  it('Cenário 2: Calcular se pleno', function() {
    let resultado = calcularBonusPlr('pleno', 6000)
    assert.equal(resultado, 6000) 
  })
  it('Cenário 3: Calcular se junior', function() {
    let resultado = calcularBonusPlr('junior', 3000)
    assert.equal(resultado, 3000) 
  })
}) 

