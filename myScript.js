
function changeFunc() {

  var e = document.getElementById("tabs");
  var User_choice = e.options[e.selectedIndex].value;
  var table = document.getElementById('my_table');
debugger
var total_rows=table.rows.length;
  debugger
  if(table.rows!=undefined && total_rows>1)
  {
  var i;
  for (i = 1; i <= total_rows; i++) { 
    if(table.rows[1]!=undefined){
      table.rows[1].remove();
    }
    }
  }

  if(User_choice=="inicio")
  {
      total_rows=3;
      var header = table.createTHead();
      var row1 = table.insertRow(1);
      row1.insertCell(0).innerHTML=00111111111;
      row1.insertCell(1).innerHTML="mirat";
      row1.insertCell(2).innerHTML="BIENVENIDA";
      row1.insertCell(3).innerHTML="Bienvenidos a este espacio del Centro Augusto Mijares, Asociación";
      var row2 = table.insertRow(2);
      row2.insertCell(0).innerHTML=00111111111;
      row2.insertCell(1).innerHTML="mirat";
      row2.insertCell(2).innerHTML="PROPÓSITO";
      row2.insertCell(3).innerHTML="El Centro Augusto Mijares está conformado por un grupo de profesionales";
      var row3 = table.insertRow(3);
      row3.insertCell(0).innerHTML=00111111111;
      row3.insertCell(1).innerHTML="mirat";
      row3.insertCell(2).innerHTML="OBJETIVOS";
      row3.insertCell(3).innerHTML="E1. Funcionar como punto de información";
  }
  else if(User_choice=="semblanza")
  {
      total_rows=3;
      var header = table.createTHead();
      var row1 = table.insertRow(1);
      row1.insertCell(0).innerHTML=00111111111;
      row1.insertCell(1).innerHTML="mirat";
      row1.insertCell(2).innerHTML="Augusto Mijares";
      row1.insertCell(3).innerHTML="Augusto Mijares nació en Villa de Cura (estado Anzoátegui) el 12 de";
      var row2 = table.insertRow(2);
      row2.insertCell(0).innerHTML=00111111111;
      row2.insertCell(1).innerHTML="mirat";
      row2.insertCell(2).innerHTML="APORTES PEDAGÓICOS DE AUGUSTO MIJARES";
      row2.insertCell(3).innerHTML="Formación en valores para construir el futuro del país.";
      var row3 = table.insertRow(3);
      row3.insertCell(0).innerHTML=00111111111;
      row3.insertCell(1).innerHTML="mirat";
      row3.insertCell(2).innerHTML="Obras";
      row3.insertCell(3).innerHTML="Augusto Mijares fue considerado como uno de los ensayistas más destacados";
  }
  else if(User_choice=="centro_augusto_mijares")
  {
      total_rows=9;
      var header = table.createTHead();
      var row1 = table.insertRow(1);
      row1.insertCell(0).innerHTML=00111111111;
      row1.insertCell(1).innerHTML="mirat";
      row1.insertCell(2).innerHTML="MISIÓN";
      row1.insertCell(3).innerHTML="AEl CENTRO AUGUSTO MIJARES es una asociación civil sin fines de ";
      var row2 = table.insertRow(2);
      row2.insertCell(0).innerHTML=00111111111;
      row2.insertCell(1).innerHTML="mirat";
      row2.insertCell(2).innerHTML="VISIÓN";
      row2.insertCell(3).innerHTML="El CENTRO AUGUSTO MIJARES aspira ser reconocido, a nivel nacional ";
      var row3 = table.insertRow(3);
      row3.insertCell(0).innerHTML=00111111111;
      row3.insertCell(1).innerHTML="mirat";
      row3.insertCell(2).innerHTML="VALORES";
      row3.insertCell(3).innerHTML="ADentro de nuestro pensamiento estratégico, los Valores son el verdadero";
      var row4 = table.insertRow(4);
      row4.insertCell(0).innerHTML=00111111111;
      row4.insertCell(1).innerHTML="mirat";
      row4.insertCell(2).innerHTML="RESPONSABILIDAD SOCIAL";
      row4.insertCell(3).innerHTML="Estimulamos una actitud madura, consciente y sensible a los problemas de nuestra";
      var row5 = table.insertRow(5);
      row5.insertCell(0).innerHTML=00111111111;
      row5.insertCell(1).innerHTML="mirat";
      row5.insertCell(2).innerHTML="FRATERNIDAD";
      row5.insertCell(3).innerHTML="Promovemos la unión, tolerancia y respeto a las diferencias entre los miembros que ";
      var row6 = table.insertRow(6);
      row6.insertCell(0).innerHTML=00111111111;
      row6.insertCell(1).innerHTML="mirat";
      row6.insertCell(2).innerHTML="LIBERTAD";
      row6.insertCell(3).innerHTML="La asumimos como la capacidad de elegir responsablemente la dirección de nuestras";
      var row7 = table.insertRow(7);
      row7.insertCell(0).innerHTML=00111111111;
      row7.insertCell(1).innerHTML="mirat";
      row7.insertCell(2).innerHTML="CORRESPONSABILIDAD";
      row7.insertCell(3).innerHTML="Participamos conjuntamente con empresas, instituciones, organizaciones";
      var row8 = table.insertRow(8);
      row8.insertCell(0).innerHTML=00111111111;
      row8.insertCell(1).innerHTML="mirat";
      row8.insertCell(2).innerHTML="SOLIDARIDAD";
      row8.insertCell(3).innerHTML="Actuamos desinteresadamente y con plena de alegría en favor de otras personas";
      var row9 = table.insertRow(9);
      row9.insertCell(0).innerHTML=00111111111;
      row9.insertCell(1).innerHTML="mirat";
      row9.insertCell(2).innerHTML="CONSTANCIA";
      row9.insertCell(3).innerHTML="Tenemos perseverancia y hacemos esfuerzo constante para alcanzar nuestros ";
  }
  else if(User_choice=="proyectos")
  {
      total_rows=2;
      var header = table.createTHead();
      var row1 = table.insertRow(1);
      row1.insertCell(0).innerHTML=00111111111;
      row1.insertCell(1).innerHTML="mirat";
      row1.insertCell(2).innerHTML="Por el Centro AuguSto Mijares";
      row1.insertCell(3).innerHTML="El Centro Agusto Mijares considera pertinente tratar el tema de la Responsabilidad";
      var row2 = table.insertRow(2);
      row2.insertCell(0).innerHTML=00111111111;
      row2.insertCell(1).innerHTML="mirat";
      row2.insertCell(2).innerHTML="Investigación";
      row2.insertCell(3).innerHTML="Realizar investigación para comprender el impacto de las empresas y las";
      
  }
  
  else if(User_choice=="eventos")
  {
      total_rows=1;
      var header = table.createTHead();
      var row1 = table.insertRow(1);
      row1.insertCell(0).innerHTML=00111111111;
      row1.insertCell(1).innerHTML="mirat";
      row1.insertCell(2).innerHTML="MAESTRÍA EN GERENCIA DEL TURISMO SOSTENIBLE";
      row1.insertCell(3).innerHTML="El Programa de Postrado Maestría en Gerencia del Turismo Sostenible es una oportunidad ";
      
  }
  else if(User_choice=="videos")
  {
      total_rows=9;
      var header = table.createTHead();
      var row1 = table.insertRow(1);
      row1.insertCell(0).innerHTML=00111111111;
      row1.insertCell(1).innerHTML="mirat";
      row1.insertCell(2).innerHTML="Dr. François Vallaeys";
      row1.insertCell(3).innerHTML="La Responsabilidad Social por François Vallaeys | Universidad Siglo 21";
      var row2 = table.insertRow(2);
      row2.insertCell(0).innerHTML=00111111111;
      row2.insertCell(1).innerHTML="mirat";
      row2.insertCell(2).innerHTML="Dr. François Vallaeys";
      row2.insertCell(3).innerHTML="Panorama de la RSO en América Latina (SIRSO 2014)III SIMPOSIO DE LA RESPONSABILIDAD SOCIAL DE LAS ORGANIZACIONES";
      var row3 = table.insertRow(3);
      row3.insertCell(0).innerHTML=00111111111;
      row3.insertCell(1).innerHTML="mirat";
      row3.insertCell(2).innerHTML="UNIVERSIDAD DEL PACÍFICO​";
      row3.insertCell(3).innerHTML="CONFERENCIA: Responsabilidad Socialersitaria como modelo universitario para América Latina";
      var row4 = table.insertRow(4);
      row4.insertCell(0).innerHTML=00111111111;
      row4.insertCell(1).innerHTML="mirat";
      row4.insertCell(2).innerHTML="Dr. François Vallaeys";
      row4.insertCell(3).innerHTML="Conferencia: CALIDAD EDUCATIVA Y RESPONSABILIDAD SOCIAL -Congreso Internacional de Calidad Educativa ";
  }
  else if(User_choice=="equipos")
  {
      total_rows=6;
      var header = table.createTHead();
      var row1 = table.insertRow(1);
      row1.insertCell(0).innerHTML=00111111111;
      row1.insertCell(1).innerHTML="mirat";
      row1.insertCell(2).innerHTML="ALEX RODRÍGUEZ D.";
      row1.insertCell(3).innerHTML="Lic. en Administración, Magister en Turismo, Mención Mercadeo Turístico;";
      var row2 = table.insertRow(2);
      row2.insertCell(0).innerHTML=00111111111;
      row2.insertCell(1).innerHTML="mirat";
      row2.insertCell(2).innerHTML="AGISELA QUINTERO B.";
      row2.insertCell(3).innerHTML="Lic. Psicólogo amplia experiencia en desarrollo organizacional, gestión y desarrollo";
      var row3 = table.insertRow(3);
      row3.insertCell(0).innerHTML=00111111111;
      row3.insertCell(1).innerHTML="mirat";
      row3.insertCell(2).innerHTML="JUDITH P. ALVARADO J.";
      row3.insertCell(3).innerHTML="Lic. Maestra, Actriz, Directora, Autora de Textos Teatrales, Maestra de Actuación, Teatrista.";
      var row4 = table.insertRow(4);
      row4.insertCell(0).innerHTML=00111111111;
      row4.insertCell(1).innerHTML="mirat";
      row4.insertCell(2).innerHTML="MARÍA AUGUSTA BERROTERÁN";
      row4.insertCell(3).innerHTML="Lic. en Hotelería, Magister en Gerencia Ambiental, experiencia en hotelería, turismo";
      var row5 = table.insertRow(5);
      row5.insertCell(0).innerHTML=00111111111;
      row5.insertCell(1).innerHTML="mirat";
      row5.insertCell(2).innerHTML="TAMARA MALAVER";
      row5.insertCell(3).innerHTML="Lic. en Relaciones Industriales, Magister en Gerencia de Empresas, Egresada del";
      var row6 = table.insertRow(6);
      row6.insertCell(0).innerHTML=00111111111;
      row6.insertCell(1).innerHTML="mirat";
      row6.insertCell(2).innerHTML="TERESITA GONZÁLEZ";
      row6.insertCell(3).innerHTML="Lic. en Sociología, Magister en Educación, amplia experiencia en educación de nivel";
    }

}

