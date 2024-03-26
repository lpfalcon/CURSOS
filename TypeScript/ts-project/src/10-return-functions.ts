(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;

    prices.forEach((number) => {
      total += number;
    });
    return total;
  };

  const printTotal = (prices: number[]): void => {
    const result = calcTotal(prices);
    console.log(result, 'total');
  };
  printTotal([1, 2, 3, 4, 5, 6]);
})();
