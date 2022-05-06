$(window).on("load", primerCuadro);

const palabras = ["preso", "clavo", "fruta", "parto", "culpa", "poste"];

var palabraReal = palabras[Math.floor(Math.random() * palabras.length)];

var vectorPalabra = palabraReal.split('');

function primerCuadro() {
    $("#lUno").prop("disabled", false);
    $("#lUno").focus();
    $("#lDos").prop("disabled", true);
    $("#lTres").prop("disabled", true);
    $("#lCuatro").prop("disabled", true);
    $("#lCinco").prop("disabled", true);
    $("#lUnoDos").prop("disabled", true);
    $("#lDosDos").prop("disabled", true);
    $("#lTresDos").prop("disabled", true);
    $("#lCuatroDos").prop("disabled", true);
    $("#lCincoDos").prop("disabled", true);
    $("#lUnoTres").prop("disabled", true);
    $("#lDosTres").prop("disabled", true);
    $("#lTresTres").prop("disabled", true);
    $("#lCuatroTres").prop("disabled", true);
    $("#lCincoTres").prop("disabled", true);
    $("#lUnoCuatro").prop("disabled", true);
    $("#lDosCuatro").prop("disabled", true);
    $("#lTresCuatro").prop("disabled", true);
    $("#lCuatroCuatro").prop("disabled", true);
    $("#lCincoCuatro").prop("disabled", true);
    $("#lUnoCinco").prop("disabled", true);
    $("#lDosCinco").prop("disabled", true);
    $("#lTresCinco").prop("disabled", true);
    $("#lCuatroCinco").prop("disabled", true);
    $("#lCincoCinco").prop("disabled", true);

    $(".stl-letra").removeClass("correcta");
    $(".stl-letra").removeClass("casiCorrecta");    
}

const esLetra = (caracter) => {
    let ascii = caracter.toUpperCase().charCodeAt(0);
    if (ascii > 64 && ascii < 91) {
        return true;
    }
    return false;
};



var banderaPosicion = 1;

$("input").on("keyup", function () {
   
   
    let letra = $(this).val();

    if (letra == "Delete") {
        alert("Anda");
    }
    if (letra != undefined) {
        $(this).addClass("seleccion");
    }
    
    let ascii = letra.toUpperCase().charCodeAt(0);
    if (ascii > 64 && ascii < 91) {      

        if (banderaPosicion == 1) {
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
                if ($("#lCinco").val() != '') {
                    $("#btnEnviar").removeClass("deshabilitado");
                }
            }
        }

        if (banderaPosicion == 2) {
            if ($("#lUnoDos").val() != '') {
                $("#lDosDos").prop("disabled", false);
                $("#lDosDos").focus();
                $("#lUnoDos").prop("disabled", true);
            }
            if ($("#lDosDos").val() != '') {
                $("#lTresDos").prop("disabled", false);
                $("#lTresDos").focus();
                $("#lDosDos").prop("disabled", true);
            }
            if ($("#lTresDos").val() != '') {
                $("#lCuatroDos").prop("disabled", false);
                $("#lCuatroDos").focus();
                $("#lTresDos").prop("disabled", true);
            }
            if ($("#lCuatroDos").val() != '') {
                $("#lCincoDos").prop("disabled", false);
                $("#lCincoDos").focus();
                $("#lCuatroDos").prop("disabled", true);
                if ($("#lCincoDos").val() != '') {
                    $("#btnEnviar").removeClass("deshabilitado");
                }
            }
        }

        if (banderaPosicion == 3) {
            if ($("#lUnoTres").val() != '') {
                $("#lDosTres").prop("disabled", false);
                $("#lDosTres").focus();
                $("#lUnoTres").prop("disabled", true);
            }
            if ($("#lDosTres").val() != '') {
                $("#lTresTres").prop("disabled", false);
                $("#lTresTres").focus();
                $("#lDosTres").prop("disabled", true);
            }
            if ($("#lTresTres").val() != '') {
                $("#lCuatroTres").prop("disabled", false);
                $("#lCuatroTres").focus();
                $("#lTresTres").prop("disabled", true);
            }
            if ($("#lCuatroTres").val() != '') {
                $("#lCincoTres").prop("disabled", false);
                $("#lCincoTres").focus();
                $("#lCuatroTres").prop("disabled", true);
                if ($("#lCincoTres").val() != '') {
                    $("#btnEnviar").removeClass("deshabilitado");
                }
            }
        }

        if (banderaPosicion == 4) {
            if ($("#lUnoCuatro").val() != '') {
                $("#lDosCuatro").prop("disabled", false);
                $("#lDosCuatro").focus();
                $("#lUnoCuatro").prop("disabled", true);
            }
            if ($("#lDosCuatro").val() != '') {
                $("#lTresCuatro").prop("disabled", false);
                $("#lTresCuatro").focus();
                $("#lDosCuatro").prop("disabled", true);
            }
            if ($("#lTresCuatro").val() != '') {
                $("#lCuatroCuatro").prop("disabled", false);
                $("#lCuatroCuatro").focus();
                $("#lTresCuatro").prop("disabled", true);
            }
            if ($("#lCuatroCuatro").val() != '') {
                $("#lCincoCuatro").prop("disabled", false);
                $("#lCincoCuatro").focus();
                $("#lCuatroCuatro").prop("disabled", true);
                if ($("#lCincoCuatro").val() != '') {
                    $("#btnEnviar").removeClass("deshabilitado");
                }
            }
        }

        if (banderaPosicion == 5) {
            if ($("#lUnoCinco").val() != '') {
                $("#lDosCinco").prop("disabled", false);
                $("#lDosCinco").focus();
                $("#lUnoCinco").prop("disabled", true);
            }
            if ($("#lDosCinco").val() != '') {
                $("#lTresCinco").prop("disabled", false);
                $("#lTresCinco").focus();
                $("#lDosCinco").prop("disabled", true);
            }
            if ($("#lTresCinco").val() != '') {
                $("#lCuatroCinco").prop("disabled", false);
                $("#lCuatroCinco").focus();
                $("#lTresCinco").prop("disabled", true);
            }
            if ($("#lCuatroCinco").val() != '') {
                $("#lCincoCinco").prop("disabled", false);
                $("#lCincoCinco").focus();
                $("#lCuatroCinco").prop("disabled", true);
                if ($("#lCincoCinco").val() != '') {
                    $("#btnEnviar").removeClass("deshabilitado");                    
                }
            }
        }
    }   
    
});

