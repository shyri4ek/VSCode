//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.

function chackage (age) {
    if (age < 18){console.log("age " +age + " = " + "You don't have access cause your age is " + age + " It's less then")}
    else if (age >= 18 , age < 60) { console.log("age " +age + " = " + "Welcome !") }
    else if (age > 60) {console.log("age " +age + " = " + "Keep calm and look Culture channel")}
    else {console.log("Technical work")}
}

//Вывести в консоль результат работы функции с возрастами 17, 18, 61

chackage (age = 17)
chackage (age = 18)
chackage (age = 61)