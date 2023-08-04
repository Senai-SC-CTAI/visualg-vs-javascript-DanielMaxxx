function calcularBombons() {
    var alunos = Number(document.getElementById("alunos").value);
    var resultado = alunos * 3;

    // Exibindo o resultado em um elemento na página com o ID "resultado"
    document.getElementById("resultado").innerText = "Total de bombons a serem comprados: " + resultado;
}
    
   

    //algoritmo ContagemBombons
   //var
   //quantidade_alunos, total_bombons: inteiro
   //inicio
   //escreva("Digite a quantidade de alunos na turma: ")
   //leia(quantidade_alunos)
   //total_bombons <- quantidade_alunos * 3
   //escreva("Total de bombons a serem comprados: ", total_bombons)
   // fimalgoritmo