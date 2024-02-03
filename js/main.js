"use strict";

const someWords = ['пока не упал духом любые другие падения по плечу eсли до вашей планки не дотягиваются это не повод ее занижать нельзя упускать возможность чему-то научиться мечты так и остаются мечтами если к ним не идти человек всесилен пока ничем не занят победившему себя ничего не страшно обращаясь к прошлому мы поворачиваемся спиной к будущему эмоции возникают от мыслей не нравится внутреннее состояние нужно менять мышление смысл жизни есть всегда его нужно только найти мстить это то же самое что кусать в ответ собаку только тот по-настоящему счастлив и велик кому не нужно ни подчиняться ни приказывать для того чтобы представлять собой что-то'];

function makeQuote() {
    let out ='';
    const quoteLenght = Math.floor(Math.random() * 12 + 1);
    console.log(quoteLenght);
    const quoteOutput = document.getElementById("quoteOutput");
    let quoteOutputE = '';

    for (let i = 0; i <quoteLenght; i++) {
        out = someWords.join().split(" ");
        const rows = out[Math.floor(Math.random() * out.length)] + " ";
        quoteOutputE += rows;
        quoteOutput.innerHTML = `<h2>${quoteOutputE}</h2>`;
    }

}

makeQuote();    