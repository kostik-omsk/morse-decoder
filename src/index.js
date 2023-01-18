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
  let strMorse = str
    .replace(/0+0/g, '')
    .replace(/10/g, '.')
    .replace(/11/g, '-');
  return MORSE_TABLE[strMorse] || ' ';
}

function decode(expr) {
  let letter = '';
  let a = 0;
  for (let i = 0; i < expr.length / 10; i++) {
    letter += strLetter(expr.slice(a, a + 10));
    a += 10;
  }
  return letter;
}

module.exports = {
  decode,
};
