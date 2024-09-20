const button = document.querySelector('input[type="button"]');
button.addEventListener('click',checkCode)
button.addEventListener('click', contentvisible);


function contentvisible(){
  const contetPrincial = document.getElementById('content-principal')
  contetPrincial.style.display = 'none'
}

function checkCode() {
  const inputCode = document.querySelector('#input-codigo').value.trim();
  const articles = document.querySelectorAll('article');

  const codes = {
    '9 de julio': 'codigo-uno', // nuestro primer beso
    'En el parque': 'codigo-dos', //donde fue nuestro primer beso
    '2020': 'codigo-tres', // año que nos conosimos
    '20 de septiembre': 'codigo-cuatro' // aniversario
  };

  if (codes.hasOwnProperty(inputCode)) {
    const articleId = codes[inputCode];
    const article = document.getElementById(articleId);
    article.style.display = 'block';
  } else {
    alert('Invalid code');
  }
}
