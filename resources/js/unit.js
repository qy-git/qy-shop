/**
 * 获取 bit 值
 */
const getFlags = (n) => {
  const bit = [];

  let i = 1;
  while (n >= i) {
    if (n & i) {
      bit.push(i);
    }
    
    i *= 2;
  }
  
  return bit;
}

const hasFlags = (a, b) => {
  const and = (a & b); 
  return and === a || and === b
}
