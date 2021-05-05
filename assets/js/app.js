const container = document.querySelector('.container');
const resultado = document.querySelector('#resultadin');
const formulario = document.querySelector('#formulario');


function menuC() {
    limpiarHTML();
    //Titulo
    const titulo = document.createElement('h1');
    titulo.classList.add('text-center');
    titulo.textContent = 'Cursos Virtuales';
    //Tabla
    const tabla1 = document.createElement('table');
    tabla1.classList.add('table', 'table-bordered');
    //Primer Curso
    const r1 = document.createElement('tr');
    const curso1 = document.createElement('td');
    curso1.classList.add('align-middle');
    curso1.setAttribute('rowspan', '2');
    curso1.innerHTML = '<b>Atención y Servicio al Cliente.</b>';
    const condi1 = document.createElement('td');
    condi1.classList.add('align-middle');
    condi1.innerHTML = '<b>EDS. Afiliada</b>';
    const boton1 = document.createElement('td');
    boton1.classList.add('align-middle', 'text-center');
    const link1 = document.createElement('a');
    link1.textContent = 'Pagar'
    link1.href = 'https://biz.payulatam.com/L0ca71194AA168A';
    link1.classList.add('btn','btn-primary', 'btn-lg');
    link1.setAttribute('role', 'button');
    link1.setAttribute('data-tooltip', '$70.000');
    link1.setAttribute('target', '_blank');
    link1.setAttribute('data-tooltip-location', 'right');
    r1.appendChild(curso1);
    r1.appendChild(condi1);
    boton1.appendChild(link1);
    r1.appendChild(boton1);
    const r2 = document.createElement('tr');
    const condi2 = document.createElement('td');
    condi2.classList.add('align-middle');
    condi2.innerHTML = '<b>EDS. No Afiliada</b>';
    const boton2 = document.createElement('td');
    boton2.classList.add('align-middle', 'text-center');
    const link2 = document.createElement('a');
    link2.textContent = 'Pagar'
    link2.href = 'https://biz.payulatam.com/L0ca7117CADA8E8';
    link2.classList.add('btn','btn-primary', 'btn-lg');
    link2.setAttribute('role', 'button');
    link2.setAttribute('data-tooltip', '$100.000');
    link2.setAttribute('target', '_blank');
    link2.setAttribute('data-tooltip-location', 'right');
    r2.appendChild(condi2);
    boton2.appendChild(link2);
    r2.appendChild(boton2);
    //Separador 1
    const s1 = document.createElement('tr');
    const s1a = document.createElement('td');
    s1a.classList.add('table-info');
    s1a.setAttribute('colspan', '3');
    s1.appendChild(s1a);
    //Segundo Curso
    const r3 = document.createElement('tr');
    const curso3 = document.createElement('td');
    curso3.classList.add('align-middle');
    curso3.setAttribute('rowspan', '2');
    curso3.innerHTML = '<b>Reglamento Técnico.</b>';
    const condi3 = document.createElement('td');
    condi3.classList.add('align-middle');
    condi3.innerHTML = '<b>EDS. Afiliada</b>';
    const boton3 = document.createElement('td');
    boton3.classList.add('align-middle', 'text-center');
    const link3 = document.createElement('a');
    link3.textContent = 'Pagar'
    link3.href = 'https://biz.payulatam.com/L0ca71109BCDDED';
    link3.classList.add('btn','btn-primary', 'btn-lg');
    link3.setAttribute('role', 'button');
    link3.setAttribute('data-tooltip', '$30.000');
    link3.setAttribute('target', '_blank');
    link3.setAttribute('data-tooltip-location', 'right');
    r3.appendChild(curso3);
    r3.appendChild(condi3);
    boton3.appendChild(link3);
    r3.appendChild(boton3);
    const r4 = document.createElement('tr');
    const condi4 = document.createElement('td');
    condi4.classList.add('align-middle');
    condi4.innerHTML = '<b>EDS. No Afiliada</b>';
    const boton4 = document.createElement('td');
    boton4.classList.add('align-middle', 'text-center');
    const link4 = document.createElement('a');
    link4.textContent = 'Pagar'
    link4.href = 'https://biz.payulatam.com/L0ca711D2314C40';
    link4.classList.add('btn','btn-primary', 'btn-lg');
    link4.setAttribute('role', 'button');
    link4.setAttribute('data-tooltip', '$70.000');
    link4.setAttribute('target', '_blank');
    link4.setAttribute('data-tooltip-location', 'right');
    r4.appendChild(condi4);
    boton4.appendChild(link4);
    r4.appendChild(boton4);
    //Separador 2
    const s2 = document.createElement('tr');
    const s2a = document.createElement('td');
    s2a.classList.add('table-info');
    s2a.setAttribute('colspan', '3');
    s2.appendChild(s2a);
    //Tercer Curso
    const r5 = document.createElement('tr');
    const curso5 = document.createElement('td');
    curso5.classList.add('align-middle');
    curso5.setAttribute('rowspan', '2');
    curso5.innerHTML = '<b>Detección de Condiciones Subestándares</b>';
    const condi5 = document.createElement('td');
    condi5.classList.add('align-middle');
    condi5.innerHTML = '<b>EDS. Afiliada</b>';
    const boton5 = document.createElement('td');
    boton5.classList.add('align-middle', 'text-center');
    const link5 = document.createElement('a');
    link5.textContent = 'Pagar'
    link5.href = 'https://biz.payulatam.com/L0ca71144517DCA';
    link5.classList.add('btn','btn-primary', 'btn-lg');
    link5.setAttribute('role', 'button');
    link5.setAttribute('data-tooltip', '$30.000');
    link5.setAttribute('target', '_blank');
    link5.setAttribute('data-tooltip-location', 'right');
    r5.appendChild(curso5);
    r5.appendChild(condi5);
    boton5.appendChild(link5);
    r5.appendChild(boton5);
    const r6 = document.createElement('tr');
    const condi6 = document.createElement('td');
    condi6.classList.add('align-middle');
    condi6.innerHTML = '<b>EDS. No Afiliada</b>';
    const boton6 = document.createElement('td');
    boton6.classList.add('align-middle', 'text-center');
    const link6 = document.createElement('a');
    link6.textContent = 'Pagar'
    link6.href = 'https://biz.payulatam.com/L0ca71165D3D429';
    link6.classList.add('btn','btn-primary', 'btn-lg');
    link6.setAttribute('role', 'button');
    link6.setAttribute('data-tooltip', '$70.000');
    link6.setAttribute('target', '_blank');
    link6.setAttribute('data-tooltip-location', 'right');
    r6.appendChild(condi6);
    boton6.appendChild(link6);
    r6.appendChild(boton6);
    //Tabla Final
    tabla1.appendChild(r1);
    tabla1.appendChild(r2);
    tabla1.appendChild(s1);
    tabla1.appendChild(r3);
    tabla1.appendChild(r4);
    tabla1.appendChild(s2);
    tabla1.appendChild(r5);
    tabla1.appendChild(r6);
    //Display Final
    resultadin.appendChild(titulo);
    resultadin.appendChild(tabla1);
}

