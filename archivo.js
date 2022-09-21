// JavaScript del Encriptador de Texto
const mensajes = document.querySelector(".mensaje");
const textoResultado = document.querySelector(".texto-resultado");
const textoFinal = document.querySelector(".texto-resultado");

var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".copiar");
var munieco=document.querySelector(".contenedor-munieco");
var h3=document.querySelector(".contenedor-h3");
var parrafo=document.querySelector(".contenedor-parrafo");
var content = document.getElementById("textoEncriptado");


// Funcionamiento de los botones
botonEncriptar.onclick=encriptar;
botonDesencriptar.onclick=desencriptar;
botonCopiar.onclick = copiar;
 
function encriptar(){
    
    ocultarAdelante();
    const textoEncriptado = encriptarTexto(mensajes.value);
    textoResultado.value=textoEncriptado;
    mensajes.value="";
}

function desencriptar(){
    ocultarAdelante();
    const textoDesencriptado = desencriptarTexto(mensajes.value);
    textoFinal.value = textoDesencriptado;
    mensajes.value="";
}

function copiar(){
   
    textoResultado.select();
    navigator.clipboard.writeText(textoResultado.value);
    textoResultado.value="";
    alert("texto copiado");

}

// Función para ocultar los elementos del arte "Muñeco"
function ocultarAdelante(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");

}


// Función para encriptar el texto introducido por el usuario
function encriptarTexto(mensajes){
    var texto = mensajes;
    var textoFinal="";
    
    for(var i=0; i<texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}


// Función para Desencriptar el texto introducido por el usuario
function desencriptarTexto(mensajes){
    var texto=mensajes;
    var textoFinal="";
    
    for(var i=0; i<texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i=i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i=i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i=i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i=i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i=i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}


// Fin del programa