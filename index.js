const form = document.querySelector('#form');
const btnBackB = document.getElementById('btn1b');
const btnNextA = document.getElementById('btn2a');
const btnBackC = document.getElementById('btn1c');
const btnNextB = document.getElementById('btn2b');
const btnBackD = document.getElementById('btn1d');
const btnNextC = document.getElementById('btn2c');
const progessNext4 = document.getElementById('form-progess4');
const progessNext3 = document.getElementById('form-progess3');
const progessNext2 = document.getElementById('form-progess2');
const progessNext1 = document.getElementById('form-progess1');
const stepflow1 = document.getElementById('form-step1');
const stepflow2 = document.getElementById('form-step2');
const stepflow3 = document.getElementById('form-step3');
const stepflow4 = document.getElementById('form-step4');




btnNextA.addEventListener('click', (e) => {
    e.preventDefault();
    progessNext1.classList.add('diable');
    progessNext1.classList.remove('activeBtn');
    progessNext2.classList.add('activeBtn');
    progessNext2.classList.remove('diable');
    stepflow1.classList.remove('active');
    stepflow2.classList.add('active');
});

btnBackB.addEventListener('click', (e) => {
    e.preventDefault();
    progessNext1.classList.add('activeBtn');
    progessNext1.classList.remove('diable');
    progessNext2.classList.add('diable');
    progessNext2.classList.remove('activeBtn');
    stepflow2.classList.remove('active');
    stepflow1.classList.add('active');
});

btnNextB.addEventListener('click', (e) => {
    e.preventDefault();
    progessNext2.classList.add('diable');
    progessNext2.classList.remove('activeBtn');
    progessNext3.classList.add('activeBtn');
    progessNext3.classList.remove('diable');
    stepflow2.classList.remove('active');
    stepflow3.classList.add('active');
});

btnBackC.addEventListener('click', (e) => {
    e.preventDefault();
    progessNext2.classList.add('activeBtn');
    progessNext2.classList.remove('diable');
    progessNext3.classList.add('diable');
    progessNext3.classList.remove('activeBtn');
    stepflow3.classList.remove('active');
    stepflow2.classList.add('active');
});

btnNextC.addEventListener('click', (e) => {
    e.preventDefault();
    progessNext3.classList.add('diable');
    progessNext3.classList.remove('activeBtn');
    progessNext4.classList.add('activeBtn');
    progessNext4.classList.remove('diable');
    stepflow3.classList.remove('active');
    stepflow4.classList.add('active');
});

btnBackD.addEventListener('click', (e) => {
    e.preventDefault();
    progessNext3.classList.add('activeBtn');
    progessNext3.classList.remove('diable');
    progessNext4.classList.add('diable');
    progessNext4.classList.remove('activeBtn');
    stepflow4.classList.remove('active');
    stepflow3.classList.add('active');
});