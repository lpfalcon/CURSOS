(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const functionTypeScriot = (
    title: string,
    createdAt: Date,
    stock?: number,
    size?: Sizes
  ) => ({ title, createdAt, stock, size });

  const product = functionTypeScriot('Product', new Date());
  console.log(product);
})();
