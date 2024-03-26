import { addProduct, calcStock, products } from './product.service';

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

console.log(products)
const total = calcStock()
console.log(total);
