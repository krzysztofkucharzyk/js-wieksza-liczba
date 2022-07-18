let num1 = 2;
let num2 = 5;

function hi_low (n1, n2) {
    
    let wieksza;
    if (n1 > n2) {
        wieksza = n1;       
    } else {
        wieksza = n2;
    }

    return wieksza;
}

console.log(hi_low(num1,num2));