function validate_cred(){

  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "user" && password == "user"){
      window.sessionStorage.setItem('loggedin',1)
      window.sessionStorage.setItem('username',username);
      closeForm();
      element = document.getElementById("user_tab");
      element.classList.add("visible_tab");
      element.classList.remove("hidden_tab");
      setTimeout(function(){
      location.href="user_page.html";
      });
    }
    else{
      window.alert("Wrong username or password. Try again!")
      debugger
      window.sessionStorage.setItem("loggedin",0);
      setTimeout(function(){
        openForm(); 
        document.getElementById('username').value = "";
        document.getElementById('password').value = ""; 
        },50);
    }
}

function check_login(){
  loggedin=window.sessionStorage.getItem('loggedin');
  var element = document.getElementById("user_tab");
  if(loggedin==0 || loggedin==null)
  {
    element.classList.remove("visible_tab");
    element.classList.add("hidden_tab");
  }
  else if(loggedin==1){
    element.classList.add("visible_tab");
    element.classList.remove("hidden_tab");

  }
}

function openForm() {
  loggedin=window.sessionStorage.getItem('loggedin');
  username=window.sessionStorage.getItem('username');

  if(loggedin!=1){
    document.getElementById("myForm").style.display = "block";

  }
  else{
    window.alert("Hello "+username+", you are already logged in.");
  }
  
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}