function maximumWealth(accounts: number[][]): number {
    let wealth: number = 0

    for(let i = 0; i < accounts.length; i++){
        let OneAcoount = accounts[i]
        let count: number = 0
        for(let i =0 ; i < OneAcoount.length; i++) {
            count = count + OneAcoount[i]
        }
        if(wealth < count){
            wealth = count
        }else{
            wealth = wealth
        }
    }
    return wealth
 
};

let accounts = [[1,2,3,2],[3,2,1,5]]

console.log(maximumWealth(accounts))