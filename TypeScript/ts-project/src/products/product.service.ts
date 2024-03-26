import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (porductoObject: Product) => {
  products.push(porductoObject);
};

export const calcStock = (): number => {
  let total = 0;

  products.forEach((product) => {
    total += product?.stock || 0;
  });
  return total;
};
