decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
    return morseCode.split(' ').map(el => MORSE_CODE[el]).join('');
}
