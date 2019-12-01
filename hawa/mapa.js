const coordenadast = [{
    longitud: -12.122752,
    latitud: -76.994037,
    titulo: "Experiencia de naturaleza",
    parrafo: "disfutra de 3 dias",
    departamento: "arequipa",
    tipo: "naturaleza",
    orientado: "trekking",
    dia: "3-dias",
}, {
    longitud: -12.125260,
    latitud: -76.994037,
    titulo: "Experiencia de naturaleza",
    parrafo: "disfruta 2 dias",
    tipo: "naturaleza",
    orientado: "trekking",
    dia: "2-dias",
}, {
    longitud: -12.129759,
    latitud: -76.994037,
    titulo: "arequipa",
    parrafo: "Centro de préstamo de bicicleta",
    departamento: "arequipa",
    tipo: "naturaleza",
    orientado: "trekking",
    dia: "2-dias",
}, {
    longitud: -12.129759,
    latitud: -76.994037,
    titulo: "Experiencia de naturaleza",
    parrafo: "disfruta una semana",
    departamento: "madre dios ",
    tipo: "naturaleza",
    orientado: "trekking",
    dia: "otro",
}, {
    longitud: -12.129759,
    latitud: -76.994037,
    titulo: "Experiencia de naturaleza",
    parrafo: "disfruta una semana",
    departamento: "madre dios ",
    tipo: "vivencial",
    orientado: "cafe",
    dia: "1-dia",
}];




var marker = {};
var miMapa = L.map('mapa').setView([-12.099803, -77.008990], 15);
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {
    minZoom: 5,
    maxZoom: 16,
    attribution: osmAttrib
});
osm.addTo(miMapa);
let estiloPopup = {
    'maxWidth': '300'
}

var iconoBase = L.Icon.extend({ options: { iconSize: [24, 39], iconAnchor: [16, 87], popupAnchor: [-3, -76] } });
var iconoReciclaje = new iconoBase({
    iconUrl: 'peruvian.png'
});


var polygonPoints = [
    [-12.125260, -76.994037],
    [-12.122752, -76.994037],
    [-12.129759, -76.994037],

];
var poly = L.polygon(polygonPoints).addTo(miMapa);

const arrayOfOptions = [];

const opc1 = document.getElementById("opc1");
const opc2 = document.getElementById("opc2");
const opc3 = document.getElementById("opc3");




const op1 = document.getElementById('i1');
const op2 = document.getElementById('i2');
const op3 = document.getElementById('i3');
const op4 = document.getElementById('i4');


op4.addEventListener("click", () => {
    arrayOfOptions.push('naturaleza');
    console.log(arrayOfOptions)

})
const twoDiv = document.getElementById('twoDiv');
const threeDiv = document.getElementById('threeDiv');

const o1 = document.getElementById('o1');
const o2 = document.getElementById('o2');
const o3 = document.getElementById('o3');
const o4 = document.getElementById('o4');

op1.addEventListener("click", () => {
    twoDiv.classList.remove("Dnone");
    const algo = document.querySelectorAll(".vivencial");
    algo.forEach(function(userItem) {
        userItem.classList.remove("Dnone");

    });
    const algo2 = document.querySelectorAll(".mistico");
    algo2.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
    const algo3 = document.querySelectorAll(".investigacion");
    algo3.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });
    const algo4 = document.querySelectorAll(".naturaleza");
    algo4.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });
});

op2.addEventListener("click", () => {
    twoDiv.classList.remove("Dnone");
    const algo2 = document.querySelectorAll(".vivencial");
    algo2.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
    const algo = document.querySelectorAll(".mistico");
    algo.forEach(function(userItem) {
        userItem.classList.remove("Dnone");
    });
    const algo3 = document.querySelectorAll(".investigacion");
    algo3.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
    const algo4 = document.querySelectorAll(".naturaleza");
    algo4.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
});


