module.exports = function toReadable(number) {
    let masUnits = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let masTeen = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let masDozens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number == 0) {
        return "zero";
    }
    let cifra; //текущая цифра
    let counter = 0; // количество просмотренных цифр
    let rezSt = "";
    while (number != 0) {
        counter++;
        cifra = number % 10; //получаем очередную цифру
        number = Math.floor(number / 10); // откидываем цифру от числа
        if (cifra == 0) continue; //если цифра равна 0, то переходим к новой цифре
        switch (counter) {
            case 2: {
                // для чисел вида 10, 20,30,
                if (rezSt.length == 0) rezSt = masDozens[cifra - 1];
                else {
                    // для 11, 12, 13
                    if (cifra == 1) rezSt = masTeen[masUnits.indexOf(rezSt)];
                    //для остальных
                    else rezSt = masDozens[cifra - 1] + " " + rezSt;
                }
                break;
            }
            case 3: {
                if (rezSt.length == 0) rezSt = " hundred";
                else rezSt = " hundred " + rezSt;
            }
            default:
                rezSt = masUnits[cifra - 1] + rezSt;
        }
    }
    return rezSt;
};
