var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  // var pacienteTr = document.createElement("tr");

  // var nomeTd = document.createElement("td");
  // var pesoTd = document.createElement("td");
  // var alturaTd = document.createElement("td");
  // var gorduraTd = document.createElement("td");
  // var imcTd = document.createElement("td");
  // var paciente = {
  //   nome: form.nome.value,
  //   peso: form.peso.value,
  //   altura: form.altura.value,
  //   gordura: form.gordura.value
  // }
  // nomeTd.textContent = nome;
  // pesoTd.textContent = peso;
  // alturaTd.textContent = altura;
  // gorduraTd.textContent = gordura;
  // imcTd.textContent = calculaImc(peso, altura);

  // pacienteTr.appendChild(nomeTd);
  // pacienteTr.appendChild(pesoTd);
  // pacienteTr.appendChild(alturaTd);
  // pacienteTr.appendChild(gorduraTd);
  // pacienteTr.appendChild(imcTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();


  var mensagemErro = document.querySelector("#mensagem-erro");
  mensagemErro.innerHTML = "";

  function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    pacienteTr.appendChild(montaTd(paciente.nome));
    pacienteTr.appendChild(montaTd(paciente.peso));
    pacienteTr.appendChild(montaTd(paciente.altura));
    pacienteTr.appendChild(montaTd(paciente.gordura));
    pacienteTr.appendChild(montaTd(paciente.imc));
    return pacienteTr;
  }
});
