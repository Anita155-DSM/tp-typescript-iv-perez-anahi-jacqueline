
export const productName: string = "cafetera";
export const productPrice: number = 200;

export let productId: string | number = "abc";
console.log("product id ahora es:", productId);

productId = 123;
console.log("product id ahora es:", productId);

export interface Product {
  name: string;
  price: number;
}

export const myProduct: Product = {
  name: productName,
  price: productPrice
};

console.log("mi producto es:", myProduct);