function contarCaracteres(palabra) {

    let a, b, c, d, e;

    for (var i = 0; i < 5; i++) {

    }

}

function validarUno() {
    let l1 = $("#lUno").val();
    let l2 = $("#lDos").val();
    let l3 = $("#lTres").val();
    let l4 = $("#lCuatro").val();
    let l5 = $("#lCinco").val();

    let palabra = l1 + l2 + l3 + l4 + l5;

    var ban = "0";
    var banDos = 1;
    let validarFinal = 0;

    for (var i = 0; i < 5; i++) {

        if (ban == "0") {
            ban = l1;
        } else if (ban == l1) {
            ban = l2;
            banDos = 2;
        } else if (ban == l2) {
            ban = l3;
            banDos = 3;
        } else if (ban == l3) {
            ban = l4;
            banDos = 4;
        } else if (ban == l4) {
            ban = l5;
            banDos = 5;
        }
        
        for (var x = 0; x < 5; x++) {
            /* console.log(ban, banDos);*/
            if (ban === vectorPalabra[x]) {
                if (banDos == 1) {
                    if (banDos == (x + 1)) {
                        $("#lUno").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lUno").addClass("casiCorrecta");
                    }
                }
                if (banDos == 2) {
                    if (banDos == (x + 1)) {
                        $("#lDos").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lDos").addClass("casiCorrecta");
                    }
                }
                if (banDos == 3) {
                    if (banDos == (x + 1)) {
                        $("#lTres").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lTres").addClass("casiCorrecta");
                    }
                }
                if (banDos == 4) {
                    if (banDos == (x + 1)) {
                        $("#lCuatro").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCuatro").addClass("casiCorrecta");
                    }
                }
                if (banDos == 5) {
                    if (banDos == (x + 1)) {
                        $("#lCinco").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCinco").addClass("casiCorrecta");
                    }
                }
            }
        }
    }
    if (validarFinal == 5) {
        swal("Ganaste!");
        $("#btnJugarNuevo").removeClass("off");
        $("#btnEnviar").addClass("off");
    }    
}

