anime({
    targets: '.sq2',
    translateY: -900,
    delay: 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    opacity: 0,

});
anime({
    targets: '.sq1',
    // direction: 'alternate',
    translateX: -900,
    delay: 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    opacity: 0,

});


const sq1click = anime({
    targets: '.sq1',
    translateX: -600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});

const sq1clickinsq2 = anime({
    targets: '.sq2',
    translateY: 900,
    delay: 50,

    easing: 'easeInOutSine',
    opacity: 0,

});



const enterInsq1 = document.querySelector('.sq1');
enterInsq1.addEventListener('click', () => {


    function redireccionar() {
        sq1click.play();
        sq1clickinsq2.play();
        const pagina = "./pasto.html"
        location.href = pagina
    }
    setTimeout(redireccionar, 900);
});



const sq2click = anime({
    targets: '.sq2',
    translateX: -600,
    delay: 50,
    easing: 'easeInOutSine',
    opacity: 0.1,

});

const sq2clickinsq2 = anime({
    targets: '.sq1',
    translateY: 900,
    delay: 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    opacity: 0,

});

const enterInsq2 = document.querySelector('.sq2');
enterInsq2.addEventListener('click', function() {


    function redireccionar() {
        sq2click.play();
        sq2clickinsq2.play();
        const pagina = "./pasto.html";
        location.href = pagina
    }
    setTimeout(redireccionar, 900);
});