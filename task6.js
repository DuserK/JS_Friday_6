/*Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, Masyvo elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. Rasti geriausiai besimokantį ir blogiausiai.*/

console.clear();

/*
random reiksmiu masyvas su 30 elementu, kuriu reiksmes 1-10;
rasti min reiksme
rasti max reiksme */
//console.log(Math.random().toFixed(2));
/* bandymai
console.log((Math.floor(Math.random() * (10-1) +1) + 1))
console.log((Math.floor(Math.random() * 10))/10);
console.log((Math.floor(Math.random() * (10-2) +1) + 2) -(Math.floor(Math.random() * 10))/10)
console.log((Math.floor(Math.random() * (100-20) +1) + 20)/10)
console.log('-------');
*/
function vidurkiai() {
    //vidurkiu blokas
    let marks =[];
    
    //sukuriamos ir irasomos reiksmes 30 kartu
    for (let i = 1; i <= 30; i++){
        let p = (Math.floor(Math.random() * (100-20) +1) + 20)/10;
        marks.push(p);
    } 
    //tarpines reiksmes
    console.log('vidurkai', marks);
    //console.log('vidurkai', marks.length);
    
    // istraukiamos max ir min reiksmes
    return `Aukščiausias vidurkis yra: ${Math.max(...marks)}\r\nŽemiausias vidurkis yra: ${Math.min(...marks)}`
    
}

console.log(vidurkiai());
// let x = Math.floor((Math.random() * 10) + 1);
// console.log(x);
