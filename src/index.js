const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};
function strLetter(str) {
  if (str === '**********') return ' ';
  let empt = /0+0/g;
  let point = /10/g;
  let dash = /11/g;
  var newstr = str.replace(empt, '');
  newstr = newstr.replace(point, '.');
  newstr = newstr.replace(dash, '-');
  for (let key in MORSE_TABLE) {
    if (key == newstr) {
      return MORSE_TABLE[key];
    }
  }
}

function decode(expr) {
  let letter = '';
  let length = expr.length / 10;
  let a = 0;
  for (let i = 0; i < length; i++) {
    letter += strLetter(expr.slice(a, a + 10));
    a += 10;
  }
  return letter;
}

module.exports = {
  decode,
};
