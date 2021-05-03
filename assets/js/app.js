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

    console.log(tabla);

/*     const separA = document.createElement('hr');
    const separB = document.createElement('hr');
    const separC = document.createElement('hr');
    const separD = document.createElement('hr');
    const separE = document.createElement('hr');
    const divcursos = document.createElement('div');
    divcursos.classList.add=('text-center');
    const titulo = document.createElement('h1');
    titulo.classList.add('text-center');
    titulo.textContent = 'Cursos Virtuales';

    const ayscA = document.createElement('h3');
    ayscA.textContent = 'Atencion y Servicio al Cliente Afiliado';
    const link1 = document.createElement('a');
    link1.textContent = 'Pagar'
    link1.href = 'https://biz.payulatam.com/L0ca71194AA168A';
    link1.classList.add('btn','btn-success', 'btn-lg');
    link1.setAttribute('role', 'button');
    link1.setAttribute('data-tooltip', '$70.000');
    link1.setAttribute('data-tooltip-location', 'right');
    ayscA.appendChild(link1);

    const ayscN = document.createElement('h3');
    ayscN.textContent = 'Atencion y Servicio al Cliente NO Afiliado';
    const link2 = document.createElement('a');
    link2.textContent = 'Pagar'
    link2.href = 'href="https://biz.payulatam.com/L0ca7117CADA8E8';
    link2.classList.add('btn','btn-success', 'btn-lg');
    link2.setAttribute('role', 'button');
    link2.setAttribute('data-tooltip', '$100.000');
    link2.setAttribute('data-tooltip-location', 'right');
    ayscN.appendChild(link2);

    const reglamA = document.createElement('h3');
    reglamA.textContent = 'Reglamento Tecnico para EDS Afiliado';
    const link3 = document.createElement('a');
    link3.textContent = 'Pagar'
    link3.href = 'href="https://biz.payulatam.com/L0ca71109BCDDED';
    link3.classList.add('btn','btn-success', 'btn-lg');
    link3.setAttribute('role', 'button');
    link3.setAttribute('data-tooltip', '$30.000');
    link3.setAttribute('data-tooltip-location', 'right');
    reglamA.appendChild(link3);
    
    const reglamN = document.createElement('h3');
    reglamN.textContent = 'Reglamento Tecnico para EDS NO Afiliado';
    const link4 = document.createElement('a');
    link4.textContent = 'Pagar'
    link4.href = 'href="https://biz.payulatam.com/L0ca711D2314C40';
    link4.classList.add('btn','btn-success', 'btn-lg');
    link4.setAttribute('role', 'button');
    link4.setAttribute('data-tooltip', '$70.000');
    link4.setAttribute('data-tooltip-location', 'right');
    reglamN.appendChild(link4);

    const dcseA = document.createElement('h3');
    dcseA.textContent = 'Detección de Condiciones Subestándares en EDS Afiliado';
    const link5 = document.createElement('a');
    link5.textContent = 'Pagar'
    link5.href = 'href="https://biz.payulatam.com/L0ca711D2314C40';
    link5.classList.add('btn','btn-success', 'btn-lg');
    link5.setAttribute('role', 'button');
    link5.setAttribute('data-tooltip', '$70.000');
    link5.setAttribute('data-tooltip-location', 'right');
    dcseA.appendChild(link5);

    const dcseN = document.createElement('h3');
    dcseN.textContent = 'Detección de Condiciones Subestándares en EDS NO Afiliado';
    const link6 = document.createElement('a');
    link6.textContent = 'Pagar'
    link6.href = 'href="https://biz.payulatam.com/L0ca71165D3D429';
    link6.classList.add('btn','btn-success', 'btn-lg');
    link6.setAttribute('role', 'button');
    link6.setAttribute('data-tooltip', '$70.000');
    link6.setAttribute('data-tooltip-location', 'right');
    dcseN.appendChild(link6);

    console.log(separA);
  divcursos.appendChild(titulo);
  divcursos.appendChild(ayscA);
  divcursos.appendChild(separA);
  divcursos.appendChild(ayscN);
  divcursos.appendChild(separB);
  divcursos.appendChild(reglamA);
  divcursos.appendChild(separC);
  divcursos.appendChild(reglamN);
  divcursos.appendChild(separD);
  divcursos.appendChild(dcseA);
  divcursos.appendChild(separE);
  divcursos.appendChild(dcseN);
  console.log(divcursos)
  resultadin.appendChild(divcursos); */

}

