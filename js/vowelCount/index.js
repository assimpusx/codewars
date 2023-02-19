function getCount(str) {
  return str.match(/[aeiou]/g) == null ? 0 : str.match(/[aeiou]/g).length;
}