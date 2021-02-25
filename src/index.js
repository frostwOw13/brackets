module.exports = function check(str, bracketsConfig) {
  let end = false;
  while (str.length != 0 && !end) {
      end = true;
      for (const e of bracketsConfig) {
          let pair = e.join('');
          if (str.includes(pair)) {
              str = str.replace(pair, '');
              end = false;
          }
      }
  } 
  return str.length == 0; 
}
