// Inicio funcion para consultar indicadores economicos//

$(document).ready(function() {
    Indicador();
    Clima();
});

const Indicador = () => {
    $.getJSON('https://api.libreapi.cl/economy/indicators', function(data){
        response = data;
        console.log(response);

        $('#indicador').append(
            "<li>" + 'Dolar:  ' + response.data.dolar + "</li>" + 
            "<li>" + 'Euro :  ' + response.data.euro + "</li>" + 
            "<li>" + 'UF   :  ' + response.data.uf + "</li>"
        )

    });
}


// Fin funcion para consultar indicadores economicos//


// Inicio funcion para consultar temperatura de hoy/

const Clima = () => {
    $.getJSON('https://api.libreapi.cl/weather/stations?code=330020', function(data){
        response = data;
        console.log(response);

    
        $("#temperatura").append(
            "<li>" + 'Temperatura Actual: ' + response.data.temperature + "</li>" + 
            "<li>" + 'Temperatura Maxima: ' + response.data.today.maximum.temperature + "</li>" + 
            "<li>" + 'Temperatura Minima: ' + response.data.today.minimum.temperature + "</li>"
        )
    });
}

// Fin funcion para consultar temperatura de hoy//






// Inicio de Validador Login

      // Ocultar etiquetas
        $("#lbl_rut").css("visibility", "hidden");
        $("#lbl_contrasena").css("visibility", "hidden");
       

    $("#btn_ingreso").click(function(){
      rut = $("#txt_rut").val();
      contrasena = $("#txt_contrasena").val();
      validador = true;

      if(rut == ""){ 
          $("#lbl_rut").css("visibility", "visible");
          $("#txt_rut").css( "border", "3px solid red");
          validador = false;
      } else{
            $("#lbl_rut").css("visibility", "hidden");
            $("#txt_rut").css( "border", "3px solid green");
      }
        
     if(contrasena == ""){
            $("#lbl_contrasena").css("visibility", "visible");
            $("#txt_contrasena").css( "border", "3px solid red");
            validador = false;
     } else{
            $("#lbl_contrasena").css("visibility", "hidden");
            $("#txt_contrasena").css( "border", "3px solid green");
    }

    if(validador){
        $("#lbl_ingreso").text("Bienvenid@");
        $("#lbl_ingreso").addClass("text-success");

        window.location="indicadores.html";    

      } else{
        $("#lbl_ingreso").css("visibility", "hidden");
      }
    });

// Fin de Validador Login
