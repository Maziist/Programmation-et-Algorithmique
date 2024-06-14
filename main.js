const prompt = require("prompt-sync")()

console.log("Bonjour! Bienvenue dans un monde merveilleux ou vos choix deciderons de votre sort ");

let choiceone = "o"
let choicetwo = "n"
let choicethree = "d"
let choicefor = "g"
let replay = true
while (replay == true) {

    let response = prompt("Veux-tu decider de ton sort ? Oui(o) ou Non(n)")

    while (response != "o") {
        console.log("Tu est misérable, ton sort est scellé!! tu devras recommencer encore et encore pour prouvrer ta bravoure!!");
        response = prompt("Veux-tu decider de ton sort ? Oui(o) ou Non(n)")
    }
    console.log("Bien, tu as le goût du risque!!")
    console.log("Tu n'as que deux choix, traverser un beau champs remplie de tournesol tel un tableau de van gogh(d) ou traverser une plaine remplie de couler de lave secher quitte a en perdre une jambre tel le Mordor(g) ");
    response = prompt("")

    if (response == "d") {
        console.log("Tu as choisi le chemin le plus paisible mais un sbire d'un royaume inconnu ta reperer")
        response = prompt("Que fais-tu, te battre (d) ou fuire (g)?")
        if (response == "d") {
            console.log("Waouh!! Tu ose le defié, sans arme !!  ")
            console.log("Le maître des lieu en te voyant, vaillant, envoi une meteorite sur l'ennemi")
            response = prompt("Decide-tu d'aller a sa rencontre pour le remercier(d) ou continuer ton chemin (g)?")
            if (response == "d") {
                console.log("En te voyant arrivé, le maitre des lieu t'accueil les bras ouvert")
                console.log("Pour te récompenser, il t'offre une vie magnifique a ses cotés, richesse, les plus belles femmes.. ")
                response = prompt("Choisi-tu cette fin(o) ou de continuer ton chemin(n)?")
                if (response == "o") {
                    console.log("GROS PACHA!!");

                } else if (response == "n") {
                    console.log("Le maître n'accpete pas ta decision et fais de toi son esclave");
                }
            } else {
                console.log("En lui fessant signe de la main pour le remercier")
                console.log("Un ange descendu et t'attrape.. il t'emmène dans la ou personne ne sait..")
                console.log("Désolé pour toi mais la mort ta eu !!")
            }
        } else if (response == "g") {
            console.log("Tu fuis!! Minable!! A cause de ton choix un village tout entier est detruit")
            console.log("Tu t'endors et te retrouve dans un endroit inconnue")
            console.log("Quelqu'un s'approche..!")
            response = prompt("Vivre (o) ou Mourir (n), que choisi-tu ?!")
            if (response == "o") {
                console.log("Cette personne ne veut pas que tu vivre et essaye de te tuer")
                response = prompt("Vas-tu te battre (o) ou te laisser mourir (n)")
                if (response == "o") {
                    console.log("Tu l'as vaincu et continue ton chemin semer d'embuche mais ton objectif n'es pas encore atteind, le combat est encore long");
                }else{
                    console.log("Cette personne vois la determination dans tes yeux et decide de t'offrir Liberté et Richesse!!");
                }
            } else {
                console.log("Cette personne vois la determination dans tes yeux et decide de t'offrir Liberté et Richesse!!");
            }
        }
    } else if (response == "g") {
        console.log("Ta bravoure te récompense, tu continue ton chemin sans embuche.")
        response = prompt("Au loin tu vois un chateau(d) mais aussi une contrée(g).Quel direction choisi-tu? ")
        if (response == "d") {
            console.log("Tu tombe sur un dragon qui garde un tresor convoité")
            response = prompt("Que fais-tu ? Combattre(o) ou Rebrousser chemin(n)")
            if (response == "o") {
                console.log("La gloire est a toi!! Respect !!");
            } else {
                console.log("Tout se chemin pour ca, Conio!! T'es mort, BRULER ET DEMEMBRER!! pour la peine ");
                continue;
            }
        }
        if (response == "g") {
            console.log("Tu continue ton chemin vers chez toi sans gloire!!");
        }
    }
    response = prompt("Veux-tu rejouer ? Oui(o) ou Non(n)")
    while (response != "o" && response != "n") {
        response = prompt("Veux-tu rejouer ? Oui(o) ou Non(n)")
    }
    if (response == "n") {
        replay = false
    }
}

