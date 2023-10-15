var Songs = ['Born in A Crash - Wale the Sage', 'Bound 2 - Kanye West', 'Anissa - Wejdene', 'Walkin - Denzel Curry', '500lbs - Lil Tecca']; 

let counter = 0
let i = 30
let pv = 10


//const random = Math.floor(Math.random() * Songs.length);
//console.log(Songs[random]);

while (i > 0, i -= 1) {
    const random = Math.floor(Math.random() * Songs.length);
    console.log(i)
    console.log(Songs[random])
    if (Songs[random] === Songs[2] && pv > 0) {
        pv -= 1
        console.log("SWITCH TAXI")
        console.log("Vous avez maintenant " + pv + " PV")
        counter += 1
    }
    else if (pv === 0) {
        console.log("KABOOM")
        break
    }
    else {
        console.log("C'EST CLEAN")
        console.log("Il vous reste " + pv + " PV")
    }

    if(i === 1 && pv > 0){
        console.log("Incroyable vous avez survecu !")
        console.log("le joueur a changer " + counter +  " fois de taxi")
    }
}