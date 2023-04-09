export function Question1() {
    const indice = 13;
    let soma = 0;
    let k = 0;
    while (k < indice) {
        k++;
        soma += k;
    }
    console.log(`Questão 1: ${soma}`);
}
