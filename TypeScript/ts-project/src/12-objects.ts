(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock?: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (porductoObject: Product) => {
    products.push(porductoObject);
  };

  addProduct({
    title: 'Product',
    createdAt: new Date(1993, 9, 9),
    stock: 14,
  });

  addProduct({
    title: 'Product 2',
    createdAt: new Date(1995, 9, 9),
    stock: 10,
    size:'S'
  });
  console.log(products);
})();
