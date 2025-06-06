// 1. Crie um objeto chamado `aluno` com as propriedades: `nome`, `idade` e `curso`.
const aluno = {
    nome: "Brena",
    idade: 21,
    curso: "Psicologia"
}
console.log("Aluno :", aluno);

// 2. Adicione uma nova propriedade chamada `matriculado` ao objeto `aluno`, com valor `true`.
aluno.matriculado = true;
console.log("Aluno com matricula:", aluno);

//3. Altere o valor da propriedade `curso` para "Engenharia".
aluno.curso = "Engenharia";
console.log("Aluno com curso atualizado:", aluno);

//4. Remova a propriedade `idade` do objeto `aluno`.
delete aluno.idade;
console.log("Aluno sem idade:", aluno);

//5. Acesse o valor da propriedade `nome` do objeto `aluno` e armazene em uma variável chamada `nomeAluno`
const nomeAluno = aluno.nome;
console.log("Nome do Aluno:", nomeAluno);

//6. Crie uma array chamada `alunos`, contendo 3 objetos com as propriedades: `nome` e `nota`.
const alunos = [
    { nome: "Carlos", nota: 8.5 },
    { nome: "Ana", nota: 6.0 },
    { nome: "João", nota: 9.0 }
];
console.log("Array de Alunos:", alunos);

// 7. Usando `map`, crie um novo array com apenas os nomes dos alunos do array `alunos`.
const nomesAlunos = alunos.map(aluno => aluno.nome);
console.log("Nomes dos Alunos:", nomesAlunos);

// 8. Use `filter` para retornar os alunos com nota maior ou igual a 7.
const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log("Alunos Aprovados:", alunosAprovados);

// 9. Converta o objeto `aluno` para uma string JSON.
const alunoJson = JSON.stringify(aluno);
console.log("Aluno em JSON:", alunoJson);

// 10. Converta a string JSON anterior de volta para objeto.
const alunoObjeto = JSON.parse(alunoJson);
console.log("Aluno de volta ao objeto:", alunoObjeto);

// 11. Crie um objeto `livro` com as propriedades: `titulo`, `autor`, `anoPublicacao`, e dentro dele, um objeto `editora` com `nome` e `cidade`.
const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    anoPublicacao: 1997,
    editora: {
        nome: "Rocco",
        cidade: "Rio de Janeiro"
    }
};
console.log("Livro:", livro);

// 12. Acesse o nome da editora do objeto `livro`.
const nomeEditora = livro.editora.nome;
console.log("Nome da Editora:", nomeEditora);

// 13. Faça uma função chamada `listarPropriedades(obj)` que receba um objeto e retorne um array com os nomes das propriedades.

function listarPropriedades(obj) {
    return Object.keys(obj);
}
console.log("Propriedades do Livro:", listarPropriedades(livro));

// 14. Crie uma função chamada `atualizarObjeto(obj, chave, valor)` que atualize dinamicamente uma propriedade de um objeto.
function atualizarObjeto(obj, chave, valor) {
    obj[chave] = valor;
}
console.log("Objeto antes da atualização:", livro);
atualizarObjeto(livro, "anoPublicacao", 1998);

// 15. Escreva uma função chamada `removerPropriedade(obj, chave)` que remova uma propriedade de um objeto.
function removerPropriedade(obj, chave) {
    delete obj[chave];
}
console.log("Objeto antes da remoção:", livro);
removerPropriedade(livro, "editora");
console.log("Objeto após remoção da editora:", livro);