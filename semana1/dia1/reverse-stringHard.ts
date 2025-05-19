function isPalindrome22(x: number): boolean {
    let inverted: number = 0
    const y = x
    while( x > 0) {
      const lastNumber = x % 10
      inverted = (inverted * 10 ) + lastNumber
      x = ~~( x/ 10)
    }
  
    return y == inverted
  
  };

  console.log(isPalindrome22(121))