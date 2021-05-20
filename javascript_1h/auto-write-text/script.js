const text = 'My Youtube on JavaScript perfect';

let index = 0;

function writeText() {
  document.body.innerText = text.slice(0, index);
  index += 1;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 200);