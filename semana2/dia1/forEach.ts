const usuarios = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 },
    { nome: "Carol", idade: 28 },
];

let somaDaIdade: number = 0;
usuarios.forEach((user) => {
    somaDaIdade = somaDaIdade + user.idade;
});

console.log(`Média de idade: ${somaDaIdade / usuarios.length} `);

let maisVelha: number = usuarios.reduce((acc, user) => {
    if (user.idade > acc) {
        acc = user.idade;
    }

    return acc;
}, 0);

console.log(maisVelha);
