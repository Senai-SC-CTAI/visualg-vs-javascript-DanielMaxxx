function calcularEstrutura(publicoEsperado) {
    const banheirosPorPessoa = 1 / 50;
    const baresPorPessoa = 1 / 150;

    const qtdBanheiros = Math.ceil(publicoEsperado * banheirosPorPessoa);
    const qtdBares = Math.ceil(publicoEsperado * baresPorPessoa);

    return { qtdBanheiros, qtdBares };
}

function calcular() {
    const publicoEsperado = parseInt(document.getElementById("publico").value);
    const resultado = calcularEstrutura(publicoEsperado);

    document.getElementById("resultadoBanheiros").textContent = `Banheiros: ${resultado.qtdBanheiros}`;
    document.getElementById("resultadoBares").textContent = `Bares: ${resultado.qtdBares}`;
}
function copyToClipboard() {
    const codeSnippet = document.getElementById('code-snippet');
    const range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Código copiado para a área de transferência!');
}
function copyToClipboard2() {
    const codeSnippet = document.getElementById('code-snippet2');
    const range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Código copiado para a área de transferência!');
}