function menuA() {
    console.log('menu cursos')
    limpiarHTML();
    const titulo = document.createElement('h1');
    titulo.classList.add('text-center');
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
    link1.classList.add('font-weight-bold');
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
    link2.classList.add('font-weight-bold');
    link2.textContent = 'Pagar';
    link2.href = 'https://biz.payulatam.com/L0ca7113AEFA653';
    pagar2.appendChild(link2);
    r3.appendChild(modalidad2);
    r3.appendChild(valor2);
    r3.appendChild(pagar2);

    const r4 = document.createElement('tr');
    const modalidad3 = document.createElement('td');
    modalidad3.textContent = 'Pago Anual - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Antioquia y Choco, EDS con ventas mensuales inferiores a 10.000 Galones';
    const valor3 = document.createElement('td');
    valor3.textContent = '$600.000';
    const pagar3 = document.createElement('td');
    const link3 = document.createElement('a');
    link3.classList.add('font-weight-bold');
    link3.textContent = 'Pagar';
    link3.href = 'https://biz.payulatam.com/L0ca711C5DE161F';
    pagar3.appendChild(link3);
    r4.appendChild(modalidad3);
    r4.appendChild(valor3);
    r4.appendChild(pagar3);

    const r5 = document.createElement('tr');
    const modalidad4 = document.createElement('td');
    modalidad4.textContent = 'Pago Mensual - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Antioquia y Choco.';
    const valor4 = document.createElement('td');
    valor4.textContent = '$100.000';
    const pagar4 = document.createElement('td');
    const link4 = document.createElement('a');
    link4.classList.add('font-weight-bold');
    link4.textContent = 'Pagar';
    link4.href = 'https://biz.payulatam.com/L0ca7116A5186B9';
    pagar4.appendChild(link4);
    r5.appendChild(modalidad4);
    r5.appendChild(valor4);
    r5.appendChild(pagar4);

    const r6 = document.createElement('tr');
    const modalidad5 = document.createElement('td');
    modalidad5.textContent = 'Pago Mensual Descuento por Grupos 15% (2EDS) - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Antioquia y Choco.';
    const valor5 = document.createElement('td');
    valor5.textContent = '$170.000';
    const pagar5 = document.createElement('td');
    const link5 = document.createElement('a');
    link5.classList.add('font-weight-bold');
    link5.textContent = 'Pagar';
    link5.href = 'https://biz.payulatam.com/L0ca7119F64C186';
    pagar5.appendChild(link5);
    r6.appendChild(modalidad5);
    r6.appendChild(valor5);
    r6.appendChild(pagar5);

    const r7 = document.createElement('tr');
    const modalidad6 = document.createElement('td');
    modalidad6.textContent = 'Pago Mensual Descuento por Grupos 15% (3EDS) - Cuota de Sostenimiento Fendipetroleo Dependencia Antioquia y Choco.';
    const valor6 = document.createElement('td');
    valor6.textContent = '$255.000';
    const pagar6 = document.createElement('td');
    const link6 = document.createElement('a');
    link6.classList.add('font-weight-bold');
    link6.textContent = 'Pagar';
    link6.href = 'https://biz.payulatam.com/L0ca7114D1300E5';
    pagar6.appendChild(link6);
    r7.appendChild(modalidad6);
    r7.appendChild(valor6);
    r7.appendChild(pagar6);

    const r8 = document.createElement('tr');
    const modalidad7 = document.createElement('td');
    modalidad7.textContent = 'Pago Semestral - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Antioquia y Choco.';
    const valor7 = document.createElement('td');
    valor7.textContent = '$500.000';
    const pagar7 = document.createElement('td');
    const link7 = document.createElement('a');
    link7.classList.add('font-weight-bold');
    link7.textContent = 'Pagar';
    link7.href = 'https://biz.payulatam.com/L0ca7118A700626';
    pagar7.appendChild(link7);
    r8.appendChild(modalidad7);
    r8.appendChild(valor7);
    r8.appendChild(pagar7);   

    head.appendChild(r1);
    body.appendChild(r2);
    body.appendChild(r3);
    body.appendChild(r4);
    body.appendChild(r5);
    body.appendChild(r6);
    body.appendChild(r7);
    body.appendChild(r8);
    tabla.appendChild(head);
    tabla.appendChild(body);
    resultadin.classList.remove('custom-centered')
    resultadin.appendChild(titulo);
    resultadin.appendChild(tabla);
    

    console.log(resultadin);

}



