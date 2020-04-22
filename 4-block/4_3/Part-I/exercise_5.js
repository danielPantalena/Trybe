let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};

let tioPatinhas = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for (let key in info) {
    if (key != "recorrente") {
        console.log(info[key], "e", tioPatinhas[key])
    } else if (info[key] === "Sim" && tioPatinhas[key] === "Sim") {
        console.log("Ambos recorrentes")
    } else if (info[key] === "Sim") {
        console.log("Apenas a", info.personagem, "é recorrente")
    } else if (tioPatinhas[key] === "Sim") {
        console.log("Apenas o", tioPatinhas.personagem, "é recorrente")
    } else {
        console.log("Nenhum deles é recorrente")
    }
}