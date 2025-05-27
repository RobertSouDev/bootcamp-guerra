const carrinho: number[] = [10, 20, 30];

const resultado: number = carrinho.reduce((acc, curr) => acc + curr, 0);

const numeros: number[] = [1, 2, 3, 4, 5];

const pares: number[] = numeros.reduce((acc: number[], num) => {
    if (num % 2 === 0) {
        acc.push(num);
    }
    return acc;
}, []);

interface Item {
    nome: string;
    preco: number;
    quantidade: number;
}

const carrinhoR: Item[] = [
    { nome: "Notebook", preco: 2500, quantidade: 1 },
    { nome: "Mouse", preco: 50, quantidade: 2 },
    { nome: "Teclado", preco: 150, quantidade: 1 },
];

const totalCarinhoR: number = carrinhoR.reduce((somaTotal: number, item) => {
    return somaTotal + item.preco * item.quantidade;
}, 0);

console.log(
    Math.round(totalCarinhoR > 2500 ? totalCarinhoR * 0.9 : totalCarinhoR)
);
