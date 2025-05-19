function isValid(s: string): boolean {
   const stack: String[] = []
   const pairs: {[key: string]: string} ={
    ')': '(',
    '}': '{',
    ']': '['
   }

   for (const char of s) {
    if(char === '(' || char === '{' || char === '[') {
        stack.push(char) 
        console.log(stack)

    }else if (char === ')' || char === '}' || char === ']'){
        if (stack.pop() !== pairs[char]) {
            console.log(stack)

            return false
        }
    }
   }
  

   return stack.length === 0 


}
console.log(isValid(""))
console.log(isValid("()"))           
console.log(isValid("()[]{}"))       
console.log(isValid("(]"))           
console.log(isValid("([)]"))         
console.log(isValid("{[]}"))         
