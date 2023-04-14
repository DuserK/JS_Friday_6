console.clear();
/* Mokinys pradėjo spręsti namų darbus, kai elektroninis laikrodis rodė h1 valandų ir min1 minučių, o baigė, kai buvo h2 valandų ir min2 minučių. Parašykite programą, pagal kurią būtų randama, kiek laiko (valandų ir minučių) mokinys sprendė uždavinius. (Laikykite, kad mokinys uždavinius sprendė mažiau kaip parą). */

function laikas(h1, min1, h2, min2) {
    t1 = (h1 * 60 + min1);
    t2 = (h2 * 60 + min2);
    if (t2 > t1){
        t = t2 - t1;
    } else {
        t = t2 - t1 + 24 * 60;
    }
    return "Mokinys mokėsi " + Math.floor(t/60)+"val. " + (t % 60) + "min.";
}

console.log(laikas(10,10,9,5));