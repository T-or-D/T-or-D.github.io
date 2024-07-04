document.addEventListener("DOMContentLoaded", function() {
    const topPhrases = [
        "Top Phrase 1",
        "Top Phrase 2",
        "Top Phrase 3",
        "Top Phrase 4",
        "Top Phrase 5"
    ];

    const bottomPhrases = [
        "Bottom Phrase 1",
        "Bottom Phrase 2",
        "Bottom Phrase 3",
        "Bottom Phrase 4",
        "Bottom Phrase 5"
    ];

    document.querySelector(".panel-top").addEventListener("click", function() {
        const randomPhrase = topPhrases[Math.floor(Math.random() * topPhrases.length)];
        document.getElementById("topModalBody").textContent = randomPhrase;
    });

    document.querySelector(".panel-bottom").addEventListener("click", function() {
        const randomPhrase = bottomPhrases[Math.floor(Math.random() * bottomPhrases.length)];
        document.getElementById("bottomModalBody").textContent = randomPhrase;
    });
});
