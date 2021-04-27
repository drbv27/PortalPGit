/* var catAndActs = {};
catAndActs['Classroom Instruction and Assessment'] = ['Assessment Day', 'Common Assessment Development', 'Data Team', 'Kindergarten Screening', 'Other'];
catAndActs['Curriculum Development and Alignment'] = ['Capstone Development', 'Course Of Study Development / Revision', 'Standards Alignment / Rollout', 'Other'];
catAndActs['District Committee'] = ['Curriculum Council', 'Grading & Assessment Task Force', 'Professional Development Planning Committee', 'Race To The Top Committee', 'Teacher Evaluation Committee', 'Other'];
catAndActs['Meeting'] = ['Academic Support Team', 'ELL / eKLIP Teachers', 'Gifted Intervention Specialist', 'Intervention Assistance Team', 'Intervention Teachers', 'Kindergarten Parent Conference', 'KLIP Teachers', 'Title I Teachers', 'Other'];
catAndActs['Other Category'] = ['Other'];
catAndActs['Professional Conference'] = ['Conference'];
catAndActs['Professional Workshop / Training'] = ['In-District', 'Out-Of-District'];
catAndActs['Pupil Services'] = ['IEP Meeting', 'IEP Writing'];

function ChangecatList() {
    var catList = document.getElementById("validationCustom03");
    var actList = document.getElementById("validationCustom04");
    var selCat = catList.options[catList.selectedIndex].value;
    while (actList.options.length) {
        actList.remove(0);
    }
    var cats = catAndActs[selCat];
    if (cats) {
        var i;
        for (i = 0; i < cats.length; i++) {
            var cat = new Option(cats[i], i);
            actList.options.add(cat);
        }
    }
}  */


const container = document.querySelector('.container');
const resultado = document.querySelector('#resultadin');
const formulario = document.querySelector('#formulario');

let HoraMundial;

window.addEventListener('load', () => {
    formulario.addEventListener('submit', mostrarOpcion);
} )


function mostrarOpcion(e) {
    e.preventDefault();
    console.log('presionando boton');
    const tipoP = document.querySelector('#tipoP').value;
    console.log(tipoP);
    if (tipoP==='cu'){
        menuC();
    }
    else if (tipoP==='aa'){
        menuA();
    }
    else if (tipoP==='ab'){
        menuB();   
    }
}

function menuC() {
    console.log('menu aa');
    const dropdown1 = document.createElement('div');
    dropdown1.classList.add('dropdown','mx-auto');

    const curso = document.createElement('button');
    curso.textContent = 'Curso';
    curso.setAttribute("data-toggle", "dropdown")

    curso.classList.add('btn', 'btn-primary', 'dropdown-toggle');

    const menu1 = document.createElement('div');
    menu1.classList.add('dropdown-menu');

    const item1 = document.createElement('a');
    item1.innerHTML = `Atencion Y servicio al Cliente Afiliado`;
    item1.classList.add('dropdown-item');
    item1.href = 'https://biz.payulatam.com/L0ca71194AA168A';

    const item2 = document.createElement('a');
    item2.innerHTML = `Atencion Y servicio al Cliente  No Afiliado`;
    item2.classList.add('dropdown-item');
    item2.href = 'https://biz.payulatam.com/L0ca7117CADA8E8';

    const item3 = document.createElement('a');
    item3.innerHTML = `Reglamento Tecnico Afiliado`;
    item3.classList.add('dropdown-item');
    item3.href = 'https://biz.payulatam.com/L0ca71109BCDDED';

    const item4 = document.createElement('a');
    item4.innerHTML = `Reglamento Tecnico No Afiliado`;
    item4.classList.add('dropdown-item');
    item4.href = 'https://biz.payulatam.com/L0ca711D2314C40';

    const item5 = document.createElement('a');
    item5.innerHTML = `Detección de Condiciones Subestándares en EDS Afiliado`;
    item5.classList.add('dropdown-item');
    item5.href = 'https://biz.payulatam.com/L0ca71109BCDDED';

    const item6 = document.createElement('a');
    item6.innerHTML = `Detección de Condiciones Subestándares en EDS NO Afiliado`;
    item6.classList.add('dropdown-item');
    item6.href = 'https://biz.payulatam.com/L0ca71109BCDDED';


    menu1.appendChild(item1);
    menu1.appendChild(item2);
    menu1.appendChild(item3);
    menu1.appendChild(item4);
    menu1.appendChild(item5);
    menu1.appendChild(item6);
    dropdown1.appendChild(curso);
    dropdown1.appendChild(menu1);
    resultadin.appendChild(dropdown1);
    console.log(resultadin);


}

function menuA() {
    console.log('menu cursos')
    const titulo = document.createElement('h1');
    titulo.textContent = 'Afiliaciones Antioquia';

    const tabla = document.createElement('table');
    tabla.classList.add('table', 'table-hover');
    const head = document.createElement('thead');
    
    const r1 = document.createElement('tr');
    const modalidad = document.createElement('th');
    modalidad.textContent = 'Modalidad';
    const valor = document.createElement('th');
    valor.textContent = 'Valor';
    const pago = document.createElement('th');
    pago.textContent = 'Pago';
    r1.appendChild(modalidad);
    r1.appendChild(valor)
    r1.appendChild(pago);


    const body = document.createElement('tbody');

    const r2 = document.createElement('tr');
    const modalidad1 = document.createElement('td');
    modalidad1.textContent = 'Pago Mensual - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Antioquia y Choco, EDS con ventas mensuales inferiores a 10.000 Galones';
    const valor1 = document.createElement('td');
    valor1.textContent = '$50.000';
    const pagar1 = document.createElement('td');
    const link1 = document.createElement('a');
    link1.textContent = 'Pagar';
    link1.href = 'https://biz.payulatam.com/L0ca7119EE68F4F';
    pagar1.appendChild(link1);
    r2.appendChild(modalidad1);
    r2.appendChild(valor1);
    r2.appendChild(pagar1);
    
    const r3 = document.createElement('tr');
    const modalidad2 = document.createElement('td');
    modalidad2.textContent = 'Pago Semestral - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Antioquia y Choco, EDS con ventas mensuales inferiores a 10.000 Galones';
    const valor2 = document.createElement('td');
    valor2.textContent = '$300.000';
    const pagar2 = document.createElement('td');
    const link2 = document.createElement('a');
    link2.textContent = 'Pagar';
    link2.href = 'https://biz.payulatam.com/L0ca7113AEFA653';
    pagar2.appendChild(link2);
    r3.appendChild(modalidad2);
    r3.appendChild(valor2);
    r3.appendChild(pagar2);



    head.appendChild(r1);
    body.appendChild(r2);
    body.appendChild(r3);
    tabla.appendChild(head);
    tabla.appendChild(body);
    resultadin.appendChild(titulo);
    resultadin.appendChild(tabla);

    console.log(tabla);

}



function menuB() {
    console.log('menu ab')
}
/* let subjectObject = {
    "Cursos": {
      "Atencion y Servicio al Cliente": ["Afiliado", "No afiliado"],
      "Reglamento Tecnico EDS": ["Afiliado", "No afiliado"],
      "Detección de Condiciones Subestándares en EDS": ["Afiliado", "No afiliado"]    
    },
    "Afiliaciones Antioquia": {
      "PHP": ["Variables", "Strings", "Arrays"],
      "SQL": ["SELECT", "UPDATE", "DELETE"]
      
    },
    "Afiliaciones Bogotá": {
        "PHP": ["Variables", "Strings", "Arrays"],
        "SQL": ["SELECT", "UPDATE", "DELETE"]
        
      }
  }
  window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }



 */
