var boardHidden = true;

function stackItUp() {
    console.log("Let's go stack it up!")
    const tiles = document.getElementsByClassName("text-container");
    for (tile of tiles) {
        tile.textContent += " with a dagger";
    }
}

function checkIfBoardIsHidden() {
    const boardCover = document.getElementsByClassName("board-cover")[0];

    const boardHiddenBefore = boardHidden;
    boardHidden = boardCover.style.display != 'none';

    if (boardHidden != boardHiddenBefore) {
        stackItUp();
    }
}

setInterval(checkIfBoardIsHidden, 1000);

// document.getElementById("stackButton").addEventListener("click", stackItUp);

/*
MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        console.log('style changed!');
    });
});
var target = document.getElementById('myId');
observer.observe(target, {
    attributes : true,
    attributeFilter : ['style']
});
*/