function validarDos() {
    let l1 = $("#lUnoDos").val();
    let l2 = $("#lDosDos").val();
    let l3 = $("#lTresDos").val();
    let l4 = $("#lCuatroDos").val();
    let l5 = $("#lCincoDos").val();

    let palabra = l1 + l2 + l3 + l4 + l5;

    var ban = "0";
    var banDos = 1;
    let validarFinal = 0;

    for (var i = 0; i < 5; i++) {

        if (ban == "0") {
            ban = l1;
        } else if (ban == l1) {
            ban = l2;
            banDos = 2;
        } else if (ban == l2) {
            ban = l3;
            banDos = 3;
        } else if (ban == l3) {
            ban = l4;
            banDos = 4;
        } else if (ban == l4) {
            ban = l5;
            banDos = 5;
        }
        
        for (var x = 0; x < 5; x++) {
            /* console.log(ban, banDos);*/
            if (ban === vectorPalabra[x]) {
                if (banDos == 1) {
                    if (banDos == (x + 1)) {
                        $("#lUnoDos").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lUnoDos").addClass("casiCorrecta");
                    }
                }
                if (banDos == 2) {
                    if (banDos == (x + 1)) {
                        $("#lDosDos").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lDosDos").addClass("casiCorrecta");
                    }
                }
                if (banDos == 3) {
                    if (banDos == (x + 1)) {
                        $("#lTresDos").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lTresDos").addClass("casiCorrecta");
                    }
                }
                if (banDos == 4) {
                    if (banDos == (x + 1)) {
                        $("#lCuatroDos").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCuatroDos").addClass("casiCorrecta");
                    }
                }
                if (banDos == 5) {
                    if (banDos == (x + 1)) {
                        $("#lCincoDos").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCincoDos").addClass("casiCorrecta");
                    }
                }

            }
        }
    }
    if (validarFinal == 5) {
        swal("Ganaste!");
        $("#btnJugarNuevo").removeClass("off");
        $("#btnEnviar").addClass("off");
    }
}

function validarTres() {
    let l1 = $("#lUnoTres").val();
    let l2 = $("#lDosTres").val();
    let l3 = $("#lTresTres").val();
    let l4 = $("#lCuatroTres").val();
    let l5 = $("#lCincoTres").val();

    let palabra = l1 + l2 + l3 + l4 + l5;

    var ban = "0";
    var banDos = 1;
    let validarFinal = 0;

    for (var i = 0; i < 5; i++) {

        if (ban == "0") {
            ban = l1;
        } else if (ban == l1) {
            ban = l2;
            banDos = 2;
        } else if (ban == l2) {
            ban = l3;
            banDos = 3;
        } else if (ban == l3) {
            ban = l4;
            banDos = 4;
        } else if (ban == l4) {
            ban = l5;
            banDos = 5;
        }
        
        for (var x = 0; x < 5; x++) {
            /* console.log(ban, banDos);*/
            if (ban === vectorPalabra[x]) {
                if (banDos == 1) {
                    if (banDos == (x + 1)) {
                        $("#lUnoTres").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lUnoTres").addClass("casiCorrecta");
                    }
                }
                if (banDos == 2) {
                    if (banDos == (x + 1)) {
                        $("#lDosTres").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lDosTres").addClass("casiCorrecta");
                    }
                }
                if (banDos == 3) {
                    if (banDos == (x + 1)) {
                        $("#lTresTres").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lTresTres").addClass("casiCorrecta");
                    }
                }
                if (banDos == 4) {
                    if (banDos == (x + 1)) {
                        $("#lCuatroTres").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCuatroTres").addClass("casiCorrecta");
                    }
                }
                if (banDos == 5) {
                    if (banDos == (x + 1)) {
                        $("#lCincoTres").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCincoTres").addClass("casiCorrecta");
                    }
                }

            }
        }
    }
    if (validarFinal == 5) {
        swal("Ganaste!");
        $("#btnJugarNuevo").removeClass("off");
        $("#btnEnviar").addClass("off");
    } 
}

function validarCuatro() {
    let l1 = $("#lUnoCuatro").val();
    let l2 = $("#lDosCuatro").val();
    let l3 = $("#lTresCuatro").val();
    let l4 = $("#lCuatroCuatro").val();
    let l5 = $("#lCincoCuatro").val();

    let palabra = l1 + l2 + l3 + l4 + l5;

    var ban = "0";
    var banDos = 1;
    let validarFinal = 0;

    for (var i = 0; i < 5; i++) {

        if (ban == "0") {
            ban = l1;
        } else if (ban == l1) {
            ban = l2;
            banDos = 2;
        } else if (ban == l2) {
            ban = l3;
            banDos = 3;
        } else if (ban == l3) {
            ban = l4;
            banDos = 4;
        } else if (ban == l4) {
            ban = l5;
            banDos = 5;
        }
        
        for (var x = 0; x < 5; x++) {
            /* console.log(ban, banDos);*/
            if (ban === vectorPalabra[x]) {
                if (banDos == 1) {
                    if (banDos == (x + 1)) {
                        $("#lUnoCuatro").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lUnoCuatro").addClass("casiCorrecta");
                    }
                }
                if (banDos == 2) {
                    if (banDos == (x + 1)) {
                        $("#lDosCuatro").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lDosCuatro").addClass("casiCorrecta");
                    }
                }
                if (banDos == 3) {
                    if (banDos == (x + 1)) {
                        $("#lTresCuatro").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lTresCuatro").addClass("casiCorrecta");
                    }
                }
                if (banDos == 4) {
                    if (banDos == (x + 1)) {
                        $("#lCuatroCuatro").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCuatroCuatro").addClass("casiCorrecta");
                    }
                }
                if (banDos == 5) {
                    if (banDos == (x + 1)) {
                        $("#lCincoCuatro").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCincoCuatro").addClass("casiCorrecta");
                    }
                }

            }
        }
    }

    if (validarFinal == 5) {
        swal("Ganaste!");
        $("#btnJugarNuevo").removeClass("off");
        $("#btnEnviar").addClass("off");
    } 
}

