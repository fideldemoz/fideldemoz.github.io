const botao = document.getElementsByName('button');
const html = document.getElementsByClassName('page');
console.log(` Hey ${botao} and ${html}`);

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

function thada() {
  bgColor = 'white';
  textColor = 'black';
  update(bgColor, textColor);
  }
  
botao.addEventListener('click', thada);