function menuA() {
    limpiarHTML();
    //Titulo
    const titulo = document.createElement('h1');
    titulo.classList.add('text-center');
    titulo.textContent = 'Afiliaciones Fendipetroleo Nacional';
    //Subtitulo
    const subtitulo = document.createElement('h4');
    subtitulo.classList.add('text-center');
    subtitulo.textContent = 'Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo';
    //tabla
    const tabla1 = document.createElement('table');
    tabla1.classList.add('table', 'table-bordered');
    //Pago Mensual
    const r1 = document.createElement('tr');
    const modalidad1 = document.createElement('td');
    modalidad1.classList.add('align-middle');
    modalidad1.setAttribute('rowspan', '4');
    modalidad1.innerHTML = '<b>Pago Mensual.</b>';
    const condi1 = document.createElement('td');
    condi1.classList.add('align-middle');
    condi1.innerHTML = 'EDS con ventas mensuales <b>inferiores a 10.000 Galones</b>.';
    const boton1 = document.createElement('td');
    boton1.classList.add('align-middle', 'text-center');
    const link1 = document.createElement('a');
    link1.textContent = 'Pagar'
    link1.href = 'https://biz.payulatam.com/L0ca7119EE68F4F';
    link1.classList.add('btn','btn-primary', 'btn-lg');
    link1.setAttribute('role', 'button');
    link1.setAttribute('data-tooltip', '$50.000');
    link1.setAttribute('target', '_blank');
    link1.setAttribute('data-tooltip-location', 'right');
    r1.appendChild(modalidad1);
    r1.appendChild(condi1);
    boton1.appendChild(link1);
    r1.appendChild(boton1);

    const r2 = document.createElement('tr');
    const condi2 = document.createElement('td');
    condi2.classList.add('align-middle');
    condi2.innerHTML = 'EDS con ventas mensuales <b>superiores a 10.000 Galones</b>.';
    const boton2 = document.createElement('td');
    boton2.classList.add('align-middle', 'text-center');
    const link2 = document.createElement('a');
    link2.textContent = 'Pagar'
    link2.href = 'https://biz.payulatam.com/L0ca7116A5186B9';
    link2.classList.add('btn','btn-primary', 'btn-lg');
    link2.setAttribute('role', 'button');
    link2.setAttribute('data-tooltip', '$100.000');
    link2.setAttribute('target', '_blank');
    link2.setAttribute('data-tooltip-location', 'right');
    r2.appendChild(condi2);
    boton2.appendChild(link2);
    r2.appendChild(boton2);

    const r3 = document.createElement('tr');
    const condi3 = document.createElement('td');
    condi3.classList.add('align-middle');
    condi3.innerHTML = ' Descuento por Grupos 15% <b>(2EDS)</b>.';
    const boton3 = document.createElement('td');
    boton3.classList.add('align-middle', 'text-center');
    const link3 = document.createElement('a');
    link3.textContent = 'Pagar'
    link3.href = 'https://biz.payulatam.com/L0ca7118FF9AC63';
    link3.classList.add('btn','btn-primary', 'btn-lg');
    link3.setAttribute('role', 'button');
    link3.setAttribute('data-tooltip', '$170.000');
    link3.setAttribute('target', '_blank');
    link3.setAttribute('data-tooltip-location', 'right');
    r3.appendChild(condi3);
    boton3.appendChild(link3);
    r3.appendChild(boton3);

    const r4 = document.createElement('tr');
    const condi4 = document.createElement('td');
    condi4.classList.add('align-middle');
    condi4.innerHTML = ' Descuento por Grupos 15% <b>(3EDS)</b>.';
    const boton4 = document.createElement('td');
    boton4.classList.add('align-middle', 'text-center');
    const link4 = document.createElement('a');
    link4.textContent = 'Pagar'
    link4.href = 'https://biz.payulatam.com/L0ca7114D1300E5';
    link4.classList.add('btn','btn-primary', 'btn-lg');
    link4.setAttribute('role', 'button');
    link4.setAttribute('data-tooltip', '$255.000');
    link4.setAttribute('target', '_blank');
    link4.setAttribute('data-tooltip-location', 'right');
    r4.appendChild(condi4);
    boton4.appendChild(link4);
    r4.appendChild(boton4);
    //Separador 1
    const s1 = document.createElement('tr');
    const s1a = document.createElement('td');
    s1a.classList.add('table-info');
    s1a.setAttribute('colspan', '3');
    s1.appendChild(s1a);
    //Pago semestral
    const r5 = document.createElement('tr');
    const modalidad5 = document.createElement('td');
    modalidad5.classList.add('align-middle');
    modalidad5.setAttribute('rowspan', '2');
    modalidad5.innerHTML = '<b>Pago Semestral.</b>';
    const condi5 = document.createElement('td');
    condi5.classList.add('align-middle');
    condi5.innerHTML = 'EDS con ventas mensuales <b>inferiores a 10.000 Galones</b>.';
    const boton5 = document.createElement('td');
    boton5.classList.add('align-middle', 'text-center');
    const link5 = document.createElement('a');
    link5.textContent = 'Pagar'
    link5.href = 'https://biz.payulatam.com/L0ca7113AEFA653';
    link5.classList.add('btn','btn-primary', 'btn-lg');
    link5.setAttribute('role', 'button');
    link5.setAttribute('data-tooltip', '$300.000');
    link5.setAttribute('target', '_blank');
    link5.setAttribute('data-tooltip-location', 'right');
    r5.appendChild(modalidad5);
    r5.appendChild(condi5);
    boton5.appendChild(link5);
    r5.appendChild(boton5);

    const r6 = document.createElement('tr');
    const condi6 = document.createElement('td');
    condi6.classList.add('align-middle');
    condi6.innerHTML = 'EDS con ventas mensuales <b>superiores a 10.000 Galones</b>.';
    const boton6 = document.createElement('td');
    boton6.classList.add('align-middle', 'text-center');
    const link6 = document.createElement('a');
    link6.textContent = 'Pagar'
    link6.href = 'https://biz.payulatam.com/L0ca7118A700626';
    link6.classList.add('btn','btn-primary', 'btn-lg');
    link6.setAttribute('role', 'button');
    link6.setAttribute('data-tooltip', '$500.000');
    link6.setAttribute('target', '_blank');
    link6.setAttribute('data-tooltip-location', 'right');
    r6.appendChild(condi6);
    boton6.appendChild(link6);
    r6.appendChild(boton6);
    //Separador 2
    const s2 = document.createElement('tr');
    const s2a = document.createElement('td');
    s2a.classList.add('table-info');
    s2a.setAttribute('colspan', '3');
    s2.appendChild(s2a);
    //Pago Anual
    const r7 = document.createElement('tr');
    const modalidad7 = document.createElement('td');
    modalidad7.classList.add('align-middle');
    modalidad7.setAttribute('rowspan', '2');
    modalidad7.innerHTML = '<b>Pago Anual.</b>';
    const condi7 = document.createElement('td');
    condi7.classList.add('align-middle');
    condi7.innerHTML = 'EDS con ventas mensuales <b>inferiores a 10.000 Galones</b>.';
    const boton7 = document.createElement('td');
    boton7.classList.add('align-middle', 'text-center');
    const link7 = document.createElement('a');
    link7.textContent = 'Pagar'
    link7.href = 'https://biz.payulatam.com/L0ca711C5DE161F';
    link7.classList.add('btn','btn-primary', 'btn-lg');
    link7.setAttribute('role', 'button');
    link7.setAttribute('data-tooltip', '$600.000');
    link7.setAttribute('target', '_blank');
    link7.setAttribute('data-tooltip-location', 'right');
    r7.appendChild(modalidad7);
    r7.appendChild(condi7);
    boton7.appendChild(link7);
    r7.appendChild(boton7);
    //Tabla Final
    tabla1.appendChild(r1)
    tabla1.appendChild(r2)
    tabla1.appendChild(r3)
    tabla1.appendChild(r4)
    tabla1.appendChild(s1)
    tabla1.appendChild(r5)
    tabla1.appendChild(r6)
    tabla1.appendChild(s2)
    tabla1.appendChild(r7)
    //Display Final
    resultadin.appendChild(titulo);
    resultadin.appendChild(subtitulo);
    resultadin.appendChild(tabla1);
}

function limpiarHTML() {
  while(resultadin.firstChild) {
      resultadin.removeChild(resultadin.firstChild);
  }
}
