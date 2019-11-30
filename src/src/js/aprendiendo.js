anime({
    targets: '.sq1',
    translateY: -600,
    delay: 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    opacity: 0,

});
anime({
    targets: '.sq2',
    // direction: 'alternate',
    translateY: 600,
    delay: 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    opacity: 0,

});
anime({
    targets: '.sq3',
    // direction: 'alternate',
    translateX: 600,
    delay: 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    opacity: 0,
});

//acion sq1 click y amigos
var sq1click = anime({
    targets: '.sq1',
    translateX: -600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});
var sq1clickinsq2 = anime({
    targets: '.sq2',
    translateY: 600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});
var sq1clickinsq3 = anime({
    targets: '.sq3',
    translateX: 600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});
var enterInsq1 = document.querySelector('.sq1');
enterInsq1.addEventListener('click', function() {
    sq1click.play();
    sq1clickinsq2.play();
    sq1clickinsq3.play();
    const pagina = "./sello.html"

    function redireccionar() {
        location.href = pagina
    }
    setTimeout(redireccionar, 900);
});

//fin de accion click 1 y red 
//accion click 2 y red
var sq2click = anime({
    targets: '.sq1',
    translateY: -600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});
var enterInsq2 = document.querySelector('.sq2');
enterInsq2.addEventListener('click', function() {
    sq2click.play();
    sq1clickinsq2.play();
    sq1clickinsq3.play();
    const pagina = "./Enciclopediadelacarne.html"

    function redireccionar() {
        location.href = pagina
    }
    setTimeout(redireccionar, 900);
});
//fin acion 2

//accion click 3 
var enterInsq2 = document.querySelector('.sq3');
enterInsq2.addEventListener('click', function() {
    sq2click.play();
    sq1clickinsq2.play();
    sq1clickinsq3.play();
    const pagina = "./blog.html"

    function redireccionar() {
        location.href = pagina
    }
    setTimeout(redireccionar, 900);
});
//fin click 3


// //hover s2
// var sq2hover = anime({
//     targets: '.sq2',
//     scale: 1.1,
//     easing: 'spring(1, 80, 10, 100)',


// });
// var sqhover2 = document.querySelector('.sq2');
// sqhover2.addEventListener('mouseenter', function() {
//     sq2hover.play();
// }, false);

// var sq2deshover = anime({
//     targets: '.sq2',
//     scale: 1,
//     easing: 'spring(1, 80, 10, 100)'

// });
// sqhover2.addEventListener('mouseleave', function() {
//     sq2deshover.play();
// }, false);
// //fin de hover sq2

// //hover s2
// var sq3hover = anime({
//     targets: '.sq3',
//     scale: 1.1,
//     easing: 'spring(1, 80, 10, 100)'

// });
// var sqhover3 = document.querySelector('.sq3');
// sqhover3.addEventListener('mouseenter', function() {
//     sq3hover.play();
// }, false);

// var sq3deshover = anime({
//     targets: '.sq3',
//     scale: 1,
//     easing: 'spring(1, 80, 10, 100)'

// });
// sqhover3.addEventListener('mouseleave', function() {
//     sq3deshover.play();
// }, false);
// //fin de hover sq2