const container = document.querySelector('.container');
const resultado = document.querySelector('#resultadin');
const formulario = document.querySelector('#formulario');


function menuC() {
    console.log('menu aa');
    limpiarHTML();

    const titulo = document.createElement('h1');
    titulo.classList.add('text-center');
    titulo.textContent = 'Cursos Virtuales';

    const tabla = document.createElement('table');
    tabla.classList.add('table', 'table-hover');

    const r1 = document.createElement('tr');
    const curso1 = document.createElement('td');
    curso1.textContent = 'Atencion y Servicio al Cliente Afiliado'
    const boton1 = document.createElement('td');
    const link1 = document.createElement('a');
    link1.textContent = 'Pagar'
    link1.href = 'https://biz.payulatam.com/L0ca71194AA168A';
    link1.classList.add('btn','btn-primary', 'btn-lg');
    link1.setAttribute('role', 'button');
    link1.setAttribute('data-tooltip', '$70.000');
    link1.setAttribute('target', '_blank');
    link1.setAttribute('data-tooltip-location', 'right');
    r1.appendChild(curso1);
    boton1.appendChild(link1);
    r1.appendChild(boton1);
    
    const r2 = document.createElement('tr');
    const curso2 = document.createElement('td');
    curso2.textContent = 'Atencion y Servicio al Cliente No Afiliado'
    const boton2 = document.createElement('td');
    const link2 = document.createElement('a');
    link2.textContent = 'Pagar'
    link2.href = 'https://biz.payulatam.com/L0ca7117CADA8E8';
    link2.classList.add('btn','btn-primary', 'btn-lg');
    link2.setAttribute('role', 'button');
    link2.setAttribute('data-tooltip', '$100.000');
    link2.setAttribute('target', '_blank');
    link2.setAttribute('data-tooltip-location', 'right');
    r2.appendChild(curso2);
    boton2.appendChild(link2);
    r2.appendChild(boton2);

    const r3 = document.createElement('tr');
    const curso3 = document.createElement('td');
    curso3.textContent = 'Reglamento Tecnico para EDS Afiliado'
    const boton3 = document.createElement('td');
    const link3 = document.createElement('a');
    link3.textContent = 'Pagar'
    link3.href = 'https://biz.payulatam.com/L0ca71109BCDDED';
    link3.classList.add('btn','btn-primary', 'btn-lg');
    link3.setAttribute('role', 'button');
    link3.setAttribute('data-tooltip', '$30.000');
    link3.setAttribute('target', '_blank');
    link3.setAttribute('data-tooltip-location', 'right');
    r3.appendChild(curso3);
    boton3.appendChild(link3);
    r3.appendChild(boton3);

    const r4 = document.createElement('tr');
    const curso4 = document.createElement('td');
    curso4.textContent = 'Reglamento Tecnico para EDS No Afiliado'
    const boton4 = document.createElement('td');
    const link4 = document.createElement('a');
    link4.textContent = 'Pagar'
    link4.href = 'https://biz.payulatam.com/L0ca711D2314C40';
    link4.classList.add('btn','btn-primary', 'btn-lg');
    link4.setAttribute('role', 'button');
    link4.setAttribute('data-tooltip', '$70.000');
    link4.setAttribute('target', '_blank');
    link4.setAttribute('data-tooltip-location', 'right');
    r4.appendChild(curso4);
    boton4.appendChild(link4);
    r4.appendChild(boton4);

    const r5 = document.createElement('tr');
    const curso5 = document.createElement('td');
    curso5.textContent = 'Detección de Condiciones Subestándares en EDS Afiliado'
    const boton5 = document.createElement('td');
    const link5 = document.createElement('a');
    link5.textContent = 'Pagar'
    link5.href = 'https://biz.payulatam.com/L0ca71144517DCA';
    link5.classList.add('btn','btn-primary', 'btn-lg');
    link5.setAttribute('role', 'button');
    link5.setAttribute('data-tooltip', '$30.000');
    link5.setAttribute('target', '_blank');
    link5.setAttribute('data-tooltip-location', 'right');
    r5.appendChild(curso5);
    boton5.appendChild(link5);
    r5.appendChild(boton5);

    const r6 = document.createElement('tr');
    const curso6 = document.createElement('td');
    curso6.textContent = 'Detección de Condiciones Subestándares en EDS No Afiliado'
    const boton6 = document.createElement('td');
    const link6 = document.createElement('a');
    link6.textContent = 'Pagar'
    link6.href = 'https://biz.payulatam.com/L0ca71165D3D429';
    link6.classList.add('btn','btn-primary', 'btn-lg');
    link6.setAttribute('role', 'button');
    link6.setAttribute('data-tooltip', '$70.000');
    link6.setAttribute('target', '_blank');
    link6.setAttribute('data-tooltip-location', 'right');
    r6.appendChild(curso6);
    boton6.appendChild(link6);
    r6.appendChild(boton6);

    tabla.appendChild(r1);
    tabla.appendChild(r2);
    tabla.appendChild(r3);
    tabla.appendChild(r4);
    tabla.appendChild(r5);
    tabla.appendChild(r6);

    resultadin.appendChild(titulo);
    resultadin.appendChild(tabla);
}