function validarCinco() {
    let l1 = $("#lUnoCinco").val();
    let l2 = $("#lDosCinco").val();
    let l3 = $("#lTresCinco").val();
    let l4 = $("#lCuatroCinco").val();
    let l5 = $("#lCincoCinco").val();

    let palabra = l1 + l2 + l3 + l4 + l5;

    var ban = "0";
    var banDos = 1;
    let validarFinal = 0;

    for (var i = 0; i < 5; i++) {

        if (ban == "0") {
            ban = l1;
        } else if (ban == l1) {
            ban = l2;
            banDos = 2;
        } else if (ban == l2) {
            ban = l3;
            banDos = 3;
        } else if (ban == l3) {
            ban = l4;
            banDos = 4;
        } else if (ban == l4) {
            ban = l5;
            banDos = 5;
        }
        
        for (var x = 0; x < 5; x++) {
            /* console.log(ban, banDos);*/
            if (ban === vectorPalabra[x]) {
                if (banDos == 1) {
                    if (banDos == (x + 1)) {
                        $("#lUnoCinco").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lUnoCinco").addClass("casiCorrecta");
                    }
                }
                if (banDos == 2) {
                    if (banDos == (x + 1)) {
                        $("#lDosCinco").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lDosCinco").addClass("casiCorrecta");
                    }
                }
                if (banDos == 3) {
                    if (banDos == (x + 1)) {
                        $("#lTresCinco").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lTresCinco").addClass("casiCorrecta");
                    }
                }
                if (banDos == 4) {
                    if (banDos == (x + 1)) {
                        $("#lCuatroCinco").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCuatroCinco").addClass("casiCorrecta");
                    }
                }
                if (banDos == 5) {
                    if (banDos == (x + 1)) {
                        $("#lCincoCinco").addClass("correcta");
                        validarFinal++;
                    } else {
                        $("#lCincoCinco").addClass("casiCorrecta");
                    }
                }

            }
        }
    }

    if (validarFinal == 5) {
        swal("Ganaste!");
        $("#btnJugarNuevo").removeClass("off");
        $("#btnEnviar").addClass("off");

    } else {
        swal("Esta vez no se pudo, intentalo de vuelta...");
        $("#btnJugarNuevo").removeClass("off");
        $("#btnEnviar").addClass("off");
    }
}

var contColumna = 1;

$('#btnEnviar').on('click', function (event) {
    

    if (contColumna == 1) {
        validarUno();
        $("#lUnoDos").prop("disabled", false);
        $("#lUnoDos").focus();
        $("#lCinco").prop("disabled", true);
        $("#btnEnviar").addClass("deshabilitado");
        banderaPosicion++;
        contColumna++;        
    } else if (contColumna == 2) {
        validarDos();
        $("#lUnoTres").prop("disabled", false);
        $("#lUnoTres").focus();
        $("#lCincoDos").prop("disabled", true);
        $("#btnEnviar").addClass("deshabilitado");
        banderaPosicion++;
        contColumna++;
    } else if (contColumna == 3) {
        validarTres();
        $("#lUnoCuatro").prop("disabled", false);
        $("#lUnoCuatro").focus();
        $("#lCincoTres").prop("disabled", true);
        $("#btnEnviar").addClass("deshabilitado");
        banderaPosicion++;
        contColumna++;
    } else if (contColumna == 4) {
        validarCuatro();
        $("#lUnoCinco").prop("disabled", false);
        $("#lUnoCinco").focus();
        $("#lCincoCuatro").prop("disabled", true);
        $("#btnEnviar").addClass("deshabilitado");
        banderaPosicion++;
        contColumna++;
    } else if (contColumna == 5) {
        $("#btnEnviar").addClass("deshabilitado");
        validarCinco();
        banderaPosicion = 1;
        contColumna = 1;
    }    
    
});

$('#btnJugarNuevo').on('click', function (event){
    $("#btnJugarNuevo").addClass("off");
    $("#btnEnviar").removeClass("off");
    $(".stl-letra").removeClass("seleccion");
    $('input[type="text"]').val('');
    primerCuadro();
    contColumna = 1;
    banderaPosicion = 1;
    palabraReal = palabras[Math.floor(Math.random() * palabras.length)];
    vectorPalabra = palabraReal.split('');
});