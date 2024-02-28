/**
 * 获取 bit 值
 */
const getBit = (n) => {
  let i = 1;
  const bit = [];
  
  while (n) {
    const xor = (i ^ n);
    if (xor <= n) {
      bit.push(i);
      n = xor;
    }
    
    i *= 2;
  }
  
  return bit;
}
