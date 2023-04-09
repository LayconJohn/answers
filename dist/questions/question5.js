export function Question5(caracter) {
    let newCaracter = "";
    for (let i = caracter.length - 1; i >= 0; i--) {
        newCaracter += caracter[i];
    }
    console.log(`Questão 5: ${caracter.toLocaleUpperCase()}-> ${newCaracter.toLocaleUpperCase()}`);
}
