function fiboEvenSum(n){
    let sum = 0;
    let a = 1;
    let b = 2;

    while (b <= n){
        if (b % 2 === 0){
            sum +=b
        }
        let c = a + b;
        a = b
        b = c
    }
    return sum
}

console.log(fiboEvenSum(10))