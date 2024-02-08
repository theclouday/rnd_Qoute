"use strict";

const nouns = ['apple car tree house dog cat bird sun moon star flower river ocean mountain book pencil computer phone chair table door window lamp clock pen keyboard guitar painting camera mirror shoe hat jacket bag cup plate spoon fork knife television radio globe key lock coin notebook pillow blanket umbrella bottle cupboard drawer wallet tape brush'];
const verbs = ['run jump play eat sleep walk talk sing dance read write listen study work swim drive cook clean laugh cry smile shout think love hate']
const butMain = document.querySelector('.buttonCreate');



function makeQuote() {
    let outNouns ='';
    let outVerbs ='';
    const quoteLenght = Math.floor(Math.random() * 16 + 1);

    const quoteOutput = document.getElementById("quoteOutput");
    let quoteOutputE = '';

    for (let i = 0; i <quoteLenght; i++) {
        outNouns = nouns.join().split(" ");
        outVerbs = verbs.join().split(" ")
        const sentence = outNouns[Math.floor(Math.random() * outNouns.length)] + " " + outVerbs[Math.floor(Math.random() * outVerbs.length)] + " ";
        quoteOutputE += sentence;
        quoteOutput.innerHTML = `<h2>Your quote - ${quoteOutputE}</h2>`;
    }

}


butMain.addEventListener('click', makeQuote)
