

function factorialOfNumber(inputNumber) {
    
    let factorialNum = 1;
                                       
    for (let i = inputNumber ; i > 0; i--) {
        
        factorialNum = factorialNum*i
        
    }
    return factorialNum
}


console.log(factorialOfNumber(0))

// Big-O Guide
//calculation not dependent on input size-O(1)
//1) loop-O(n)
//2) nested loops - O(n^2)
//input size reduces by half - O(logn)