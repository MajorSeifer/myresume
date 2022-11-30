import { askTvSerie } from "./5.1.js";

export function exercise52() {
    randomizeCast(askTvSerie());
}

function randomizeCast(tvSerie) {
    let newTvSerie = tvSerie;
    let sortedArray = tvSerie.castMembers;
    newTvSerie.castMembers = sortedArray.sort();
    alert(newTvSerie.castMembers.toString() + "are the new cast members");
    return newTvSerie.castMembers;
}