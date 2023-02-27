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
    while(nap == 2 && óra >= 9 && óra <= 10) {
        muvtori.style.background = "#99e0a5"
        break;
    }
    while(nap == 2 && óra >= 12 && óra <= 13){
        korus.style.background = "#99e0a5"
        break;
    }
    while(nap == 2 && óra >= 16 && óra <= 17){
        gitar.style.background = "#99e0a5"
    }
    while(nap == 2 && óra >= 20 && óra <= 21) {
        continuo.style.background = "#99e0a5"
    }
    /* SZERDA */
    while(nap == 3 && óra >= 8 && óra <= 9) {
        mzt.style.background = "#e0918b"
        break;
    }
    while(nap == 3 && óra >= 15 && óra <= 16){
        kamara.style.background = "#e0918b"
        break;
    }
   /*  CSÜTÖRTÖK */
   while(nap == 4 && óra >= 13 && óra <= 14){
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