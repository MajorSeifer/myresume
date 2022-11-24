let learnerArray = [...new Set(["Arno Volts", "Aurélien Mariaule", "Aurore Lemaire", "Benjamin Porsont", "Céline Verreydt", "Corentin Miserque", "Dominique Coppée", "Edouard de Romrée de Vichenet", "Hugo Goorickx ", "Jofrey Houyoux", "Jonathan Manes", "jonathan bajoux", "Laura Wilhelmi", "Lysie Soyez", "Marnie Benalia", "Mathilde Cornelis", "Milo Bonnet", "Nadim El Nakadi", "Nathalie Vanden Abeele", "Nathalie Goffette", "Nour Everaert", "Pierre Mauriello", "Quentin Bource ", "Virginie Dourson"])];

function pickLearner(inputAr, n) {
    let arrayToReturn = [];

    if (n > 0 && n <= inputAr.length) {
        for (let i = 1; i <= n; i += 1) {
            arrayToReturn.push(inputAr[Math.floor(Math.random() * inputAr.length)]);
        }
        return arrayToReturn;
    }
}
console.log(pickLearner(learnerArray, 5));