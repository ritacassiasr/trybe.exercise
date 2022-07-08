// Vamos a mais um exemplo para fixação, desta vez você irá implementar uma função
// que espera um tempo e retorna a soma de dois números:

const asyncSum = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500);
  };
  
  
  
  // export default asyncSum;