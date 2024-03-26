(() => {
  const login = (loginObject: { email: string; password: string }) => {
    const { email, password } = loginObject;
    console.log(email, password);
  };

  login({
    email: 'lpfalcon9@falcon.com',
    password: '1234',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];
  const addProduct = (porductoObject: {
    title: string;
    createdAt: Date;
    stock?: number;
    size?: Sizes;
  }) => {
    products.push(porductoObject);
  };

  addProduct({
    title: 'Product',
    createdAt: new Date(1993, 9, 9),
    stock: 14,
  });

  console.log(products);
})();
