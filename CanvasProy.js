var texto = document.getElementById("txtLines");
var botonAceptar = document.getElementById("btnAceptar");
var botonBorrar = document.getElementById("btnBorrar");

botonAceptar.addEventListener("click",dibujoPorClick);
botonBorrar.addEventListener("click",limpiarPorClick);

var dibujo = document.getElementById("canvasDibujo");
var lienzo = dibujo.getContext("2d");
var oriX = 700;
var oriY = 0;
var numLineas;

function dibujarLinea(col,xi,xf,yi,yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = col;
  lienzo.moveTo(xi,xf);
  lienzo.lineTo(yi,yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarLienzo()
{
  var x_ini;
  var y_ini;
  var x_fin;
  var y_fin;

  var esp;
  var lado;
  var color;

  lado = dibujo.height;
  esp = lado / numLineas;

  //Lienzo 1
  color ="green";
  for(var i=0; i<numLineas; i++)
  {
    x_ini = oriX;
    y_ini = oriY + (i*esp);
    x_fin = oriX + (i*esp);
    y_fin = lado;
    dibujarLinea(color,x_ini,y_ini,x_fin,y_fin);
  }

  //Lienzo 2
  color="blue";
  for(var i=0; i<numLineas; i++)
  {
    x_ini = oriX + lado;
    y_ini = oriY + (i*esp);
    x_fin = oriX + lado - (i*esp);
    y_fin = lado;
    dibujarLinea(color,x_ini,y_ini,x_fin,y_fin);
  }

  //Lienzo 3
  color ="orange";
  for(var i=0; i<numLineas; i++)
  {
    x_ini = oriX + lado;
    y_ini = oriY + lado - (i*esp);
    x_fin = oriX + lado - (i*esp);
    y_fin = oriY;
    dibujarLinea(color,x_ini,y_ini,x_fin,y_fin);
  }

  //Lienzo 4
  color="red";
  for(var i=0; i<numLineas; i++)
  {
    x_ini = oriX;
    y_ini = oriY + lado - (i*esp);
    x_fin = oriX + (i*esp);
    y_fin = oriY;
    dibujarLinea(color,x_ini,y_ini,x_fin,y_fin);
  }
}

function dibujoPorClick()
{
  numLineas = parseInt(texto.value);

  if(numLineas >= 1 & numLineas <= 500)
  {
      limpiarPorClick();
      dibujarLienzo();
  }
  else {
    alert("ERROR - Valor fuera de rango (1 - 500)");
  }
}

function limpiarPorClick()
{
  lienzo.clearRect(0, 0, dibujo.width, dibujo.height);
  texto.value = "";
  texto.placeholder = "1-500";
}
