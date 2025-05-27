/*
Desafio: Transformar Array de Produtos com Descontos
Você tem um array de produtos:
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Notebook", price: 2500, inStock: true },
  { id: 2, name: "Mouse", price: 50, inStock: false },
  { id: 3, name: "Teclado", price: 150, inStock: true },
  { id: 4, name: "Monitor", price: 1200, inStock: true },
];

Sua tarefa:
Usar map() para criar um novo array onde:

Produtos em estoque (inStock: true) recebam 10% de desconto (atualizar price).

Produtos sem estoque (inStock: false) devem ter seu nome alterado para "INDISPONÍVEL: " + nome.

Preservar todas as outras propriedades.

Saída Esperada:
typescript
[
  { id: 1, name: "Notebook", price: 2250, inStock: true },    // 2500 - 10%
  { id: 2, name: "INDISPONÍVEL: Mouse", price: 50, inStock: false },
  { id: 3, name: "Teclado", price: 135, inStock: true },      // 150 - 10%
  { id: 4, name: "Monitor", price: 1080, inStock: true },     // 1200 - 10%
]

*/
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
    { id: 1, name: "Notebook", price: 2500, inStock: true },
    { id: 2, name: "Mouse", price: 50, inStock: false },
    { id: 3, name: "Teclado", price: 150, inStock: true },
    { id: 4, name: "Monitor", price: 1200, inStock: true },
];

const productsPromo = products.map((product): Product => {
    if (!product.inStock) {
        return {
            ...product,
            name: `INDIPONIVEL: ${product.name}`,
        };
    }
    return { ...product, price: product.price * 0.9 };
});

console.log(productsPromo);
