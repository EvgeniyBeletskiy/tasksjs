1.
var date = new Date(2012,0,3);

2.
var getWeekDay = function (date) {
    var day = date.getDay();
    switch (day) {
        case 0: 
            return "Воскресенье";
            break;
        case 1:
            return "Понедельник";
            break;
        case 2:
             return "Вторник";
             break; 
        case 3:
             return "Среда";
             break; 
        case 4:
             return "Четверг";
             break; 
        case 5:
             return "Пятницу";
             break;
        case 6:
             return "Суббота";
             break;
    default: 
       return "Такого дня нет";
    }
}
getWeekDay(new Date);
3. 