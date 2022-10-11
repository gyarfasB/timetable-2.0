function headlineStyler (){
    if (nap == 1){
        hétfő.style.background = "#bf9322"
    }
    if (nap == 2){
        kedd.style.background = "#037316"
    }
    if (nap == 3){
        szerda.style.background = "#991309"
    }
    if (nap == 4){
        csütörtök.style.background = "#e0990b"
    }
    if (nap == 5){
        péntek.style.background = "#318cbd"
    }
    if (nap == 6){
        szombat.style.background = "#0c7a7a"
    }
    if (nap == 7){
        vasárnap.style.background = "#bf9322"
    }
}
headlineStyler()

function updateEvent(){
    /* KEDD */
    while(nap == 2 && óra >= 11 && perc >= 30 && óra <= 14) {
        művtKórus.style.background = "#99e0a5"
        break;
    }
    while(nap == 2 && óra >= 15 && óra <= 16){
        kamara.style.background = "#99e0a5"
        break;
    }
    while(nap == 2 && óra >= 19 && óra <= 20){
        gitár1.style.background = "#99e0a5"
    }
    /* SZERDA */
    while(nap == 3 && óra >= 8 && perc >= 30 && óra <= 10) {
        zir.style.background = "#e0918b"
        break;
    }
    while(nap == 3 && óra >= 12 && óra <= 13 && perc <= 30){
        aco.style.background = "#e0918b"
        break;
    }
    while(nap == 3 && óra >=17 && óra <= 18) {
        gitár2.style.background = "#e0918b"
        break;
    }
    while(nap == 3 && óra >= 20 && óra <= 21){
        conti.style.background = "#e0918b"
        break;
    }
   /*  CSÜTÖRTÖK */
   while(nap == 4 && óra >= 13 && óra <= 14 && perc <= 30){
    szolf.style.background = "#f0d5a1"
    break;
   }
   while(nap == 4 && óra >= 16 && óra <= 18){
    gitZen.style.background = "#f0d5a1"
    break;
   }
   while(nap == 6 && óra >= 8 && óra <= 15){
    prog.style.background = "#c0f0f0"
    break;
   }
}
updateEvent()