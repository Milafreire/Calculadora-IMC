let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC() {
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value/100;
  let resultado = document.getElementById('resultado');
  
  if(altura !== "" && peso !== "") {
        let imc = (peso / (altura * altura)).toFixed(1);
        let mensagem = "";
  
        if(imc < 18.5){
            mensagem = "Abaixo do Peso."
          }else if(imc < 25){
            mensagem = "Você está com seu peso ideal."
          }else if (imc < 30){
            mensagem = "Você está com sobrepeso."
          }else if (imc < 35){
            mensagem = "Obesidade Tipo I"
          }else if (imc < 40){
            mensagem = "Obesidade Tipo II"
          }else{
            mensagem =  "Obesidade Tipo III"    
      }
    resultado.textContent = "O seu IMC é: " +imc + ".  " +mensagem;
  
    }else{
    resultado.textContent ="Por favor, preencha todos os campos."
  }
    
}
   
botaoCalcular.addEventListener('click', calculandoIMC);