op3.addEventListener("click", () => {
    twoDiv.classList.remove("Dnone");
    const algo2 = document.querySelectorAll(".vivencial");
    algo2.forEach(function(userItem) {
        userItem.classList.add("Dnone");
    });
    const algo = document.querySelectorAll(".mistico");
    algo.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });

    const algo3 = document.querySelectorAll(".investigacion");
    algo3.forEach(function(userItem) {
        userItem.classList.remove("Dnone");

    });

    const algo4 = document.querySelectorAll(".naturaleza");
    algo4.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });
});


op4.addEventListener("click", () => {
    twoDiv.classList.remove("Dnone");
    const algo2 = document.querySelectorAll(".vivencial");
    algo2.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });
    const algo = document.querySelectorAll(".mistico");
    algo.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });

    const algo3 = document.querySelectorAll(".investigacion");
    algo3.forEach(function(userItem) {
        userItem.classList.add("Dnone");

    });

    const algo4 = document.querySelectorAll(".naturaleza");
    algo4.forEach(function(userItem) {
        userItem.classList.remove("Dnone");

    });
});

const day1 = document.getElementById("day1");

const day2 = document.getElementById("day2");

const day3 = document.getElementById("day3");

const day4 = document.getElementById("day4");



const bird = document.getElementById("o16");

const florafauna = document.getElementById("o17");

const trek = document.getElementById("o18");



const datafilter = coordenadast.filter(menosdata => menosdata.tipo == arrayOfOptions[0]);

const datafilter1 = coordenadast.filter(menosdata => menosdata.orientado == arrayOfOptions[1]);

const datafilter2 = coordenadast.filter(menosdata => menosdata.dia == arrayOfOptions[2]);


day3.addEventListener("click", () => {
    arrayOfOptions.push('3-dias');
    console.log(arrayOfOptions);

    miMapa.removeLayer(marker);
    for (const longitudYlatitud of datafilter2) {

        marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
            icon: iconoReciclaje
        }).addTo(miMapa);
        marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='peruvian.png' alt='ecoFeria'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
        var popup = L.popup();
    };
});


trek.addEventListener("click", () => {
    arrayOfOptions.push('trekking');
    console.log(arrayOfOptions)
})


const todos1_2 = document.querySelectorAll(".sanpedro");

const todos1 = document.querySelectorAll(".todos1");
const days = document.querySelectorAll(".days");
const daya = document.querySelectorAll(".ayahuasca");

for (const todos of todos1) {
    todos.addEventListener("click", () => {
        threeDiv.classList.remove("Dnone");

        days.forEach(function(userItem) {
            userItem.classList.remove("Dnone");
        });

    });
};


for (const todoss of todos1_2) {
    todoss.addEventListener("click", () => {
        threeDiv.classList.remove("Dnone");

        days.forEach(function(userItem) {
            userItem.classList.add("Dnone");
        });
        daya.forEach(function(userItem) {
            userItem.classList.remove("Dnone");
        });
    });
};



const mapacont = document.getElementById("contmapa")

threeDiv.addEventListener("click", () => {
    mapacont.classList.remove("Dnone");
});




//naturaleza trekking 3-dias
//tipo-orientado-dia



opc2.addEventListener("click", () => {
    const datafilter = coordenadast.filter(menosdata => menosdata.departamento == "arequipa");
    miMapa.removeLayer(marker);
    for (const longitudYlatitud of datafilter) {
        marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
            icon: iconoReciclaje
        }).addTo(miMapa);
        marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='peruvian.png' alt='ecoFeria'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
        var popup = L.popup();
    }


});
opc3.addEventListener("click", () => {
    const datafilter = coordenadast.filter(menosdata => menosdata.departamento == "cusco");
    miMapa.removeLayer(marker);
    for (const longitudYlatitud of datafilter) {
        marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
            icon: iconoReciclaje
        }).addTo(miMapa);
        marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='peruvian.png' alt='ecoFeria'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
        var popup = L.popup();
    }
});