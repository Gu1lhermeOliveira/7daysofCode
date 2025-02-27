    function mostrarMensagem(){
        let nome = document.getElementById("nome").value; // declarando os valores de cada variavel que representa um input
        let idade = document.getElementById("idade").value;
        let linguagem = document.getElementById("linguagem").value;

        if (nome === ""  || idade === "" || linguagem === ""){
            alert('Preencha os Dados Corretamente');
            return;
        }

    document.getElementById('resultado').innerText = `Olá ${nome} , você tem ${idade} anos e já está aprendendo ${linguagem} !`; //exibir a mensagem concatenada no paragrafo 
        
    
    // depois que rodar os codigos acima sera executado essas perguntas
    let resposta = parseInt(prompt(`Voce Gosta de estudar ${linguagem} ? Responda com o número 1 para Sim ou 2 para Não`));
    
    if (resposta == 1){
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    } 

    if (resposta == 2){
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    }
    
}
