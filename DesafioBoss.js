let herois = [
    ["Link", 8457],
    ["Pac-man", 1500],
    ["Jinx", 5478],
    ["Jill Valentine", 751],
    ["Geralt", 10001],
    ["Yennefer", 7412],
    ["Kratos", 9356],
    ["Joel", 3645]
];

let nivel;

for (let i = 0; i<herois.length; i++){
    if (herois[i][1]<=1000){
        nivel = "Ferro";
    }
    else if (herois[i][1]>1000 && herois[i][1]<=2000){
        nivel = "Bronze";
    }
    else if (herois[i][1]>2000 && herois[i][1]<=5000){
        nivel = "Prata";
    }
    else if (herois[i][1]>5000 && herois[i][1]<=7000){
        nivel = "Ouro";
    }
    else if (herois[i][1]>7000 && herois[i][1]<=8000){
        nivel = "Platina";
    }
    else if (herois[i][1]>8000 && herois[i][1]<=9000){
        nivel = "Ascendente";
    }
    else if (herois[i][1]>9000 && herois[i][1]<=10000){
        nivel = "Imortal";
    }
    else {
        nivel = "Radiante";
    }

    console.log("O Herói de nome " + herois[i][0] + " está no nível de " + nivel)
} 