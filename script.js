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

    let topUsedPhrases = [];
    let bottomUsedPhrases = [];

    function getRandomPhrase(phrases, usedPhrases) {
        if (usedPhrases.length === phrases.length) {
            // All phrases have been used, reset the used phrases array
            usedPhrases.length = 0;
        }

        let phrase;
        do {
            phrase = phrases[Math.floor(Math.random() * phrases.length)];
        } while (usedPhrases.includes(phrase));

        usedPhrases.push(phrase);
        return phrase;
    }

    document.querySelector(".panel-top").addEventListener("click", function() {
        const randomPhrase = getRandomPhrase(topPhrases, topUsedPhrases);
        document.getElementById("topModalBody").textContent = randomPhrase;
    });

    document.querySelector(".panel-bottom").addEventListener("click", function() {
        const randomPhrase = getRandomPhrase(bottomPhrases, bottomUsedPhrases);
        document.getElementById("bottomModalBody").textContent = randomPhrase;
    });
});
