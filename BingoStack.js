var currentSeed = null;
const weaponCategories = ["Daggers","Straight Swords","Greatswords","Ultra Greatswords","Curved Swords","Katanas","Curved Greatswords","Piercing Swords","Axes","Great Axes","Hammers","Great Hammers", "Fist & Claw", "Spears","Halberds","Lances","Scythes","Twinblades","Whips","Bows","Greatbows","Crossbows","Pyro","Faith","Sorcery","Boss Weapons"];

function stackItUp() {
    console.log("Let's go stack it up!")
    const numberGenerator = new RNG(parseInt(currentSeed));

    const tiles = document.getElementsByClassName("text-container");
    for (tile of tiles) {
        const conditionIdx = numberGenerator.nextRange(0, weaponCategories.length);
        const condition = weaponCategories[conditionIdx];
        tile.textContent += " with " + condition;
    }
}

function checkIfSeedChanged() {
    const theSeed = document.getElementById("the-seed");
    const newSeed = theSeed.textContent.trim();
    if (newSeed === "Hidden") return;

    if (newSeed !== currentSeed) {
        currentSeed = newSeed;
        stackItUp();
    }
}

setInterval(checkIfSeedChanged, 1000);

// document.getElementById("stackButton").addEventListener("click", stackItUp);

// FIXME: WHY IS NO WORK???
/*
const Observe = (sel, opt, cb) => {
    const Obs = new MutationObserver((m) => [...m].forEach(cb));
    document.querySelectorAll(sel).forEach(el => Obs.observe(el, opt));
};

Observe("#the-seed", {
    characterData: false,
    attributes: false,
    childList: true,
    subtree: false
}, (m) => {
    console.log(m.target.textContent);
});
*/
