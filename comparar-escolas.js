

/* 🚨NÃO ALTERAR A CLASSE 🚨 */



class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }


}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */



/* ===== OBTER ELEMENTOS ===== */
// Elementos Unidade A
const inputUnidadeACidade = document.querySelector('.unidadeA__cidade');
const inputUnidadeACodigo = document.querySelector('.unidadeA__codigo');
const inputUnidadeAAno = document.querySelector('.unidadeA__ano');
const inputUnidadeACursos = document.querySelector('.unidadeA__cursos');
// Elementos Unidade B
const inputUnidadeBCidade = document.querySelector('.unidadeB__cidade');
const inputUnidadeBCodigo = document.querySelector('.unidadeB__codigo');
const inputUnidadeBAno = document.querySelector('.unidadeB__ano');
const inputUnidadeBCursos = document.querySelector('.unidadeB__cursos');
// BOtoes
const btnInstanciarEscolaA = document.querySelector('.unidadeA__instanciar');
const btnInstanciarEscolaB = document.querySelector('.unidadeB__instanciar');

const btnAbrirEscolaA = document.querySelector('.unidadeA__abrir')
const btnAbrirEscolaB = document.querySelector('.unidadeB__abrir')

const btnFecharEscolaA = document.querySelector('.unidadeA__fechar')
const btnFecharEscolaB = document.querySelector('.unidadeB__fechar')

//  Campos mensagem
const pMensagemB = document.querySelector('.unidadeB__mensagem');
const pMensagemA = document.querySelector('.unidadeA__mensagem');

//  Campos relatorio
const campoVeredito = document.querySelector('.relatorio__veredito')
const campoDetalhesA = document.querySelector('.relatorio__linha--a')
const campoDetalhesB = document.querySelector('.relatorio__linha--B')



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */

function validarCampos(unidade) {
  if (unidade === 'A'){
    if ((inputUnidadeACidade.value === '' || inputUnidadeACodigo.value === '' || inputUnidadeAAno.value === '' || inputUnidadeACursos.value === '')){
      return false
    } else {
      return true
    }
  }

  else if(unidade === 'B'){
    if((inputUnidadeBCidade.value === '' || inputUnidadeBCodigo.value === '' || inputUnidadeBAno.value === '' || inputUnidadeBCursos.value === '')){
      return false
    } else {
      return true
    }
  }
}
/* ===== INSTANCIAR ESCOLA A ===== */

btnInstanciarEscolaA.addEventListener('click', () => {
  
  if (validarCampos('A') === true) {
    console.log(validarCampos('A'))
    valorInputCidadeA = inputUnidadeACidade.value
    valorInputCodigoA = parseInt(inputUnidadeACodigo.value)
    valorInputAnoA = parseInt(inputUnidadeAAno.value)
    valorInputCursosA = inputUnidadeACursos.value
    const novaEscolaA = new Senai(valorInputCodigoA, valorInputCidadeA, valorInputAnoA, valorInputCursosA)
    // Passando esse objeto para o escopo global
    globalThis.novaEscolaA = novaEscolaA
    pMensagemA.textContent = `SENAI ${novaEscolaA.cidade} foi instanciada`

  } else {
    console.log(validarCampos('A'))
    pMensagemA.textContent = 'Preencha todos os campos para criar a escola.'
  }

})


/* ===== INSTANCIAR ESCOLA B ===== */

btnInstanciarEscolaB.addEventListener('click', () => {
  if (validarCampos('B') === true) {
    console.log(validarCampos('B'))
    valorInputCidadeB = inputUnidadeBCidade.value
    valorInputCodigoB = parseInt(inputUnidadeBCodigo.value)
    valorInputAnoB = parseInt(inputUnidadeBAno.value)
    valorInputCursosB = inputUnidadeBCursos.value
    const novaEscolaB = new Senai(valorInputCodigoB, valorInputCidadeB, valorInputAnoB, valorInputCursosB)
    // Passando esse objeto para o escopo global
    globalThis.novaEscolaB = novaEscolaB
    pMensagemB.textContent = `SENAI ${novaEscolaB.cidade} foi instanciada`
  } else {
    pMensagemB.textContent = 'Preencha todos os campos para criar a escola.'
  }

})

/* ===== ABRIR ESCOLA A ===== */

btnAbrirEscolaA.addEventListener('click', () => {
  if (validarCampos('A') === true) {
  novaEscolaA.abrirEscola()
  pMensagemA.textContent = `Aberta: Bem-vindos ao SENAI ${novaEscolaA.cidade}`
  } else {
    pMensagemA.textContent = 'Preencha todos os campos para abrir a escola.'
  }
})

/* ===== ABRIR ESCOLA B ===== */

btnAbrirEscolaB.addEventListener('click', () => {
  if (validarCampos('B') === true) {
  novaEscolaB.abrirEscola()
  pMensagemB.textContent = `Aberta: Bem-vindos ao SENAI ${novaEscolaB.cidade}`
  } else {
    pMensagemB.textContent = 'Preencha todos os campos para abrir a escola.'
  }
})


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */

function detalhesRelatorio(){
  if (validarCampos('A') === true || validarCampos('B') === true){
    campoDetalhesA.textContent = `\nUNIDADE A \n Código ${novaEscolaA.codigo} \n Fundação ${novaEscolaA.anoConstrucao} (${novaEscolaA.idade}) \n Oferta ${novaEscolaA.qtdeCursos}`
    campoDetalhesB.textContent = `\nUNIDADE B \n Código ${novaEscolaB.codigo} \n Fundação ${novaEscolaB.anoConstrucao} (${novaEscolaB.idade}) \n Oferta ${novaEscolaB.qtdeCursos}`

  }
}

function compararDados(){
  const relatorio = {
    maisCursos: null,
    menosCursos: null,
    cursosIguais: false
  }
  
  if (novaEscolaA.qtdeCursos > novaEscolaB.qtdeCursos){
    relatorio.maisCursos = novaEscolaA
    relatorio.menosCursos = novaEscolaB
  }
  else if(novaEscolaA.qtdeCursos < novaEscolaB.qtdeCursos){
    relatorio.menosCursos = novaEscolaA
    relatorio.maisCursos = novaEscolaB
    
  }
  else if(novaEscolaA.qtdeCursos = novaEscolaB.qtdeCursos){
    relatorio.cursosIguais = true
    campoVeredito.textContent = 'As duas unidades são equivalentes aos cursos.'
  }
}

/* ===== NOVA CONSULTA ===== */


