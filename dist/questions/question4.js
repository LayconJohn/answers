function convertToHours(time) {
    return time / 60;
}
function elapsidTime(dist, velocity) {
    return dist / velocity;
}
function averageSpeed(dist, time) {
    return dist / time;
}
export function Question4() {
    console.log("Questão 4: ");
    console.log(`
            -> O caminhão sai de Franca (100 km de distância) e vai em direção à Riberão;
            -> Com os 2 pedágios, o caminhão demora 10 minutos a mais de viagem, o total de ${convertToHours(10)} horas;
            -> O tempo de viagem sem o pedágio do caminhão foi de ${elapsidTime(100, 80)}
            -> Logo, a velocidade média do caminhão foi de ${averageSpeed(100, (elapsidTime(100, 80) + convertToHours(10)))}
            -> Usando a equação horária (S = S0 + vt) tempo de encontro são iguais e eles estavam em sentido opostos (velocidade do caminhão negativa)
            -> Assim, Scarro = 0 + 100 * t e Scaminhão = 100 - 70,6 * t, com Scarro = Scaminhão
            -> Logo, 100 * t = 100 - ${averageSpeed(100, (elapsidTime(100, 80) + convertToHours(10)))} * t
            -> Como o tempo foi de aproxidamente 0,6 horas. a distância foi cerca de 60 km.
            -> Assim, a distância entre os dois veículos foi a mesma
            `);
}
