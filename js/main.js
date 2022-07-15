let num1 = 2;
let num2 = 5;

function hi_low (num1, num2) {
    
    let wieksza;
    if (num1 > num2) {
        wieksza = num1;       
    } else {
        wieksza = num2;
    }

    return wieksza;
}

console.log(hi_low(num1,num2));