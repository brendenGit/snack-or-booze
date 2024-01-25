function unroll(squareArray) {
    let result = [];
  
    while (squareArray.length) {
      let first = squareArray.shift();
      result = [...result, ...first];
  
      if (squareArray.length && squareArray[0].length) {
        let right = squareArray.map((array) => array.pop());
        result = [...result, ...right];
      }
  
      if (squareArray.length) {
        let bottom = squareArray.pop().reverse();
        result = [...result, ...bottom];
      }
  
      if (squareArray.length && squareArray[0].length) {
        let left = squareArray.map((array) => array.shift()).reverse();
        result = [...result, ...left];
      }
    }
  
    return result;
  }
  
  module.exports = unroll;
  