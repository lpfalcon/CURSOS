(() => {
  let prices: number[] = [1, 2, 3, 4, 5, 6];
  prices.push(6);
  let productsMixed: (number | string | boolean | object)[] = [];
  productsMixed.push(true);
  productsMixed.push(12);
  productsMixed.push([1,2,3])
})();
