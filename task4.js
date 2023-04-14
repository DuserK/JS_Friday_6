/* Parašykite programą, kuri suskaičiuotų , kiek duotas skaičius numturi lyginių ir nelyginių skaitmenų.
@param {number} num     @example: 63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’ */
console.clear();

function evennumbers(num) {
    const numS = Math.abs(num).toString();
    console.log(numS);
    let sumE = 0;
    let sumUN = 0;
    for(let i = 0; i < numS.length; i++) {
        if (numS[i] % 2 ===0) {
            sumE += 1;
        } else {
            sumUN += 1;
        }
    }
    return `Skaičiuje ${num} yra ${sumE} skaičiai lyginiai, ${sumUN} nelyginiai skaitmenys.`
}
//naudojant ternary
function evennumbers2(num) {
    const numS =  Math.abs(num).toString();
    let sumE = 0;
    let sumUN = 0;
    for(let i = 0; i < numS.length; i++) {
        (numS[i] % 2 ===0) ? sumE += 1 : sumUN += 1;
    }
    return `Skaičiuje ${num} yra ${sumE} skaičiai lyginiai, ${sumUN} nelyginiai skaitmenys.`
}
//naudojant return
function evennumbers3(num) {
    const numS =  Math.abs(num).toString();
    let sumE = 0;
    let sumUN = 0;
    for(let i = 0; i < numS.length; i++) {
        (numS[i] % 2 ===0) ? sumE++ : sumUN++;
    }
    return `Skaičiuje ${num} yra ${sumE} skaičiai lyginiai, ${sumUN} nelyginiai skaitmenys.`
}

console.log(evennumbers(-222221111));
console.log(evennumbers2(222221111));
console.log(evennumbers3(222221111));

//persidaryti su reduce