function menuA() {
    limpiarHTML();

    const titulo = document.createElement('h1');
    titulo.classList.add('text-center');
    titulo.textContent = 'Afiliaciones Antioquia';

    const subtitulo = document.createElement('h4');
    subtitulo.classList.add('text-center');
    subtitulo.textContent = 'Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Antioquia y Choco';

    const tabla = document.createElement('table');
    tabla.classList.add('table', 'table-hover');
    const head = document.createElement('thead');

    const r1 = document.createElement('tr');
    const modalidad = document.createElement('th');
    modalidad.textContent = 'Modalidad';
    const pago = document.createElement('th');
    pago.textContent = ' ';
    r1.appendChild(modalidad);
    r1.appendChild(pago);

    const r2 = document.createElement('tr');
    const modalidad2 = document.createElement('td');
    modalidad2.innerHTML = '<b>Pago Mensual</b> -  EDS con ventas mensuales inferiores a 10.000 Galones';
    const pago2 = document.createElement('td');
    const link2 = document.createElement('a');
    link2.textContent = 'Pagar'
    link2.href = 'https://biz.payulatam.com/L0ca7119EE68F4F';
    link2.classList.add('btn','btn-primary', 'btn-lg');
    link2.setAttribute('role', 'button');
    link2.setAttribute('data-tooltip', '$50.000');
    link2.setAttribute('target', '_blank');
    link2.setAttribute('data-tooltip-location', 'right');
    pago2.appendChild(link2);
    r2.appendChild(modalidad2);
    r2.appendChild(pago2);
    
    const r3 = document.createElement('tr');
    const modalidad3 = document.createElement('td');
    modalidad3.innerHTML = '<b>Pago Semestral</b> -  EDS con ventas mensuales inferiores a 10.000 Galones';
    const pago3 = document.createElement('td');
    const link3 = document.createElement('a');
    link3.textContent = 'Pagar'
    link3.href = 'https://biz.payulatam.com/L0ca7113AEFA653';
    link3.classList.add('btn','btn-primary', 'btn-lg');
    link3.setAttribute('role', 'button');
    link3.setAttribute('data-tooltip', '$300.000');
    link3.setAttribute('target', '_blank');
    link3.setAttribute('data-tooltip-location', 'right');
    pago3.appendChild(link3);
    r3.appendChild(modalidad3);
    r3.appendChild(pago3);

    const r4 = document.createElement('tr');
    const modalidad4 = document.createElement('td');
    modalidad4.innerHTML = '<b>Pago Anual</b> -  EDS con ventas mensuales inferiores a 10.000 Galones';
    const pago4 = document.createElement('td');
    const link4 = document.createElement('a');
    link4.textContent = 'Pagar'
    link4.href = 'https://biz.payulatam.com/L0ca711C5DE161F';
    link4.classList.add('btn','btn-primary', 'btn-lg');
    link4.setAttribute('role', 'button');
    link4.setAttribute('data-tooltip', '$600.000');
    link4.setAttribute('target', '_blank');
    link4.setAttribute('data-tooltip-location', 'right');
    pago4.appendChild(link4);
    r4.appendChild(modalidad4);
    r4.appendChild(pago4);

    const r5 = document.createElement('tr');
    const modalidad5 = document.createElement('td');
    modalidad5.innerHTML = '<b>Pago Mensual</b> -  EDS con ventas mensuales superiores a 10.000 Galones';
    const pago5 = document.createElement('td');
    const link5 = document.createElement('a');
    link5.textContent = 'Pagar'
    link5.href = 'https://biz.payulatam.com/L0ca7116A5186B9';
    link5.classList.add('btn','btn-primary', 'btn-lg');
    link5.setAttribute('role', 'button');
    link5.setAttribute('data-tooltip', '$100.000');
    link5.setAttribute('target', '_blank');
    link5.setAttribute('data-tooltip-location', 'right');
    pago5.appendChild(link5);
    r5.appendChild(modalidad5);
    r5.appendChild(pago5);

    const r6 = document.createElement('tr');
    const modalidad6 = document.createElement('td');
    modalidad6.innerHTML = '<b>Pago Mensual</b> -  Descuento por Grupos 15% (2EDS) ';
    const pago6 = document.createElement('td');
    const link6 = document.createElement('a');
    link6.textContent = 'Pagar'
    link6.href = 'https://biz.payulatam.com/L0ca7119F64C186';
    link6.classList.add('btn','btn-primary', 'btn-lg');
    link6.setAttribute('role', 'button');
    link6.setAttribute('data-tooltip', '$170.000');
    link6.setAttribute('target', '_blank');
    link6.setAttribute('data-tooltip-location', 'right');
    pago6.appendChild(link6);
    r6.appendChild(modalidad6);
    r6.appendChild(pago6);

    const r7 = document.createElement('tr');
    const modalidad7 = document.createElement('td');
    modalidad7.innerHTML = '<b>Pago Mensual</b> -  Descuento por Grupos 15% (3EDS) ';
    const pago7 = document.createElement('td');
    const link7 = document.createElement('a');
    link7.textContent = 'Pagar'
    link7.href = 'https://biz.payulatam.com/L0ca7114D1300E5';
    link7.classList.add('btn','btn-primary', 'btn-lg');
    link7.setAttribute('role', 'button');
    link7.setAttribute('data-tooltip', '$255.000');
    link7.setAttribute('target', '_blank');
    link7.setAttribute('data-tooltip-location', 'right');
    pago7.appendChild(link7);
    r7.appendChild(modalidad7);
    r7.appendChild(pago7);

    const r8 = document.createElement('tr');
    const modalidad8 = document.createElement('td');
    modalidad8.innerHTML = '<b>Pago Semestral</b> - EDS con ventas mensuales superiores a 10.000 Galones ';
    const pago8 = document.createElement('td');
    const link8 = document.createElement('a');
    link8.textContent = 'Pagar'
    link8.href = 'https://biz.payulatam.com/L0ca7118A700626';
    link8.classList.add('btn','btn-primary', 'btn-lg');
    link8.setAttribute('role', 'button');
    link8.setAttribute('data-tooltip', '$500.000');
    link8.setAttribute('target', '_blank');
    link8.setAttribute('data-tooltip-location', 'right');
    pago8.appendChild(link8);
    r8.appendChild(modalidad8);
    r8.appendChild(pago8);

    tabla.appendChild(r1);
    tabla.appendChild(r2);
    tabla.appendChild(r3);
    tabla.appendChild(r4);
    tabla.appendChild(r5);
    tabla.appendChild(r6);
    tabla.appendChild(r7);
    tabla.appendChild(r8);

    resultadin.appendChild(titulo);
    resultadin.appendChild(subtitulo);
    resultadin.appendChild(tabla);

    
}

