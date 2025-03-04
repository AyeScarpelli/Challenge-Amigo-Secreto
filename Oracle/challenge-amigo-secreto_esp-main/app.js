//Variable global
let amigo=[]

//Funcion para agregar un amigo, o indicar al usuario que ingrese un nombre
function agregarAmigo(){
  let inputAmigo = document.getElementById('amigo');
  let nombreAmigo = inputAmigo.value;
  
   if(!nombreAmigo){
    alert('Por favor ingrese un nombre');
    return;
   }
  amigo.push(nombreAmigo);
  inputAmigo.value = '';
  inputAmigo.focus();
  mostrarAmigos()
  }

//Funcion para mostrar la lista de amigos en pantalla
  function mostrarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0; i < amigo.length; i++){
      let item = document.createElement('li');
      item.textContent = amigo[i];
      listaAmigos.appendChild(item);
    }
  }
  
//Funcion para sortear amigo secreto
  function sortearAmigo(){
    if(amigo.length === 0){
      alert('No hay amigos para sortear, por favor agrega amigos.');
      return;
    }
    let amigoSecreto = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Felicidades tu amigo secreto es: ${amigoSecreto}`;
    lanzarConfeti(); // Dispara el confeti cuando aparece el resultado

  
    //Variable para limpiar la lista de amigos
    let limpiarLista= document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
  }

  function lanzarConfeti() {
    confetti({
        particleCount: 200,
        spread: 200,
        origin: { y: 0.6 } // Desde la parte superior
    });
}

