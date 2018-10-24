function concatenar(dato){
	pantalla = document.getElementById('pantalla');
	pantalla.value += dato;

}

function borrar(){
	var del = "";
	del = document.getElementById('pantalla');
	del.value = "";

}

function igual(){
	funcion = document.getElementById('pantalla').value;
	resultado = eval(funcion);
	pantalla = document.getElementById('pantalla');
	pantalla.value = resultado; 
}

function secreto(){
	if (pantalla.value == "007"){
    window.location.assign('http://localhost/AplicacionesM/Calculadora/Acordeon.html'); 
	}

}



