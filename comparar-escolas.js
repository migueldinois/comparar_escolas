

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

const pMensagemB = document.querySelector('.unidadeB__mensagem');
const pMensagemA = document.querySelector('.unidadeA__mensagem');


/* ===== FUNÇÃO DE VALIDAÇÃO ===== */



/* ===== INSTANCIAR ESCOLA A ===== */

btnInstanciarEscolaA.addEventListener('click', () => {
  if (inputUnidadeACidade.value === '' || inputUnidadeACodigo.value === '' || inputUnidadeAAno.value === '' || inputUnidadeACursos.value === '') {
    pMensagemA.textContent = 'Preencha todos os campos para criar a escola.'
    
  } else {
    valorInputCidadeA = inputUnidadeACidade.value
    valorInputCodigoA = parseInt(inputUnidadeACodigo.value)
    valorInputAnoA = parseInt(inputUnidadeAAno.value)
    valorInputCursosA = inputUnidadeACursos.value
    const novaEscolaA = new Senai(valorInputCidadeA, valorInputCodigoA, valorInputAnoA, valorInputCursosA)
    pMensagemA.textContent = `SENAI ${novaEscolaA.cidade} foi instanciada`
  }

})


/* ===== INSTANCIAR ESCOLA B ===== */

btnInstanciarEscolaB.addEventListener('click', () => {
  if (inputUnidadeBCidade.value === '' || inputUnidadeBCodigo.value === '' || inputUnidadeBAno.value === '' || inputUnidadeBCursos.value === '') {
    pMensagemB.textContent = 'Preencha todos os campos para criar a escola.'
    
  } else {
    valorInputCidadeB = inputUnidadeBCidade.value
    valorInputCodigoB = parseInt(inputUnidadeBCodigo.value)
    valorInputAnoB = parseInt(inputUnidadeBAno.value)
    valorInputCursosB = inputUnidadeBCursos.value
    const novaEscolaB = new Senai(valorInputCidadeB, valorInputCodigoB, valorInputAnoB, valorInputCursosB)
    pMensagemB.textContent = `SENAI ${novaEscolaB.cidade} foi instanciada`
  }

})

/* ===== ABRIR ESCOLA A ===== */

btnAbrirEscolaA.addEventListener('click', () => {
  if (novaEscolaA.abrirEscola()){
    pMensagemA.textContent = `Aberta: Bem-vindos ao SENAI ${novaEscolaA.cidade}`
  } else {
    pMensagemA.textContent = 'Não foi possivel abrir a escola'
  }
})

/* ===== ABRIR ESCOLA B ===== */

btnAbrirEscolaB.addEventListener('click', () => {
  if (novaEscolaB.abrirEscola()){
    pMensagemA.textContent = `Aberta: Bem-vindos ao SENAI ${novaEscolaB.cidade}`
  } else {
    pMensagemA.textContent = 'Não foi possivel abrir a escola'
  }
})

/* ===== FECHAR ESCOLA ===== */



/* ===== RELATÓRIO DE COMPARAÇÃO ===== */



/* ===== NOVA CONSULTA ===== */


