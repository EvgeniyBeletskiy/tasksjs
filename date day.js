1.
var date = new Date(2012,0,3);

2.
var getWeekDay = function (date) {
    var day = date.getDay();
    switch (day) {
        case 0: 
            return "�����������";
            break;
        case 1:
            return "�����������";
            break;
        case 2:
             return "�������";
             break; 
        case 3:
             return "�����";
             break; 
        case 4:
             return "�������";
             break; 
        case 5:
             return "�������";
             break;
        case 6:
             return "�������";
             break;
    default: 
       return "������ ��� ���";
    }
}
getWeekDay(new Date);
3. 