const coordenadast = [{
    longitud: -12.122752,
    latitud: -76.994037,
    titulo: "cusco",
    parrafo: "Centro de Reciclaje",
    departamento: "cusco",
}, {
    longitud: -12.125260,
    latitud: -76.994037,
    titulo: "lima",
    parrafo: "Centro de préstamo de bicicleta",
    departamento: "lima",
}, {
    longitud: -12.129759,
    latitud: -76.994037,
    titulo: "arequipa",
    parrafo: "Centro de préstamo de bicicleta",
    departamento: "arequipa",
}, {
    longitud: -12.129759,
    latitud: -76.994037,
    titulo: "arequipa",
    parrafo: "Centro de préstamo de bicicleta",
    departamento: "arequipa",
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



const opc1 = document.getElementById("opc1");
const opc2 = document.getElementById("opc2");
const opc3 = document.getElementById("opc3");

opc1.addEventListener("click", () => {

    const datafilter = coordenadast.filter(menosdata => menosdata.departamento == "lima");

    miMapa.removeLayer(marker);
    for (const longitudYlatitud of datafilter) {

        marker = L.marker([longitudYlatitud.longitud, longitudYlatitud.latitud], {
            icon: iconoReciclaje
        }).addTo(miMapa);
        marker.bindPopup(`<h1>${longitudYlatitud.titulo}</h1><img class="imageMap"src='peruvian.png' alt='ecoFeria'><p>${longitudYlatitud.parrafo}</p>`, estiloPopup).openPopup();
        var popup = L.popup();
    }

});

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



const arrayOfOptions = [];
const op1 = document.getElementById('i1');
const op2 = document.getElementById('i2');
const op3 = document.getElementById('i3');
const op4 = document.getElementById('i4');

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