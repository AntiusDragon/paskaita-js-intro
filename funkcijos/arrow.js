console.clear();

const n1 = 7;
const n2 = 5;

// function declaration
function suma(a, b ) {
    return a + b;
}
console.log(suma(n1, n2));
console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);

// kintamajam priskirti anonimine funkcija
const skirtumas = function (a, b ) {
    return a - b;
}
console.log(`${n1} - ${n2} = `, skirtumas(n1, n2));

// arrow (rodykline) function
const sandauga = (a, b ) => {
    return a * b;
}
console.log(`${n1} * ${n2} = `, sandauga(n1, n2));

// arrow function
// jeigu, logikos bloke yra tik 1 procedura (statement)
// tai galime nerasyti {return}
const dalmuo = (a, b ) => a / b;
console.log(`${n1} / ${n2} = `, dalmuo(n1, n2));

// arrow function
// jeigu, parametru bloke yra tik 1 parametras
// tai galima nerasyti: ( )
const kvadratu = a => a ** 2
console.log(`${n1} ** 2 = `, kvadratu(n1));
console.log(`${n2} ** 2 = `, kvadratu(n2));

// funkcija gauna zodi ir gra ina tik Pirma raide
const pirmaRaide = zodis => zodis[0];
console.log(pirmaRaide(5));
console.log(pirmaRaide(''));

console.log('-----');
function fristLetter(str) {
    if (typeof str !== "string") {
        return 'Error: first param has to be a string type.';
    }
    
    if (str.length === 0) {
        return 'Error: first param has to be non-empty string value.';
    }
    
    return str[0];
}
console.log(fristLetter(5));
console.log(fristLetter(''));

console.log('-----');
const fristLetter2 = function(str) {
    if (typeof str !== "string") {
        return 'Error: first param has to be a string type.';
    }

    if (str.length === 0) {
        return 'Error: first param has to be non-empty string value.';
    }

    return str[0];
}
console.log(fristLetter2(5));
console.log(fristLetter2(''));

console.log('-----');
const fristLetter3 = (str) => {
    if (typeof str !== "string") {
        return 'Error: first param has to be a string type.';
    }

    if (str.length === 0) {
        return 'Error: first param has to be non-empty string value.';
    }

    return str[0];
}
console.log(fristLetter3(5));
console.log(fristLetter3(''));

const errors = {
    notString: 'Error: first param has to be a string type.',
    empty: 'Error: first param has to be non-empty string value.',
}

console.log('-----');
const fristLetter4 = str => typeof str !== "string"
        ? errors.notString
        : str.length
            ? str[0]
            : errors.empty;
console.log(fristLetter4(5));
console.log(fristLetter4(''));
console.log(fristLetter4('Labas'));