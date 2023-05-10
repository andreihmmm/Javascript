function adicionarAluno() {
    var tabela = document.querySelector("body>table");
    var linha = tabela.insertRow(-1);



    var matricula = prompt('matricula');
    var nome = prompt('nome')
    var faltas = parseInt(prompt('faltas'))
    var aulas = parseInt(prompt('aulas'))
    var nota_b1 = parseFloat(prompt('b1'))
    var nota_b2 = parseFloat(prompt('b2'))
    var media_semestral = (nota_b1 + nota_b2) / 2
    var nota_pr = ''
    var media_final = ''
    var situacao = ''

    if (media_semestral >= 7) {
        situacao = 'Aprovado'
        media_final = media_semestral
        nota_pr = undefined
    } else {
        var nota_pr = parseFloat(prompt('pr'))
        var media_final = (nota_pr + media_semestral) / 2
        if (media_final >= 5) {
            situacao = 'Aprovado'
        } else {
            situacao = 'Reprovado'
        }
    }
    if (faltas > 0.25 * aulas) {
        situacao = 'Reprovado'
        nota_pr = undefined
    }
    linha.insertCell(0).innerText = matricula
    linha.insertCell(1).innerText = nome
    linha.insertCell(2).innerText = faltas + '(' + aulas + ')'
    linha.insertCell(3).innerText = nota_b1
    linha.insertCell(4).innerText = nota_b2
    linha.insertCell(5).innerText = media_semestral
    linha.insertCell(6).innerText = nota_pr
    linha.insertCell(7).innerText = media_final
    linha.insertCell(8).innerText = situacao
}


function adicionarAlunoV2() {
    var tabela = document.querySelector("body > #direita > table");
    var linha = tabela.insertRow(-1);

    var inputMatricula = document.getElementById('matricula');
    var matricula = inputMatricula.value;

    var inputNome = document.getElementById('nome');
    var nome = inputNome.value;

    var inputfaltas = document.getElementById('faltas');
    var faltas = parseInt(inputfaltas.value)

    var inputaulas = document.getElementById('aulas');
    var aulas = parseInt(inputaulas.value)

    var inputnotab1 = document.getElementById('notab1');
    var notab1 = parseFloat(inputnotab1.value)

    var inputnotab2 = document.getElementById('notab2');
    var notab2 = parseFloat(inputnotab2.value)

    var mediaSemestre = (notab1 + notab2) / 2;

    var inputnotapr = document.getElementById('notapr');
    var notapr = parseFloat(inputnotapr.value)

    var media_final = ''
    var situacao = ''

    if (mediaSemestre >= 7) {
        situacao = 'Aprovado'
        media_final = mediaSemestre
        notapr = undefined
    } else {
        var media_final = (notapr + mediaSemestre) / 2
        if (media_final >= 5) {
            situacao = 'Aprovado'
        } else {
            situacao = 'Reprovado'
        }
    }
    if (faltas > 0.25 * aulas) {
        situacao = 'Reprovado'
        notapr = undefined
    }

    linha.insertCell(0).innerText = matricula
    linha.insertCell(1).innerText = nome
    linha.insertCell(2).innerText = faltas + '(' + aulas + ')'
    linha.insertCell(3).innerText = notab1
    linha.insertCell(4).innerText = notab2
    linha.insertCell(5).innerText = mediaSemestre
    linha.insertCell(6).innerText = notapr
    linha.insertCell(7).innerText = media_final
    linha.insertCell(8).innerText = situacao
}