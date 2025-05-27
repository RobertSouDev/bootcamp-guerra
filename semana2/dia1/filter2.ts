/* 
Desafio: Análise de Pedidos com Descontos Progressivos
Você gerenciará pedidos de uma loja com regras de desconto baseadas no valor total:

typescript
interface Order {
  id: number;
  customer: string;
  total: number;
  status: 'pending' | 'paid' | 'canceled'; // ← Tipo literal
}

const orders: Order[] = [
  { id: 1, customer: "Cliente A", total: 120, status: 'paid' },
  { id: 2, customer: "Cliente B", total: 300, status: 'pending' },
  { id: 3, customer: "Cliente C", total: 80, status: 'paid' },
  { id: 4, customer: "Cliente D", total: 500, status: 'canceled' },
  { id: 5, customer: "Cliente E", total: 150, status: 'paid' },
];
Tarefas (etapas encadeadas):
Filtrar apenas pedidos com status 'paid'.

Mapear os pedidos filtrados, aplicando descontos progressivos:

5% para totais abaixo de R$ 100.

10% para totais entre R$ 100 e R$ 200.

15% para totais acima de R$ 200.

Retornar um novo array com id, customer, e finalPrice (número arredondado).

Saída Esperada:
typescript
[
  { id: 1, customer: "Cliente A", finalPrice: 108 }, // 120 - 10%
  { id: 3, customer: "Cliente C", finalPrice: 76 },  // 80 - 5%
  { id: 5, customer: "Cliente E", finalPrice: 135 }  // 150 - 10%
]
*/

interface Order2 {
    id: number;
    customer: string;
    total: number;
    status: "pending" | "paid" | "canceled"; // ← Tipo literal
}

const orders2: Order2[] = [
    { id: 1, customer: "Cliente A", total: 120, status: "paid" },
    { id: 2, customer: "Cliente B", total: 300, status: "pending" },
    { id: 3, customer: "Cliente C", total: 80, status: "paid" },
    { id: 4, customer: "Cliente D", total: 500, status: "canceled" },
    { id: 5, customer: "Cliente E", total: 150, status: "paid" },
    { id: 6, customer: "Cliente F", total: 450, status: "paid" },
    { id: 7, customer: "Cliente G", total: 350, status: "paid" },
];

interface ProcessedOrder {
    id: number;
    customer: string;
    finalPrice: number; // Novo campo, não 'total'
}

const processedOrder: ProcessedOrder[] = orders2
    .filter((orders) => orders.status === "paid")
    .map((order) => {
        let discount: number;
        if (order.total < 100) {
            discount = 0.95;
        } else if (order.total <= 200) {
            discount = 0.9;
        } else {
            discount = 0.85;
        }

        return {
            id: order.id,
            customer: order.customer,
            finalPrice: Math.round(order.total * discount),
        };
    });

console.log(processedOrder);
