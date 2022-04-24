$(window).on("load", primerCuadro);

function primerCuadro() {
    $("#lUno").focus();
    $("#lDos").prop("disabled", true);
    $("#lTres").prop("disabled", true);
    $("#lCuatro").prop("disabled", true);
    $("#lCinco").prop("disabled", true);
}

const esLetra = (caracter) => {
    let ascii = caracter.toUpperCase().charCodeAt(0);
    if (ascii > 64 && ascii < 91) {
        return true;
    }
    return false;
};

$("input").on("keyup", function () {
    
    let letra = $(".in-letra").val();
    let ascii = letra.toUpperCase().charCodeAt(0);
    if (ascii > 64 && ascii < 91) {      
        
        if ($("#lUno").val() != '') {
            $("#lDos").prop("disabled", false);
            $("#lDos").focus();
            $("#lUno").prop("disabled", true);
        }
        if ($("#lDos").val() != '') {
            $("#lTres").prop("disabled", false);
            $("#lTres").focus();
            $("#lDos").prop("disabled", true);
        }
        if ($("#lTres").val() != '') {
            $("#lCuatro").prop("disabled", false);
            $("#lCuatro").focus();
            $("#lTres").prop("disabled", true);
        }
        if ($("#lCuatro").val() != '') {
            $("#lCinco").prop("disabled", false);
            $("#lCinco").focus();
            $("#lCuatro").prop("disabled", true);
        }
    }
});

$('#btnEnviar').on('click', function (event) {
    let l1 = $("#lUno").val();
    let l2 = $("#lDos").val();
    let l3 = $("#lTres").val();
    let l4 = $("#lCuatro").val();
    let l5 = $("#lCinco").val();

    let palabra = l1 + l2 + l3 + l4 + l5;

    var palabraReal = "clona";

    var vectorPalabra = palabraReal.split('');
    
    var ban = "0";

    for (var i = 0; i < 5; i++) {

        if (ban == "0") {
            ban = l1;
        } else if (ban == l1) {
            ban = l2.val();
        }
        if (ban == l2) {
            ban = l3;
        }
        if (ban == l3) {
            ban = l4;
        }
        if (ban == l4) {
            ban = l5;
        }

        for (var i = 0; i < 5; i++) {

            if (ban === vectorPalabra[i]) {
                $("#lUno").addClass("correcta");
               
                //Esto está de prueba, hay que hacer la lógica para que sea dínamico.
            }
        }
    }

   

    
});