function menuB() {
  limpiarHTML();

    const titulo = document.createElement('h1');
    titulo.classList.add('text-center');
    titulo.textContent = 'Afiliaciones Bogotá';

    const subtitulo = document.createElement('h4');
    subtitulo.classList.add('text-center');
    subtitulo.textContent = 'Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Bogotá, Cundinamarca y Llanos Orientales';

    const tabla = document.createElement('table');
    tabla.classList.add('table', 'table-hover');
    const head = document.createElement('thead');

    const r1 = document.createElement('tr');
    const modalidad = document.createElement('th');
    modalidad.textContent = 'Modalidad';
    const pago = document.createElement('th');
    pago.textContent = ' ';
    r1.appendChild(modalidad);
    r1.appendChild(pago);

    const r2 = document.createElement('tr');
    const modalidad2 = document.createElement('td');
    modalidad2.innerHTML = '<b>Pago Mensual</b> -  EDS con ventas mensuales inferiores a 10.000 Galones';
    const pago2 = document.createElement('td');
    const link2 = document.createElement('a');
    link2.textContent = 'Pagar'
    link2.href = 'https://biz.payulatam.com/L0ca711681E09CC';
    link2.classList.add('btn','btn-primary', 'btn-lg');
    link2.setAttribute('role', 'button');
    link2.setAttribute('data-tooltip', '$50.000');
    link2.setAttribute('target', '_blank');
    link2.setAttribute('data-tooltip-location', 'right');
    pago2.appendChild(link2);
    r2.appendChild(modalidad2);
    r2.appendChild(pago2);
    
    const r3 = document.createElement('tr');
    const modalidad3 = document.createElement('td');
    modalidad3.innerHTML = '<b>Pago Semestral</b> -  EDS con ventas mensuales inferiores a 10.000 Galones';
    const pago3 = document.createElement('td');
    const link3 = document.createElement('a');
    link3.textContent = 'Pagar'
    link3.href = 'https://biz.payulatam.com/L0ca7117274F7CC';
    link3.classList.add('btn','btn-primary', 'btn-lg');
    link3.setAttribute('role', 'button');
    link3.setAttribute('data-tooltip', '$300.000');
    link3.setAttribute('target', '_blank');
    link3.setAttribute('data-tooltip-location', 'right');
    pago3.appendChild(link3);
    r3.appendChild(modalidad3);
    r3.appendChild(pago3);

    const r4 = document.createElement('tr');
    const modalidad4 = document.createElement('td');
    modalidad4.innerHTML = '<b>Pago Anual</b> -  EDS con ventas mensuales inferiores a 10.000 Galones';
    const pago4 = document.createElement('td');
    const link4 = document.createElement('a');
    link4.textContent = 'Pagar'
    link4.href = 'https://biz.payulatam.com/L0ca711A5F1E111';
    link4.classList.add('btn','btn-primary', 'btn-lg');
    link4.setAttribute('role', 'button');
    link4.setAttribute('data-tooltip', '$600.000');
    link4.setAttribute('target', '_blank');
    link4.setAttribute('data-tooltip-location', 'right');
    pago4.appendChild(link4);
    r4.appendChild(modalidad4);
    r4.appendChild(pago4);

    const r5 = document.createElement('tr');
    const modalidad5 = document.createElement('td');
    modalidad5.innerHTML = '<b>Pago Mensual</b> -  EDS con ventas mensuales superiores a 10.000 Galones';
    const pago5 = document.createElement('td');
    const link5 = document.createElement('a');
    link5.textContent = 'Pagar'
    link5.href = 'https://biz.payulatam.com/L0ca7116B549171';
    link5.classList.add('btn','btn-primary', 'btn-lg');
    link5.setAttribute('role', 'button');
    link5.setAttribute('data-tooltip', '$100.000');
    link5.setAttribute('target', '_blank');
    link5.setAttribute('data-tooltip-location', 'right');
    pago5.appendChild(link5);
    r5.appendChild(modalidad5);
    r5.appendChild(pago5);

    const r6 = document.createElement('tr');
    const modalidad6 = document.createElement('td');
    modalidad6.innerHTML = '<b>Pago Mensual</b> -  Descuento por Grupos 15% (2EDS) ';
    const pago6 = document.createElement('td');
    const link6 = document.createElement('a');
    link6.textContent = 'Pagar'
    link6.href = 'https://biz.payulatam.com/L0ca7118FF9AC63';
    link6.classList.add('btn','btn-primary', 'btn-lg');
    link6.setAttribute('role', 'button');
    link6.setAttribute('data-tooltip', '$170.000');
    link6.setAttribute('target', '_blank');
    link6.setAttribute('data-tooltip-location', 'right');
    pago6.appendChild(link6);
    r6.appendChild(modalidad6);
    r6.appendChild(pago6);

    const r7 = document.createElement('tr');
    const modalidad7 = document.createElement('td');
    modalidad7.innerHTML = '<b>Pago Mensual</b> -  Descuento por Grupos 15% (3EDS) ';
    const pago7 = document.createElement('td');
    const link7 = document.createElement('a');
    link7.textContent = 'Pagar'
    link7.href = 'https://biz.payulatam.com/L0ca711346210D1';
    link7.classList.add('btn','btn-primary', 'btn-lg');
    link7.setAttribute('role', 'button');
    link7.setAttribute('data-tooltip', '$255.000');
    link7.setAttribute('target', '_blank');
    link7.setAttribute('data-tooltip-location', 'right');
    pago7.appendChild(link7);
    r7.appendChild(modalidad7);
    r7.appendChild(pago7);

    const r8 = document.createElement('tr');
    const modalidad8 = document.createElement('td');
    modalidad8.innerHTML = '<b>Pago Semestral</b> - EDS con ventas mensuales superiores a 10.000 Galones ';
    const pago8 = document.createElement('td');
    const link8 = document.createElement('a');
    link8.textContent = 'Pagar'
    link8.href = 'https://biz.payulatam.com/L0ca711CC96735D';
    link8.classList.add('btn','btn-primary', 'btn-lg');
    link8.setAttribute('role', 'button');
    link8.setAttribute('data-tooltip', '$500.000');
    link8.setAttribute('target', '_blank');
    link8.setAttribute('data-tooltip-location', 'right');
    pago8.appendChild(link8);
    r8.appendChild(modalidad8);
    r8.appendChild(pago8);

    tabla.appendChild(r1);
    tabla.appendChild(r2);
    tabla.appendChild(r3);
    tabla.appendChild(r4);
    tabla.appendChild(r5);
    tabla.appendChild(r6);
    tabla.appendChild(r7);
    tabla.appendChild(r8);

    resultadin.appendChild(titulo);
    resultadin.appendChild(subtitulo);
    resultadin.appendChild(tabla);

}


function limpiarHTML() {
  while(resultadin.firstChild) {
      resultadin.removeChild(resultadin.firstChild);
  }
}
