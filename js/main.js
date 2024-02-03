"use strict";

const someWords = ['Пока не упал духом, любые другие падения по плечу Если до вашей планки не дотягиваются, это не повод ее занижать Нельзя упускать возможность чему-то научиться Мечты так и остаются мечтами, если к ним не идти Человек всесилен, пока ничем не занят Победившему себя ничего не страшно Обращаясь к прошлому, мы поворачиваемся спиной к будущему Эмоции возникают от мыслей. Не нравится внутреннее состояние – нужно менять мышление Смысл жизни есть всегда. Его нужно только найти Мстить – это то же самое, что кусать в ответ собаку Только тот по-настоящему счастлив и велик, кому не нужно ни подчиняться, ни приказывать для того, чтобы представлять собой что-то'];

function makeQuote() {
    let out ='';
    const quoteLenght = Math.floor(Math.random() * 12 + 1);
    console.log(quoteLenght);
    const quoteOutput = document.getElementById("quoteOutput");

    for (let i = 0; i <quoteLenght; i++) {
        out = someWords.join().split(" ");
        const quoteOutputE = out[Math.floor(Math.random() * out.length)];
        quoteOutput.innerHTML = `<h2>${quoteOutputE}</h2>`;
    }

}

makeQuote();    