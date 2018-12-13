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