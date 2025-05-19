
function isValid(s: string): boolean {
    const stringToList = s.split('')
    const valid:boolean = false
    for(let i = 0; i < stringToList.length; i++){
        if(stringToList[i] === '(' ){
            for(let x = 0; x < stringToList.length)
        }
        if(stringToList[i] === '[' && stringToList[i] === ']'){
            return !valid
        }

        if(stringToList[i] === '{' && stringToList[i] === '}'){
            return !valid
        }
    }

    return valid
    
};

console.log(isValid("(Robert)"))