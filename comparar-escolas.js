

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

const inputUnidadeACidade = document.querySelector('unidadeA__cidade');
const inputUnidadeACodigo = document.querySelector('unidadeA__codigo');
const inputUnidadeAAno = document.querySelector('unidadeA__ano');
const inputUnidadeACursos = document.querySelector('unidadeA__cursos');
const btnInstanciarEscolaA = document.querySelector('.unidadeA__instanciar');
const btnInstanciarEscolaB = document.querySelector('.unidadeB__instanciar');
const pMensagemB = document.querySelector('.unidadeB__mensagem');
const pMensagemA = document.querySelector('.unidadeA__mensagem');
/* ===== FUNÇÃO DE VALIDAÇÃO ===== */



/* ===== INSTANCIAR ESCOLA A ===== */

btnInstanciarEscolaA.addEventListener('click', () => {

  valorInputCidade = inputUnidadeACidade.value
  valorInputCodigo = parseFloat(inputUnidadeACodigo)


  pMensagemA.textContent = 'Preencha todos os campos para criar a escola.'
  const novaEscola = new Senai(inputUnidadeACodigo.value, inputUnidadeACidade.value, inputUnidadeAAno.value, inputUnidadeACursos.value)
  pMensagemA.textContent = `SENAI ${valorCidade} foi instanciada`    

})


/* ===== INSTANCIAR ESCOLA B ===== */



/* ===== ABRIR ESCOLA ===== */



/* ===== FECHAR ESCOLA ===== */



/* ===== RELATÓRIO DE COMPARAÇÃO ===== */



/* ===== NOVA CONSULTA ===== */