function menuB() {
  console.log('menu cursos')
  limpiarHTML();
  const titulo = document.createElement('h1');
  titulo.classList.add('text-center');
  titulo.textContent = 'Afiliaciones Bogotá';

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
  modalidad1.textContent = 'Pago Mensual - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Bogota, Cundinamarca y Llanos Orientales, EDS con ventas mensuales inferiores a 10.000 Galones';
  const valor1 = document.createElement('td');
  valor1.textContent = '$50.000';
  const pagar1 = document.createElement('td');
  const link1 = document.createElement('a');
  link1.classList.add('font-weight-bold');
  link1.textContent = 'Pagar';
  link1.href = 'https://biz.payulatam.com/L0ca711681E09CC';
  pagar1.appendChild(link1);
  r2.appendChild(modalidad1);
  r2.appendChild(valor1);
  r2.appendChild(pagar1);
  
  const r3 = document.createElement('tr');
  const modalidad2 = document.createElement('td');
  modalidad2.textContent = 'Pago Semestral - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Bogota, Cundinamarca y Llanos Orientales, EDS con ventas mensuales inferiores a 10.000 Galones';
  const valor2 = document.createElement('td');
  valor2.textContent = '$300.000';
  const pagar2 = document.createElement('td');
  const link2 = document.createElement('a');
  link2.classList.add('font-weight-bold');
  link2.textContent = 'Pagar';
  link2.href = 'https://biz.payulatam.com/L0ca7117274F7CC';
  pagar2.appendChild(link2);
  r3.appendChild(modalidad2);
  r3.appendChild(valor2);
  r3.appendChild(pagar2);

  const r4 = document.createElement('tr');
  const modalidad3 = document.createElement('td');
  modalidad3.textContent = 'Pago Anual - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Bogota, Cundinamarca y Llanos Orientales, EDS con ventas mensuales inferiores a 10.000 Galones';
  const valor3 = document.createElement('td');
  valor3.textContent = '$600.000';
  const pagar3 = document.createElement('td');
  const link3 = document.createElement('a');
  link3.classList.add('font-weight-bold');
  link3.textContent = 'Pagar';
  link3.href = 'https://biz.payulatam.com/L0ca711A5F1E111';
  pagar3.appendChild(link3);
  r4.appendChild(modalidad3);
  r4.appendChild(valor3);
  r4.appendChild(pagar3);

  const r5 = document.createElement('tr');
  const modalidad4 = document.createElement('td');
  modalidad4.textContent = 'Pago Mensual - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Bogota, Cundinamarca y Llanos Orientales.';
  const valor4 = document.createElement('td');
  valor4.textContent = '$100.000';
  const pagar4 = document.createElement('td');
  const link4 = document.createElement('a');
  link4.classList.add('font-weight-bold');
  link4.textContent = 'Pagar';
  link4.href = 'https://biz.payulatam.com/L0ca7116B549171';
  pagar4.appendChild(link4);
  r5.appendChild(modalidad4);
  r5.appendChild(valor4);
  r5.appendChild(pagar4);

  const r6 = document.createElement('tr');
  const modalidad5 = document.createElement('td');
  modalidad5.textContent = 'Pago Mensual Descuento por Grupos 15% (2EDS) - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Bogota, Cundinamarca y Llanos Orientales.';
  const valor5 = document.createElement('td');
  valor5.textContent = '$170.000';
  const pagar5 = document.createElement('td');
  const link5 = document.createElement('a');
  link5.classList.add('font-weight-bold');
  link5.textContent = 'Pagar';
  link5.href = 'https://biz.payulatam.com/L0ca7118FF9AC63';
  pagar5.appendChild(link5);
  r6.appendChild(modalidad5);
  r6.appendChild(valor5);
  r6.appendChild(pagar5);

  const r7 = document.createElement('tr');
  const modalidad6 = document.createElement('td');
  modalidad6.textContent = 'Pago Mensual Descuento por Grupos 15% (3EDS) - Cuota de Sostenimiento Fendipetroleo Dependencia Bogota, Cundinamarca y Llanos Orientales.';
  const valor6 = document.createElement('td');
  valor6.textContent = '$255.000';
  const pagar6 = document.createElement('td');
  const link6 = document.createElement('a');
  link6.classList.add('font-weight-bold');
  link6.textContent = 'Pagar';
  link6.href = 'https://biz.payulatam.com/L0ca711346210D1';
  pagar6.appendChild(link6);
  r7.appendChild(modalidad6);
  r7.appendChild(valor6);
  r7.appendChild(pagar6);

  const r8 = document.createElement('tr');
  const modalidad7 = document.createElement('td');
  modalidad7.textContent = 'Pago Semestral - Tarifa año 2021 Cuota de Sostenimiento Fendipetroleo Dependencia Bogota, Cundinamarca y Llanos Orientales.';
  const valor7 = document.createElement('td');
  valor7.textContent = '$500.000';
  const pagar7 = document.createElement('td');
  const link7 = document.createElement('a');
  link7.classList.add('font-weight-bold');
  link7.textContent = 'Pagar';
  link7.href = 'https://biz.payulatam.com/L0ca711CC96735D';
  pagar7.appendChild(link7);
  r8.appendChild(modalidad7);
  r8.appendChild(valor7);
  r8.appendChild(pagar7);   

  head.appendChild(r1);
  body.appendChild(r2);
  body.appendChild(r3);
  body.appendChild(r4);
  body.appendChild(r5);
  body.appendChild(r6);
  body.appendChild(r7);
  body.appendChild(r8);
  tabla.appendChild(head);
  tabla.appendChild(body);
  resultadin.classList.remove('custom-centered')
  resultadin.appendChild(titulo);
  resultadin.appendChild(tabla);
  

  console.log(resultadin);

}


function limpiarHTML() {
  while(resultadin.firstChild) {
      resultadin.removeChild(resultadin.firstChild);
  }
}
