const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = expr.match(/.{1,10}/g);

  let dividedArr = arr.map((x) => {
    return x.match(/.{1,2}/g);
  });

  const code = {
    "00": "",
    10: ".",
    11: "-",
    "**": "*",
  };
  arr = dividedArr.map((x) => {
    let a = x
      .map((c) => {
        return code[c];
      })
      .join("");
    if (a.includes("*")) {
      a = " ";
    }
    return a;
  });

  let result = arr
    .map((x) => {
      if (x !== " ") return MORSE_TABLE[x];
      else return x;
    })
    .join("");

  return result;
}

module.exports = {
  decode,
};
