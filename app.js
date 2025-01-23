let listaNombres = [];
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value; 

    if(nombre == ""){
        alert("Debes completar un nombre para añadirlo a la lista")
    }
    else {
        listaNombres.push(nombre);
        let miLista = document.getElementById("listaAmigos");
        let elementoLista = document.createElement("li");
        elementoLista.textContent = nombre;
        miLista.appendChild(elementoLista);
    }
    console.log(listaNombres);
}






















































//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar" X
//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido. X
//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada. X

//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página. 