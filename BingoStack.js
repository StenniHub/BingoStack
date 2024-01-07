var currentSeed = null;

function stackItUp() {
    console.log("Let's go stack it up!")
    const tiles = document.getElementsByClassName("text-container");
    for (tile of tiles) {
        tile.textContent += " with a dagger";
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
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        console.log(mutationRecord);
    });
});

const theSeed = document.getElementById("the-seed");
console.log(theSeed.textContent);
observer.observe(theSeed, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
});
*/
