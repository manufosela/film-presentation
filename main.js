const texto = [
  'KAIROS DS',
  'presents',
  'Lead The Change',
  'the film',
  'Directed by',
  'Lucía Pablos',
  'Produced by',
  'Carlos Moure',
  'Interpreted by',
  'Carlos Matias in',
  'PaseitosMan',
  'Carlos Cañado in',
  'CalendarnMan',
  'La transformación digital se acerca...'
];

function efecto(objs, n) {
  let i = 0;
  const t1 = (n === 0) ? 0 : 4000;
  const t2 = (n === 0) ? 11000 : 15000;
  objs.forEach((el) => {
    setTimeout(function () {
      el.style = 'animation: apareceConHumo 5s linear forwards';
    }, t1);
    setTimeout(function () {
      el.style = 'animation: desapareceConHumo 5s linear forwards';
    }, ++i * 200 + 6000 + t1);
  });
  objs.forEach((el) => {
    setTimeout(function () {
      el.style = '';
    }, t2);
  });
}

function addEfecto(n, arrTxt) {
  const container = document.getElementById('letras' + n)
  for (const letra of arrTxt) {
    const li = document.createElement('li');
    li.innerHTML = (letra === ' ') ? '&nbsp;' : letra;
    container.appendChild(li);
  }
  const objs = document.querySelectorAll('#letras' + n + ' li');
  efecto(objs, n);
}


let contador = 0;

function turron() {
  let arrTxt0 = [...texto[contador]];
  let arrTxt1 = [...texto[contador + 1]];

  addEfecto(0, arrTxt0);
  addEfecto(1, arrTxt1);

  setTimeout(function () {
    contador += 2;
    document.getElementById('letras0').textContent = '';
    document.getElementById('letras1').textContent = '';
    if (contador < texto.length) {
      turron();
    }
  }, 15000);
}

turron();