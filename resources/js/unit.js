/**
 * 获取 bit 值
 */
const getBit = (n) => {
  const bit = [];

  let i = 1;
  while (n >= i) {
    if (i & n) {
      bit.push(i);
    }
    
    i *= 2;
  }
  
  return bit;
}
