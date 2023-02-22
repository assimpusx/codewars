function validatePIN (pin) {
  return  (pin.length == 4 || pin.length == 6) && pin.split('').map(el => (/[0-9]/g).test(el)).reduce((a,b) => a && b) ? true : false;
}
