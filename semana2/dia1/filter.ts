/*
Desafio: Filtragem de Pedidos por Prioridade e Valor
Você tem uma lista de pedidos de um e-commerce:

typescript
interface Order {
  id: number;
  customer: string;
  total: number;
  priority: boolean; // true = pedido express (urgente)
}

const orders: Order[] = [
  { id: 1, customer: "João", total: 120, priority: true },
  { id: 2, customer: "Maria", total: 80, priority: false },
  { id: 3, customer: "Carlos", total: 200, priority: true },
  { id: 4, customer: "Ana", total: 50, priority: false },
  { id: 5, customer: "Lucas", total: 150, priority: true },
];
Tarefa:
Use filter() para criar um novo array contendo apenas pedidos prioritários (express) com valor acima de R$ 100.

Saída Esperada:
typescript
[
  { id: 1, customer: "João", total: 120, priority: true },
  { id: 3, customer: "Carlos", total: 200, priority: true },
  { id: 5, customer: "Lucas", total: 150, priority: true }
]
*/

interface Order {
    id: number;
    customer: string;
    total: number;
    priority: boolean; // true = pedido express (urgente)
}

const orders: Order[] = [
    { id: 1, customer: "João", total: 120, priority: true },
    { id: 2, customer: "Maria", total: 80, priority: false },
    { id: 3, customer: "Carlos", total: 200, priority: true },
    { id: 4, customer: "Ana", total: 50, priority: false },
    { id: 5, customer: "Lucas", total: 150, priority: true },
];

const result: Order[] = orders.filter(
    (product) => product.total > 100 && product.priority
);

console.log(result);
