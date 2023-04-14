console.clear();

/* Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100 iki 999. Armstongo skaičiaus pvz ABC = A3+ B3+ C3(visų atskirų skaitmenų pakeltų skaičiaus skaitmenų kiekio laipsniu suma.) */

function armstrong() {
    console.log('Armstrongo skaičiai:');
    let numA = '';
    for (let number = 100; number <= 999; number++){
        let num = number.toString();
        if (number === num[0]**3 + num[1]**3 + num[2]**3){
            numA += (`${number} = ${num[0]+'^3'} + ${num[1]+'^3'} + ${num[2]+'^3'}\n\r`);
        }
    }
    return numA
}
console.log(armstrong());

//persidaryti su reduce