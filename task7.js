/*Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. Duotą pinigų sumą n litais pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų. Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. Viso monetų N skaičius“. */

console.clear();

function monetos(litai) {
    let lt5 = Math.floor(litai/5);
    console.log(lt5);
    let lt2 = Math.floor((litai - lt5 * 5)/2);
    console.log(lt2);
    let lt1 = Math.floor(litai - (lt5 * 5) - (lt2 * 2));
    console.log(lt1);
    return `Norint gauti ${litai}lt sumą litais, mums reikės ${lt5} monetų po 5 lt, ${lt2} monetų po 2 litus ir ${lt1} monetų po 1 litą. Viso monetų N skaičius.`
}

console.log(monetos(1));