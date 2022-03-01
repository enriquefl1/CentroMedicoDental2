// leer los archivos 
// archivo radiologia
const radiologia = [
    {
      "HORA": "11:00",
      "ESPECIALISTA": "IGNACIO SCHULZ",
      "PACIENTE": "FRANCISCA ROJAS",
      "RUT": "9878782-1",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
      "PACIENTE": "PAMELA ESTRADA",
      "RUT": "15345241-3",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:00",
      "ESPECIALISTA": "FERNANDO WURTHZ",
      "PACIENTE": "ARMANDO LUNA",
      "RUT": "16445345-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:30",
      "ESPECIALISTA": "ANA MARIA GODOY",
      "PACIENTE": "MANUEL GODOY",
      "RUT": "17666419-0",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "16:00",
      "ESPECIALISTA": "PATRICIA SUAZO",
      "PACIENTE": "RAMON ULLOA",
      "RUT": "14989389-K",
      "PREVISION": "FONASA"
    }
  ]
// archivo traumatologia
const traumatologia = [
    {
      "HORA": "8:00",
      "ESPECIALISTA": "MARIA PAZ ALTUZARRA",
      "PACIENTE": "PAULA SANCHEZ",
      "RUT": "15554774-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "10:00",
      "ESPECIALISTA": "RAUL ARAYA",
      "PACIENTE": "ANGÉLICA NAVAS",
      "RUT": "15444147-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "10:30",
      "ESPECIALISTA": "MARIA ARRIAGADA",
      "PACIENTE": "ANA KLAPP",
      "RUT": "17879423-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "ALEJANDRO BADILLA",
      "PACIENTE": "FELIPE MARDONES",
      "RUT": "1547423-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "CECILIA BUDNIK",
      "PACIENTE": "DIEGO MARRE",
      "RUT": "16554741-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "12:00",
      "ESPECIALISTA": "ARTURO CAVAGNARO",
      "PACIENTE": "CECILIA MENDEZ",
      "RUT": "9747535-8",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "12:30",
      "ESPECIALISTA": "ANDRES KANACRI",
      "PACIENTE": "MARCIAL SUAZO",
      "RUT": "11254785-5",
      "PREVISION": "ISAPRE"
    }
  ]

// archivo dental
const dental = [
    {
      "HORA": "8:30",
      "ESPECIALISTA": "ANDREA ZUÑIGA",
      "PACIENTE": "MARCELA RETAMAL",
      "RUT": "11123425-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "MARIA PIA ZAÑARTU",
      "PACIENTE": "ANGEL MUÑOZ",
      "RUT": "9878789-2",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "SCARLETT WITTING",
      "PACIENTE": "MARIO KAST",
      "RUT": "7998789-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:00",
      "ESPECIALISTA": "FRANCISCO VON TEUBER",
      "PACIENTE": "KARIN FERNANDEZ",
      "RUT": "18887662-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:30",
      "ESPECIALISTA": "EDUARDO VIÑUELA",
      "PACIENTE": "HUGO SANCHEZ",
      "RUT": "17665461-4",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "14:00",
      "ESPECIALISTA": "RAQUEL VILLASECA",
      "PACIENTE": "ANA SEPULVEDA",
      "RUT": "14441281-0",
      "PREVISION": "ISAPRE"
    }
  ]

// llamo a los objetos del html
const primeraAtencionRadiologia = document.getElementById("primeraAtencionRadiologia");
const primeraAtencionTraumatologia = document.getElementById("primeraAtencionTraumatologia");
const primeraAtencionDental = document.getElementById("primeraAtencionDental");

const ultimaAtencionRadiologia = document.getElementById("ultimaAtencionRadiologia");
const ultimaAtencionTraumatologia = document.getElementById("ultimaAtencionTraumatologia");
const ultimaAtencionDental = document.getElementById("ultimaAtencionDental");

console.log(radiologia[0].PACIENTE)
console.log(traumatologia[0].PACIENTE)

primeraAtencionRadiologia.innerHTML = `${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION}`;
primeraAtencionTraumatologia.innerHTML = `${traumatologia[0].PACIENTE} - ${traumatologia[0].PREVISION}`;
primeraAtencionDental.innerHTML = `${dental[0].PACIENTE} - ${dental[0].PREVISION}`;

ultimaAtencionRadiologia.innerHTML = `${radiologia[radiologia.length - 1].PACIENTE} - ${radiologia[radiologia.length - 1].PREVISION}`;
ultimaAtencionTraumatologia.innerHTML = `${traumatologia[traumatologia.length - 1].PACIENTE} - ${traumatologia[traumatologia.length - 1].PREVISION}`;
ultimaAtencionDental.innerHTML = `${dental[dental.length - 1].PACIENTE} - ${dental[dental.length - 1].PREVISION}`;

// Seccion Tabla
const tBodyRadiologia = document.getElementById("tBodyRadiologia");
const tBodyTraumatologia = document.getElementById("tBodyTraumatologia");
const tBodyDental = document.getElementById("tBodyDental");

const templateRow = (obj, i) => {
    //alert(obj);
    return `<tr>
        <th scope="row">${i+1}</th>
        <td>${obj.HORA}</td>
        <td>${obj.ESPECIALISTA}</td>
        <td>${obj.PACIENTE}</td>
        <td>${obj.RUT}</td>
        <td>${obj.PREVISION}</td>
        </tr>`
};

//Hay que hacerlos con los for menos el each --- trabajar con map y con for tradicional

// Para radiologia se realiza la tarea con FOR TRADICIONAL 
for ( let i=0; i < radiologia.length; i++) {
  //alert(radiologia[i].PACIENTE)
  tBodyRadiologia.innerHTML += templateRow(radiologia[i], i );
}

// Para Traumatologia se realizar la iteracion por map
traumatologia.map(  (obj,i) => tBodyTraumatologia.innerHTML += templateRow(obj,i) );

// Para Dental tambien se realiza la iteracion por map
 dental.map( (obj,i) => tBodyDental.innerHTML += templateRow(obj,i));

// forEach Radiologia
// radiologia.forEach((obj, i) => {
//     tBodyRadiologia.innerHTML += templateRow(obj,i);
// });

// forEach Traumatologia
// traumatologia.forEach((obj, i) => {
//     tBodyTraumatologia.innerHTML += templateRow(obj,i);
// });


// forEach Dental
// dental.forEach((obj, i) => {
//     tBodyDental.innerHTML += templateRow(obj,i);
// });