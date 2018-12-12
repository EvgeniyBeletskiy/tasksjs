// 1.
var name = prompt("Знаете ли вы официальное название JS?", );
if (name == "ECMAScript") {
    alert("Верно");
} else {
    alert("Не знаете? «ECMAScript»!");
}  
// 2. 
var number = prompt("Введите любое число", );
if (number == 0) {
    alert (0);
} else if (number > 0) {
    alert(1);
} else {
    alert (-1);
}
// 3.
var login = prompt("Input your login", );
if (login == "Админ") {
    var password = prompt("Input your password", );
    if (password == "Чёрный Властелин") {
        alert("Добро пожаловать!");
    } else if (password == null) {
        alert("Вход отменён");
    } else {
        alert("Пароль неверен");
    }
 } else {
     alert("Я вас не знаю");
}
// 4. 
var a = prompt("Number", );
var b = prompt("Number", );
(+a + +b) < 4 ? 'Мало': 'Много';
// 5.
var login = prompt("Login", );

login == 'Вася' ? 'Привет': 
login == 'Директор' ? "Здравствуйте":
login == "" ? "Нет логина": "";
//6.
var age = prompt("How old are you", );
if (!(age >= 14 && age <= 90)) {
   alert ("Wrong");
} else {
   alert("It's OK")
}