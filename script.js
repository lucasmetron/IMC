

const magrezaResultado = "Sinto muito, seu IMC está abaixo de 18.5 kg/m2. Este índice indica magreza extrema. "
const magrezaParagrafo = "Assim, para ganhar peso de forma saudável e sem ganhar barriga, você deve continuar praticando atividade física, aumentar o volume das refeições e comer a cada 3 horas. Para isso, você deve ingerir cerca de 3074 kcal por dia e aumentar o consumo de alimentos integrais e fontes de proteína, como carnes magras, peixes, ovos, arroz integral, feijão e aveia."
const normalResultado = "Parabéns, seu IMC está entre 18.5 e 24.9 kg/m2. Este índice é considerado normal"
const normalParagrafo = "Continue tendo cuidado com a alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças."
const sobrepesoResultado = "Sinto muito, mas o seu IMC está entre 24.9 a 30 kg/m2. Este índice indica sobrepeso."
const sobrepesoParagrafo = "Você deve falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos bem orientado por um preparador físico para emagrecer mais rápido."
const obesidadeResultado = "Sinto muito, mas seu IMC está acima de 30 kg/m2. Este índice indica obesidade"
const obesidadeParagrafo = "Você deve falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos bem orientado por um preparador físico para emagrecer mais rápido."

function verificar(){

  if (document.getElementById("idade").value == "" ) {
        alert("Preencha todos os campos! Campo idade vazio.");
        document.getElementById("idade").focus();
    
    } 
    
    else if (document.getElementById("altura").value == "") {
        alert("Preencha todos os campos! Campo altura vazio.");
        document.getElementById("altura").focus();
    } 

    else if (document.getElementById("peso").value == ""){
        alert("Preencha todos os campos! Campo peso vazio.");
        document.getElementById("peso").focus();
    }
    
    else {
        calcular();
    }

}

function calcular (){
    let sexoSemi = document.getElementsByName("sexo");
    let idade = document.getElementById("idade").value
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let sexo = "";
    let calc = "";
    let imc = "";
    let resultado = "";
    let resultadoParagrafo = "";
    let amostragem = document.getElementById("resultad");
    let barraConteiner = document.getElementById("barraConteiner");
    let barraTamanho = document.getElementById("barraTamanho");
    let animacao = "";

    

    for(var i = 0; i < sexoSemi.length; i++){
        if (sexoSemi[i].checked){
            sexo = sexoSemi[i].value
        }    
    }

    console.log(sexo,idade, altura, peso)

    calc =  parseFloat(peso / (altura * altura))
    imc = calc.toFixed(1);

    if (imc < 18.5){
        resultado = magrezaResultado;
        resultadoParagrafo = magrezaParagrafo;
        amostragem.innerHTML =  " <div style='display: flex;' id='barraConteiner' class='conteinerBarra' ><div class='dados'><p class='ponto0'>IMC 0 </p><p class='ponto100'>IMC acima de 30</p></div><div style='animation-name: barraMagreza;' id='barraTamanho' class='barra'></div></div> <h1> Seu IMC é: "+imc+"kg/m2 </h1> <h3> "+ resultado+" </h3> <p>"+ resultadoParagrafo+"</p>"

    } else if (imc >= 18.5 && imc < 24.9){
        resultado = normalResultado;
        resultadoParagrafo = normalParagrafo;
        amostragem.innerHTML = "<div style='display: flex;' id='barraConteiner' class='conteinerBarra' ><div class='dados'><p class='ponto0'>IMC 0 </p><p class='ponto100'>IMC acima de 30</p></div><div style='animation-name: barraNormal;' id='barraTamanho' class='barra'></div></div> <h1> Seu IMC é: "+imc+"kg/m2 </h1> <h3> "+ resultado+" </h3> <p>"+ resultadoParagrafo+"</p>"

     
    } else if (imc >= 24.9 && imc < 30){
        resultado = sobrepesoResultado;
        resultadoParagrafo = sobrepesoParagrafo;
        amostragem.innerHTML = "<div style='display: flex;' id='barraConteiner' class='conteinerBarra' ><div class='dados'><p class='ponto0'>IMC 0 </p><p class='ponto100'>IMC acima de 30</p></div><div style='animation-name: barraSobrePeso;' id='barraTamanho' class='barra'></div></div> <h1> Seu IMC é: "+imc+"kg/m2 </h1> <h3> "+ resultado+" </h3> <p>"+ resultadoParagrafo+"</p>"


    } else if ( imc >= 30){
        resultado = obesidadeResultado;
        resultadoParagrafo = obesidadeParagrafo;
        amostragem.innerHTML = "<div style='display: flex;' id='barraConteiner' class='conteinerBarra' ><div class='dados'><p class='ponto0'>IMC 0 </p><p class='ponto100'>IMC acima de 30</p></div><div style='animation-name: barraObesidade;' id='barraTamanho' class='barra'></div></div> <h1> Seu IMC é: "+imc+"kg/m2 </h1> <h3> "+ resultado+" </h3> <p>"+ resultadoParagrafo+"</p>"

    }

    console.log(resultado)
    console.log(resultadoParagrafo)

}



{/* <div style='display: flex;' id='barraConteiner' class='conteinerBarra' ><div class='dados'><p class='ponto0'>IMC 0 </p><p class='ponto100'>IMC acima de 40</p></div><div style='animation-name: barraObesidade;' id='barraTamanho' class='barra'></div></div>  */}
{/* <div style='display: flex;' id='barraConteiner' class='conteinerBarra' ><div class='dados'><p class='ponto0'>IMC 0 </p><p class='ponto100'>IMC acima de 40</p></div><div style='animation-name: barraNormal;' id='barraTamanho' class='barra'></div></div> */}
{/* <div style='display: flex;' id='barraConteiner' class='conteinerBarra' ><div class='dados'><p class='ponto0'>IMC 0 </p><p class='ponto100'>IMC acima de 40</p></div><div style='animation-name: barraSobrePeso;' id='barraTamanho' class='barra'></div></div> */}
{/* <div style='display: flex;' id='barraConteiner' class='conteinerBarra' ><div class='dados'><p class='ponto0'>IMC 0 </p><p class='ponto100'>IMC acima de 40</p></div><div style='animation-name: barraObesidade;' id='barraTamanho' class='barra'></div></div> */}