//Ex1 - 14/03 -  calcule a média de nota de cada aluno e imprima o seguinte resultado

const media = 6;
const sala = [
    aluno = {
      nome: "Tiago dos Santos",
      disciplina: "Matemática",
      notas: [ 6.5, 4.3, 7.1, 0]
    },
    aluno = {
      nome: "Alex Carneiro",
      disciplina: "Matemática",
      notas: [ 7.5, 8.3, 9.1, 10.0]
    }
  ]

sala.forEach(fResultado);

function fResultado(aluno){
  let mediaAluno = (aluno.notas[0] +  aluno.notas[1] +  aluno.notas[2] +  aluno.notas[3])/4;
  let statusAluno = (mediaAluno > media)? 'Aprovado' : 'Reprovado';
  console.log(`Aluno: ${aluno.nome} - ${aluno.disciplina} - Média Final: ${mediaAluno} - Status: ${statusAluno}`);
}